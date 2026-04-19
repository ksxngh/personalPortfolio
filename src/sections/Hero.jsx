import { useEffect, useRef, useState } from 'react'

const FULL_TEXT = "I build things that actually work."
const ROLES = ['Software Engineer', 'Full Stack Dev', 'AI Builder', 'CS @ SFU']

export default function Hero() {
  const [typed, setTyped] = useState('')
  const [roleIdx, setRoleIdx] = useState(0)
  const [roleText, setRoleText] = useState('')
  const [deleting, setDeleting] = useState(false)
  const [started, setStarted] = useState(false)
  const canvasRef = useRef(null)

  // Typewriter for headline
  useEffect(() => {
    const timeout = setTimeout(() => setStarted(true), 600)
    return () => clearTimeout(timeout)
  }, [])

  useEffect(() => {
    if (!started) return
    if (typed.length < FULL_TEXT.length) {
      const t = setTimeout(() => setTyped(FULL_TEXT.slice(0, typed.length + 1)), 40)
      return () => clearTimeout(t)
    }
  }, [typed, started])

  // Role cycling
  useEffect(() => {
    const role = ROLES[roleIdx]
    if (!deleting && roleText.length < role.length) {
      const t = setTimeout(() => setRoleText(role.slice(0, roleText.length + 1)), 80)
      return () => clearTimeout(t)
    } else if (!deleting && roleText.length === role.length) {
      const t = setTimeout(() => setDeleting(true), 1800)
      return () => clearTimeout(t)
    } else if (deleting && roleText.length > 0) {
      const t = setTimeout(() => setRoleText(roleText.slice(0, -1)), 40)
      return () => clearTimeout(t)
    } else if (deleting && roleText.length === 0) {
      setDeleting(false)
      setRoleIdx((roleIdx + 1) % ROLES.length)
    }
  }, [roleText, deleting, roleIdx])

  // Particle canvas
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let raf
    const particles = []
    const W = canvas.width = window.innerWidth
    const H = canvas.height = window.innerHeight

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * W,
        y: Math.random() * H,
        r: Math.random() * 1.5 + 0.3,
        dx: (Math.random() - 0.5) * 0.3,
        dy: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.4 + 0.1,
      })
    }

    const draw = () => {
      ctx.clearRect(0, 0, W, H)
      particles.forEach(p => {
        p.x += p.dx
        p.y += p.dy
        if (p.x < 0 || p.x > W) p.dx *= -1
        if (p.y < 0 || p.y > H) p.dy *= -1
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(99, 179, 237, ${p.opacity})`
        ctx.fill()
      })
      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 120) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(99, 179, 237, ${0.06 * (1 - dist / 120)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }
      raf = requestAnimationFrame(draw)
    }
    draw()
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <section id="hero" style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      padding: '0 2rem',
      overflow: 'hidden',
    }} className="grid-bg">

      {/* Particle canvas */}
      <canvas ref={canvasRef} style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        opacity: 0.6,
      }} />

      {/* Scanlines */}
      <div className="scanlines" />

      {/* Radial glow */}
      <div style={{
        position: 'absolute',
        top: '30%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(99, 179, 237, 0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{
        position: 'relative',
        zIndex: 2,
        maxWidth: '900px',
        margin: '0 auto',
        width: '100%',
        paddingTop: '80px',
      }}>
        {/* Status badge */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          padding: '6px 14px',
          border: '1px solid rgba(79, 209, 197, 0.25)',
          marginBottom: '2rem',
          animation: 'fadeIn 0.5s ease forwards',
          opacity: 0,
          animationDelay: '0.2s',
          animationFillMode: 'forwards',
        }}>
          <span style={{
            width: '7px',
            height: '7px',
            borderRadius: '50%',
            background: 'var(--accent2)',
            display: 'inline-block',
            boxShadow: '0 0 6px var(--accent2)',
            animation: 'pulse-ring 1.5s ease infinite',
          }} />
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            color: 'var(--accent2)',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
          }}>
            Open to SWE Internships · Summer/Fall 2026
          </span>
        </div>

        {/* Role cycling */}
        <div style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 'clamp(12px, 2vw, 14px)',
          color: 'var(--accent)',
          letterSpacing: '0.15em',
          marginBottom: '1rem',
          opacity: 0,
          animation: 'fadeIn 0.5s ease 0.4s forwards',
          minHeight: '20px',
        }}>
          {'> '}{roleText}<span style={{ animation: 'blink 1s infinite' }}>_</span>
        </div>

        {/* Main headline */}
        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2.2rem, 6vw, 5rem)',
          fontWeight: 800,
          lineHeight: 1.05,
          letterSpacing: '-0.02em',
          marginBottom: '1.5rem',
          minHeight: '1.2em',
        }}>
          <span style={{ color: 'var(--text)' }}>{typed}</span>
          {typed.length < FULL_TEXT.length && (
            <span style={{ color: 'var(--accent)', animation: 'blink 0.7s infinite' }}>|</span>
          )}
        </h1>

        {/* Sub */}
        <p style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(1rem, 2vw, 1.2rem)',
          color: 'var(--text-muted)',
          maxWidth: '540px',
          lineHeight: 1.7,
          marginBottom: '2.5rem',
          opacity: 0,
          animation: 'fadeUp 0.7s ease 1.8s forwards',
        }}>
          CS student at SFU building full-stack apps and AI-powered tools.
          Python · React · Flask · FastAPI · LLMs
        </p>

        {/* CTAs */}
        <div style={{
          display: 'flex',
          gap: '1rem',
          flexWrap: 'wrap',
          opacity: 0,
          animation: 'fadeUp 0.7s ease 2s forwards',
        }}>
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            style={{
              padding: '12px 28px',
              background: 'var(--accent)',
              color: 'var(--bg)',
              border: 'none',
              fontFamily: 'var(--font-mono)',
              fontSize: '13px',
              letterSpacing: '0.08em',
              fontWeight: 700,
              cursor: 'none',
              transition: 'all 0.2s ease',
              textTransform: 'uppercase',
            }}
            onMouseEnter={e => e.target.style.background = '#90cdf4'}
            onMouseLeave={e => e.target.style.background = 'var(--accent)'}
          >
            View Projects →
          </button>
          <a
            href="mailto:ks2328679@gmail.com"
            style={{
              padding: '12px 28px',
              background: 'transparent',
              color: 'var(--text)',
              border: '1px solid var(--border)',
              fontFamily: 'var(--font-mono)',
              fontSize: '13px',
              letterSpacing: '0.08em',
              textDecoration: 'none',
              transition: 'all 0.2s ease',
              textTransform: 'uppercase',
              display: 'inline-block',
            }}
            onMouseEnter={e => {
              e.target.style.borderColor = 'rgba(99, 179, 237, 0.4)'
              e.target.style.color = 'var(--accent)'
            }}
            onMouseLeave={e => {
              e.target.style.borderColor = 'var(--border)'
              e.target.style.color = 'var(--text)'
            }}
          >
            Get in Touch
          </a>
        </div>

        {/* Scroll hint */}
        <div style={{
          position: 'absolute',
          bottom: '-120px',
          left: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: '8px',
          opacity: 0,
          animation: 'fadeIn 1s ease 3s forwards',
        }}>
          <div style={{
            width: '1px',
            height: '60px',
            background: 'linear-gradient(to bottom, transparent, var(--accent))',
            margin: '0 5px',
          }} />
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '10px',
            color: 'var(--text-dim)',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            writingMode: 'vertical-rl',
          }}>scroll</span>
        </div>
      </div>

      {/* Corner coords decoration */}
      <div style={{
        position: 'absolute',
        bottom: '2rem',
        right: '2rem',
        fontFamily: 'var(--font-mono)',
        fontSize: '10px',
        color: 'var(--text-dim)',
        letterSpacing: '0.1em',
        opacity: 0,
        animation: 'fadeIn 1s ease 2.5s forwards',
      }}>
        49.1913° N / 122.8490° W<br />
        Surrey, BC · Canada
      </div>
    </section>
  )
}
