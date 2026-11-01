import Reveal from './Reveal';
import SectionHeader from './SectionHeader';
import { ABOUT_FACTS, STACK } from '../content';

const About = () => (
  <section id="about" className="section">
    <div className="container">
      <SectionHeader index="02" label="About" />

      <div className="about-grid">
        <Reveal className="about-side">
          <h2 className="about-title">
            Currently learning <span className="about-title-muted">software engineering and IoT.</span>
          </h2>

          <dl className="facts">
            {ABOUT_FACTS.map((fact) => (
              <div key={fact.label} className="fact">
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <div className="about-body">
          <Reveal delay={0.1}>
            <p className="lead">
              Currently studying computer science at Binus Bandung (B28), majoring in IoT. I'm learning to be a good software engineer by making solutions for the small problems I can find.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <h3 className="label">The Approach</h3>
            <p className="body-text">
              I make websites that are scalable and easy to use. I focus on performance, security, and scalability. Every small problem I see is an opportunity for a new solution.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <h3 className="label">Core Stack</h3>
            <div className="stack-groups">
              {STACK.map((group) => (
                <div key={group.group} className="stack-group">
                  <h4 className="stack-group-name">{group.group}</h4>
                  <ul className="chips">
                    {group.items.map((skill) => <li key={skill} className="chip">{skill}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  </section>
);

export default About;
