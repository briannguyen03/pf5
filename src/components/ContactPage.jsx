import { useState } from 'react';
import { COLORS } from '../constants/colors';
import Footer from './Footer';

const SOCIALS = [
  { n: '01', label: 'GITHUB', url: 'https://github.com/briannguyen03' },
  { n: '02', label: 'LINKEDIN', url: 'https://www.linkedin.com/in/brian-nguyen-19920027a/' },
  { n: '03', label: 'LETTERBOXD', url: 'https://letterboxd.com/Iloveowenwilson/' },
  { n: '04', label: 'EMAIL', url: 'mailto:nguyen.brian1403@gmail.com' },
];

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSend = () => {
    if (name && email && message) {
      setSent(true);
      setTimeout(() => setSent(false), 3000);
      setName('');
      setEmail('');
      setMessage('');
    }
  };

  return (
    <div style={{ background: COLORS.bgDark, minHeight: '100vh', display: 'flex', flexDirection: 'column'}}>
      <div style={{ padding: '0 40px', flex: '1' }}>
        <h1
          className="pixel-font"
          style={{
            fontSize: 28,
            color: COLORS.white,
            letterSpacing: '0.001em',
            paddingTop: 4,
            marginBottom: 4,
          }}
        >
          Contact Me
        </h1>

        <hr className="section-rule" style={{ marginBottom: 24 }} />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.1fr 1fr',
            gap: 12,
            marginBottom: 40,
          }}
        >
          {/* Contact form */}
          <div
            style={{
              border: `1px solid ${COLORS.border}`,
              borderRadius: 4,
              padding: 24,
              background: COLORS.white,
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: 12,
              }}
            >
              <h2
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  color: COLORS.black,
                }}
              >
                How to Contact
              </h2>
            </div>
            <hr
              style={{
                border: 'none',
                borderTop: '1px solid #ddd',
                marginBottom: 20,
              }}
            />

            <div style={{ marginBottom: 32 }}>
              <p
                style={{
                  display: 'inline',
                  fontSize: 15,
                  color: COLORS.textMuted,
                  lineHeight: 1.8,
                }}
              >
                Feel free to send me a message on <a 
                    href='https://www.linkedin.com/in/brian-nguyen-19920027a/' 
                    target='_blank' rel="noopener noreferrer" 
                    style={{
                    color: COLORS.red,
                  }}>Linkedin</a>, or if its important/urgent reach me through email:{' '}
              </p>
              <span 
                style={{ 
                  direction: 'rtl', 
                  unicodeBidi: 'bidi-override', 
                  color: COLORS.textMuted,
                  fontSize: 15,
                  fontWeight: 500
                }}
              >
                moc.liamg@3041nairb.neyugn
              </span>
            </div>

            <button className="send-btn" onClick={handleSend}>
              {sent ? 'SENT ✓' : 'Random Button?'}
            </button>
          </div>

          {/* Right: location + socials */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {/* Location */}
            <div
              style={{
                border: `1px solid ${COLORS.border}`,
                borderRadius: 4,
                padding: '20px 16px',
                background: COLORS.bgCard,
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  marginBottom: 16,
                }}
              >
                <span style={{ color: COLORS.textMuted, fontSize: 10 }}>◎</span>
                <span
                  style={{
                    fontSize: 10,
                    color: COLORS.textMuted,
                    letterSpacing: '0.1em',
                    fontWeight: 500,
                  }}
                >
                  CURRENT LOCATION
                </span>
              </div>

              {/* HIGHLIGHTED LOCATION */}
              <div
                style={{
                  fontSize: 18,
                  fontWeight: 600,
                  color: COLORS.textMuted,
                  letterSpacing: '0.02em',
                  marginBottom: 4,
                }}
              >
                Vancouver, BC
              </div>

              {/* METADATA */}
              <div
                style={{
                  fontSize: 11,
                  color: COLORS.textMuted,
                  lineHeight: 1.5,
                  letterSpacing: '0.04em',
                }}
              >
                CANADA
                <span style={{ margin: '0 8px', color: COLORS.border }}>|</span>
                PACIFIC TIME (PT)
              </div>
            </div>
            {/* Socials */}
            <div
              style={{
                border: `1px solid ${COLORS.border}`,
                borderRadius: 4,
                padding: 16,
                background: COLORS.black,
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  marginBottom: 12,
                }}
              >
                <span style={{ color: COLORS.textMuted }}>⇄</span>
                <span
                  style={{
                    fontSize: 11,
                    color: COLORS.textMuted,
                    letterSpacing: '0.08em',
                  }}
                >
                  SOCIAL_CHANNELS
                </span>
              </div>
              <hr
                style={{
                  border: 'none',
                  borderTop: '1px solid #333',
                  marginBottom: 12,
                }}
              />
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: 8,
                }}
              >
                {SOCIALS.map((s) => (
                  <a
                    key={s.label}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-grid-item"
                    style={{ textDecoration: 'none' }}
                  >
                    <div
                      style={{
                        fontSize: 9,
                        color: '#555',
                        letterSpacing: '0.06em',
                        marginBottom: 4,
                      }}
                    >
                      {s.n}
                    </div>
                    <div
                      style={{
                        fontSize: 12,
                        fontWeight: 600,
                        color: COLORS.white,
                        letterSpacing: '0.06em',
                      }}
                    >
                      {s.label}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
