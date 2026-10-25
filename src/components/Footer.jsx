const COLUMNS = [
  {
    heading: 'Explore',
    links: [
      { label: 'About', href: '#about' },
      { label: 'Work', href: '#projects' },
      { label: 'Skills', href: '#skills' },
      { label: 'Experience', href: '#experience' },
    ],
  },
  {
    heading: 'Connect',
    links: [
      { label: 'GitHub', href: 'https://github.com/ksxngh' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ksxngh/' },
      { label: 'Email', href: 'mailto:ks2328679@gmail.com' },
      { label: 'Phone', href: 'tel:+12366323334' },
    ],
  },
  {
    heading: 'More',
    links: [
      { label: 'Résumé (PDF)', href: '/ResumeKaranveer.pdf' },
      { label: 'Source on GitHub', href: 'https://github.com/ksxngh' },
    ],
  },
]

export default function Footer() {
  return (
    <footer style={{ background: 'var(--grad-graphite-band)', color: 'var(--color-paper-white)' }}>
      <div className="shell" style={{ padding: 'var(--s-64) var(--s-24)' }}>
        <div className="footer-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1.4fr repeat(3, 1fr)',
          gap: 'var(--s-40)',
        }}>
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '9px', marginBottom: 'var(--s-16)' }}>
              <span style={{
                width: '26px', height: '26px', borderRadius: '7px',
                background: 'var(--color-paper-white)', color: 'var(--color-graphite)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '13px', fontWeight: 'var(--w-bold)', letterSpacing: '-0.02em',
              }}>KS</span>
              <span style={{ fontSize: '17px', fontWeight: 'var(--w-emph)' }}>Karanveer Singh</span>
            </div>
            <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', maxWidth: '34ch', lineHeight: 1.6 }}>
              CS student at SFU, founder of CallCatch, and full-stack / AI builder. Surrey, BC · Canada.
            </p>
          </div>

          {/* Link columns */}
          {COLUMNS.map(col => (
            <div key={col.heading}>
              <div style={{ fontSize: '14px', fontWeight: 'var(--w-bold)', marginBottom: 'var(--s-16)' }}>{col.heading}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--s-12)' }}>
                {col.links.map(l => (
                  <a
                    key={l.label}
                    href={l.href}
                    target={l.href.startsWith('http') || l.href.endsWith('.pdf') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    style={{
                      fontSize: '14px', color: 'rgba(255,255,255,0.7)', textDecoration: 'none',
                      transition: 'color 0.2s ease', width: 'fit-content',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,1)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}
                  >{l.label}</a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={{
          marginTop: 'var(--s-48)', paddingTop: 'var(--s-24)',
          borderTop: '1px solid rgba(255,255,255,0.15)',
          display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 'var(--s-12)',
        }}>
          <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)' }}>
            © 2026 Karanveer Singh — Built with React + Vite
          </span>
          <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)' }}>
            ks2328679@gmail.com
          </span>
        </div>
      </div>

      <style>{`
        @media (max-width: 760px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </footer>
  )
}
