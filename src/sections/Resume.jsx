import SectionHead from '../components/SectionHead'

// Rendered from the PDF by `npm run resume:preview` — re-run it after updating the résumé
const PREVIEW = { src: '/resume-preview.png', width: 1224, height: 1584 }

export default function Resume() {
  return (
    <section id="resume" className="shell section">
      <SectionHead index="05" kicker="The One-Pager" title="My résumé." />

      <div className="reveal resume-grid" style={{
        display: 'grid',
        gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.6fr)',
        gap: 'var(--s-48)',
        alignItems: 'start',
        transitionDelay: '0.1s',
      }}>
        <div className="resume-aside" style={{ position: 'sticky', top: '96px' }}>
          <p className="body-copy" style={{ marginBottom: 'var(--s-24)' }}>
            Latest version · Available for co-op from January 2027.
          </p>
          <div style={{ display: 'flex', gap: 'var(--s-12)', flexWrap: 'wrap' }}>
            <a className="btn-primary" href="/ResumeKaranveer.pdf" download="Karanveer_Singh_Resume.pdf">↓ Download PDF</a>
            <a className="btn-lilac" href="/ResumeKaranveer.pdf" target="_blank" rel="noopener noreferrer">Open in new tab →</a>
          </div>
        </div>

        {/* Page preview — an image, so no browser PDF-viewer toolbar; click opens the real PDF */}
        <a
          href="/ResumeKaranveer.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="card"
          style={{ display: 'block', overflow: 'hidden', padding: 0 }}
        >
          <img
            src={PREVIEW.src}
            width={PREVIEW.width}
            height={PREVIEW.height}
            alt="Karanveer Singh's résumé — opens the full PDF"
            loading="lazy"
            style={{ display: 'block', width: '100%', height: 'auto' }}
          />
        </a>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .resume-grid { grid-template-columns: 1fr !important; gap: var(--s-24) !important; }
          .resume-aside { position: static !important; }
        }
      `}</style>
    </section>
  )
}
