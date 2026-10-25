/*
  Top-of-page availability strip — greyish-black gradient, flush to the top edge.
*/
export default function AnnouncementBanner() {
  return (
    <div style={{
      background: 'var(--grad-graphite)',
      color: 'var(--color-paper-white)',
      width: '100%',
    }}>
      <div className="shell" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '12px',
        padding: '11px var(--s-24)',
        fontSize: '13px',
        fontWeight: 'var(--w-med)',
        flexWrap: 'wrap',
        textAlign: 'center',
      }}>
        <span>Open to co-op &amp; internships — Spring, Summer &amp; Fall 2027</span>
        <a
          href="mailto:ks2328679@gmail.com"
          style={{
            color: 'var(--color-paper-white)',
            textDecoration: 'none',
            border: '1px solid rgba(255,255,255,0.4)',
            borderRadius: 'var(--r-pill)',
            padding: '3px 12px',
            fontSize: '12px',
            fontWeight: 'var(--w-emph)',
            transition: 'border-color 0.2s ease',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.9)')}
          onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)')}
        >
          Get in touch →
        </a>
      </div>
    </div>
  )
}
