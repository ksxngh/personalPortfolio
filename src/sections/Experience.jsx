const EXPERIENCES = [
  {
    role: 'Robotics Mentor',
    org: 'FIRST',
    period: 'Sep 2022 — Apr 2023',
    location: 'Surrey, BC',
    bullets: [
      'Mentored a team of 8 students through the full FIRST LEGO League competition cycle — programming, mechanical design, and research presentation.',
      'Led weekly technical sessions on sensor logic and autonomous navigation, improving the team\'s programming consistency under competition conditions.',
      'Guided the team to a 2nd place finish at the regional competition held at LA Matheson Secondary — the team\'s best result at that event.',
    ],
    tags: ['Leadership', 'Robotics', 'Programming', 'Mentorship'],
    color: '#f6ad55',
  },
]

const EDUCATION = [
  {
    degree: 'Bachelor of Science — Computer Science',
    school: 'Simon Fraser University',
    period: 'Sep 2024 — Jun 2028',
    location: 'Burnaby, BC',
    courses: ['CMPT 225 — Data Structures', 'CMPT 354 — Database Systems', 'CMPT 276 — Software Engineering'],
    color: '#63b3ed',
  },
]

export default function Experience() {
  return (
    <section id="experience" style={{
      padding: 'clamp(5rem, 10vw, 8rem) 2rem',
      background: 'var(--bg2)',
      position: 'relative',
    }}>
      <div className="grid-bg" style={{ position: 'absolute', inset: 0, opacity: 0.3 }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div className="reveal" style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '3rem' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--accent)', letterSpacing: '0.15em' }}>04.</span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem, 4vw, 2.5rem)', fontWeight: 800, letterSpacing: '-0.02em' }}>
            Experience
          </h2>
          <div style={{ flex: 1, height: '1px', background: 'var(--border)', marginLeft: '1rem' }} />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
          {/* Work */}
          <div>
            <div style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '10px',
              color: 'var(--text-dim)',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              marginBottom: '1.5rem',
            }}>// work</div>

            {EXPERIENCES.map((exp, i) => (
              <div key={i} className="reveal" style={{
                padding: '1.75rem',
                border: '1px solid var(--border)',
                background: 'var(--surface)',
                position: 'relative',
                transition: 'border-color 0.3s ease',
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor = `${exp.color}40`}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
              >
                {/* Left accent */}
                <div style={{
                  position: 'absolute',
                  left: 0,
                  top: '1.75rem',
                  bottom: '1.75rem',
                  width: '2px',
                  background: exp.color,
                  boxShadow: `0 0 8px ${exp.color}60`,
                }} />

                <div style={{ paddingLeft: '0.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.25rem' }}>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 700, color: 'var(--text)' }}>
                      {exp.role}
                    </h3>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--text-dim)', letterSpacing: '0.08em' }}>
                      {exp.period}
                    </span>
                  </div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: exp.color, marginBottom: '1rem', letterSpacing: '0.06em' }}>
                    {exp.org} · {exp.location}
                  </div>

                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.25rem' }}>
                    {exp.bullets.map((b, j) => (
                      <li key={j} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                        <span style={{ color: exp.color, flexShrink: 0, marginTop: '4px', fontSize: '10px' }}>▸</span>
                        <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.65 }}>
                          {b}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {exp.tags.map(t => <span key={t} className="tag" style={{ fontSize: '10px' }}>{t}</span>)}
                  </div>
                </div>
              </div>
            ))}

            {/* Looking for experience box */}
            <div className="reveal" style={{
              padding: '1.5rem',
              border: '1px dashed rgba(99, 179, 237, 0.2)',
              background: 'rgba(99, 179, 237, 0.03)',
              marginTop: '1.25rem',
              transitionDelay: '0.1s',
            }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-dim)', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
                // next
              </div>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                Actively seeking SWE internships & co-op roles for Summer / Fall 2026.
              </p>
              <a href="mailto:ks2328679@gmail.com" style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                color: 'var(--accent)',
                textDecoration: 'none',
                letterSpacing: '0.08em',
                display: 'inline-block',
                marginTop: '0.75rem',
                borderBottom: '1px solid rgba(99, 179, 237, 0.3)',
                paddingBottom: '1px',
              }}>
                Let's talk →
              </a>
            </div>
          </div>

          {/* Education */}
          <div>
            <div style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '10px',
              color: 'var(--text-dim)',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              marginBottom: '1.5rem',
            }}>// education</div>

            {EDUCATION.map((edu, i) => (
              <div key={i} className="reveal" style={{
                padding: '1.75rem',
                border: '1px solid var(--border)',
                background: 'var(--surface)',
                position: 'relative',
              }}>
                <div style={{
                  position: 'absolute',
                  left: 0,
                  top: '1.75rem',
                  bottom: '1.75rem',
                  width: '2px',
                  background: edu.color,
                  boxShadow: `0 0 8px ${edu.color}60`,
                }} />

                <div style={{ paddingLeft: '0.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.25rem' }}>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: 700, color: 'var(--text)' }}>
                      {edu.school}
                    </h3>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--text-dim)', letterSpacing: '0.08em' }}>
                      {edu.period}
                    </span>
                  </div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: edu.color, marginBottom: '1.25rem', letterSpacing: '0.06em' }}>
                    {edu.degree}
                  </div>

                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--text-dim)', letterSpacing: '0.1em', marginBottom: '0.75rem', textTransform: 'uppercase' }}>
                    Relevant Coursework
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {edu.courses.map(c => (
                      <div key={c} style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                        <span style={{ color: edu.color, fontSize: '10px' }}>▸</span>
                        <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.88rem', color: 'var(--text-muted)' }}>{c}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
