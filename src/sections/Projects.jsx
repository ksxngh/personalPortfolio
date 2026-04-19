import { useState } from 'react'

const PROJECTS = [
  {
    id: '01',
    name: 'InterviewIQ',
    tagline: 'AI-Powered Interview Practice Platform',
    desc: 'Full-stack interview coach that gives real-time LLM feedback on your answers. Solved CORS issues, a macOS AirPlay port conflict, and migrated AI providers mid-build.',
    stack: ['React', 'Flask', 'Groq API', 'Python', 'REST APIs'],
    color: '#63b3ed',
    link: 'https://github.com/ksxngh',
    featured: true,
  },
  {
    id: '02',
    name: 'Haunted Hotel',
    tagline: '2D Java Game',
    desc: 'Developed gameplay systems for a 2D tile-based game including enemy AI, combat, and event-driven progression. ',
    stack: ['Java', 'JaCoCo', 'Maven', 'JUnit'],
    color: '#9f7aea',
    link: 'https://github.com/ksxngh',
    featured: true,
  },
  {
    id: '03',
    name: 'Myopia Predictor',
    tagline: 'ML Progression Prediction Model',
    desc: 'Regression model predicting myopia progression to age 25 from patient profile, family history, and screen habits. Interactive Streamlit frontend with Plotly charts.',
    stack: ['Python', 'scikit-learn', 'Pandas', 'Streamlit', 'Plotly'],
    color: '#68d391',
    link: 'https://github.com/ksxngh',
    featured: true,
  },
  {
    id: '04',
    name: 'AutoCurve Assistant',
    tagline: 'AI Car Condition Scoring Tool',
    desc: 'Consumes an image analysis REST API to evaluate vehicle condition and return structured scoring from visual input. Automates a manual inspection workflow.',
    stack: ['Python', 'REST APIs'],
    color: '#fc8181',
    link: 'https://github.com/ksxngh',
    featured: false,
  },
  {
    id: '05',
    name: 'Spam Detector',
    tagline: 'NLP Email Classification Pipeline',
    desc: 'Text preprocessing, TF-IDF feature extraction, and multi-model evaluation pipeline. Compared classifiers to optimize accuracy on real email datasets.',
    stack: ['Python', 'scikit-learn', 'Pandas', 'NLP'],
    color: '#f6ad55',
    link: 'https://github.com/ksxngh',
    featured: false,
  },
]

export default function Projects() {
  const [filter, setFilter] = useState('all')
  const filtered = filter === 'featured' ? PROJECTS.filter(p => p.featured) : PROJECTS

  return (
    <section id="projects" style={{
      padding: 'clamp(5rem, 10vw, 8rem) 2rem',
      background: 'var(--bg2)',
      position: 'relative',
    }}>
      <div className="grid-bg" style={{ position: 'absolute', inset: 0, opacity: 0.5 }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div className="reveal" style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1rem' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--accent)', letterSpacing: '0.15em' }}>02.</span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem, 4vw, 2.5rem)', fontWeight: 800, letterSpacing: '-0.02em' }}>
            Projects
          </h2>
          <div style={{ flex: 1, height: '1px', background: 'var(--border)', marginLeft: '1rem' }} />
        </div>

        {/* Filter */}
        <div className="reveal" style={{ display: 'flex', gap: '1rem', marginBottom: '3rem', transitionDelay: '0.1s' }}>
          {['all', 'featured'].map(f => (
            <button key={f} onClick={() => setFilter(f)} style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              padding: '6px 14px',
              border: '1px solid',
              borderColor: filter === f ? 'var(--accent)' : 'var(--border)',
              background: filter === f ? 'rgba(99, 179, 237, 0.1)' : 'transparent',
              color: filter === f ? 'var(--accent)' : 'var(--text-dim)',
              cursor: 'none',
              transition: 'all 0.2s ease',
            }}>
              {f}
            </button>
          ))}
        </div>

        <div
          key={filter}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {filtered.map((p, i) => (
            <div
              key={p.id}
              className="project-card"
              style={{
                padding: '2rem',
                opacity: 0,
                transform: 'translateY(20px)',
                animation: `fadeUp 0.5s ease ${i * 0.08}s forwards`,
              }}
            >
              {/* Top row */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-dim)', letterSpacing: '0.1em' }}>{p.id}</span>
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  {p.featured && (
                    <span style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '9px',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      padding: '2px 8px',
                      background: `${p.color}18`,
                      border: `1px solid ${p.color}40`,
                      color: p.color,
                    }}>Featured</span>
                  )}
                  <a href={p.link} target="_blank" rel="noopener noreferrer" style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '12px',
                    color: 'var(--text-dim)',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease',
                  }}
                  onMouseEnter={e => e.target.style.color = 'var(--accent)'}
                  onMouseLeave={e => e.target.style.color = 'var(--text-dim)'}
                  >↗</a>
                </div>
              </div>

              <div style={{ width: '32px', height: '2px', background: p.color, marginBottom: '1rem', boxShadow: `0 0 8px ${p.color}60` }} />

              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 700, color: 'var(--text)', marginBottom: '0.25rem', letterSpacing: '-0.01em' }}>{p.name}</h3>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: p.color, letterSpacing: '0.06em', marginBottom: '1rem' }}>{p.tagline}</p>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1.5rem' }}>{p.desc}</p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {p.stack.map(s => <span key={s} className="tag" style={{ fontSize: '10px' }}>{s}</span>)}
              </div>
            </div>
          ))}
        </div>

        <div className="reveal" style={{ textAlign: 'center', marginTop: '3rem', transitionDelay: '0.3s' }}>
          <a
            href="https://github.com/ksxngh"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '12px',
              color: 'var(--text-muted)',
              textDecoration: 'none',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              borderBottom: '1px solid var(--border)',
              paddingBottom: '2px',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={e => { e.target.style.color = 'var(--accent)'; e.target.style.borderColor = 'var(--accent)' }}
            onMouseLeave={e => { e.target.style.color = 'var(--text-muted)'; e.target.style.borderColor = 'var(--border)' }}
          >
            View all on GitHub →
          </a>
        </div>
      </div>
    </section>
  )
}
