import { useEffect, useState } from 'react'
import Dimension from './Dimension'

/*
  Fig. 1 — CallCatch, annotated like a part on a technical drawing.
  A demo inbox thread replays the product loop on the graphite stage:
  missed call → instant text-back → LLM triage over SMS → emergency escalation.
*/

const THREAD = [
  { kind: 'missed', wait: 700 },
  { kind: 'delta', wait: 600 },
  { kind: 'out', typing: 1000, text: 'Hey, it’s Oakridge Plumbing! Sorry we missed your call. What’s going on? Send your name and address too.' },
  { kind: 'in', typing: 1600, text: 'Pipe burst under the kitchen sink, water everywhere. Dan, 1428 Oak St' },
  { kind: 'out', typing: 1000, text: 'Thanks Dan. Flagging this as an emergency and alerting the owner now.' },
  { kind: 'alert', wait: 700 },
]
const HOLD_MS = 4500

const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

const bubble = {
  out: { background: 'var(--grad-graphite)', color: 'var(--color-paper-white)', borderRadius: '16px 16px 4px 16px' },
  in: { background: '#efede8', color: 'var(--color-ink-charcoal)', borderRadius: '16px 16px 16px 4px' },
}

function PhoneMissedIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="23" y1="1" x2="17" y2="7" />
      <line x1="17" y1="1" x2="23" y2="7" />
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

function TypingDots({ kind }) {
  return (
    <div style={{
      ...bubble[kind],
      position: 'absolute', top: 0, [kind === 'out' ? 'right' : 'left']: 0,
      display: 'flex', gap: '4px', padding: '11px 13px',
    }}>
      {[0, 1, 2].map(i => <span key={i} className="typing-dot" style={{ animationDelay: `${i * 0.15}s` }} />)}
    </div>
  )
}

