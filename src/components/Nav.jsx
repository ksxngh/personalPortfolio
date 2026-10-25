import { useState, useEffect } from 'react'

const links = ['about', 'work', 'skills', 'experience', 'contact']

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
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
      position: 'sticky',
      top: 0,
      zIndex: 100,
      height: '64px',
      display: 'flex',
      alignItems: 'center',
      background: scrolled ? 'rgba(242, 240, 235, 0.72)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: `1px solid ${scrolled ? 'var(--color-soft-mist)' : 'transparent'}`,
      transition: 'background 0.3s ease, border-color 0.3s ease',
    }}>
      <div className="shell" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
      }}>
        {/* Logo mark */}
        <button onClick={() => scrollTo('hero')} style={{
          display: 'flex', alignItems: 'center', gap: '9px',
          background: 'none', border: 'none', cursor: 'pointer', padding: 0,
        }}>
          <span style={{
            width: '26px', height: '26px', borderRadius: '7px',
            background: 'var(--grad-graphite)', color: 'var(--color-paper-white)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '13px', fontWeight: 'var(--w-bold)', letterSpacing: '-0.02em',
          }}>KS</span>
          <span style={{
            fontWeight: 'var(--w-emph)', fontSize: '17px', letterSpacing: '-0.01em',
            color: 'var(--color-ink-charcoal)',
          }}>
            Karanveer Singh
          </span>
        </button>

        {/* Desktop links — centered */}
        <div style={{ display: 'flex', gap: 'var(--s-32)', alignItems: 'center' }} className="desktop-nav">
          {links.map(l => (
            <button key={l} onClick={() => scrollTo(l)} style={{
              background: 'none', border: 'none', cursor: 'pointer', padding: 0,
              fontWeight: 'var(--w-reg)', fontSize: '15px', color: 'var(--color-ink-charcoal)',
              textTransform: 'capitalize', borderBottom: '1px solid transparent',
              transition: 'border-color 0.2s ease',
            }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--color-ink-charcoal)')}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'transparent')}
            >{l}</button>
          ))}
        </div>

        {/* Right actions */}
        <div style={{ display: 'flex', gap: 'var(--s-12)', alignItems: 'center' }} className="desktop-nav">
          <a className="btn-ghost" href="/ResumeKaranveer.pdf" target="_blank" rel="noopener noreferrer">Résumé</a>
          <a className="btn-lilac" href="mailto:ks2328679@gmail.com">Get in touch</a>
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
              display: 'block', width: '22px', height: '1.5px', background: 'var(--color-ink-charcoal)',
              transition: 'transform 0.25s ease, opacity 0.25s ease',
              transform: open && i === 0 ? 'translateY(6.5px) rotate(45deg)' :
                         open && i === 2 ? 'translateY(-6.5px) rotate(-45deg)' : 'none',
              opacity: open && i === 1 ? 0 : 1,
            }} />
          ))}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div style={{
          position: 'absolute', top: '64px', left: '12px', right: '12px',
          background: 'var(--color-paper-white)', border: '1px solid var(--color-soft-mist)',
          borderRadius: 'var(--r-card)', padding: 'var(--s-20)',
          display: 'flex', flexDirection: 'column', gap: 'var(--s-16)',
        }}>
          {links.map(l => (
            <button key={l} onClick={() => scrollTo(l)} style={{
              background: 'none', border: 'none', cursor: 'pointer', padding: 0,
              fontWeight: 'var(--w-med)', fontSize: '16px', color: 'var(--color-ink-charcoal)',
              textTransform: 'capitalize', textAlign: 'left',
            }}>{l}</button>
          ))}
          <a className="btn-lilac" href="mailto:ks2328679@gmail.com" style={{ justifyContent: 'center', marginTop: '4px' }}>Get in touch</a>
        </div>
      )}

      <style>{`
        @media (max-width: 860px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </nav>
  )
}
