import { COLORS } from '../constants/colors';
import Footer from './Footer';

const FUN_STUFF = [
  {
    num: '01. STRUCTURAL HONESTY',
    quote: '"Complexity must not hide its skeleton."',
  },
  {
    num: '02. DATA AS DUST',
    quote:
      '"Binary information is as granular and tactile as charcoal."',
  },
  {
    num: '03. MACHINE EMPATHY',
    quote:
      '"Searching for the accidental errors that make systems feel alive."',
  },
];

const EDUCATION = [
  { year: '2023 / ITALY', title: 'VENICE BIENNALE', arrow: '↗' },
  { year: '2021 / USA', title: 'MOMA RESIDENCY', arrow: '→' },
  { year: '2018 / UK', title: 'ROYAL ACADEMY', arrow: '↗' },
  { year: '2016 / CAN', title: 'NATIONAL GALLERY', arrow: '↗' },
];

export default function AboutPage() {
  return (
    <div style={{ background: COLORS.bgDark, minHeight: '100vh' }}>
      <div style={{ padding: '0 40px' }}>
        <h1
          className="pixel-font"
          style={{
            fontSize: 28,
            letterSpacing: '0.12em',
            color: COLORS.white,
            paddingTop: 4,
            marginBottom: 4,
          }}
        >
          BRIAN NGUYEN
        </h1>
        <div
          style={{
            fontSize: 11,
            color: COLORS.textMuted,
            letterSpacing: '0.12em',
            marginBottom: 16,
          }}
        >
          SOFTWARE ENGINEER
        </div>
        <hr className="section-rule" style={{ marginBottom: 20 }} />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.4fr 1fr',
            gap: 12,
            marginBottom: 12,
          }}
        >
          {/* About card */}
          <div
            style={{
              border: `1px solid ${COLORS.border}`,
              borderRadius: 4,
              padding: 20,
              background: COLORS.bg,
            }}
          >
            <div style={{ display: 'flex', gap: 20, marginBottom: 20 }}>
              <div
                style={{
                  width: 130,
                  height: 160,
                  background: COLORS.bgCard,
                  borderRadius: 3,
                  flexShrink: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <span style={{ color: COLORS.textDim, fontSize: 11 }}>
                  PHOTO
                </span>
              </div>
              <div>
                <h2
                  style={{
                    fontSize: 14,
                    fontWeight: 600,
                    letterSpacing: '0.08em',
                    marginBottom: 14,
                    color: COLORS.white,
                  }}
                >
                  ABOUT
                </h2>
                <p
                  style={{
                    fontSize: 12,
                    color: COLORS.textMuted,
                    lineHeight: 1.8,
                    marginBottom: 12,
                  }}
                >
                  Brian Nguyen is a software engineer whose work explores the
                  intersection of functional systems and thoughtful design. Based
                  in Vancouver, his practice spans web development, generative
                  interfaces, and data-driven visual systems.
                </p>
                <p
                  style={{
                    fontSize: 12,
                    color: COLORS.textMuted,
                    lineHeight: 1.8,
                  }}
                >
                  By treating code as a creative medium, Brian builds
                  environments that challenge the boundary between utility and
                  expression. His work is defined by precision, systematic
                  thinking, and structural honesty.
                </p>
              </div>
            </div>
            <hr
              style={{
                border: 'none',
                borderTop: `1px solid ${COLORS.border}`,
                margin: '0 0 16px',
              }}
            />
            <button
              className="send-btn"
              style={{ background: COLORS.text, color: COLORS.black }}
            >
              DOWNLOAD CV &nbsp;↓
            </button>
          </div>

          {/* Fun stuff card */}
          <div
            style={{
              border: `1px solid ${COLORS.border}`,
              borderRadius: 4,
              padding: 20,
              background: COLORS.bg,
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: 16,
              }}
            >
              <h2
                style={{
                  fontSize: 14,
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  color: COLORS.white,
                }}
              >
                FUN STUFF
              </h2>
              <span style={{ fontSize: 16, color: COLORS.textMuted }}>
                ⁘⁘⁘
              </span>
            </div>

            {FUN_STUFF.map((item, i) => (
              <div
                key={i}
                style={{
                  background: COLORS.bgCard,
                  borderRadius: 3,
                  padding: '12px 14px',
                  marginBottom: 8,
                }}
              >
                <div
                  style={{
                    fontSize: 9,
                    color: COLORS.textDim,
                    letterSpacing: '0.08em',
                    marginBottom: 6,
                  }}
                >
                  {item.num}
                </div>
                <p
                  style={{
                    fontSize: 12,
                    color: COLORS.textMuted,
                    fontStyle: 'italic',
                    lineHeight: 1.6,
                  }}
                >
                  {item.quote}
                </p>
              </div>
            ))}

            <div style={{ marginTop: 16, textAlign: 'right' }}>
              <span
                style={{
                  fontSize: 10,
                  color: COLORS.textDim,
                  letterSpacing: '0.08em',
                }}
              >
                SYSTEM_STATUS: ACTIVE_
              </span>
            </div>
          </div>
        </div>

        {/* Quote + Education row */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.2fr',
            gap: 12,
            marginBottom: 40,
          }}
        >
          {/* Quote panel */}
          <div
            style={{
              border: `1px solid ${COLORS.border}`,
              borderRadius: 4,
              padding: '28px 32px',
              background: COLORS.bgDark,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                fontSize: 60,
                fontWeight: 700,
                color: COLORS.text,
                lineHeight: 1,
                marginBottom: 12,
              }}
            >
              99
            </div>
            <div
              style={{
                fontSize: 22,
                fontStyle: 'italic',
                color: COLORS.textMuted,
                marginBottom: 20,
                lineHeight: 1.4,
              }}
            >
              &ldquo;A QUOTE&rdquo;
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div
                style={{ width: 40, height: 1, background: COLORS.border }}
              />
              <span
                style={{
                  fontSize: 10,
                  color: COLORS.textDim,
                  letterSpacing: '0.08em',
                }}
              >
                ARTIST STATEMENT 2024
              </span>
            </div>
          </div>

          {/* Education */}
          <div
            style={{
              border: `1px solid ${COLORS.border}`,
              borderRadius: 4,
              padding: 20,
              background: COLORS.bg,
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: 16,
              }}
            >
              <h2
                style={{
                  fontSize: 14,
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  color: COLORS.white,
                }}
              >
                EDUCATION
              </h2>
              <span className="tag" style={{ fontSize: 9 }}>
                ARCHIVE.LOG
              </span>
            </div>

            {EDUCATION.map((item, i) => (
              <div key={i} className="edu-row">
                <div>
                  <div
                    style={{
                      fontSize: 10,
                      color: COLORS.textDim,
                      letterSpacing: '0.06em',
                      marginBottom: 4,
                    }}
                  >
                    {item.year}
                  </div>
                  <div
                    style={{
                      fontSize: 14,
                      fontWeight: 600,
                      letterSpacing: '0.06em',
                      color: COLORS.white,
                    }}
                  >
                    {item.title}
                  </div>
                </div>
                <span style={{ color: COLORS.textMuted, fontSize: 18 }}>
                  {item.arrow}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Extra dark section */}
        <div
          style={{
            background: COLORS.bgDark,
            border: `1px solid ${COLORS.border}`,
            borderRadius: 4,
            height: 160,
            marginBottom: 40,
          }}
        />
      </div>
      <Footer />
    </div>
  );
}
