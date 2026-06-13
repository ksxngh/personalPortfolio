import SectionHead from '../components/SectionHead'

const CATEGORIES = [
  { label: 'Languages', items: ['Java', 'TypeScript', 'JavaScript', 'Python', 'SQL', 'C++'] },
  { label: 'Web / Backend', items: ['React', 'Next.js', 'REST APIs', 'MongoDB', 'HTML', 'CSS'] },
  { label: 'AI / ML', items: ['scikit-learn', 'pandas', 'NumPy', 'LLM Integration'] },
  { label: 'Testing / Tools', items: ['JUnit', 'JaCoCo', 'Git', 'GitHub'] },
]

export default function Skills() {
  return (
    <section id="skills" className="shell" style={{ padding: 'var(--s-120) 0' }}>
      <SectionHead index="03" kicker="Capabilities" title="The toolkit." />

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: 'var(--s-24)',
      }}>
        {CATEGORIES.map((cat, i) => (
          <div
            key={cat.label}
            className="card reveal"
            style={{ padding: 'var(--s-30)', transitionDelay: `${i * 0.08}s` }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: 'var(--s-24)' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-plum)' }} />
              <span className="section-kicker">{cat.label}</span>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {cat.items.map(item => <span key={item} className="pill">{item}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
