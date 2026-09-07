import { COLORS } from '../constants/colors';
import Footer from './Footer';
import { TiltCard } from './TiltCard';

export default function HomePage({ setPage }) {
  return (
    <div style={{ background: COLORS.bgDark, minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <div style={{ padding: 'clamp(12px, 3vw, 40px) clamp(12px, 3vw, 40px) 0', flex: 1 }}>
        
      <div className="home-grid" style={{ marginBottom: 12 }}>
        {/* Hero card - full width on mobile */}
        <div
          style={{
            background: COLORS.grey,
            borderRadius: 6,
            minHeight: 'clamp(400px, 50vw, 540px)',
            display: 'flex',
            alignItems: 'flex-end',
            padding: '28px 32px',
            position: 'relative',
            overflow: 'hidden',
            marginBottom: 12,
          }}
        >
          <video
            autoPlay loop muted playsInline
            style={{
              position: 'absolute', top: 0, left: 0,
              width: '100%', height: '100%',
              objectFit: 'cover', zIndex: 0,
              pointerEvents: 'none',
              filter: 'grayscale(100%) brightness(0.5)',
            }}
          >
            <source src="assets/hero_vid.mp4" type="video/mp4" />
          </video>
          <div style={{
            position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
            background: 'linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.5))',
            zIndex: 1,
          }} />
          <h1 className="pixel-font" style={{
            fontSize: 'clamp(40px, 10vw, 70px)',
            color: COLORS.white,
            letterSpacing: '0.001em',
            lineHeight: 1.1,
            position: 'relative',
            zIndex: 2,
          }}>
            BRIAN<br />NGUYEN
          </h1>
        </div>

        {/* About + Projects */}
        <div className="cards-row" style={{ display: 'grid', gap: 12, marginBottom: 12 }}>
          <TiltCard className="card" onClick={() => setPage('About')} style={{
            background: COLORS.bgAbout,
            padding: '16px 20px',
            minHeight: 'clamp(160px, 30vw, 250px)',
            display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
            cursor: 'pointer', borderRadius: 4,
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.6)', letterSpacing: '0.1em' }}>02 / WHOAMI</span>
              <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: 18 }}>↗</span>
            </div>
            <h2 className="pixel-font" style={{ fontSize: 'clamp(24px, 5vw, 40px)', color: COLORS.white }}>ABOUT</h2>
          </TiltCard>

          <TiltCard className="card" onClick={() => setPage('Projects')} style={{
            background: COLORS.bgProjects,
            padding: '16px 20px',
            minHeight: 'clamp(160px, 30vw, 250px)',
            display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
            cursor: 'pointer', borderRadius: 4,
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)', letterSpacing: '0.1em' }}>03 / MY_EXPERIENCE</span>
              <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: 18 }}>↗</span>
            </div>
            <h2 className="pixel-font" style={{ fontSize: 'clamp(24px, 5vw, 40px)', color: COLORS.white }}>PROJECTS</h2>
          </TiltCard>
        </div>
        </div>

        {/* Contact - full width */}
        <TiltCard className="card" onClick={() => setPage('Contact')} style={{
          background: COLORS.bgContact,
          padding: '16px 20px',
          minHeight: 'clamp(120px, 20vw, 180px)',
          display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
          cursor: 'pointer', borderRadius: 4,
        }}>
          <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)', letterSpacing: '0.1em' }}>04 / CONTACT</div>
          <h2 className="pixel-font" style={{ fontSize: 'clamp(24px, 5vw, 40px)', color: COLORS.white }}>CONTACT</h2>
        </TiltCard>
      </div>

      <div style={{ height: 60 }} />
      <Footer />
    </div>
  );
}
