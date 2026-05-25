import { COLORS } from '../constants/colors';
import Footer from './Footer';

export default function ProjectsPage() {
  return (
    <div style={{ background: COLORS.bgDark, minHeight: '100vh' }}>
      <div style={{ padding: '0 40px' }}>
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
          Projects
        </h1>
        <hr className="section-rule" style={{ marginBottom: 24 }} />

        {/* Main grid: large left + right column */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.4fr 1fr',
            gap: 12,
            marginBottom: 12,
          }}
        >
          {/* Large featured project — Game of Life */}
          <div
            style={{
              border: `2px solid ${COLORS.black}`,
              borderRadius: 4,
              padding: 16,
              background: COLORS.bgCard,
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: 12,
              }}
            >
              <span className="tag">SIMULATION</span>
              <span style={{ fontSize: 11, color: COLORS.textDim }}>
                [2024.JS]
              </span>
            </div>
            <div
              style={{
                background: COLORS.bgCard,
                borderRadius: 4,
                height: 480,
                marginBottom: 16,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
              }}
            >
              <img
                src="assets/game_of_life.png"
                alt="The Game of Life"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                }}
              />
            </div>
            <h3
              style={{
                fontSize: 18,
                fontWeight: 600,
                letterSpacing: '0.06em',
                marginBottom: 8,
                color: COLORS.textDim,
              }}
            >
              THE GAME OF LIFE
            </h3>
            <p
              style={{
                fontSize: 11,
                color: COLORS.textMuted,
                lineHeight: 1.7,
                letterSpacing: '0.04em',
                maxWidth: 420,
              }}
            >
              CONWAY'S CELLULAR AUTOMATON IMPLEMENTED IN P5.JS. REAL-TIME
              SIMULATION WITH ADJUSTABLE RGB VALUES AND A RANDOMIZE FUNCTION.
            </p>
          </div>

          {/* Right: two stacked cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {/* Co-op Portal Scraper */}
            <div
              style={{
                border: `2px solid ${COLORS.black}`,
                borderRadius: 4,
                padding: 16,
                background: COLORS.bgCard,
              }}
            >
              <div style={{ marginBottom: 10 }}>
                <span className="tag">AUTOMATION</span>
              </div>
              <div
                style={{
                  background: COLORS.grey,
                  borderRadius: 4,
                  height: 180,
                  marginBottom: 14,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden',
                }}
              >
                <img
                  src="assets/lim_scraper_demo.png"
                  alt="Co-op Portal Scraper"
                  style={{
                    width: '100%',
                    height: 'auto',
                    objectFit: 'contain',
                  }}
                />
              </div>
              <h3
                style={{
                  fontSize: 16,
                  fontWeight: 600,
                  letterSpacing: '0.06em',
                  marginBottom: 6,
                  color: COLORS.textDim,
                }}
              >
                CO-OP PORTAL SCRAPER
              </h3>
              <p
                style={{
                  fontSize: 11,
                  color: COLORS.textMuted,
                  lineHeight: 1.6,
                  letterSpacing: '0.04em',
                }}
              >
                Built a Python pipeline that automates the job search process. The system uses Selenium and BeautifulSoup to scrape live listings from co-op portal, handling session authentication to bypass manual logins. Extracted roles are then processed by Deepseek's R1 model that analyzes job descriptions against a user’s specific skillset to provide compatibility scores.
              </p>
            </div>

            {/* Blackjack Agent */}
            <div
              style={{
                border: `2px solid ${COLORS.black}`,
                borderRadius: 4,
                padding: 16,
                background: COLORS.bgCard,
              }}
            >
              <div style={{ marginBottom: 10 }}>
              <span className="tag">MACHINE LEARNING</span>
              </div>
              <div
                style={{
                  background: COLORS.grey,
                  borderRadius: 4,
                  height: 180,
                  marginBottom: 14,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden',
                }}
              >
                <img
                  src="assets/blackjackAgentscreenshot.png"
                  alt="Blackjack Agent"
                  style={{
                    width: '100%',
                    height: 'auto',
                    objectFit: 'contain',
                  }}
                />
              </div>
              <h3
                style={{
                  fontSize: 16,
                  fontWeight: 600,
                  letterSpacing: '0.06em',
                  marginBottom: 6,
                  color: COLORS.textDim,
                }}
              >
                BLACKJACK AGENT
              </h3>
              <p
                style={{
                  fontSize: 11,
                  color: COLORS.textMuted,
                  lineHeight: 1.6,
                  letterSpacing: '0.04em',
                }}
              >
               An RL-based agent trained to play Blackjack using Q-Learning and epsilon decay. After simulating 10,000 hands, the model reached a ~41% win rate, approximating the optimal basic strategy through a simple model.
              </p>
            </div>
          </div>
        </div>

        {/* Dark feature card — Drawing Using AI */}
        <div
          style={{
            background: COLORS.black,
            border: `1px solid ${COLORS.border}`,
            borderRadius: 4,
            padding: '28px 32px',
            marginBottom: 12,
          }}
        >
          <div style={{ marginBottom: 10 }}>
            <span
              style={{
                borderLeft: `3px solid ${COLORS.textMuted}`,
                paddingLeft: 8,
                fontSize: 11,
                color: COLORS.grey,
                letterSpacing: '0.08em',
              }}
            >
              COMPUTER_VISION
            </span>
          </div>
          <h3
            style={{
              fontSize: 26,
              fontWeight: 600,
              letterSpacing: '0.06em',
              marginBottom: 12,
              color: COLORS.white,
            }}
          >
            DRAWING USING AI
          </h3>
          <p
            style={{
              fontSize: 11,
              color: COLORS.grey,
              lineHeight: 1.8,
              letterSpacing: '0.04em',
              maxWidth: 340,
            }}
          >
            A HAND-TRACKING DRAWING APPLICATION USING COMPUTER VISION.
            TRANSLATES FINGER MOVEMENTS TO PAINT ON A LIVE WEBCAM CANVAS WITH
            VARIABLE BRUSH SIZE AND PINCH-TO-DRAW CONTROLS.
          </p>
        </div>

        {/* Bottom row */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 12,
            marginBottom: 40,
          }}
        >
          {/* GitHub link card — repurposed from Fractal Lab */}
          <a
            href="https://github.com/briannguyen03"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              border: '1px solid #6b5a2a',
              borderRadius: 4,
              padding: '16px 18px',
              background: '#1a1508',
              textDecoration: 'none',
              display: 'block',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: 10,
              }}
            >
              <span
                className="tag"
                style={{ borderColor: '#6b5a2a', color: '#c4a84a' }}
              >
                MODULE: ARCHIVE
              </span>
              <span style={{ fontSize: 18, color: '#c4a84a' }}>⊞</span>
            </div>
            <h3
              style={{
                fontSize: 18,
                fontWeight: 600,
                letterSpacing: '0.06em',
                marginBottom: 8,
                color: '#e8d08a',
              }}
            >
              MORE ON GITHUB
            </h3>
            <p
              style={{
                fontSize: 11,
                color: '#8a7a4a',
                lineHeight: 1.7,
                letterSpacing: '0.04em',
                marginBottom: 20,
              }}
            >
              ALL PROJECTS ARE OPEN SOURCE. EXPLORE THE FULL REPOSITORY
              ARCHIVE INCLUDING THE HAND POSE MODEL AND LIM SCRAPER PIPELINE.
            </p>
            <hr
              style={{ border: 'none', borderTop: '1px solid #6b5a2a', margin: '12px 0' }}
            />
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span
                style={{
                  fontSize: 10,
                  color: '#6b5a2a',
                  letterSpacing: '0.06em',
                }}
              >
                VERSION: 4.0
              </span>
              <span
                style={{
                  fontSize: 10,
                  color: '#8a7a4a',
                  letterSpacing: '0.06em',
                  cursor: 'pointer',
                }}
              >
                BROWSE_ALL →→
              </span>
            </div>
          </a>

          {/* Stats panel — real metrics */}
          <div
            style={{
              border: `1px solid ${COLORS.border}`,
              borderRadius: 4,
              padding: '16px 18px',
              background: COLORS.bgCard,
            }}
          >
            <div
              style={{
                fontSize: 11,
                color: COLORS.textMuted,
                letterSpacing: '0.08em',
                marginBottom: 16,
              }}
            >
              STATS
            </div>
            <div style={{ display: 'flex', gap: 0, marginBottom: 16 }}>
              <div
                style={{
                  flex: 1,
                  borderRight: `1px solid ${COLORS.border}`,
                  paddingRight: 20,
                }}
              >
                <div
                  style={{
                    fontSize: 28,
                    fontWeight: 600,
                    color: COLORS.textDim,
                    letterSpacing: '0.04em',
                  }}
                >
                  4
                </div>
                <div
                  style={{
                    fontSize: 10,
                    color: COLORS.textDim,
                    letterSpacing: '0.06em',
                  }}
                >
                  SHIPPED_PROJECTS
                </div>
              </div>
              <div style={{ flex: 1, paddingLeft: 20 }}>
                <div
                  style={{
                    fontSize: 28,
                    fontWeight: 600,
                    color: COLORS.textDim,
                    letterSpacing: '0.04em',
                  }}
                >
                  500M+
                </div>
                <div
                  style={{
                    fontSize: 10,
                    color: COLORS.textMuted,
                    letterSpacing: '0.06em',
                  }}
                >
                  Tokens Used
                </div>
              </div>
            </div>
            <hr
              style={{
                border: 'none',
                borderTop: `1px solid ${COLORS.border}`,
                margin: '0 0 12px',
              }}
            />
            <p
              style={{
                fontSize: 10,
                color: COLORS.textMuted,
                lineHeight: 1.7,
                letterSpacing: '0.04em',
              }}
            >
              EVERY PROJECT IS BUILT WITH CLEAN ARCHITECTURE, SYSTEMATIC
              TESTING, AND A FOCUS ON REAL-WORLD UTILITY OVER THEORETICAL
              PERFECTION.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
