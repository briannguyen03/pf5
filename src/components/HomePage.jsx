import { COLORS } from '../constants/colors';
import Footer from './Footer';

export default function HomePage({ setPage }) {
  return (
    <div style={{ background: COLORS.bgDark, minHeight: '100vh' }}>
      <div style={{ padding: '40px 40px 0' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 0.47fr',
            gap: 12,
            marginBottom: 12,
          }}
        >
          {/* Hero card */}
          <div
            style={{
              background: COLORS.grey,
              borderRadius: 6,
              minHeight: 540,
              display: 'flex',
              alignItems: 'flex-end',
              padding: '28px 32px',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <h1
              className="pixel-font"
              style={{
                fontSize: 'clamp(50px, 12vw, 70px)',
                color: COLORS.white,
                letterSpacing: '0.001em',
                lineHeight: 1.1,
              }}
            >
              BRIAN<br />NGUYEN
            </h1>
          </div>

          {/* Right column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {/* About card */}
            <div
              className="card"
              style={{
                background: COLORS.bgAbout,
                flex: 1,
                padding: '16px 20px',
                minHeight: 250,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
              onClick={() => setPage('About')}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                }}
              >
                <span
                  style={{
                    fontSize: 11,
                    color: 'rgba(255,255,255,0.6)',
                    letterSpacing: '0.1em',
                  }}
                >
                  02 / WHOAMI
                </span>
                <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: 18 }}>
                  ↗
                </span>
              </div>
              <div style={{ marginTop: 'auto', paddingTop: 100 }}>
                <h2
                  className="pixel-font"
                  style={{
                    fontSize: 40,
                    fontWeight: 600,
                    letterSpacing: '0.01em',
                    color: COLORS.white,
                  }}
                >
                  ABOUT
                </h2>
              </div>
            </div>

            {/* Projects card */}
            <div
              className="card"
              style={{
                background: COLORS.bgProjects,
                flex: 1,
                padding: '16px 20px',
                minHeight: 250,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
              onClick={() => setPage('Projects')}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                }}
              >
                <span
                  style={{
                    fontSize: 11,
                    color: 'rgba(255,255,255,0.5)',
                    letterSpacing: '0.1em',
                  }}
                >
                  03 / MY_EXPERIENCE
                </span>
                <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: 18 }}>
                  ↗
                </span>
              </div>
              <div style={{ paddingTop: 100 }}>
                <h2
                  className="pixel-font"
                  style={{
                    fontSize: 40,
                    fontWeight: 600,
                    letterSpacing: '0.01em',
                    color: COLORS.white,
                  }}
                >
                  PROJECTS
                </h2>
              </div>
            </div>
          </div>
        </div>

        {/* Contact bar */}
        <div
          className="card"
          style={{
            background: COLORS.bgContact,
            borderRadius: 6,
            padding: '24px 32px',
            cursor: 'pointer',
            marginBottom: 0,
          }}
          onClick={() => setPage('Contact')}
        >
          <div
            style={{
              fontSize: 11,
              color: 'rgba(255,255,255,0.5)',
              letterSpacing: '0.1em',
              marginBottom: 8,
            }}
          >
            04 / CONTACT
          </div>
          <h2
            className="pixel-font"
            style={{
              fontSize: 40,
              fontWeight: 600,
              letterSpacing: '0.01em',
              color: COLORS.white,
            }}
          >
            CONTACT
          </h2>
        </div>
      </div>

      <div style={{ height: 80 }} />
      <Footer />
    </div>
  );
}
