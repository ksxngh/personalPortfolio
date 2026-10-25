import { useEffect, useRef, useState } from 'react'

/*
  Contact — spec-sheet styling (mono labels, hairline tables) with the
  pitch + actions on the left, and contact details + origin story on the right.
*/

const EMAIL = 'ks2328679@gmail.com'

const CONTACT_ROWS = [
  { key: 'LinkedIn', value: '/in/ksxngh', href: 'https://www.linkedin.com/in/ksxngh/', icon: '↗' },
  { key: 'GitHub', value: '/ksxngh', href: 'https://github.com/ksxngh', icon: '↗' },
  { key: 'Phone', value: '236-632-3334', href: 'tel:+12366323334', icon: '→' },
  { key: 'Résumé', value: 'PDF · 1 page — download', href: '/ResumeKaranveer.pdf', download: 'Karanveer_Singh_Resume.pdf', icon: '↓' },
]

// Oldest first
const STORY = [
  { when: 'Early days', what: 'Video games', detail: 'Started out playing games, then got curious about how they actually worked.' },
  { when: 'High school', what: 'Robotics', detail: 'Got into robotics and mentored a FIRST LEGO League team to 2nd at regionals.' },
  { when: 'SFU', what: 'Computing Science', detail: 'Started CS at Simon Fraser University. Now in 3rd year.' },
  { when: '2025', what: 'First clients', detail: 'Started freelancing sites for local trade businesses.' },
  { when: '2026', what: 'Machine learning', detail: 'A 97.7% spam classifier, a myopia progression model, an AI car-valuation app.' },
  { when: 'May 2026', what: 'Founded CallCatch', detail: 'Missed-call recovery SaaS, now live on real calls.' },
  { when: 'Next', what: 'Co-op · 2027', detail: 'Spring, Summer, or Fall terms, starting January.', next: true },
]

function CopyIcon({ done }) {
  return done ? (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  ) : (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  )
}

function useCopyEmail() {
  const [copied, setCopied] = useState(false)
  const timer = useRef(null)
  useEffect(() => () => clearTimeout(timer.current), [])

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
      clearTimeout(timer.current)
      timer.current = setTimeout(() => setCopied(false), 1800)
    } catch {
      // Clipboard blocked (insecure context, permissions) — fall back to the mail client
      window.location.href = `mailto:${EMAIL}`
    }
  }
  return [copied, copy]
}

