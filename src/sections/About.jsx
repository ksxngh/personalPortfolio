export default function About() {
  return (
    <section id="about" style={{
      padding: 'clamp(5rem, 10vw, 8rem) 2rem',
      maxWidth: '1100px',
      margin: '0 auto',
    }}>
      <div className="reveal" style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '3rem' }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--accent)', letterSpacing: '0.15em' }}>01.</span>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem, 4vw, 2.5rem)', fontWeight: 800, letterSpacing: '-0.02em' }}>
          About
        </h2>
        <div style={{ flex: 1, height: '1px', background: 'var(--border)', marginLeft: '1rem' }} />
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '4rem',
        alignItems: 'start',
      }}>
        {/* Text */}
        <div className="reveal" style={{ transitionDelay: '0.1s' }}>
          <p style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.05rem',
            lineHeight: 1.8,
            color: 'var(--text-muted)',
            marginBottom: '1.25rem',
          }}>
            I'm a <span style={{ color: 'var(--text)', fontWeight: 600 }}>Computing Science student at SFU</span> (graduating 2028) who spends way too much time outside of class shipping projects, breaking things, and figuring out why.
          </p>
          <p style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.05rem',
            lineHeight: 1.8,
            color: 'var(--text-muted)',
            marginBottom: '1.25rem',
          }}>
            I work across the full stack — React on the front, Python/Flask/FastAPI on the back, and lately a lot of AI integration work with LLMs and ML models.
          </p>
          <p style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.05rem',
            lineHeight: 1.8,
            color: 'var(--text-muted)',
            marginBottom: '2rem',
          }}>
            Outside of code, I mentored a FIRST Lego League robotics team that placed <span style={{ color: 'var(--accent2)', fontWeight: 600 }}>2nd at regionals</span> — taught me more about breaking down complex systems clearly than any course did.
          </p>
          <a
            href="mailto:ks2328679@gmail.com"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '12px',
              color: 'var(--accent)',
              textDecoration: 'none',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              borderBottom: '1px solid rgba(99, 179, 237, 0.3)',
              paddingBottom: '2px',
              transition: 'border-color 0.2s ease',
            }}
            onMouseEnter={e => e.target.style.borderColor = 'var(--accent)'}
            onMouseLeave={e => e.target.style.borderColor = 'rgba(99, 179, 237, 0.3)'}
          >
            Get in touch →
          </a>
        </div>

        {/* Stats + Stack */}
        <div className="reveal" style={{ transitionDelay: '0.2s' }}>
          {/* Stats */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '1px',
            background: 'var(--border)',
            border: '1px solid var(--border)',
            marginBottom: '2rem',
          }}>
            {[
              { val: '7+', label: 'Projects Shipped' },
              { val: '3+', label: 'AI/ML Projects' },
              { val: '2nd', label: 'FLL Regional Place' },
              { val: '2028', label: 'SFU Graduation' },
            ].map(s => (
              <div key={s.label} style={{
                padding: '1.5rem',
                background: 'var(--surface)',
                textAlign: 'center',
              }}>
                <div style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '2rem',
                  fontWeight: 700,
                  color: 'var(--accent)',
                  lineHeight: 1,
                  marginBottom: '0.4rem',
                }}>{s.val}</div>
                <div style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '11px',
                  color: 'var(--text-dim)',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                }}>{s.label}</div>
              </div>
            ))}
          </div>

          {/* Stack */}
          <div style={{
            padding: '1.5rem',
            background: 'var(--surface)',
            border: '1px solid var(--border)',
          }}>
            <div style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '10px',
              color: 'var(--text-dim)',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              marginBottom: '1rem',
            }}>// stack</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {['Python', 'React', 'Flask', 'FastAPI', 'SQLite', 'scikit-learn', 'Groq API', 'Pandas', 'Streamlit', 'Git', 'JavaScript', 'Java'].map(t => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
