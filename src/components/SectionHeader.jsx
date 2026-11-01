import Reveal from './Reveal';

// "01  SELECTED WORK ────────" label row, with an optional h2 and a short note beside it
const SectionHeader = ({ index, label, title, aside }) => (
  <Reveal className="section-header">
    <p className="section-label">
      <span className="section-label-index">{index}</span>
      {label}
    </p>
    {(title || aside) && (
      <div className="section-title-row">
        {title && <h2 className="section-title">{title}</h2>}
        {aside && <p className="section-aside">{aside}</p>}
      </div>
    )}
  </Reveal>
);

export default SectionHeader;
