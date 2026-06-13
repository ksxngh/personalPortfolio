import SectionHead from '../components/SectionHead'

const WORK = [
  {
    role: 'Freelance Web Developer',
    org: 'Self-Employed',
    period: 'Sep 2025 — Present',
    bullets: [
      'Designed and delivered responsive static websites for local trade businesses, improving online presence through clear service pages, galleries, and contact flows.',
      'Worked directly with business owners to gather requirements, organize content, revise layouts, and prepare sites for launch.',
      'Built mobile-friendly service pages, calls-to-action, and visual layouts in HTML and CSS.',
    ],
    tags: ['HTML', 'CSS', 'Client Work', 'Responsive'],
  },
  {
    role: 'Robotics Mentor',
    org: 'FIRST',
    period: 'Sep 2022 — Apr 2023',
    bullets: [
      'Mentored a team of 6 students in robotics programming and mechanical design using LEGO Mindstorms, strengthening their ability to design autonomous robots and write structured control logic.',
      'Led the team to 2nd place in the regional FIRST LEGO League finals through improved robot performance and competition strategy.',
    ],
    tags: ['Leadership', 'Robotics', 'Mentorship'],
  },
]

const EDUCATION = {
  school: 'Simon Fraser University',
  degree: 'B.Sc. — Computing Science',
  period: 'Expected June 2028',
  location: 'Burnaby, BC',
  courses: ['Data Structures & Algorithms', 'Software Engineering', 'Artificial Intelligence', 'Database Systems'],
}

export default function Experience() {
  return (
    <section id="experience" className="shell" style={{ padding: 'var(--s-120) 0' }}>
      <SectionHead index="04" kicker="Experience & Education" title="Where I've been." />

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: 'var(--s-60)',
        alignItems: 'start',
      }}>
        {/* Work timeline */}
        <div>
          <div className="section-kicker reveal" style={{ display: 'block', marginBottom: 'var(--s-30)' }}>Work</div>
          <div style={{ borderLeft: '1px solid var(--hairline)', paddingLeft: 'var(--s-30)', display: 'flex', flexDirection: 'column', gap: 'var(--s-36)' }}>
            {WORK.map((w, i) => (
              <div key={i} className="reveal" style={{ position: 'relative', transitionDelay: `${i * 0.1}s` }}>
                <span style={{
                  position: 'absolute', left: 'calc(-1 * var(--s-30) - 4.5px)', top: '6px',
                  width: '9px', height: '9px', borderRadius: '50%',
                  background: 'var(--color-plum)', border: '2px solid var(--color-void)',
                }} />
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '6px', marginBottom: '2px' }}>
                  <h3 style={{ fontWeight: 'var(--w-semi)', fontSize: '18px', color: 'var(--color-bone)' }}>{w.role}</h3>
                  <span style={{ fontSize: '12px', letterSpacing: '0.05em', color: 'var(--color-smoke)' }}>{w.period}</span>
                </div>
                <div style={{ fontSize: '13px', letterSpacing: '0.05em', color: 'var(--color-plum)', marginBottom: 'var(--s-18)' }}>{w.org}</div>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: 'var(--s-18)' }}>
                  {w.bullets.map((b, j) => (
                    <li key={j} style={{ display: 'flex', gap: '10px' }}>
                      <span style={{ color: 'var(--color-plum)', flexShrink: 0 }}>—</span>
                      <span className="body-copy" style={{ fontSize: '14px' }}>{b}</span>
                    </li>
                  ))}
                </ul>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {w.tags.map(t => <span key={t} className="pill" style={{ fontSize: '11px', padding: '5px 11px' }}>{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <div className="section-kicker reveal" style={{ display: 'block', marginBottom: 'var(--s-30)' }}>Education</div>
          <div className="card reveal" style={{ padding: 'var(--s-30)', transitionDelay: '0.1s' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '6px', marginBottom: '2px' }}>
              <h3 style={{ fontWeight: 'var(--w-semi)', fontSize: '20px', color: 'var(--color-bone)' }}>{EDUCATION.school}</h3>
              <span style={{ fontSize: '12px', letterSpacing: '0.05em', color: 'var(--color-smoke)' }}>{EDUCATION.period}</span>
            </div>
            <div style={{ fontSize: '13px', letterSpacing: '0.05em', color: 'var(--color-plum)', marginBottom: 'var(--s-6)' }}>{EDUCATION.degree}</div>
            <div style={{ fontSize: '13px', letterSpacing: '0.025em', color: 'var(--color-smoke)', marginBottom: 'var(--s-24)' }}>{EDUCATION.location}</div>

            <div className="section-kicker" style={{ display: 'block', marginBottom: 'var(--s-18)' }}>Relevant Coursework</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {EDUCATION.courses.map(c => (
                <div key={c} style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <span style={{ color: 'var(--color-plum)' }}>—</span>
                  <span className="body-copy" style={{ fontSize: '14px' }}>{c}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Looking-for box */}
          <div className="card reveal" style={{ padding: 'var(--s-24)', marginTop: 'var(--s-24)', borderStyle: 'dashed', transitionDelay: '0.2s' }}>
            <div className="section-kicker" style={{ display: 'block', marginBottom: 'var(--s-12)' }}>Next</div>
            <p className="body-copy" style={{ fontSize: '14px', marginBottom: 'var(--s-18)' }}>
              Actively seeking SWE internships and co-op roles for 2026.
            </p>
            <a href="mailto:ks2328679@gmail.com" className="btn-plum">Let's talk →</a>
          </div>
        </div>
      </div>
    </section>
  )
}
