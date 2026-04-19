import { useState, useEffect } from 'react'

const links = ['about', 'projects', 'skills', 'experience', 'resume', 'contact']

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      padding: '0 2rem',
      height: '64px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      transition: 'background 0.3s ease, border-color 0.3s ease',
      background: scrolled ? 'rgba(8, 10, 15, 0.92)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(99, 179, 237, 0.08)' : '1px solid transparent',
    }}>
      {/* Logo */}
      <button onClick={() => scrollTo('hero')} style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '14px',
        color: 'var(--accent)',
        background: 'none',
        border: 'none',
        cursor: 'none',
        letterSpacing: '0.1em',
      }}>
        KS<span style={{ color: 'var(--text-muted)' }}>.dev</span>
      </button>

      {/* Desktop links */}
      <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }} className="desktop-nav">
        {links.map(l => (
          <button key={l} onClick={() => scrollTo(l)} className="nav-link" style={{
            background: 'none',
            border: 'none',
            cursor: 'none',
          }}>
            {l}
          </button>
        ))}
        <a
          href="https://github.com/ksxngh"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '12px',
            padding: '6px 14px',
            border: '1px solid rgba(99, 179, 237, 0.3)',
            color: 'var(--accent)',
            textDecoration: 'none',
            letterSpacing: '0.08em',
            transition: 'all 0.2s ease',
            textTransform: 'uppercase',
          }}
          onMouseEnter={e => {
            e.target.style.background = 'rgba(99, 179, 237, 0.1)'
            e.target.style.borderColor = 'var(--accent)'
          }}
          onMouseLeave={e => {
            e.target.style.background = 'transparent'
            e.target.style.borderColor = 'rgba(99, 179, 237, 0.3)'
          }}
        >
          GitHub
        </a>
      </div>

      {/* Mobile hamburger */}
      <button
        onClick={() => setOpen(!open)}
        style={{
          display: 'none',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          flexDirection: 'column',
          gap: '5px',
          padding: '4px',
        }}
        className="mobile-menu-btn"
      >
        {[0,1,2].map(i => (
          <span key={i} style={{
            display: 'block',
            width: '22px',
            height: '1px',
            background: 'var(--accent)',
            transition: 'transform 0.2s ease, opacity 0.2s ease',
            transform: open && i === 0 ? 'translateY(6px) rotate(45deg)' :
                       open && i === 2 ? 'translateY(-6px) rotate(-45deg)' : 'none',
            opacity: open && i === 1 ? 0 : 1,
          }} />
        ))}
      </button>

      {/* Mobile dropdown */}
      {open && (
        <div style={{
          position: 'absolute',
          top: '64px',
          left: 0,
          right: 0,
          background: 'rgba(8, 10, 15, 0.98)',
          borderBottom: '1px solid var(--border)',
          padding: '1rem 2rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
        }}>
          {links.map(l => (
            <button key={l} onClick={() => scrollTo(l)} style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '13px',
              color: 'var(--text-muted)',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              textAlign: 'left',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              padding: '4px 0',
            }}>
              {l}
            </button>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </nav>
  )
}
