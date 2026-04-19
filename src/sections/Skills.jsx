import { useEffect, useRef } from 'react'

const SKILLS = [
  { name: 'Python', level: 90, cat: 'Backend' },
  { name: 'React', level: 82, cat: 'Frontend' },
  { name: 'Flask / FastAPI', level: 80, cat: 'Backend' },
  { name: 'SQL / SQLite', level: 78, cat: 'Database' },
  { name: 'scikit-learn / ML', level: 72, cat: 'AI/ML' },
  { name: 'LLM Integration', level: 75, cat: 'AI/ML' },
  { name: 'REST APIs', level: 85, cat: 'Backend' },
  { name: 'Git & GitHub', level: 88, cat: 'Tools' },
  { name: 'Pandas / Streamlit', level: 70, cat: 'Data' },
  { name: 'Java / C++', level: 85, cat: 'Languages' },
]

const CATEGORIES = [
  { label: 'Frontend', color: '#63b3ed', items: ['React', 'JavaScript', 'HTML/CSS', 'Tailwind', 'Streamlit'] },
  { label: 'Backend', color: '#f6ad55', items: ['Python', 'Flask', 'FastAPI', 'REST APIs', 'Node.js'] },
  { label: 'AI / ML', color: '#4fd1c5', items: ['scikit-learn', 'Pandas', 'Groq API', 'LLM Integration', 'Prompt Engineering'] },
  { label: 'Data & DB', color: '#9f7aea', items: ['SQLite', 'SQL', 'Plotly', 'Data Analysis', 'Schema Design'] },
  { label: 'Tools', color: '#68d391', items: ['Git', 'GitHub', 'Vite', 'Railway', 'Vercel'] },
  { label: 'Languages', color: '#fc8181', items: ['Python', 'JavaScript', 'Java', 'C++', 'SQL'] },
]

export default function Skills() {
  const barsRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.querySelectorAll('.skill-bar-fill').forEach(bar => {
              bar.classList.add('animate')
            })
          }
        })
      },
      { threshold: 0.3 }
    )
    if (barsRef.current) observer.observe(barsRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" style={{
      padding: 'clamp(5rem, 10vw, 8rem) 2rem',
      maxWidth: '1100px',
      margin: '0 auto',
    }}>
      <div className="reveal" style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '3rem' }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--accent)', letterSpacing: '0.15em' }}>03.</span>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem, 4vw, 2.5rem)', fontWeight: 800, letterSpacing: '-0.02em' }}>
          Skills
        </h2>
        <div style={{ flex: 1, height: '1px', background: 'var(--border)', marginLeft: '1rem' }} />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
        {/* Bars */}
        <div ref={barsRef} className="reveal">
          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '10px',
            color: 'var(--text-dim)',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            marginBottom: '1.5rem',
          }}>// proficiency</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {SKILLS.map((s, i) => (
              <div key={s.name}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: '13px', color: 'var(--text)', fontWeight: 500 }}>{s.name}</span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-dim)' }}>{s.level}%</span>
                </div>
                <div className="skill-bar">
                  <div
                    className="skill-bar-fill"
                    style={{ transitionDelay: `${i * 0.07}s`, width: `${s.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Category cards */}
        <div className="reveal" style={{ transitionDelay: '0.15s' }}>
          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '10px',
            color: 'var(--text-dim)',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            marginBottom: '1.5rem',
          }}>// categories</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {CATEGORIES.map(cat => (
              <div key={cat.label} style={{
                padding: '1rem 1.25rem',
                border: '1px solid var(--border)',
                background: 'var(--surface)',
                transition: 'border-color 0.2s ease',
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor = `${cat.color}50`}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.5rem' }}>
                  <div style={{ width: '6px', height: '6px', background: cat.color, borderRadius: '50%', boxShadow: `0 0 6px ${cat.color}` }} />
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: cat.color, letterSpacing: '0.1em', textTransform: 'uppercase' }}>{cat.label}</span>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {cat.items.map(item => (
                    <span key={item} style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '12px',
                      color: 'var(--text-muted)',
                    }}>{item}{cat.items.indexOf(item) < cat.items.length - 1 ? ' ·' : ''}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
