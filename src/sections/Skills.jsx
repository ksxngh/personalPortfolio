import SectionHead from '../components/SectionHead'

const CATEGORIES = [
  { label: 'Languages', items: ['Python', 'Java', 'C++', 'TypeScript', 'JavaScript', 'SQL', 'HTML/CSS'] },
  { label: 'Frameworks & Libraries', items: ['React', 'Next.js', 'FastAPI', 'Node.js', 'Streamlit', 'scikit-learn', 'pandas', 'NumPy'] },
  { label: 'AI / ML', items: ['LLM integration', 'Prompt engineering', 'Regression modeling', 'Feature engineering', 'Model evaluation'] },
  { label: 'APIs & Integrations', items: ['REST APIs', 'Twilio', 'Groq', 'OpenRouter', 'Gemini', 'Finnhub', 'Inngest'] },
  { label: 'Databases', items: ['PostgreSQL', 'Supabase', 'MongoDB', 'Redis'] },
  { label: 'Developer Tools', items: ['Git', 'GitHub', 'Vercel', 'JUnit', 'JaCoCo'] },
]

export default function Skills() {
  return (
    <section id="skills" className="shell section">
      <SectionHead index="03" kicker="Capabilities" title="The toolkit." />

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(min(320px, 100%), 1fr))',
        gap: 'var(--s-20)',
      }}>
        {CATEGORIES.map((cat, i) => (
          <div
            key={cat.label}
            className="card reveal"
            style={{ padding: 'var(--s-24)', transitionDelay: `${i * 0.06}s` }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: 'var(--s-20)' }}>
              <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: 'var(--color-graphite)' }} />
              <span className="kicker">{cat.label}</span>
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
