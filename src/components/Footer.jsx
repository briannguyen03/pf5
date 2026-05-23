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
        background: COLORS.footerBg,
      }}
    >
      <span
        className="pixel-font"
        style={{
          fontSize: 13,
          color: COLORS.black,
          letterSpacing: '0.1em',
        }}
      >
        BRIAN NGUYEN
      </span>
      <div style={{ display: 'flex', gap: 24 }}>
        {['Instagram', 'LinkedIn', 'Twitter', 'Terms'].map((l, i) => (
          <span
            key={l}
            style={{
              fontSize: 13,
              color: i === 3 ? '#666' : COLORS.black,
              cursor: 'pointer',
              textDecoration: i === 3 ? 'underline' : 'none',
              textUnderlineOffset: 2,
            }}
          >
            {l}
          </span>
        ))}
      </div>
    </footer>
  );
}
