export default function Resume() {
  return (
    <section id="resume" style={{
      padding: 'clamp(5rem, 10vw, 8rem) 2rem',
      maxWidth: '1100px',
      margin: '0 auto',
    }}>
      <div className="reveal" style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '3rem' }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--accent)', letterSpacing: '0.15em' }}>05.</span>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem, 4vw, 2.5rem)', fontWeight: 800, letterSpacing: '-0.02em' }}>
          Resume
        </h2>
        <div style={{ flex: 1, height: '1px', background: 'var(--border)', marginLeft: '1rem' }} />
      </div>

      <div className="reveal" style={{ transitionDelay: '0.1s' }}>
        {/* Action bar */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          marginBottom: '1.5rem',
        }}>
          <p style={{
            fontFamily: 'var(--font-display)',
            fontSize: '0.95rem',
            color: 'var(--text-muted)',
          }}>
            Last updated April 2026 · Available for Summer / Fall 2026
          </p>
          <a
            href="/resume.pdf"
            download="Karanveer_Singh_Resume.pdf"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '10px 22px',
              background: 'var(--accent)',
              color: 'var(--bg)',
              fontFamily: 'var(--font-mono)',
              fontSize: '12px',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              fontWeight: 700,
              textDecoration: 'none',
              transition: 'background 0.2s ease',
            }}
            onMouseEnter={e => e.currentTarget.style.background = '#90cdf4'}
            onMouseLeave={e => e.currentTarget.style.background = 'var(--accent)'}
          >
            ↓ Download PDF
          </a>
        </div>

        {/* PDF viewer */}
        <div style={{
          border: '1px solid var(--border)',
          background: 'var(--surface)',
          overflow: 'hidden',
          position: 'relative',
        }}>
          <iframe
            src="/ResumeKaranveer.pdf"
            title="Karanveer Singh Resume"
            style={{
              width: '100%',
              height: 'clamp(500px, 80vh, 900px)',
              border: 'none',
              display: 'block',
            }}
          />
          {/* Fallback message inside the border if iframe doesn't load */}
          <noscript>
            <div style={{
              padding: '3rem',
              textAlign: 'center',
              fontFamily: 'var(--font-mono)',
              fontSize: '13px',
              color: 'var(--text-muted)',
            }}>
              PDF preview not available.{' '}
              <a href="/ResumeKaranveer.pdf" style={{ color: 'var(--accent)' }}>Download directly →</a>
            </div>
          </noscript>
        </div>

        {/* Fallback link below */}
        <p style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '11px',
          color: 'var(--text-dim)',
          marginTop: '0.75rem',
          textAlign: 'center',
          letterSpacing: '0.06em',
        }}>
          Can't see the preview?{' '}
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" style={{
            color: 'var(--accent)',
            textDecoration: 'none',
            borderBottom: '1px solid rgba(99, 179, 237, 0.3)',
          }}>
            Open in new tab →
          </a>
        </p>
      </div>
    </section>
  )
}
