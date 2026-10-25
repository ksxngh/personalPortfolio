/*
  Closing CTA band — soft grey mist gradient as quiet atmosphere,
  leading into the graphite footer.
*/
export default function Contact() {
  return (
    <section id="contact" style={{ position: 'relative', overflow: 'hidden', padding: 'var(--s-24) 0 var(--s-64)' }}>
      <div className="shell">
        <div className="reveal" style={{
          position: 'relative',
          borderRadius: '24px',
          overflow: 'hidden',
          border: '1px solid var(--color-soft-mist)',
          background: `
            radial-gradient(70% 120% at 90% 10%, rgba(255,255,255,0.9) 0%, transparent 55%),
            radial-gradient(60% 100% at 8% 100%, rgba(41,40,39,0.08) 0%, transparent 60%),
            linear-gradient(135deg, #f5f4f0 0%, #e2e0da 100%)
          `,
          padding: 'clamp(var(--s-40), 7vw, var(--s-96))',
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 'var(--s-32)' }}>
            <div style={{ maxWidth: '640px' }}>
              <span className="eyebrow">
                <span className="dot" style={{ animation: 'pulseDot 1.8s ease-in-out infinite' }} />
                Open for 2027 co-op
              </span>
              <h2 className="display" style={{ fontSize: 'clamp(2.4rem, 6vw, 4rem)', marginTop: 'var(--s-16)', marginBottom: 'var(--s-20)' }}>
                Let's build something together.
              </h2>
              <p className="body-copy" style={{ maxWidth: '46ch' }}>
                I'm looking for co-op and internship roles for Spring, Summer, and Fall 2027.
                My inbox is open — whether it's an opportunity, a collab, or just to say hi.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--s-12)', alignItems: 'flex-start' }}>
              <a className="btn-primary" href="mailto:ks2328679@gmail.com">Say hello →</a>
              <a className="btn-ghost" href="tel:+12366323334">236-632-3334</a>
            </div>
          </div>

          <div style={{ display: 'flex', gap: 'var(--s-24)', flexWrap: 'wrap', marginTop: 'var(--s-40)', paddingTop: 'var(--s-24)', borderTop: '1px solid rgba(41,40,39,0.1)' }}>
            {[
              { label: 'GitHub', href: 'https://github.com/ksxngh' },
              { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ksxngh/' },
              { label: 'Email', href: 'mailto:ks2328679@gmail.com' },
            ].map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="link-violet" style={{ fontSize: '15px' }}>{s.label} ↗</a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
