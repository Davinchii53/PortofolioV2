import { useEffect, useRef } from 'react';

// The hero background: the same fragment shader as before, drawn with plain WebGL instead of
// three.js. three.js was about half of the site's JavaScript just to draw this one rectangle.

const VERTEX_SHADER = `
  attribute vec2 position;
  void main() {
    gl_Position = vec4(position, 0.0, 1.0);
  }
`;

const FRAGMENT_SHADER = `
  #ifdef GL_FRAGMENT_PRECISION_HIGH
    precision highp float;
  #else
    precision mediump float;
  #endif

  uniform vec2 resolution;
  uniform float time;
  uniform vec2 mouse;

  float random (in float x) {
    return fract(sin(x) * 1e4);
  }

  void main(void) {
    vec2 uv = (gl_FragCoord.xy * 2.0 - resolution.xy) / min(resolution.x, resolution.y);

    vec2 fMosaicScal = vec2(4.0, 2.0);
    vec2 vScreenSize = vec2(256.0, 256.0);
    uv.x = floor(uv.x * vScreenSize.x / fMosaicScal.x) / (vScreenSize.x / fMosaicScal.x);
    uv.y = floor(uv.y * vScreenSize.y / fMosaicScal.y) / (vScreenSize.y / fMosaicScal.y);

    float t = time * 0.06 + random(uv.x) * 0.4 + mouse.x * 0.5 + mouse.y * 0.5;
    float lineWidth = 0.0008;

    vec3 color = vec3(0.0);
    for (int j = 0; j < 3; j++) {
      for (int i = 0; i < 5; i++) {
        float denom = abs(fract(t - 0.01 * float(j) + float(i) * 0.01) * 1.0 - length(uv));
        color[j] += lineWidth * float(i * i) / max(0.002, denom);
      }
    }

    gl_FragColor = vec4(color[2], color[1], color[0], 1.0);
  }
`;

// One full-screen rectangle made of two triangles
const QUAD = new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]);

function compileShader(gl, type, source) {
  const shader = gl.createShader(type);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (gl.getShaderParameter(shader, gl.COMPILE_STATUS)) return shader;
  gl.deleteShader(shader);
  return null;
}

function createProgram(gl) {
  const vertex = compileShader(gl, gl.VERTEX_SHADER, VERTEX_SHADER);
  const fragment = compileShader(gl, gl.FRAGMENT_SHADER, FRAGMENT_SHADER);
  if (!vertex || !fragment) return null;

  const program = gl.createProgram();
  gl.attachShader(program, vertex);
  gl.attachShader(program, fragment);
  gl.linkProgram(program);
  gl.deleteShader(vertex);
  gl.deleteShader(fragment);
  if (gl.getProgramParameter(program, gl.LINK_STATUS)) return program;
  gl.deleteProgram(program);
  return null;
}

export function ShaderAnimation() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return undefined;

    // WebGL can be missing (GPU blocklisted, hardware acceleration off, VMs, remote desktops).
    // Never let that take the page down: fall back to a static CSS glow instead.
    const canvas = document.createElement('canvas');
    let gl = null;
    try {
      gl = canvas.getContext('webgl', {
        alpha: false,
        antialias: false,
        depth: false,
        stencil: false,
        powerPreference: 'high-performance',
      });
    } catch {
      gl = null;
    }
    const program = gl ? createProgram(gl) : null;
    if (!gl || !program) {
      container.classList.add('is-fallback');
      return undefined;
    }

    container.appendChild(canvas);
    gl.useProgram(program);

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, QUAD, gl.STATIC_DRAW);
    const position = gl.getAttribLocation(program, 'position');
    gl.enableVertexAttribArray(position);
    gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);

    const uTime = gl.getUniformLocation(program, 'time');
    const uResolution = gl.getUniformLocation(program, 'resolution');
    const uMouse = gl.getUniformLocation(program, 'mouse');

    // Cap the pixel ratio: the shader is pixelated by design, and full DPR costs frames on phones
    const isMobileDevice = window.innerWidth <= 768;
    const pixelRatio = Math.min(window.devicePixelRatio || 1, isMobileDevice ? 1 : 1.25);
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let time = 1;
    let mouseX = 0;
    let mouseY = 0;
    let frame = 0;
    let lastTimestamp = 0;

    const draw = () => {
      gl.uniform1f(uTime, time);
      gl.uniform2f(uMouse, mouseX, mouseY);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
    };

    const tick = (now) => {
      frame = requestAnimationFrame(tick);
      // Advance by elapsed time (3 units/s = the old 0.05 per frame at 60 fps), so 120 Hz
      // screens don't play it twice as fast
      const seconds = lastTimestamp ? Math.min((now - lastTimestamp) / 1000, 0.1) : 1 / 60;
      lastTimestamp = now;
      time += seconds * 3;
      draw();
    };

    const start = () => {
      if (frame || prefersReducedMotion) return;
      lastTimestamp = 0;
      frame = requestAnimationFrame(tick);
    };

    const stop = () => {
      cancelAnimationFrame(frame);
      frame = 0;
    };

    const resize = () => {
      const rect = container.getBoundingClientRect();
      canvas.width = Math.max(1, Math.floor(rect.width * pixelRatio));
      canvas.height = Math.max(1, Math.floor(rect.height * pixelRatio));
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform2f(uResolution, canvas.width, canvas.height);
      if (!frame) draw(); // keep a correct still frame while paused or in reduced motion
    };

    const onMouseMove = (event) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    const onContextLost = (event) => {
      event.preventDefault();
      stop();
      container.classList.add('is-fallback');
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(container);

    // Only animate while the hero is on screen
    const visibilityObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) start();
      else stop();
    });
    visibilityObserver.observe(container);

    resize();
    window.addEventListener('mousemove', onMouseMove, { passive: true });
    canvas.addEventListener('webglcontextlost', onContextLost);

    return () => {
      stop();
      resizeObserver.disconnect();
      visibilityObserver.disconnect();
      window.removeEventListener('mousemove', onMouseMove);
      canvas.removeEventListener('webglcontextlost', onContextLost);
      gl.deleteBuffer(buffer);
      gl.deleteProgram(program);
      gl.getExtension('WEBGL_lose_context')?.loseContext();
      canvas.remove();
    };
  }, []);

  return <div ref={containerRef} className="shader" aria-hidden="true" />;
}

export default ShaderAnimation;
