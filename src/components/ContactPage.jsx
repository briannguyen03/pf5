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
    <div style={{ background: COLORS.bgDark, minHeight: '100vh' }}>
      <div style={{ padding: '0 40px' }}>
        <h1
          style={{
            fontSize: 22,
            fontWeight: 400,
            color: COLORS.white,
            paddingTop: 4,
            marginBottom: 20,
          }}
        >
          Contact Me
        </h1>

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
                SEND ME A MESSAGE
              </h2>
              <span
                style={{
                  fontSize: 11,
                  color: '#999',
                  letterSpacing: '0.06em',
                }}
              >
                ID: 00-FC-82
              </span>
            </div>
            <hr
              style={{
                border: 'none',
                borderTop: '1px solid #ddd',
                marginBottom: 20,
              }}
            />

            <div style={{ marginBottom: 14 }}>
              <label
                style={{
                  display: 'block',
                  fontSize: 10,
                  color: '#888',
                  letterSpacing: '0.08em',
                  marginBottom: 6,
                }}
              >
                _NAME
              </label>
              <input
                className="input-field"
                placeholder="ENTER NAME..."
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div style={{ marginBottom: 14 }}>
              <label
                style={{
                  display: 'block',
                  fontSize: 10,
                  color: '#888',
                  letterSpacing: '0.08em',
                  marginBottom: 6,
                }}
              >
                _EMAIL
              </label>
              <input
                className="input-field"
                placeholder="USER@NETWORK.COM"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div style={{ marginBottom: 20 }}>
              <label
                style={{
                  display: 'block',
                  fontSize: 10,
                  color: '#888',
                  letterSpacing: '0.08em',
                  marginBottom: 6,
                }}
              >
                _MESSAGE
              </label>
              <textarea
                className="input-field"
                placeholder="WRITE YOUR MESSAGE..."
                rows={6}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                style={{ resize: 'vertical' }}
              />
            </div>

            <button className="send-btn" onClick={handleSend}>
              {sent ? 'SENT ✓' : 'SEND_DATA →'}
            </button>
          </div>

          {/* Right: location + socials */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {/* Location */}
            <div
              style={{
                border: `1px solid ${COLORS.border}`,
                borderRadius: 4,
                padding: 16,
                background: COLORS.bg,
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
                <span style={{ color: COLORS.textMuted }}>◎</span>
                <span
                  style={{
                    fontSize: 11,
                    color: COLORS.textMuted,
                    letterSpacing: '0.08em',
                  }}
                >
                  WHERE I AM
                </span>
              </div>
              <div
                style={{
                  background: '#d8d8d8',
                  borderRadius: 3,
                  height: 160,
                  marginBottom: 14,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <span style={{ fontSize: 11, color: '#999' }}>[ MAP ]</span>
              </div>
              <div
                style={{
                  fontSize: 11,
                  color: COLORS.textMuted,
                  lineHeight: 1.7,
                  letterSpacing: '0.04em',
                }}
              >
                VICTORIA, BC
                <br />
                CANADA
                <br />
                PACIFIC TIME ZONE
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
