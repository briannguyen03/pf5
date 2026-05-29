import { COLORS } from '../constants/colors';
import Footer from './Footer';

const FUN_STUFF = [
  {
    num: '01. Outdoors',
    quote: 'When I need to destress, I usually reach for my hiking shoes or go on a bike ride around the city.',
  },
  {
    num: '02. Films',
    quote: 'I enjoy watching a variety of films, and I am a big fan of anything Quentin Tarantino. Follow me on Letterboxd!',
  },
  {
    num: '03. Aviation',
    quote: 'I realy like anything that flies, especially ones with wings. Currently working on building a scalled turbojet engine in my garage',
  },
  {
    num: '04. Hardware',
    quote: 'The hardware side of tech gets me excited. I enjoy seeing, and building cool hardware projects. Currently I am working on building a 5 axis robot arm from 3d printed parts',
  },
];

const EDUCATION = [
  { year: '2023 / CAN', title: 'UNIVERSITY OF VICTORIA', subtitle: 'B.SE Software Engineering', arrow: '↗' },
];

const USER_STATS = [
  { label: 'Experience', value: '2+ Years', sub: 'Backend & ML' },
  { label: 'Tech Stack', value: 'Python / React / JS', sub: 'Backend & Frontend' },
  { label: 'Frameworks & Libraries', value: 'FastAPI / Express / Django', sub: 'Databases: MySQL & Postgres' },
  { label: 'Others', value: 'C / C++ / Java', sub: 'Low level & OOP proficient ' },
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
            color: COLORS.white,
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
              background: COLORS.white,
              display: 'flex',
              flexDirection: 'row',
              gap: 20,
              overflow: 'hidden',
            }}
          >
            {/* Left Column: Just the photo container */}
            <div
              style={{
                width: 250,
                height: 350,
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

            {/* Right Column: Text content, divider line, and button grouped together */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                flex: 1,
              }}
            >
              {/* Text Section */}
              <div
                style={{
                  padding: '0 24px 20px 24px', // Keeps your internal padding structure
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <h2
                  style={{
                    fontSize: 14,
                    fontWeight: 600,
                    letterSpacing: '0.08em',
                    marginBottom: 14,
                    color: COLORS.textDim,
                  }}
                >
                  ABOUT
                </h2>
                <p
                  style={{
                    fontSize: 14,
                    color: COLORS.textMuted,
                    lineHeight: 1.8,
                    marginBottom: 12,
                  }}
                >
                  I’m a third-year software engineering student at the University of Victoria, working primarily with Python, C, JavaScript, and Java. 
                  I love building a wide range of projects, spanning everything from full-stack web applications and machine learning to hands-on hardware. 
                  When I'm away from my desk, I’m usually out exploring Victoria’s trails on my bike or hitting the basketball court. If you ever need a plus-one for a game or a cycling buddy, definitely hit me up! In the meantime, I’ve built some pretty cool things, so feel free to check them out on my projects page.
                </p>
              </div>

              {/* The horizontal rule now stays completely inside the right column */}
              <hr
                style={{
                  border: 'none',
                  borderTop: `1px solid ${COLORS.border}`,
                  margin: '0 0 16px 0',
                }}
              />

              {/* Button Section */}
              <div style={{ paddingLeft: 24 }}>
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
                  My Resume &nbsp;↗
                </a>
              </div>
            </div>
          </div>
          {/* Fun stuff card */}
          <div
            style={{
              border: `1px solid ${COLORS.border}`,
              borderRadius: 4,
              padding: 20,
              background: COLORS.white,
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
                  color: COLORS.textDim,
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
                    fontSize: 11,
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
          </div>
        </div>

         {/*Stats dashboard*/}
         <div
          style={{
            background: COLORS.bgCard,
            border: `1px solid ${COLORS.border}`,
            borderRadius: 4,
            height: 160,
            marginBottom: 20,
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            alignItems: 'center',
            textAlign: 'center'
          }}
        >
          {USER_STATS.map((stat, i) => (
            <div key={i} style={{ borderRight: i !== USER_STATS.length - 1 ? `1px solid ${COLORS.border}` : 'none' }}>
              <div style={{ fontSize: 12, textTransform: 'uppercase', color: COLORS.textDim, letterSpacing: '1px', marginBottom: 8 }}>
                {stat.label}
              </div>
              <div style={{ fontSize: 20, fontWeight: 'bold', color: COLORS.textMuted, marginBottom: 4 }}>
                {stat.value}
              </div>
              <div style={{ fontSize: 11, color: COLORS.textMuted, fontStyle: 'italic' }}>
                {stat.sub}
              </div>
            </div>
          ))}
        </div>

        {/* Quote + Education row */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.2fr',
            gap: 12,
            marginBottom: 50,
          }}
        >
          {/* Quote panel */}
          <div
            style={{
              border: `1px solid ${COLORS.border}`,
              borderRadius: 4,
              padding: '28px 32px',
              background: COLORS.black,
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
                color: COLORS.white,
                marginBottom: 20,
                lineHeight: 1.4,
              }}
            >
              &ldquo;Do. Or do not. There is no try.&rdquo;
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div
                style={{ width: 40, height: 1, background: COLORS.white }}
              />
              <span
                style={{
                  fontSize: 10,
                  color: COLORS.white,
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
              background: COLORS.bgCard,
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
                  color: COLORS.textDim,
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
                      color: COLORS.textDim,
                    }}
                  >
                    {item.title}
                  </div>
                  <div
                    style={{
                      fontSize: 11,
                      color: COLORS.textDim,
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
      </div>
      <Footer />
    </div>
  );
}
