import { COLORS } from '../constants/colors';
import Footer from './Footer';
import { TiltCard } from './TiltCard';

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
            {/* Background Video Element */}
            <video
              autoPlay
              loop
              muted
              playsInline
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                zIndex: 0,
                pointerEvents: 'none',
                filter: 'grayscale(100%) brightness(0.5)',
              }}
            >
              <source src="assets/hero_vid.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            <div 
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.5))',
                zIndex: 1,
              }}
            />

            <h1
              className="pixel-font"
              style={{
                fontSize: 'clamp(50px, 12vw, 70px)',
                color: COLORS.white,
                letterSpacing: '0.001em',
                lineHeight: 1.1,
                position: 'relative',
                zIndex: 2,
              }}
            >
              BRIAN<br />NGUYEN
            </h1>
          </div>

          {/* Right column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {/* About card */}
            <TiltCard
              className="card"
              onClick={() => setPage('About')}
              style={{
                background: COLORS.bgAbout,
                flex: 1,
                padding: '16px 20px',
                minHeight: 250,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                cursor: 'pointer',
                border: `1px solid ${COLORS.border || 'transparent'}`,
                borderRadius: 4,
              }}
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
            </TiltCard>

            {/* Projects card */}
            <TiltCard
              className="card"
              onClick={() => setPage('Projects')}
              style={{
                background: COLORS.bgProjects,
                flex: 1,
                padding: '16px 20px',
                minHeight: 250,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                cursor: 'pointer',
                border: `1px solid ${COLORS.border || 'transparent'}`,
                borderRadius: 4,
              }}
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
             </TiltCard>
          </div>
        </div>
        

        {/* Contact bar */}
        <TiltCard
              className="card"
              onClick={() => setPage('Contact')}
              style={{
                background: COLORS.bgContact,
                flex: 1,
                padding: '16px 20px',
                minHeight: 180,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                cursor: 'pointer',
                border: `1px solid ${COLORS.border || 'transparent'}`,
                borderRadius: 4,
              }}
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
        </TiltCard>
      </div>

      <div style={{ height: 80 }} />
      <Footer />
    </div>
  );
}
