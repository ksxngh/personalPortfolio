/*
  Section header — numbered kicker + weight-460 editorial heading.
  Left-aligned for editorial rhythm. No violet (reserved for links).
*/
export default function SectionHead({ index, kicker, title, intro }) {
  return (
    <div className="reveal" style={{ marginBottom: 'var(--s-48)', maxWidth: '760px' }}>
      <div style={{
        display: 'flex', alignItems: 'center', gap: '12px',
        marginBottom: 'var(--s-20)',
      }}>
        <span className="kicker" style={{ color: 'var(--color-stone-gray)' }}>{index}</span>
        <span style={{ width: '32px', height: '1px', background: 'var(--color-soft-mist)' }} />
        <span className="kicker">{kicker}</span>
      </div>
      <h2 className="heading-lg line-mask">
        <span className="line-inner">{title}</span>
      </h2>
      {intro && (
        <p className="body-copy muted" style={{ marginTop: 'var(--s-16)' }}>{intro}</p>
      )}
    </div>
  )
}
