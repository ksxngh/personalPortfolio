export default function Contact() {
  return (
    <section id="contact" style={{
      padding: 'clamp(5rem, 10vw, 8rem) 2rem',
      maxWidth: '1100px',
      margin: '0 auto',
      textAlign: 'center',
    }}>
      <div className="reveal" style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '4rem' }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--accent)', letterSpacing: '0.15em' }}>06.</span>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem, 4vw, 2.5rem)', fontWeight: 800, letterSpacing: '-0.02em' }}>
          Contact
        </h2>
        <div style={{ flex: 1, height: '1px', background: 'var(--border)', marginLeft: '1rem' }} />
      </div>

      <div className="reveal" style={{ maxWidth: '560px', margin: '0 auto', transitionDelay: '0.1s' }}>
        <h3 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(1.8rem, 4vw, 3rem)',
          fontWeight: 800,
          letterSpacing: '-0.03em',
          marginBottom: '1.25rem',
          lineHeight: 1.1,
        }}>
          Let's build something<br />
          <span style={{ color: 'var(--accent)' }}>together.</span>
        </h3>

        <p style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1rem',
          color: 'var(--text-muted)',
          lineHeight: 1.7,
          marginBottom: '2.5rem',
        }}>
          I'm actively looking for SWE internships and co-op roles for Summer/Fall 2026. My inbox is open — whether it's an opportunity, a collab, or just to say hi.
        </p>

        <a
          href="mailto:ks2328679@gmail.com"
          style={{
            display: 'inline-block',
            padding: '14px 36px',
            background: 'var(--accent)',
            color: 'var(--bg)',
            fontFamily: 'var(--font-mono)',
            fontSize: '13px',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            textDecoration: 'none',
            fontWeight: 700,
            transition: 'all 0.2s ease',
            marginBottom: '2.5rem',
          }}
          onMouseEnter={e => e.target.style.background = '#90cdf4'}
          onMouseLeave={e => e.target.style.background = 'var(--accent)'}
        >
          Say Hello →
        </a>

        {/* Social links */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
          {[
            { label: 'GitHub', href: 'https://github.com/ksxngh' },
            { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ksxngh/' },
          ].map(s => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '12px',
                color: 'var(--text-dim)',
                textDecoration: 'none',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                transition: 'color 0.2s ease',
                borderBottom: '1px solid transparent',
                paddingBottom: '2px',
              }}
              onMouseEnter={e => { e.target.style.color = 'var(--accent)'; e.target.style.borderBottomColor = 'var(--accent)' }}
              onMouseLeave={e => { e.target.style.color = 'var(--text-dim)'; e.target.style.borderBottomColor = 'transparent' }}
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
