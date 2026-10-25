/*
  Deep Lagoon feature band — the only dark surface in the system.
  Full-bleed tonal break: layered translucent geometry left, statement right.
*/
export default function FeatureBand() {
  return (
    <section style={{
      background: 'var(--color-deep-lagoon)',
      color: 'var(--color-paper-white)',
      padding: 'var(--s-96) 0',
      overflow: 'hidden',
    }}>
      <div className="shell">
        <div className="band-grid" style={{
          display: 'grid',
          gridTemplateColumns: '0.85fr 1.15fr',
          gap: 'var(--s-64)',
          alignItems: 'center',
        }}>
          {/* Layered translucent geometry */}
          <div style={{ position: 'relative', height: '280px' }} className="band-art">
            <div style={{
              position: 'absolute', top: '10%', left: '8%', width: '150px', height: '150px',
              background: 'rgba(212,199,255,0.22)', borderRadius: '16px',
              transform: 'rotate(-8deg)',
            }} />
            <div style={{
              position: 'absolute', top: '30%', left: '34%', width: '150px', height: '150px',
              background: 'rgba(233,201,212,0.18)', borderRadius: '16px',
              transform: 'rotate(6deg)',
            }} />
            <div style={{
              position: 'absolute', top: '50%', left: '18%', width: '150px', height: '150px',
              background: 'rgba(243,217,182,0.16)', borderRadius: '16px',
              transform: 'rotate(-3deg)',
            }} />
            <div style={{
              position: 'absolute', top: '38%', left: '26%',
              fontSize: '28px', fontWeight: 'var(--w-reg)',
              fontStyle: 'italic', color: 'rgba(255,255,255,0.9)',
              fontFamily: 'Georgia, serif', letterSpacing: '0.01em',
            }}>model → interface</div>
          </div>

          {/* Statement */}
          <div className="reveal">
            <div className="kicker" style={{ color: 'rgba(255,255,255,0.6)', marginBottom: 'var(--s-20)', display: 'block' }}>
              How I work
            </div>
            <h2 className="display" style={{ color: 'var(--color-paper-white)', fontSize: 'clamp(2rem, 4.5vw, 3.25rem)', marginBottom: 'var(--s-24)' }}>
              I build the whole thing — the model and the interface around it.
            </h2>
            <p className="body-copy" style={{ color: 'rgba(255,255,255,0.78)', marginBottom: 'var(--s-32)', maxWidth: '52ch' }}>
              From training the classifier to wiring the API to shipping a UI people
              actually want to use. I like owning a problem end to end — and I'm looking
              for a co-op team in 2027 where I can do exactly that.
            </p>
            <a className="btn-outline-white" href="mailto:ks2328679@gmail.com">
              Let's talk about 2027 →
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .band-grid { grid-template-columns: 1fr !important; gap: var(--s-40) !important; }
          .band-art { height: 220px; }
        }
      `}</style>
    </section>
  )
}
