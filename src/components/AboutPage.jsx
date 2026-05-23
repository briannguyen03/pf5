import { COLORS } from '../constants/colors';
import Footer from './Footer';

const FUN_STUFF = [
  {
    num: '01. OUTSIDE THE TERMINAL',
    quote: '"When I\'m not coding, you\'ll find me biking Victoria\'s trails or hitting the basketball court."',
  },
  {
    num: '02. FILM BUFF',
    quote: '"A good film is like clean architecture — every frame serves a purpose."',
  },
  {
    num: '03. HOMELAB ASPIRATIONS',
    quote: '"Recently diving into the hardware side of tech. A homelab is in the works."',
  },
];

const EDUCATION = [
  { year: '2023 / CAN', title: 'UNIVERSITY OF VICTORIA', subtitle: 'B.SE Software Engineering', arrow: '↗' },
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
                <img
                  src="assets/rasta_man.png"
                  alt="Brian Nguyen"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: 3,
                  }}
                />
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
                  Brian Nguyen is a software engineering student in his third
                  year at the University of Victoria. His core languages are
                  Python, C, JavaScript, and Java — building everything from
                  interactive web applications to machine learning models and
                  low-level software.
                </p>
                <p
                  style={{
                    fontSize: 12,
                    color: COLORS.textMuted,
                    lineHeight: 1.8,
                  }}
                >
                  He treats code as a creative medium, building projects that
                  challenge the boundary between utility and expression. His
                  work spans web development, reinforcement learning, computer
                  vision, and automated pipelines — defined by precision and
                  systematic thinking.
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
            <a
              href="assets/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="send-btn"
              style={{
                background: COLORS.text,
                color: COLORS.black,
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '12px 20px',
                borderRadius: 4,
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: 13,
                letterSpacing: '0.06em',
                cursor: 'pointer',
                transition: 'opacity 0.2s',
                border: 'none',
              }}
            >
              DOWNLOAD CV &nbsp;↓
            </a>
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
                OUTSIDE THE TERMINAL
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
                SYSTEM_STATUS: BUILDING_
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
              &ldquo;Do. Or do not. There is no try.&rdquo;
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
                YODA — THE EMPIRE STRIKES BACK
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
                ACADEMIC.LOG
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
                  <div
                    style={{
                      fontSize: 11,
                      color: COLORS.textMuted,
                      letterSpacing: '0.04em',
                      marginTop: 4,
                    }}
                  >
                    {item.subtitle}
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
