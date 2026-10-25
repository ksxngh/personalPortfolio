import SectionHead from '../components/SectionHead'

const WORK = [
  {
    role: 'Founder & Software Developer',
    org: 'CallCatch',
    orgNote: 'Self-founded SaaS',
    period: 'May 2026 — Present',
    location: 'Surrey, BC',
    badge: 'Live in production',
    bullets: [
      'Built and launched a missed-call recovery platform for trades and dental offices that texts every missed caller back in under 5 seconds, capturing leads that would otherwise hit voicemail and call a competitor.',
      'Engineered an LLM triage pipeline that collects caller name, address, and issue over SMS and auto-escalates emergencies (flooding, burst pipes) ahead of routine requests so urgent jobs reach the owner first.',
      'Running in production on live calls for a local trades business and backed by 40 automated tests. I own architecture, testing, pricing, and outreach end to end.',
    ],
    tags: ['Next.js', 'Supabase', 'Twilio', 'Groq LLM'],
  },
  {
    role: 'Operations & Technical Lead',
    org: 'The J Healthcare Initiative',
    orgNote: 'Riipen Labs',
    period: 'Aug 2026',
    location: 'Remote',
    bullets: [
      'Led operations and technical scope on a 5-person team in a paid client engagement, auditing a harm-reduction nonprofit’s branding and messaging across its website, Instagram, and LinkedIn.',
      'Prototyped a redesigned homepage in HTML/CSS with a unified color system, clearer navigation, and a “find your path” section routing new volunteers, interns, and partners to the right next step.',
      'Wrote the implementation plan and impact analysis for the final client deck, merging two competing recommendations into one sequenced rollout a team with no marketing staff could maintain.',
    ],
    tags: ['Team Lead', 'HTML', 'CSS', 'Client Work'],
  },
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
  location: 'Burnaby, BC',
  courses: ['Data Structures & Algorithms', 'Software Engineering', 'Artificial Intelligence', 'Database Systems'],
}

const TERMS = ['Spring 2027', 'Summer 2027', 'Fall 2027']

export default function Experience() {
  return (
    <section id="experience" className="shell section">
      <SectionHead index="04" kicker="Experience & Education" title="Where I've been." />

      {/* Work — editorial rows: when/where left, what right */}
      <div className="kicker reveal" style={{ display: 'block', marginBottom: 'var(--s-16)' }}>Work</div>
      <div style={{ borderTop: '1px solid var(--color-soft-mist)' }}>
        {WORK.map((w, i) => (
          <div key={w.role} className="reveal xp-row" style={{
            display: 'grid',
            gridTemplateColumns: '220px 1fr',
            gap: 'var(--s-32)',
            padding: 'var(--s-32) 0',
            borderBottom: '1px solid var(--color-soft-mist)',
            transitionDelay: `${i * 0.06}s`,
          }}>
            <div>
              <div className="kicker" style={{ fontSize: '11px', marginBottom: '6px' }}>{w.period}</div>
              {w.location && <div style={{ fontSize: '14px', color: 'var(--color-stone-gray)' }}>{w.location}</div>}
            </div>

            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap', marginBottom: '4px' }}>
                <h3 style={{ fontWeight: 'var(--w-emph)', fontSize: '20px', letterSpacing: '-0.01em', color: 'var(--color-ink-charcoal)' }}>{w.role}</h3>
                {w.badge && <span className="badge-lilac">{w.badge}</span>}
              </div>
              <div style={{ fontSize: '15px', fontWeight: 'var(--w-med)', color: 'var(--color-stone-gray)', marginBottom: 'var(--s-16)' }}>
                {w.org}{w.orgNote && <span> · {w.orgNote}</span>}
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: 'var(--s-16)' }}>
                {w.bullets.map((b, j) => (
                  <li key={j} style={{ display: 'flex', gap: '10px' }}>
                    <span style={{ color: 'var(--color-graphite)', flexShrink: 0 }}>—</span>
                    <span className="body-copy muted" style={{ fontSize: '14px', maxWidth: '72ch' }}>{b}</span>
                  </li>
                ))}
              </ul>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {w.tags.map(t => <span key={t} className="pill" style={{ fontSize: '12px', padding: '4px 10px' }}>{t}</span>)}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Education + availability */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))',
        gap: 'var(--s-20)',
        marginTop: 'var(--s-64)',
        alignItems: 'stretch',
      }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div className="kicker reveal" style={{ display: 'block', marginBottom: 'var(--s-16)' }}>Education</div>
          <div className="card reveal" style={{ padding: 'var(--s-24)', flex: 1 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '6px', marginBottom: '2px' }}>
              <h3 style={{ fontWeight: 'var(--w-emph)', fontSize: '20px', color: 'var(--color-ink-charcoal)' }}>{EDUCATION.school}</h3>
              <span className="kicker" style={{ fontSize: '11px' }}>{EDUCATION.location}</span>
            </div>
            <div style={{ fontSize: '14px', fontWeight: 'var(--w-med)', color: 'var(--color-stone-gray)', marginBottom: 'var(--s-24)' }}>{EDUCATION.degree}</div>

            <div className="kicker" style={{ display: 'block', marginBottom: 'var(--s-16)' }}>Relevant Coursework</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {EDUCATION.courses.map(c => (
                <div key={c} style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <span style={{ color: 'var(--color-graphite)' }}>—</span>
                  <span className="body-copy" style={{ fontSize: '14px' }}>{c}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div className="kicker reveal" style={{ display: 'block', marginBottom: 'var(--s-16)' }}>Next</div>
          <div className="card reveal" style={{ padding: 'var(--s-24)', borderStyle: 'dashed', flex: 1, transitionDelay: '0.1s' }}>
            <h3 style={{ fontWeight: 'var(--w-emph)', fontSize: '20px', color: 'var(--color-ink-charcoal)', marginBottom: 'var(--s-12)' }}>
              Co-op &amp; internships, 2027
            </h3>
            <p className="body-copy muted" style={{ fontSize: '14px', marginBottom: 'var(--s-16)' }}>
              Available for SWE co-op and internship terms starting January 2027.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: 'var(--s-24)' }}>
              {TERMS.map(t => <span key={t} className="pill">{t}</span>)}
            </div>
            <a href="mailto:ks2328679@gmail.com" className="btn-primary">Let's talk →</a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 760px) {
          .xp-row { grid-template-columns: 1fr !important; gap: var(--s-12) !important; }
        }
      `}</style>
    </section>
  )
}
