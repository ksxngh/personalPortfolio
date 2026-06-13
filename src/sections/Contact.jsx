import Constellation from '../components/Constellation'

export default function Contact() {
  return (
    <section id="contact" style={{ position: 'relative', padding: 'var(--s-120) 0', overflow: 'hidden' }}>
      {/* Faint constellation behind, centered */}
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.5,
        pointerEvents: 'none', display: 'flex', justifyContent: 'center',
      }}>
        <div style={{ width: 'min(620px, 90vw)', height: '100%' }}>
          <Constellation count={650} />
        </div>
      </div>

      <div className="shell reveal" style={{ position: 'relative', zIndex: 2, textAlign: 'center', maxWidth: '720px' }}>
        <div className="eyebrow" style={{ justifyContent: 'center', marginBottom: 'var(--s-24)' }}>
          <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: 'var(--color-plum)', animation: 'pulseDot 1.8s ease-in-out infinite' }} />
          Open for 2026
        </div>

        <h2 className="display" style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', marginBottom: 'var(--s-30)' }}>
          Let's build<br />something together.
        </h2>

        <p className="body-copy" style={{ margin: '0 auto var(--s-36)', textAlign: 'center' }}>
          I'm actively looking for SWE internships and co-op roles for 2026.
          My inbox is open — whether it's an opportunity, a collab, or just to say hi.
        </p>

        <div style={{ display: 'flex', gap: 'var(--s-12)', justifyContent: 'center', flexWrap: 'wrap', marginBottom: 'var(--s-60)' }}>
          <a className="btn-plum" href="mailto:ks2328679@gmail.com">Say Hello →</a>
          <a className="btn-ghost" href="tel:+12366323334">236-632-3334</a>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: 'var(--s-30)', flexWrap: 'wrap' }}>
          {[
            { label: 'GitHub', href: 'https://github.com/ksxngh' },
            { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ksxngh/' },
            { label: 'Email', href: 'mailto:ks2328679@gmail.com' },
          ].map(s => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="nav-link">{s.label}</a>
          ))}
        </div>
      </div>
    </section>
  )
}
