import { COLORS } from '../constants/colors';
import Footer from './Footer';

export default function ProjectsPage() {
  return (
    <div style={{ background: COLORS.bgDark, minHeight: '100vh' }}>
      <div style={{ padding: '0 40px' }}>
        <h1
          style={{
            fontSize: 22,
            fontWeight: 600,
            letterSpacing: '0.04em',
            paddingTop: 8,
            color: COLORS.white,
          }}
        >
          SELECTED_WORKS.TXT
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
          {/* Large featured project */}
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
                justifyContent: 'space-between',
                marginBottom: 12,
              }}
            >
              <span className="tag">MODULE: STRUCTURAL_01</span>
              <span style={{ fontSize: 11, color: COLORS.textMuted }}>
                [2024.V3]
              </span>
            </div>
            <div
              style={{
                background: COLORS.bgCard,
                borderRadius: 4,
                height: 360,
                marginBottom: 16,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <span style={{ color: COLORS.textDim, fontSize: 12 }}>
                [ IMAGE ]
              </span>
            </div>
            <h3
              style={{
                fontSize: 18,
                fontWeight: 600,
                letterSpacing: '0.06em',
                marginBottom: 8,
                color: COLORS.white,
              }}
            >
              LUMINA PAVILION
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
              EXPLORING THE INTERSECTION OF LIGHT DENSITY AND CONCRETE GEOMETRY
              IN VIRTUAL SPACES. SYSTEM OPTIMIZED FOR MAXIMAL SHADOW FIDELITY.
            </p>
          </div>

          {/* Right: two stacked cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div
              style={{
                border: `1px solid ${COLORS.border}`,
                borderRadius: 4,
                padding: 16,
                background: COLORS.bg,
              }}
            >
              <div style={{ marginBottom: 10 }}>
                <span className="tag">TYPE: ARCHITECTURAL</span>
              </div>
              <div
                style={{
                  background: COLORS.bgCard,
                  borderRadius: 4,
                  height: 180,
                  marginBottom: 14,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <span style={{ color: COLORS.textDim, fontSize: 12 }}>
                  [ IMAGE ]
                </span>
              </div>
              <h3
                style={{
                  fontSize: 16,
                  fontWeight: 600,
                  letterSpacing: '0.06em',
                  marginBottom: 6,
                  color: COLORS.white,
                }}
              >
                HELIX STUDY
              </h3>
              <p
                style={{
                  fontSize: 11,
                  color: COLORS.textMuted,
                  lineHeight: 1.6,
                  letterSpacing: '0.04em',
                }}
              >
                RECURSIVE GEOMETRY SEQUENCING FOR HIGH-DENSITY URBAN HABITATS.
              </p>
            </div>

            <div
              style={{
                border: `1px solid ${COLORS.border}`,
                borderRadius: 4,
                padding: 16,
                background: COLORS.bg,
              }}
            >
              <div style={{ marginBottom: 10 }}>
                <span
                  className="tag"
                  style={{ borderColor: '#5a8a5a', color: '#8ac48a' }}
                >
                  STATUS: LIVE
                </span>
              </div>
              <div
                style={{
                  background: COLORS.bgCard,
                  borderRadius: 4,
                  height: 180,
                  marginBottom: 14,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <span style={{ color: COLORS.textDim, fontSize: 12 }}>
                  [ IMAGE ]
                </span>
              </div>
              <h3
                style={{
                  fontSize: 16,
                  fontWeight: 600,
                  letterSpacing: '0.06em',
                  marginBottom: 6,
                  color: COLORS.white,
                }}
              >
                VOID GALLERY
              </h3>
              <p
                style={{
                  fontSize: 11,
                  color: COLORS.textMuted,
                  lineHeight: 1.6,
                  letterSpacing: '0.04em',
                }}
              >
                MINIMALIST EXHIBITION LOGIC FOR NON-PHYSICAL ASSETS.
              </p>
            </div>
          </div>
        </div>

        {/* Dark feature card */}
        <div
          style={{
            background: COLORS.bgDark,
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
                color: COLORS.textMuted,
                letterSpacing: '0.08em',
              }}
            >
              DATA_ENTRY: CRITICAL
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
            KINETIC TOWER
          </h3>
          <p
            style={{
              fontSize: 11,
              color: COLORS.textMuted,
              lineHeight: 1.8,
              letterSpacing: '0.04em',
              maxWidth: 340,
            }}
          >
            A RECONFIGURABLE HIGH-RISE SYSTEM THAT RESPONDS TO ATMOSPHERIC DATA
            IN REAL-TIME. PARAMETRIC CORE INTEGRATION SUCCESSFUL.
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
          {/* Fractal lab */}
          <div
            style={{
              border: '1px solid #6b5a2a',
              borderRadius: 4,
              padding: '16px 18px',
              background: '#1a1508',
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
                MODULE: FRACTAL
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
              FRACTAL LAB
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
              GENERATIVE SPACE ALLOCATION ALGORITHMS FOR LABORATORY
              INFRASTRUCTURE.
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
                VERSION: 0.6.1
              </span>
              <span
                style={{
                  fontSize: 10,
                  color: '#8a7a4a',
                  letterSpacing: '0.06em',
                  cursor: 'pointer',
                }}
              >
                DETAILS_LOG →→
              </span>
            </div>
          </div>

          {/* Stats */}
          <div
            style={{
              border: `1px solid ${COLORS.border}`,
              borderRadius: 4,
              padding: '16px 18px',
              background: COLORS.bg,
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
              QUERY_METRICS.LOG
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
                    color: COLORS.white,
                    letterSpacing: '0.04em',
                  }}
                >
                  1,204
                </div>
                <div
                  style={{
                    fontSize: 10,
                    color: COLORS.textMuted,
                    letterSpacing: '0.06em',
                  }}
                >
                  GEOMETRIC_NODES
                </div>
              </div>
              <div style={{ flex: 1, paddingLeft: 20 }}>
                <div
                  style={{
                    fontSize: 28,
                    fontWeight: 600,
                    color: COLORS.white,
                    letterSpacing: '0.04em',
                  }}
                >
                  98.2%
                </div>
                <div
                  style={{
                    fontSize: 10,
                    color: COLORS.textMuted,
                    letterSpacing: '0.06em',
                  }}
                >
                  STRUCTURAL_SYMMETRY
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
              ALL PROJECTS ARE VALIDATED THROUGH A RIGID 4PX GRID FRAMEWORK TO
              ENSURE PIXEL-PERFECTION IN PHYSICAL AND DIGITAL REALMS.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
