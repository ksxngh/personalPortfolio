import { useState } from 'react'
import SectionHead from '../components/SectionHead'

const PROJECTS = [
  {
    id: '01',
    name: 'MarketPulse',
    tagline: 'AI Stock Market Dashboard',
    desc: 'Full-stack stock dashboard with authenticated accounts, live search, detail pages, and MongoDB-backed watchlists. Price-alert workflows run on Inngest background jobs, and Gemini generates personalized daily market briefings per watchlist.',
    stack: ['Next.js', 'TypeScript', 'React', 'MongoDB', 'Finnhub', 'Inngest', 'Gemini'],
    date: 'May 2026',
    link: 'https://github.com/ksxngh/MarketPulse',
    featured: true,
  },
  {
    id: '02',
    name: 'Spam Detection System',
    tagline: 'NLP Classification Pipeline',
    desc: 'Spam classifier built on Logistic Regression with Bag-of-Words and TF-IDF features. Hit 97.7% accuracy with zero false positives on a held-out set of 1,115 messages, evaluated with precision, recall, F1, and confusion-matrix analysis.',
    stack: ['Python', 'scikit-learn', 'pandas'],
    date: 'Jan — Apr 2026',
    link: 'https://github.com/lukasBulin/CMPT-310-Project',
    featured: true,
  },
  {
    id: '03',
    name: 'Myopia Progression Model',
    tagline: 'End-to-End ML Pipeline',
    desc: 'Predicts long-term myopia progression from lifestyle and patient data. Engineered domain-specific features to capture non-linear effects, reaching 0.40 MAE on held-out test data, surfaced through an interactive Streamlit app.',
    stack: ['Python', 'scikit-learn', 'Streamlit'],
    date: 'Dec 2025 — Mar 2026',
    link: 'https://github.com/Myopia-model/Myopia-progression-model',
    featured: true,
  },
  {
    id: '04',
    name: 'AutoCurve Assistant',
    tagline: 'AI Car Valuation App',
    desc: 'Estimates used-car prices using regression models trained on 52K+ listings, fusing image-based condition scoring with structured car data for adjusted estimates. Achieved R² = 0.84 on held-out test data.',
    stack: ['Python', 'FastAPI', 'JavaScript', 'scikit-learn', 'OpenRouter'],
    date: 'Jan 2026',
    link: 'https://github.com/AutoCurve/AutoCurve-Assistant',
    featured: false,
  },
  {
    id: '05',
    name: 'Haunted Hotel',
    tagline: '2D Java Game Engine',
    desc: 'Gameplay systems for a 2D tile-based game — enemy AI, combat, and event-driven progression. Implemented A* pathfinding and collision systems, with unit and integration tests in JUnit and coverage tracked via JaCoCo.',
    stack: ['Java', 'Maven', 'JUnit', 'JaCoCo'],
    date: 'Sep — Dec 2025',
    link: 'https://github.com/ksxngh/Haunted-Hotel',
    featured: false,
  },
]

export default function Projects() {
  const [filter, setFilter] = useState('all')
  const filtered = filter === 'featured' ? PROJECTS.filter(p => p.featured) : PROJECTS

  return (
    <section id="projects" className="shell" style={{ padding: 'var(--s-120) 0' }}>
      <SectionHead index="02" kicker="Selected Work" title="Things I've built." />

      {/* Filter toggle */}
      <div className="reveal seg" style={{ marginBottom: 'var(--s-60)', transitionDelay: '0.1s' }}>
        {['all', 'featured'].map(f => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`seg-btn${filter === f ? ' active' : ''}`}
          >
            {f}
          </button>
        ))}
      </div>

      <div key={filter} style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(330px, 1fr))',
        gap: 'var(--s-24)',
      }}>
        {filtered.map((p, i) => (
          <div
            key={p.id}
            className="card"
            style={{
              padding: 'var(--s-30)',
              display: 'flex',
              flexDirection: 'column',
              opacity: 0,
              animation: `fadeUp 0.6s cubic-bezier(0.22,1,0.36,1) ${i * 0.08}s forwards`,
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--s-24)' }}>
              <span style={{ fontSize: '12px', letterSpacing: '0.05em', color: 'var(--color-smoke)' }}>{p.id}</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                {p.featured && (
                  <span style={{ fontSize: '11px', letterSpacing: '0.05em', textTransform: 'uppercase', color: 'black' }}>Featured</span>
                )}
                <a href={p.link} target="_blank" rel="noopener noreferrer" className="nav-link" style={{ fontSize: '16px' }}>↗</a>
              </div>
            </div>

            <h3 style={{ fontWeight: 'var(--w-semi)', fontSize: '24px', letterSpacing: '0.021em', color: 'var(--color-bone)', marginBottom: '4px' }}>{p.name}</h3>
            <p style={{ fontSize: '12px', letterSpacing: '0.05em', textTransform: 'uppercase', color: 'var(--color-plum)', marginBottom: 'var(--s-18)' }}>{p.tagline}</p>
            <p className="body-copy" style={{ fontSize: '14px', marginBottom: 'var(--s-24)', flex: 1 }}>{p.desc}</p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: 'var(--s-18)' }}>
              {p.stack.map(s => <span key={s} className="pill" style={{ fontSize: '11px', padding: '5px 11px' }}>{s}</span>)}
            </div>
            <span style={{ fontSize: '12px', letterSpacing: '0.05em', color: 'var(--color-smoke)' }}>{p.date}</span>
          </div>
        ))}
      </div>

      <div className="reveal" style={{ textAlign: 'center', marginTop: 'var(--s-60)', transitionDelay: '0.2s' }}>
        <a href="https://github.com/ksxngh" target="_blank" rel="noopener noreferrer" className="btn-ghost">View all on GitHub →</a>
      </div>
    </section>
  )
}
