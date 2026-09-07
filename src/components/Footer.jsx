import { COLORS } from '../constants/colors';

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: `1px solid ${COLORS.border}`,
        padding: '24px 40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',          // ← lets links wrap to next line
        gap: 12,                   // ← spacing when wrapped
        background: COLORS.footerBg,
      }}
    >
      <span
        className="pixel-font"
        style={{
          fontSize: 'clamp(24px, 6vw, 45px)',   // ← shrinks on mobile
          color: COLORS.black,
          letterSpacing: '0.001em',
        }}
      >
        B.NGUYEN
      </span>
      <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
        <a
          href="https://github.com/briannguyen03"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontSize: 13,
            color: COLORS.black,
            cursor: 'pointer',
            textDecoration: 'none',
          }}
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/brian-nguyen-19920027a/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontSize: 13,
            color: COLORS.black,
            cursor: 'pointer',
            textDecoration: 'none',
          }}
        >
          LinkedIn
        </a>
        <a
          href="https://letterboxd.com/Iloveowenwilson/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontSize: 13,
            color: COLORS.black,
            cursor: 'pointer',
            textDecoration: 'none',
          }}
        >
          Letterboxd
        </a>
        <span
          style={{
            fontSize: 13,
            color: '#666',
            cursor: 'pointer',
            textUnderlineOffset: 2,
          }}
        >
          <a href='https://brianguyen.me/' 
            target='_blank' 
            rel="noopener noreferrer"
            style={{
            fontSize: 13,
            color: COLORS.black,
            cursor: 'pointer',
            textDecoration: 'none',
          }}>brianguyen.me</a>
        </span>
      </div>
    </footer>
  );
}
