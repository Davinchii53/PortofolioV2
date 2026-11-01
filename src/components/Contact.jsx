import { useEffect, useRef, useState } from 'react';
import Reveal from './Reveal';
import SectionHeader from './SectionHeader';
import { ArrowUpRight, Check, Copy } from './Icons';
import { PROFILE } from '../content';

// mailto: does nothing on machines without a mail app, so the address is shown and copyable
const CopyEmail = () => {
  const [copied, setCopied] = useState(false);
  const timer = useRef(0);

  useEffect(() => () => clearTimeout(timer.current), []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopied(true);
      clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard blocked (insecure origin or denied permission): the address stays selectable
    }
  };

  return (
    <>
      <button type="button" className={`copy-btn hover-target${copied ? ' is-copied' : ''}`} onClick={copy}>
        {copied ? <Check size={15} /> : <Copy size={15} />}
        {copied ? 'Copied' : 'Copy'}
        <span className="sr-only"> email address</span>
      </button>
      <span className="sr-only" role="status">{copied ? 'Email address copied to clipboard' : ''}</span>
    </>
  );
};

const LINKS = [
  { label: 'LinkedIn', value: PROFILE.linkedinLabel, href: PROFILE.linkedin },
  { label: 'GitHub', value: PROFILE.githubLabel, href: PROFILE.github },
];

const Contact = () => (
  <section id="contact" className="section section-deep contact">
    <div className="container">
      <SectionHeader index="03" label="Contact" />

      <div className="contact-grid">
        <Reveal className="contact-intro">
          <h2 className="contact-title">
            Let's build <br /> together<span className="accent">.</span>
          </h2>
          <p className="contact-sub">Open for new opportunities.</p>
          <a href={`mailto:${PROFILE.email}`} className="btn btn-primary btn-lg hover-target">
            Get in touch <ArrowUpRight size={16} />
          </a>
        </Reveal>

        <Reveal delay={0.1} className="contact-channels">
          <ul className="channels">
            <li className="channel">
              <span className="channel-label">Email</span>
              <span className="channel-value">{PROFILE.email}</span>
              <CopyEmail />
            </li>
            {LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="channel channel-link hover-target"
                  aria-label={`${link.label}: ${link.value} (opens in a new tab)`}
                >
                  <span className="channel-label">{link.label}</span>
                  <span className="channel-value">{link.value}</span>
                  <ArrowUpRight size={18} className="channel-icon" />
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </div>
  </section>
);

export default Contact;
