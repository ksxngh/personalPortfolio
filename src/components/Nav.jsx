import { useState, useEffect } from 'react'

const links = ['about', 'work', 'skills', 'experience', 'contact']

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    const target = id === 'work' ? 'projects' : id
    document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <nav style={{
      position: 'fixed',
      top: scrolled ? '14px' : '0px',
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 100,
      width: scrolled ? 'min(1140px, calc(100% - 28px))' : '100%',
      maxWidth: '1200px',
      padding: scrolled ? '0 18px 0 24px' : '0 var(--s-30)',
      height: '60px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      transition: 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
      background: scrolled ? 'rgba(0, 0, 0, 0.72)' : 'transparent',
      backdropFilter: scrolled ? 'blur(14px)' : 'none',
      border: scrolled ? '1px solid var(--hairline)' : '1px solid transparent',
      borderRadius: 'var(--radius)',
    }}>
      {/* Logo mark */}
      <button onClick={() => scrollTo('hero')} style={{
        display: 'flex', alignItems: 'center', gap: '9px',
        background: 'none', border: 'none', cursor: 'none', padding: 0,
      }}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M12 2 L22 12 L12 22 L2 12 Z" stroke="#8052ff" strokeWidth="1.5" />
          <circle cx="12" cy="12" r="2.4" fill="#8052ff" />
        </svg>
        <span style={{
          fontWeight: 'var(--w-semi)', fontSize: '18px', letterSpacing: '0.021em',
          color: 'var(--color-bone)',
        }}>
          Karanveer<span style={{ color: 'var(--color-smoke)' }}>.</span>
        </span>
      </button>

      {/* Desktop links */}
      <div style={{ display: 'flex', gap: 'var(--s-30)', alignItems: 'center' }} className="desktop-nav">
        {links.map(l => (
          <button key={l} onClick={() => scrollTo(l)} className="nav-link">{l}</button>
        ))}
        <a className="btn-plum" href="mailto:ks2328679@gmail.com">Get in Touch</a>
      </div>

      {/* Mobile hamburger */}
      <button
        onClick={() => setOpen(!open)}
        className="mobile-menu-btn"
        aria-label="Menu"
        style={{
          display: 'none', background: 'none', border: 'none', cursor: 'pointer',
          flexDirection: 'column', gap: '5px', padding: '4px',
        }}
      >
        {[0, 1, 2].map(i => (
          <span key={i} style={{
            display: 'block', width: '22px', height: '1.5px', background: 'var(--color-bone)',
            transition: 'transform 0.25s ease, opacity 0.25s ease',
            transform: open && i === 0 ? 'translateY(6.5px) rotate(45deg)' :
                       open && i === 2 ? 'translateY(-6.5px) rotate(-45deg)' : 'none',
            opacity: open && i === 1 ? 0 : 1,
          }} />
        ))}
      </button>

      {/* Mobile dropdown */}
      {open && (
        <div style={{
          position: 'absolute', top: '70px', left: 0, right: 0,
          background: 'rgba(0, 0, 0, 0.95)', border: '1px solid var(--hairline)',
          borderRadius: 'var(--radius)', padding: 'var(--s-24)',
          display: 'flex', flexDirection: 'column', gap: 'var(--s-18)',
          backdropFilter: 'blur(14px)',
        }}>
          {links.map(l => (
            <button key={l} onClick={() => scrollTo(l)} className="nav-link" style={{ textAlign: 'left' }}>{l}</button>
          ))}
          <a className="btn-plum" href="mailto:ks2328679@gmail.com" style={{ justifyContent: 'center', marginTop: '6px' }}>Get in Touch</a>
        </div>
      )}

      <style>{`
        @media (max-width: 820px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </nav>
  )
}
