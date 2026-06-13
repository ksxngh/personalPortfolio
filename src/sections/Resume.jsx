import SectionHead from '../components/SectionHead'

export default function Resume() {
  return (
    <section id="resume" className="shell" style={{ padding: 'var(--s-120) 0' }}>
      <SectionHead index="05" kicker="The One-Pager" title="My resume." />

      <div className="reveal" style={{ transitionDelay: '0.1s' }}>
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          flexWrap: 'wrap', gap: 'var(--s-18)', marginBottom: 'var(--s-24)',
        }}>
          <p className="body-copy" style={{ fontSize: '14px', marginBottom: 0 }}>
            Updated 2026 · Available for internships &amp; co-op
          </p>
          <div style={{ display: 'flex', gap: 'var(--s-12)', flexWrap: 'wrap' }}>
            <a className="btn-plum" href="/ResumeKaranveer.pdf" download="Karanveer_Singh_Resume.pdf">↓ Download PDF</a>
            <a className="btn-ghost" href="/ResumeKaranveer.pdf" target="_blank" rel="noopener noreferrer">Open in new tab →</a>
          </div>
        </div>

        <div style={{
          border: '1px solid var(--hairline)',
          borderRadius: 'var(--radius)',
          overflow: 'hidden',
        }}>
          <iframe
            src="/ResumeKaranveer.pdf#view=FitH"
            title="Karanveer Singh Resume"
            style={{ width: '100%', height: 'clamp(480px, 78vh, 880px)', border: 'none', display: 'block' }}
          />
        </div>
      </div>
    </section>
  )
}
