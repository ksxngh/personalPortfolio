import SectionHead from '../components/SectionHead'

const STACK = ['Python', 'TypeScript', 'Java', 'C++', 'React', 'Next.js', 'FastAPI', 'Supabase', 'PostgreSQL', 'MongoDB', 'scikit-learn', 'Twilio']

const STATS = [
  { val: '6+', label: 'Projects shipped' },
  { val: '97.7%', label: 'Best model accuracy' },
  { val: '40', label: 'Tests behind CallCatch' },
  { val: '2nd', label: 'FLL regional finish' },
]

export default function About() {
  return (
    <section id="about" className="shell section">
      <SectionHead index="01" kicker="About" title="Who's behind the screen." />

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))',
        gap: 'var(--s-48)',
        alignItems: 'start',
      }}>
        {/* Narrative */}
        <div className="reveal" style={{ transitionDelay: '0.1s' }}>
          <p className="body-copy" style={{ marginBottom: 'var(--s-16)' }}>
            I'm a <span style={{ fontWeight: 'var(--w-emph)' }}>Computing Science student at Simon Fraser University</span> who spends most of my time outside class shipping projects across the full stack.
          </p>
          <p className="body-copy" style={{ marginBottom: 'var(--s-16)' }}>
            Lately that means a lot of <span style={{ fontWeight: 'var(--w-emph)' }}>AI and ML work</span> — training models, wiring up LLMs, and building the interfaces around them. React and Next.js on the front, Python and FastAPI on the back.
          </p>
          <p className="body-copy" style={{ marginBottom: 'var(--s-28)' }}>
            I also founded <span style={{ fontWeight: 'var(--w-emph)' }}>CallCatch</span>, a missed-call recovery SaaS that's running in production for a local trades business, and I freelance building sites for local trade shops.
          </p>
          <a href="mailto:ks2328679@gmail.com" className="btn-primary">Get in touch →</a>
        </div>

        {/* Stats + stack */}
        <div className="reveal" style={{ transitionDelay: '0.2s' }}>
          <div className="card" style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            overflow: 'hidden',
            marginBottom: 'var(--s-24)',
          }}>
            {STATS.map((s, i) => (
              <div key={s.label} style={{
                padding: 'var(--s-24)',
                borderRight: i % 2 === 0 ? '1px solid var(--color-soft-mist)' : 'none',
                borderTop: i > 1 ? '1px solid var(--color-soft-mist)' : 'none',
              }}>
                <div className="display" style={{ fontSize: '2.6rem', lineHeight: 1, marginBottom: '6px' }}>{s.val}</div>
                <div className="kicker" style={{ fontSize: '11px' }}>{s.label}</div>
              </div>
            ))}
          </div>

          <div className="kicker" style={{ marginBottom: 'var(--s-16)', display: 'block' }}>Stack</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {STACK.map(t => <span key={t} className="pill">{t}</span>)}
          </div>
        </div>
      </div>
    </section>
  )
}
