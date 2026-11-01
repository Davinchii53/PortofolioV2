import { ArrowUp } from './Icons';
import { PROFILE } from '../content';

const Footer = () => (
  <footer className="footer">
    <div className="container footer-inner">
      <p>© {new Date().getFullYear()} {PROFILE.name}.</p>
      <a href="#top" className="footer-link hover-target">
        Back to top <ArrowUp size={14} />
      </a>
    </div>
  </footer>
);

export default Footer;