export default function Contact() {
  const [copied, copyEmail] = useCopyEmail()

  return (
    <section id="contact" className="shell section" style={{ paddingTop: 'var(--s-24)', paddingBottom: 'var(--s-64)' }}>
      <div className="reveal contact-sheet">
        <div className="contact-grid">
          {/* Left — pitch + actions */}
          <div className="contact-pitch">
            <div className="mono-label" style={{
              display: 'flex', alignItems: 'center', gap: '12px',
              color: 'var(--color-ink-charcoal)', marginBottom: 'var(--s-24)',
            }}>
              <span style={{ width: '28px', height: '1px', background: 'currentColor', flexShrink: 0 }} />
              Open to co-op &amp; internships — 2027
            </div>

            <h2 className="display" style={{ fontSize: 'clamp(2.6rem, 5.5vw, 4.25rem)', marginBottom: 'var(--s-24)' }}>
              Let's build something together.
            </h2>

            <p className="body-copy" style={{ maxWidth: '46ch', marginBottom: 'var(--s-32)' }}>
              Looking for SWE co-op and internship terms in Spring, Summer, and Fall 2027:
              full-stack, AI/ML, or anything that ships to real users. Happy to talk LLM
              pipelines, Twilio webhooks, or why every missed call is a lost customer.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 'var(--s-12)' }}>
              <button className="btn-primary" onClick={copyEmail}>
                {copied ? 'Copied' : 'Copy email'}<span className="copy-addr"> · {EMAIL}</span> <CopyIcon done={copied} />
              </button>
              <div style={{ display: 'flex', gap: 'var(--s-16)', flexWrap: 'wrap', alignItems: 'center' }}>
                <a className="btn-lilac" href="https://www.linkedin.com/in/ksxngh/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
                <a className="btn-ghost" href="/ResumeKaranveer.pdf" download="Karanveer_Singh_Resume.pdf">↓ Résumé — PDF</a>
              </div>
            </div>
            <span role="status" style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0 0 0 0)' }}>
              {copied ? 'Email address copied to clipboard' : ''}
            </span>
          </div>

          {/* Right — contact details + origin story */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--s-32)', minWidth: 0 }}>
            <div>
              <div className="mono-label" style={{ color: 'var(--color-ink-charcoal)', marginBottom: 'var(--s-12)' }}>Reach me</div>
              <div className="spec">
                <button className="spec-row" data-cols="contact" onClick={copyEmail} aria-label={`Copy email address ${EMAIL}`}>
                  <span className="spec-key">Email</span>
                  <span className="spec-val">{EMAIL}</span>
                  <span style={{ justifyContent: 'center', color: 'var(--color-stone-gray)' }}><CopyIcon done={copied} /></span>
                </button>
                {CONTACT_ROWS.map(r => (
                  <a
                    key={r.key}
                    className="spec-row"
                    data-cols="contact"
                    href={r.href}
                    {...(r.download ? { download: r.download } : {})}
                    {...(r.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  >
                    <span className="spec-key">{r.key}</span>
                    <span className="spec-val">{r.value}</span>
                    <span style={{ justifyContent: 'center', color: 'var(--color-stone-gray)' }}>{r.icon}</span>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <div className="mono-label" style={{ color: 'var(--color-ink-charcoal)', marginBottom: 'var(--s-12)' }}>How I got here</div>
              <div className="spec">
                {STORY.map(s => (
                  <div key={s.when} className={`spec-row${s.next ? ' story-next' : ''}`} data-cols="story">
                    <span className="spec-key">{s.when}</span>
                    <span style={{ display: 'block', lineHeight: 1.45 }}>
                      <span style={{ display: 'block', fontSize: '15px', fontWeight: 'var(--w-emph)' }}>{s.what}</span>
                      <span style={{ display: 'block', fontSize: '13.5px', color: 'var(--color-stone-gray)' }}>{s.detail}</span>
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="mono-label" style={{ color: 'var(--color-ink-charcoal)', marginBottom: 'var(--s-12)' }}>Sign-off</div>
              <div style={{ position: 'relative' }}>
                <div className="spec">
                  <div className="spec-row spec-head" data-cols="approvals">
                    <span>Function</span><span>Name / Signature</span><span>Date</span>
                  </div>
                  <div className="spec-row" data-cols="approvals">
                    <span className="spec-key">Drawn</span>
                    <span className="signature">Karanveer Singh</span>
                    <span className="spec-val">2026-10-25</span>
                  </div>
                  <div className="spec-row" data-cols="approvals">
                    <span className="spec-key">Checked</span>
                    <span><span className="sig-slot">Reserved for your hiring team</span></span>
                    <span className="spec-val">—</span>
                  </div>
                  <div className="spec-row" data-cols="approvals">
                    <span className="spec-key">Approved</span>
                    <span className="spec-val" style={{ fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Awaiting offer</span>
                    <span className="spec-val">—</span>
                  </div>
                </div>
                <div className="stamp" aria-hidden="true">
                  <strong>Available Jan 2027</strong>
                  <span>Co-op · Spring / Summer / Fall</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .contact-sheet {
          border-radius: 24px;
          border: 1px solid var(--color-soft-mist);
          background:
            radial-gradient(70% 120% at 90% 10%, rgba(255,255,255,0.9) 0%, transparent 55%),
            radial-gradient(60% 100% at 8% 100%, rgba(41,40,39,0.08) 0%, transparent 60%),
            linear-gradient(135deg, #f5f4f0 0%, #e2e0da 100%);
        }
        .contact-grid {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 1.1fr);
          gap: var(--s-64);
          align-items: start;
          padding: clamp(var(--s-28), 5vw, var(--s-64));
        }

        .spec {
          background: var(--color-paper-white);
          border: 1px solid var(--color-soft-mist);
          border-radius: 14px;
          overflow: hidden;
        }
        .spec-row {
          display: grid;
          width: 100%;
          border: none;
          border-top: 1px solid var(--color-soft-mist);
          background: none;
          color: inherit;
          font: inherit;
          text-align: left;
          text-decoration: none;
          padding: 0;
        }
        .spec-row:first-child { border-top: none; }
        .spec-row > * {
          display: flex;
          align-items: center;
          min-width: 0;
          padding: 12px 16px;
          border-left: 1px solid var(--color-soft-mist);
          overflow-wrap: anywhere;
        }
        .spec-row > *:first-child { border-left: none; }
        a.spec-row, button.spec-row { cursor: pointer; transition: background 0.2s ease; }
        a.spec-row:hover, button.spec-row:hover { background: #faf9f6; }
        .spec-key {
          font-family: var(--font-mono);
          font-size: 11.5px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--color-stone-gray);
        }
        .spec-val {
          font-family: var(--font-mono);
          font-size: 13px;
          color: var(--color-ink-charcoal);
        }
        .spec-row[data-cols="contact"] { grid-template-columns: 112px minmax(0, 1fr) 48px; }
        .spec-row[data-cols="story"] { grid-template-columns: 132px minmax(0, 1fr); }
        .spec-row[data-cols="story"] > .spec-key { align-items: flex-start; padding-top: 15px; }
        .story-next { background: rgba(212, 199, 255, 0.28); }
        .story-next > .spec-key { color: var(--color-ink-charcoal); }

        .spec-head > * {
          padding-top: 9px;
          padding-bottom: 9px;
          background: #faf9f6;
          font-family: var(--font-mono);
          font-size: 10.5px;
          font-weight: 500;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--color-stone-gray);
        }
        .spec-row[data-cols="approvals"] { grid-template-columns: 132px minmax(0, 1fr) 104px; }
        .spec-row[data-cols="approvals"] > :nth-child(3) {
          font-size: 12px; white-space: nowrap; overflow-wrap: normal; padding-left: 12px; padding-right: 12px;
        }
        .signature {
          font-family: var(--font-script);
          font-size: 28px;
          line-height: 1;
          color: var(--color-ink-charcoal);
        }
        .sig-slot {
          display: block;
          width: 100%;
          padding: 8px 10px;
          border: 1px dashed #c9c5bc;
          border-radius: 4px;
          font-family: var(--font-mono);
          font-size: 10px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #9a968c;
        }

        /* Rubber stamp — dark-teal ink over the sign-off table */
        .stamp {
          position: absolute;
          top: -20px;
          right: -8px;
          transform: rotate(-5deg);
          padding: 7px 14px;
          border: 2px solid currentColor;
          border-radius: 6px;
          outline: 1px solid currentColor;
          outline-offset: 2px;
          color: rgba(12, 66, 67, 0.82);
          background: rgba(255, 255, 255, 0.4);
          font-family: var(--font-mono);
          text-transform: uppercase;
          text-align: center;
          pointer-events: none;
        }
        .stamp strong { display: block; font-size: 13px; font-weight: 500; letter-spacing: 0.18em; }
        .stamp span { display: block; margin-top: 3px; font-size: 9px; letter-spacing: 0.16em; }

        /* Pitch stays in view while the taller right column scrolls past */
        .contact-pitch { position: sticky; top: 96px; }

        @media (max-width: 960px) {
          .contact-grid { grid-template-columns: 1fr; gap: var(--s-48); }
          .contact-pitch { position: static; }
        }
        @media (max-width: 480px) {
          .contact-grid { padding: var(--s-24) var(--s-16); }
          .spec-row > * { padding: 10px 10px; }
          .spec-val { font-size: 12px; }
          .spec-key { font-size: 10.5px; }
          .copy-addr { display: none; }
          .signature { font-size: 24px; }
          .spec-head > * { letter-spacing: 0.08em; overflow-wrap: normal; }
          /* Sign-off drops the date column on phones */
          .spec-row[data-cols="approvals"] { grid-template-columns: 88px minmax(0, 1fr); }
          .spec-row[data-cols="approvals"] > :nth-child(3) { display: none; }
          .stamp { right: 4px; transform: rotate(-5deg) scale(0.85); transform-origin: top right; }
          .spec-row[data-cols="contact"] { grid-template-columns: 76px minmax(0, 1fr) 36px; }
          .spec-row[data-cols="story"] { grid-template-columns: 84px minmax(0, 1fr); }
          .spec-row[data-cols="story"] > .spec-key { padding-top: 13px; overflow-wrap: normal; }
        }
      `}</style>
    </section>
  )
}
