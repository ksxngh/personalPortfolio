import { useEffect, useState } from 'react'
import CallCatchFigure from '../components/CallCatchFigure'

const ROLES = ['Full-stack developer', 'AI / ML builder', 'SaaS founder', 'CS @ SFU']
const TOOLS = ['Python', 'TypeScript', 'Next.js', 'FastAPI', 'Supabase', 'Twilio']

function Line({ children, delay, mounted }) {
  return (
    <span className="line-mask">
      <span className={`line-inner${mounted ? ' in' : ''}`} style={{ transitionDelay: `${delay}ms` }}>
        {children}
      </span>
    </span>
  )
}

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  const [roleIdx, setRoleIdx] = useState(0)

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100)
    return () => clearTimeout(t)
  }, [])

  // Gentle fade rotation — calm, not a terminal typewriter
  useEffect(() => {
    const t = setInterval(() => setRoleIdx(i => (i + 1) % ROLES.length), 2600)
    return () => clearInterval(t)
  }, [])

  return (
    <section id="hero" style={{ position: 'relative', paddingTop: 'var(--s-80)', paddingBottom: 'var(--s-64)' }}>
      <div className="shell">
        <div className="hero-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 'var(--s-64)',
          alignItems: 'center',
        }}>
          {/* Left — editorial headline */}
          <div style={{ maxWidth: '560px' }}>
            <div className="mono-label" style={{
              display: 'flex', alignItems: 'center', gap: '12px',
              color: 'var(--color-ink-charcoal)',
              marginBottom: 'var(--s-24)',
              opacity: mounted ? 1 : 0,
              transition: 'opacity 0.8s ease 0.1s',
            }}>
              <span style={{ width: '28px', height: '1px', background: 'currentColor', flexShrink: 0 }} />
              3rd year · Computing Science · SFU
            </div>

            <h1 className="display" style={{ fontSize: 'clamp(3rem, 6.5vw, 4.25rem)', marginBottom: 'var(--s-24)' }}>
              <Line delay={150} mounted={mounted}>Karanveer Singh</Line>
            </h1>

            {/* Rotating role */}
            <div style={{
              fontSize: 'clamp(18px, 2.4vw, 22px)',
              lineHeight: 1.2,
              letterSpacing: '-0.014em',
              color: 'var(--color-stone-gray)',
              minHeight: '30px',
              marginBottom: 'var(--s-28)',
              opacity: mounted ? 1 : 0,
              transition: 'opacity 0.8s ease 0.5s',
            }}>
              <span key={roleIdx} style={{
                display: 'inline-block',
                color: 'var(--color-ink-charcoal)',
                animation: 'fadeUp 0.5s ease',
              }}>{ROLES[roleIdx]}</span>
            </div>

            <p className="body-copy" style={{
              marginBottom: 'var(--s-32)',
              maxWidth: '440px',
              opacity: mounted ? 1 : 0,
              transform: mounted ? 'none' : 'translateY(14px)',
              transition: 'opacity 0.9s ease 0.65s, transform 0.9s ease 0.65s',
            }}>
              Computing Science student at SFU building full-stack apps and
              AI-powered tools — shipping projects, breaking things, and figuring
              out why.
            </p>

            <div style={{
              display: 'flex',
              gap: 'var(--s-12)',
              flexWrap: 'wrap',
              opacity: mounted ? 1 : 0,
              transform: mounted ? 'none' : 'translateY(14px)',
              transition: 'opacity 0.9s ease 0.8s, transform 0.9s ease 0.8s',
            }}>
              <button
                className="btn-primary"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View my work →
              </button>
              <a className="btn-lilac" href="/ResumeKaranveer.pdf" target="_blank" rel="noopener noreferrer">
                Download résumé
              </a>
            </div>
          </div>

          {/* Right — Fig. 1: CallCatch */}
          <div style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'none' : 'translateY(24px)',
            transition: 'opacity 1s ease 0.3s, transform 1s ease 0.3s',
          }}>
            <CallCatchFigure />
          </div>
        </div>

        {/* Tools strip — social-proof analog, monochrome */}
        <div className="reveal" style={{ marginTop: 'var(--s-80)' }}>
          <div className="kicker" style={{ display: 'block', textAlign: 'center', marginBottom: 'var(--s-24)', color: '#9a968c' }}>
            Working across the stack with
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(6, 1fr)',
            border: '1px solid var(--color-soft-mist)',
            borderRadius: 'var(--r-card)',
            overflow: 'hidden',
            background: 'var(--color-paper-white)',
          }} className="tools-strip">
            {TOOLS.map((t, i) => (
              <div key={t} style={{
                padding: 'var(--s-24) var(--s-12)',
                textAlign: 'center',
                fontSize: '15px',
                fontWeight: 'var(--w-emph)',
                color: 'var(--color-ink-charcoal)',
                borderRight: i < TOOLS.length - 1 ? '1px solid var(--color-soft-mist)' : 'none',
              }}>{t}</div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: var(--s-48) !important; }
          .tools-strip { grid-template-columns: repeat(3, 1fr) !important; }
          .tools-strip > div:nth-child(3) { border-right: none !important; }
          .tools-strip > div:nth-child(-n+3) { border-bottom: 1px solid var(--color-soft-mist); }
        }
        @media (max-width: 480px) {
          .tools-strip { grid-template-columns: repeat(2, 1fr) !important; }
          .tools-strip > div:nth-child(odd) { border-right: 1px solid var(--color-soft-mist) !important; }
          .tools-strip > div:nth-child(even) { border-right: none !important; }
          .tools-strip > div:nth-child(-n+4) { border-bottom: 1px solid var(--color-soft-mist); }
        }
      `}</style>
    </section>
  )
}
