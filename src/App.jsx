import { MotionConfig } from 'framer-motion';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Cursor from './components/Cursor';

// No blocking loader: the hero paints straight away and animates itself in.
// Work comes before About, so visitors see what Kelvin built first.
function App() {
  return (
    // reducedMotion="user": transform/layout animations switch off when the OS asks for reduced motion
    <MotionConfig reducedMotion="user">
      <a className="skip-link" href="#main">Skip to content</a>
      <Cursor />
      <Nav />
      <main id="main" tabIndex={-1}>
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  );
}

export default App;
