import { useEffect, useState } from 'react'

const ROLES = ['Full-stack developer', 'AI / ML builder', 'SaaS founder', 'CS @ SFU']
const TOOLS = ['Python', 'TypeScript', 'Next.js', 'FastAPI', 'Supabase', 'Twilio']

// Translucent paper card composited over the graphite stage
const glass = {
  background: 'rgba(255,255,255,0.9)',
  backdropFilter: 'blur(8px)',
  WebkitBackdropFilter: 'blur(8px)',
  border: '1px solid rgba(255,255,255,0.5)',
}

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
          gridTemplateColumns: '1.05fr 0.95fr',
          gap: 'var(--s-64)',
          alignItems: 'center',
        }}>
          {/* Left — editorial headline */}
          <div style={{ maxWidth: '560px' }}>
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

          {/* Right — greyish-black stage with floating glass cards */}
          <div className="hero-stage" style={{
            position: 'relative',
            aspectRatio: '4 / 5',
            borderRadius: '24px',
            overflow: 'hidden',
            background: `
              radial-gradient(90% 70% at 22% 12%, rgba(255,255,255,0.13) 0%, transparent 60%),
              radial-gradient(80% 80% at 95% 100%, rgba(130,130,145,0.35) 0%, transparent 60%),
              linear-gradient(155deg, #1b1b1f 0%, #2b2b31 45%, #47474f 100%)
            `,
            border: '1px solid #1f1f23',
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'none' : 'translateY(24px)',
            transition: 'opacity 1s ease 0.3s, transform 1s ease 0.3s',
          }}>
            {/* Monogram watermark */}
            <div style={{
              position: 'absolute', inset: 0,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 'clamp(9rem, 22vw, 15rem)', fontWeight: 'var(--w-bold)',
              letterSpacing: '-0.05em', color: 'rgba(255, 255, 255, 0.06)',
              userSelect: 'none', lineHeight: 1,
            }}>KS</div>

            {/* Floating card — current focus */}
            <div style={{
              ...glass,
              position: 'absolute', top: '7%', left: '7%',
              borderRadius: 'var(--r-card)',
              padding: 'var(--s-16)', maxWidth: '230px',
              animation: 'floatCard 7s ease-in-out infinite',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--color-deep-lagoon)', animation: 'pulseDot 1.8s ease-in-out infinite' }} />
                <span className="kicker" style={{ fontSize: '11px' }}>Currently</span>
              </div>
              <div style={{ fontSize: '15px', fontWeight: 'var(--w-emph)', lineHeight: 1.35, marginBottom: '4px' }}>
                Founder @ CallCatch
              </div>
              <div style={{ fontSize: '13px', color: 'var(--color-stone-gray)', lineHeight: 1.4 }}>
                Missed-call recovery SaaS, live in production
              </div>
            </div>

            {/* Floating card — school */}
            <div style={{
              ...glass,
              position: 'absolute', bottom: '9%', right: '7%',
              borderRadius: 'var(--r-card)',
              padding: 'var(--s-16)', minWidth: '160px',
              animation: 'floatCard 7s ease-in-out infinite 1.4s',
            }}>
              <div className="display" style={{ fontSize: '2.4rem', lineHeight: 1, marginBottom: '6px' }}>3rd year</div>
              <div className="kicker" style={{ fontSize: '11px' }}>SFU Computing Science</div>
            </div>

            {/* Floating chip — coordinates */}
            <div style={{
              ...glass,
              position: 'absolute', bottom: '46%', left: '10%',
              borderRadius: 'var(--r-pill)',
              padding: '7px 14px', fontSize: '12px', fontWeight: 'var(--w-med)',
              color: 'var(--color-stone-gray)', letterSpacing: '0.02em',
              animation: 'floatCard 8s ease-in-out infinite 0.7s',
            }}>
              49.19° N / 122.85° W
            </div>
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
          .hero-grid { grid-template-columns: 1fr !important; gap: var(--s-40) !important; }
          .hero-stage { aspect-ratio: 3 / 2 !important; max-width: 520px; }
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
