import SectionHead from '../components/SectionHead'

const STACK = ['Python', 'TypeScript', 'Java', 'C++', 'React', 'Next.js', 'FastAPI', 'MongoDB', 'scikit-learn', 'pandas', 'NumPy', 'Git']

const STATS = [
  { val: '5+', label: 'Projects shipped' },
  { val: '97.7%', label: 'Best model accuracy' },
  { val: '2nd', label: 'FLL regional finish' },
  { val: '2028', label: 'SFU graduation' },
]

export default function About() {
  return (
    <section id="about" className="shell" style={{ padding: 'var(--s-120) 0' }}>
      <SectionHead index="01" kicker="About" title="Who's behind the screen." />

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: 'var(--s-60)',
        alignItems: 'start',
      }}>
        {/* Narrative */}
        <div className="reveal" style={{ transitionDelay: '0.1s' }}>
          <p className="body-copy" style={{ marginBottom: 'var(--s-18)' }}>
            I'm a <span style={{ color: 'var(--color-bone)' }}>Computing Science student at Simon Fraser University</span> (graduating June 2028) who spends most of my time outside class shipping projects across the full stack.
          </p>
          <p className="body-copy" style={{ marginBottom: 'var(--s-18)' }}>
            Lately that means a lot of <span style={{ color: 'var(--color-bone)' }}>AI and ML work</span> — training models, wiring up LLMs, and building the interfaces around them. React and Next.js on the front, Python / FastAPI on the back.
          </p>
          <p className="body-copy" style={{ marginBottom: 'var(--s-30)' }}>
            I also freelance, building responsive sites for local trade businesses, and once mentored a FIRST LEGO League team to a <span style={{ color: 'var(--color-amber)' }}>2nd place regional finish</span>.
          </p>
          <a href="mailto:ks2328679@gmail.com" className="btn-ghost">Get in touch →</a>
        </div>

        {/* Stats + stack */}
        <div className="reveal" style={{ transitionDelay: '0.2s' }}>
          {/* Stat grid — hairline cells, no fill */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            border: '1px solid var(--hairline)',
            borderRadius: 'var(--radius)',
            overflow: 'hidden',
            marginBottom: 'var(--s-24)',
          }}>
            {STATS.map((s, i) => (
              <div key={s.label} style={{
                padding: 'var(--s-24)',
                borderRight: i % 2 === 0 ? '1px solid var(--hairline)' : 'none',
                borderTop: i > 1 ? '1px solid var(--hairline)' : 'none',
              }}>
                <div className="display" style={{ fontSize: '2.6rem', lineHeight: 1, marginBottom: '8px' }}>{s.val}</div>
                <div style={{ fontSize: '12px', letterSpacing: '0.05em', textTransform: 'uppercase', color: 'var(--color-smoke)' }}>{s.label}</div>
              </div>
            ))}
          </div>

          {/* Stack */}
          <div className="section-kicker" style={{ marginBottom: 'var(--s-18)', display: 'block' }}>Stack</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {STACK.map(t => <span key={t} className="pill">{t}</span>)}
          </div>
        </div>
      </div>
    </section>
  )
}
