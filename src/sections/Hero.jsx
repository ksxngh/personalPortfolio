import { useEffect, useState } from 'react'
import Constellation from '../components/Constellation'

const ROLES = ['Full-Stack Developer', 'AI / ML Builder', 'CS @ SFU', 'Freelance Web Dev']

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  const [roleIdx, setRoleIdx] = useState(0)
  const [roleText, setRoleText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 120)
    return () => clearTimeout(t)
  }, [])

  // Typewriter role cycle
  useEffect(() => {
    const role = ROLES[roleIdx]
    if (!deleting && roleText.length < role.length) {
      const t = setTimeout(() => setRoleText(role.slice(0, roleText.length + 1)), 70)
      return () => clearTimeout(t)
    } else if (!deleting && roleText.length === role.length) {
      const t = setTimeout(() => setDeleting(true), 1900)
      return () => clearTimeout(t)
    } else if (deleting && roleText.length > 0) {
      const t = setTimeout(() => setRoleText(roleText.slice(0, -1)), 35)
      return () => clearTimeout(t)
    } else if (deleting && roleText.length === 0) {
      setDeleting(false)
      setRoleIdx((roleIdx + 1) % ROLES.length)
    }
  }, [roleText, deleting, roleIdx])

  const Line = ({ children, delay }) => (
    <span className="line-mask">
      <span
        className={`line-inner${mounted ? ' in' : ''}`}
        style={{ transitionDelay: `${delay}ms` }}
      >
        {children}
      </span>
    </span>
  )

  return (
    <section id="hero" style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
      {/* Constellation — owns the right half, bleeds edge to edge */}
      <div style={{
        position: 'absolute',
        top: 0,
        right: 0,
        width: 'min(62%, 820px)',
        height: '100%',
        pointerEvents: 'none',
      }} className="hero-constellation">
        <Constellation count={1200} />
      </div>

      <div className="shell" style={{
        position: 'relative',
        zIndex: 2,
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}>
        <div style={{ maxWidth: '520px' }}>
          {/* Eyebrow */}
          <div style={{
            opacity: mounted ? 1 : 0,
            transition: 'opacity 0.8s ease 0.1s',
            marginBottom: 'var(--s-30)',
          }}>
            <span className="eyebrow">
              <span style={{
                width: '7px', height: '7px', borderRadius: '50%',
                background: 'var(--color-plum)', display: 'inline-block',
                animation: 'pulseDot 1.8s ease-in-out infinite',
              }} />
              Open to SWE internships — 2026
            </span>
          </div>

          {/* Display name — line-mask reveal */}
          <h1 className="display" style={{
            fontSize: 'clamp(3.6rem, 9vw, 7.1rem)',
            marginBottom: 'var(--s-24)',
          }}>
            <Line delay={150}>Karanveer</Line>
            <Line delay={280}>Singh</Line>
          </h1>

          {/* Rotating role */}
          <div style={{
            fontWeight: 'var(--w-reg)',
            fontSize: 'clamp(15px, 2vw, 18px)',
            letterSpacing: '0.025em',
            color: 'var(--color-smoke)',
            minHeight: '28px',
            marginBottom: 'var(--s-30)',
            opacity: mounted ? 1 : 0,
            transition: 'opacity 0.8s ease 0.6s',
          }}>
            <span style={{ color: 'var(--color-plum)' }}>{'> '}</span>
            <span style={{ color: 'var(--color-bone)' }}>{roleText}</span>
            <span style={{ animation: 'blink 1s step-end infinite', color: 'var(--color-plum)' }}>_</span>
          </div>

          {/* Body */}
          <p className="body-copy" style={{
            marginBottom: 'var(--s-36)',
            maxWidth: '440px',
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'none' : 'translateY(16px)',
            transition: 'opacity 0.9s ease 0.75s, transform 0.9s ease 0.75s',
          }}>
            Computing Science student at SFU building full-stack apps and
            AI-powered tools — shipping projects, breaking things, and figuring
            out why.
          </p>

          {/* CTAs */}
          <div style={{
            display: 'flex',
            gap: 'var(--s-12)',
            flexWrap: 'wrap',
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'none' : 'translateY(16px)',
            transition: 'opacity 0.9s ease 0.9s, transform 0.9s ease 0.9s',
          }}>
            <button
              className="btn-plum"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Work →
            </button>
            <a className="btn-ghost" href="/ResumeKaranveer.pdf" target="_blank" rel="noopener noreferrer">
              ↓ Resume
            </a>
          </div>
        </div>
      </div>

      {/* Coordinate footnote */}
      <div style={{
        position: 'absolute',
        bottom: 'var(--s-30)',
        right: 'var(--s-30)',
        textAlign: 'right',
        fontSize: '12px',
        letterSpacing: '0.05em',
        color: 'var(--color-smoke)',
        zIndex: 2,
        opacity: mounted ? 1 : 0,
        transition: 'opacity 1s ease 1.2s',
      }}>
        49.19° N / 122.85° W<br />Surrey, BC · Canada
      </div>

      <style>{`
        @media (max-width: 820px) {
          .hero-constellation {
            width: 100% !important;
            opacity: 0.4;
          }
        }
      `}</style>
    </section>
  )
}
