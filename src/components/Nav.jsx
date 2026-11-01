import { useEffect, useState } from 'react';
import useActiveSection from '../hooks/useActiveSection';
import { Logo } from './Icons';

const LINKS = [
  { id: 'work', label: 'Work' },
  { id: 'about', label: 'About' },
];
// 'top' is observed too, so scrolling back up to the hero clears the active link
const SECTION_IDS = ['top', 'work', 'about', 'contact'];

const Nav = () => {
  const [scrolled, setScrolled] = useState(() => window.scrollY > 24);
  const active = useActiveSection(SECTION_IDS);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`nav${scrolled ? ' is-scrolled' : ''}`}>
      <div className="container nav-inner">
        <a href="#top" className="nav-brand hover-target" aria-label="Kelvin Anshary, back to top">
          <Logo className="nav-logo" />
          <span className="nav-name">Kelvin Anshary</span>
        </a>

        <nav aria-label="Primary" className="nav-menu">
          <ul className="nav-links">
            {LINKS.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className="nav-link hover-target"
                  aria-current={active === link.id ? 'true' : undefined}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="btn btn-primary btn-nav hover-target"
            aria-current={active === 'contact' ? 'true' : undefined}
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Nav;
