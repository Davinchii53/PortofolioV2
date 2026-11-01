// Inline stroke icons in one visual style (24px grid, 2px stroke). All are decorative:
// every icon sits next to visible text, so they are hidden from screen readers.
const Icon = ({ size = 16, children, ...rest }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    focusable="false"
    {...rest}
  >
    {children}
  </svg>
);

export const ArrowUpRight = (props) => (
  <Icon {...props}><path d="M7 17 17 7M8 7h9v9" /></Icon>
);

export const ArrowDown = (props) => (
  <Icon {...props}><path d="M12 5v14M6 13l6 6 6-6" /></Icon>
);

export const ArrowUp = (props) => (
  <Icon {...props}><path d="M12 19V5M6 11l6-6 6 6" /></Icon>
);

export const Lock = (props) => (
  <Icon {...props}><rect x="5" y="11" width="14" height="10" rx="2" /><path d="M8 11V7a4 4 0 0 1 8 0v4" /></Icon>
);

export const Copy = (props) => (
  <Icon {...props}><rect x="9" y="9" width="12" height="12" rx="2" /><path d="M5 15V5a2 2 0 0 1 2-2h8" /></Icon>
);

export const Check = (props) => (
  <Icon {...props}><path d="M5 12.5 10 17 19 7" /></Icon>
);

// The site logo (same artwork as public/logo.svg): a K whose lower arm is bridged by a cyan trace
export const Logo = ({ size = 32, className }) => (
  <svg width={size} height={size} viewBox="0 0 240 240" fill="none" aria-hidden="true" focusable="false" className={className}>
    <rect width="240" height="240" rx="28" fill="#0A0A0A" />
    <line x1="68" y1="56" x2="68" y2="184" stroke="#FAFAFA" strokeWidth="24" strokeLinecap="square" />
    <line x1="76" y1="124" x2="172" y2="56" stroke="#FAFAFA" strokeWidth="24" strokeLinecap="square" />
    <line x1="76" y1="124" x2="118" y2="154" stroke="#FAFAFA" strokeWidth="24" strokeLinecap="square" />
    <line x1="134" y1="166" x2="184" y2="202" stroke="#FAFAFA" strokeWidth="24" strokeLinecap="square" />
    <line x1="118" y1="154" x2="134" y2="166" stroke="#4ADEFF" strokeWidth="6" strokeLinecap="round" />
    <circle cx="118" cy="154" r="4.5" fill="#4ADEFF" />
    <circle cx="134" cy="166" r="4.5" fill="#4ADEFF" />
  </svg>
);