function Message({ m, visible, typing }) {
  const appear = {
    opacity: visible ? 1 : 0,
    transform: visible ? 'none' : 'translateY(6px)',
    transition: 'opacity 0.35s ease, transform 0.35s ease',
  }

  if (m.kind === 'missed') {
    return (
      <div style={{ ...appear, textAlign: 'center', fontSize: '12px', lineHeight: 1.4, color: 'var(--color-stone-gray)' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontWeight: 'var(--w-emph)', color: 'var(--color-ink-charcoal)' }}>
          <PhoneMissedIcon /> Missed call
        </div>
        <div>(604) 555-0142 · 2:14 PM</div>
      </div>
    )
  }

  if (m.kind === 'delta') {
    return (
      <div style={{ ...appear, display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span style={{ flex: 1, borderTop: '1px dashed #cfcbc2' }} />
        <span className="mono-label" style={{ fontSize: '10px', letterSpacing: '0.12em' }}>Text-back +4.2 s</span>
        <span style={{ flex: 1, borderTop: '1px dashed #cfcbc2' }} />
      </div>
    )
  }

  if (m.kind === 'alert') {
    return (
      <div style={{
        ...appear,
        display: 'flex', alignItems: 'center', gap: '10px',
        padding: '10px 12px', borderRadius: '12px',
        border: '1px solid var(--color-soft-mist)', background: '#faf9f6',
      }}>
        <span className="mono-label" style={{
          background: 'var(--grad-graphite)', color: 'var(--color-paper-white)',
          fontSize: '9.5px', letterSpacing: '0.1em', padding: '4px 7px', borderRadius: '6px', flexShrink: 0,
        }}>Emergency</span>
        <div style={{ lineHeight: 1.35 }}>
          <div style={{ fontSize: '13px', fontWeight: 'var(--w-emph)' }}>Owner alerted first</div>
          <div style={{ fontSize: '12px', color: 'var(--color-stone-gray)' }}>Burst pipe · Dan · 1428 Oak St</div>
        </div>
      </div>
    )
  }

  return (
    <div style={{ position: 'relative', display: 'flex', justifyContent: m.kind === 'out' ? 'flex-end' : 'flex-start' }}>
      <div style={{ ...appear, ...bubble[m.kind], maxWidth: '84%', padding: '9px 12px', fontSize: '13px', lineHeight: 1.4 }}>
        {m.text}
      </div>
      {typing && <TypingDots kind={m.kind} />}
    </div>
  )
}

export default function CallCatchFigure() {
  const [reduced] = useState(prefersReducedMotion)
  const [step, setStep] = useState(() => (reduced ? THREAD.length : 0))
  const [typing, setTyping] = useState(false)

  // Replay loop: reveal one message per step (with a typing beat for chat
  // bubbles), hold on the finished thread, then start over.
  useEffect(() => {
    if (reduced) return
    if (step >= THREAD.length) {
      const t = setTimeout(() => setStep(0), HOLD_MS)
      return () => clearTimeout(t)
    }
    const next = THREAD[step]
    if (next.typing && !typing) {
      const t = setTimeout(() => setTyping(true), 400)
      return () => clearTimeout(t)
    }
    const t = setTimeout(() => {
      setTyping(false)
      setStep(s => s + 1)
    }, next.typing ?? next.wait)
    return () => clearTimeout(t)
  }, [step, typing, reduced])

  return (
    <figure style={{ margin: 0 }}>
      <div className="cc-fig-row">
        <div
          className="cc-stage"
          role="img"
          aria-label="Demo CallCatch inbox: a missed call is texted back within seconds, the caller reports a burst pipe over SMS, and the owner is alerted first."
        >
          <div className="cc-screen">
            <div style={{
              display: 'flex', alignItems: 'center', gap: '10px',
              padding: '12px 14px', borderBottom: '1px solid var(--color-soft-mist)',
            }}>
              <span style={{
                width: '30px', height: '30px', borderRadius: '50%', flexShrink: 0,
                background: 'var(--grad-graphite)', color: 'var(--color-paper-white)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '11px', fontWeight: 'var(--w-bold)',
              }}>OP</span>
              <div style={{ lineHeight: 1.3, minWidth: 0 }}>
                <div style={{ fontSize: '14px', fontWeight: 'var(--w-emph)' }}>Oakridge Plumbing</div>
                <div style={{ fontSize: '12px', color: 'var(--color-stone-gray)' }}>CallCatch inbox</div>
              </div>
              <span className="mono-label" style={{
                marginLeft: 'auto', fontSize: '9.5px', letterSpacing: '0.1em', whiteSpace: 'nowrap',
                padding: '4px 7px', borderRadius: '6px', background: 'var(--color-lilac-mist)', color: 'var(--color-ink-charcoal)',
              }}>AI triage</span>
            </div>

            {/* Every message is always rendered (hidden until its turn) so the card never changes height */}
            <div style={{ padding: '14px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {THREAD.map((m, i) => (
                <Message key={i} m={m} visible={i < step} typing={typing && i === step} />
              ))}
            </div>
          </div>
        </div>
        <Dimension vertical label="Next.js · Supabase · Twilio · Groq" className="cc-dim-v" />
      </div>

      <figcaption className="cc-under">
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: 'var(--s-12)', flexWrap: 'wrap', marginBottom: 'var(--s-12)' }}>
          <span className="mono-label" style={{ color: 'var(--color-ink-charcoal)' }}>Fig. 1 — CallCatch</span>
          <span className="mono-label">Demo thread · Live in production</span>
        </div>
        <Dimension label="Text-back < 5 s · 40 automated tests" />
      </figcaption>

      <style>{`
        .cc-fig-row {
          display: grid;
          grid-template-columns: minmax(0, 1fr) 22px;
          gap: var(--s-16);
        }
        .cc-stage {
          display: flex;
          justify-content: center;
          padding: var(--s-36) var(--s-24);
          border-radius: 24px;
          border: 1px solid #1f1f23;
          background:
            radial-gradient(90% 70% at 22% 12%, rgba(255,255,255,0.13) 0%, transparent 60%),
            radial-gradient(80% 80% at 95% 100%, rgba(130,130,145,0.35) 0%, transparent 60%),
            linear-gradient(155deg, #1b1b1f 0%, #2b2b31 45%, #47474f 100%);
        }
        .cc-screen {
          width: min(330px, 100%);
          background: var(--color-paper-white);
          color: var(--color-ink-charcoal);
          border-radius: 20px;
          overflow: hidden;
        }
        .cc-under { margin-top: var(--s-16); margin-right: calc(22px + var(--s-16)); }
        @media (max-width: 520px) {
          .cc-fig-row { grid-template-columns: 1fr; }
          .cc-dim-v { display: none; }
          .cc-under { margin-right: 0; }
          .cc-under .dim-text { font-size: 10px; letter-spacing: 0.08em; }
          .cc-stage { padding: var(--s-24) var(--s-16); }
        }
      `}</style>
    </figure>
  )
}
