/*
  Section header — eyebrow kicker + thin display heading on the void.
  Wrap the heading in .line-mask so the .reveal observer animates it up.
*/
export default function SectionHead({ index, kicker, title }) {
  return (
    <div className="reveal" style={{ marginBottom: 'var(--s-60)' }}>
      <div style={{
        display: 'flex', alignItems: 'center', gap: '12px',
        marginBottom: 'var(--s-24)',
      }}>
        <span className="eyebrow">{index}</span>
        <span style={{ width: '40px', height: '1px', background: 'var(--hairline-strong)' }} />
        <span className="section-kicker">{kicker}</span>
      </div>
      <h2 className="display line-mask" style={{ fontSize: 'clamp(2.6rem, 6vw, 4.4rem)' }}>
        <span className="line-inner">{title}</span>
      </h2>
    </div>
  )
}
