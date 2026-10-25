import { useState } from 'react'
import SectionHead from '../components/SectionHead'

const PROJECTS = [
  {
    id: '01',
    name: 'CallCatch',
    tagline: 'Missed-Call Recovery SaaS',
    desc: 'Texts every missed caller back in under 5 seconds, then runs an LLM triage over SMS to collect name, address, and issue, escalating emergencies like burst pipes ahead of routine jobs. Running on live calls for a local trades business, backed by 40 automated tests.',
    stack: ['Next.js', 'Supabase', 'Twilio', 'Groq'],
    date: 'May 2026 — Present',
    link: null,
    status: 'Live in production',
    featured: true,
  },
  {
    id: '02',
    name: 'MarketPulse',
    tagline: 'AI Stock Market Dashboard',
    desc: 'Full-stack stock dashboard with authenticated accounts, per-user watchlists, an investment tracker with live profit/loss, and price alerts. Three Inngest background workflows (including a Finnhub price-alert poller every 15 minutes and a daily market-summary email), Gemini-written summaries with safe fallbacks, and Upstash Redis rate limiting.',
    stack: ['Next.js', 'TypeScript', 'React', 'MongoDB', 'Finnhub', 'Inngest', 'Gemini', 'Upstash Redis'],
    date: 'May 2026',
    link: 'https://github.com/ksxngh/MarketPulse',
    featured: true,
  },
  {
    id: '03',
    name: 'AutoCurve Assistant',
    tagline: 'AI Car Valuation App',
    desc: 'Predicts used-vehicle prices from 52K+ listings, explaining 84% of price variance (R² = 0.84) on held-out data. A FastAPI REST backend and JavaScript frontend serve real-time valuations, and LLM-based image condition scoring via OpenRouter adjusts each estimate.',
    stack: ['Python', 'FastAPI', 'JavaScript', 'scikit-learn', 'OpenRouter'],
    date: 'Jan 2026',
    link: 'https://github.com/AutoCurve/AutoCurve-Assistant',
    featured: true,
  },
  {
    id: '04',
    name: 'Myopia Progression Predictor',
    tagline: 'End-to-End ML Pipeline',
    desc: 'Predicts long-term myopia progression from lifestyle and patient data, reaching 0.40 diopter MAE on held-out data. Domain-specific features capture non-linear risk-factor effects, and the model ships as an interactive Streamlit app with real-time estimates.',
    stack: ['Python', 'scikit-learn', 'pandas', 'Streamlit'],
    date: 'Dec 2025 — Mar 2026',
    link: 'https://github.com/Myopia-model/Myopia-progression-model',
    featured: true,
  },
  {
    id: '05',
    name: 'Spam Detection System',
    tagline: 'NLP Classification Pipeline',
    desc: 'Spam classifier built on Logistic Regression with Bag-of-Words and TF-IDF features. Hit 97.7% accuracy with zero false positives on a held-out set of 1,115 messages, evaluated with precision, recall, F1, and confusion-matrix analysis.',
    stack: ['Python', 'scikit-learn', 'pandas'],
    date: 'Jan — Apr 2026',
    link: 'https://github.com/lukasBulin/CMPT-310-Project',
    featured: false,
  },
  {
    id: '06',
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
    <section id="projects" className="shell section">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 'var(--s-24)' }}>
        <SectionHead index="02" kicker="Selected Work" title="Things I've built." />
        <div className="reveal tabstrip" style={{ marginBottom: 'var(--s-48)' }}>
          {['all', 'featured'].map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`tab${filter === f ? ' active' : ''}`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div key={filter} style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(min(340px, 100%), 1fr))',
        gap: 'var(--s-20)',
      }}>
        {filtered.map((p, i) => {
          // Private products (no public repo) render as a plain card
          const Card = p.link ? 'a' : 'div'
          const linkProps = p.link ? { href: p.link, target: '_blank', rel: 'noopener noreferrer' } : {}
          return (
            <Card
              key={p.id}
              {...linkProps}
              className="card"
              style={{
                padding: 'var(--s-24)',
                display: 'flex',
                flexDirection: 'column',
                textDecoration: 'none',
                color: 'inherit',
                opacity: 0,
                animation: `fadeUp 0.6s cubic-bezier(0.22,1,0.36,1) ${i * 0.07}s forwards`,
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--s-20)' }}>
                <span className="kicker" style={{ fontSize: '11px' }}>{p.id}</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  {p.featured && <span className="badge-lilac">Featured</span>}
                  {p.link && <span style={{ color: 'var(--color-stone-gray)', fontSize: '15px' }}>↗</span>}
                </div>
              </div>

              <h3 style={{ fontWeight: 'var(--w-emph)', fontSize: '22px', letterSpacing: '-0.014em', color: 'var(--color-ink-charcoal)', marginBottom: '4px' }}>{p.name}</h3>
              <p className="kicker" style={{ color: 'var(--color-stone-gray)', marginBottom: 'var(--s-16)' }}>{p.tagline}</p>
              <p className="body-copy muted" style={{ fontSize: '14px', marginBottom: 'var(--s-20)', flex: 1 }}>{p.desc}</p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: 'var(--s-16)' }}>
                {p.stack.map(s => <span key={s} className="pill" style={{ fontSize: '12px', padding: '4px 10px' }}>{s}</span>)}
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span className="kicker" style={{ fontSize: '11px' }}>{p.date}</span>
                {p.link ? (
                  <span className="link-violet" style={{ fontSize: '14px' }}>View repo →</span>
                ) : (
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', fontSize: '13px', fontWeight: 'var(--w-emph)' }}>
                    <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: 'var(--color-deep-lagoon)', animation: 'pulseDot 1.8s ease-in-out infinite' }} />
                    {p.status}
                  </span>
                )}
              </div>
            </Card>
          )
        })}
      </div>

      <div className="reveal" style={{ textAlign: 'center', marginTop: 'var(--s-48)', transitionDelay: '0.2s' }}>
        <a href="https://github.com/ksxngh" target="_blank" rel="noopener noreferrer" className="btn-ghost">View all on GitHub →</a>
      </div>
    </section>
  )
}
