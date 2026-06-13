import { useEffect, useRef } from 'react'

/*
  Particle Constellation — the brand mark.
  A cloud of micro-shapes (triangles, circles, diamonds, squares) that morphs
  between meaningful forms — a cosmic sphere, the initials "KS", a DNA helix,
  a brain, an eye whose pupil tracks the cursor, and a neural network — tweening
  particle-by-particle. It reacts to the cursor (local repulsion) and can be
  clicked to advance. Colors are drawn from the Dala palette; depth comes purely
  from scale + opacity on the void.
*/

const PALETTE = [
  { c: '#ffffff', w: 46 }, // bone — the bulk
  { c: '#9a9a9a', w: 22 }, // smoke
  { c: '#8052ff', w: 20 }, // plum voltage — the pulse
  { c: '#ffb829', w: 7 },  // amber spark — rare
  { c: '#15846e', w: 5 },  // lichen — rare
]

function pickColor() {
  const total = PALETTE.reduce((a, p) => a + p.w, 0)
  let r = Math.random() * total
  for (const p of PALETTE) if ((r -= p.w) < 0) return p.c
  return '#ffffff'
}

const SHAPES = ['circle', 'triangle', 'diamond', 'square']
const TWO_PI = Math.PI * 2
const EYE_PUPIL_FRAC = 0.14

/* ---------- Form generators (model space, roughly -1.3..1.3) ---------- */

function genSphere(n) {
  const pts = []
  for (let i = 0; i < n; i++) {
    const phi = Math.acos(1 - 2 * (i + 0.5) / n)
    const theta = Math.PI * (1 + Math.sqrt(5)) * i
    const rad = 0.6 + 0.4 * Math.sqrt(Math.random())
    pts.push({
      x: Math.sin(phi) * Math.cos(theta) * rad,
      y: Math.sin(phi) * Math.sin(theta) * rad,
      z: Math.cos(phi) * rad,
    })
  }
  return pts
}

function genTorus(n) {
  const pts = []
  const R1 = 0.85, R2 = 0.34
  for (let i = 0; i < n; i++) {
    const u = Math.random() * TWO_PI
    const v = Math.random() * TWO_PI
    pts.push({
      x: (R1 + R2 * Math.cos(v)) * Math.cos(u),
      y: R2 * Math.sin(v),
      z: (R1 + R2 * Math.cos(v)) * Math.sin(u),
    })
  }
  return pts
}

function genHelix(n) {
  const pts = []
  const turns = 3, rad = 0.5, height = 2.3
  for (let i = 0; i < n; i++) {
    const s = i / n
    const y = (s - 0.5) * height
    const theta = s * Math.PI * 2 * turns
    if (i % 5 === 0) {
      const t = Math.random()
      const ax = rad * Math.cos(theta), az = rad * Math.sin(theta)
      const bx = rad * Math.cos(theta + Math.PI), bz = rad * Math.sin(theta + Math.PI)
      pts.push({ x: ax + (bx - ax) * t, y, z: az + (bz - az) * t })
    } else {
      const ang = theta + (i % 2) * Math.PI
      pts.push({ x: rad * Math.cos(ang), y, z: rad * Math.sin(ang) })
    }
  }
  return pts
}

// Sample an arbitrary glyph (letters or emoji) into a forward-facing slab.
function genGlyph(str, n, font, cw, ch) {
  const oc = document.createElement('canvas')
  const o = oc.getContext('2d')
  oc.width = cw; oc.height = ch
  o.fillStyle = '#fff'
  o.textAlign = 'center'
  o.textBaseline = 'middle'
  o.font = font
  o.fillText(str, cw / 2, ch / 2)
  const d = o.getImageData(0, 0, cw, ch).data
  const f = []
  let mnx = cw, mxx = 0, mny = ch, mxy = 0
  for (let y = 0; y < ch; y += 2) {
    for (let x = 0; x < cw; x += 2) {
      if (d[(y * cw + x) * 4 + 3] > 128) {
        f.push([x, y])
        if (x < mnx) mnx = x; if (x > mxx) mxx = x
        if (y < mny) mny = y; if (y > mxy) mxy = y
      }
    }
  }
  if (!f.length) return genSphere(n)
  const cx = (mnx + mxx) / 2, cy = (mny + mxy) / 2
  const scale = 2.5 / Math.max(mxx - mnx, mxy - mny || 1)
  const pts = []
  for (let i = 0; i < n; i++) {
    const p = f[(Math.random() * f.length) | 0]
    pts.push({ x: (p[0] - cx) * scale, y: (p[1] - cy) * scale, z: (Math.random() - 0.5) * 0.14 })
  }
  return pts
}

// Eye — almond outline + iris ring + sparse sclera, with the pupil cluster
// stored LAST so the render loop can steer it toward the cursor.
function genEye(n) {
  const pts = []
  const pupilN = Math.floor(n * EYE_PUPIL_FRAC)
  const mainN = n - pupilN
  const w = 1.18, a = 0.62, b = 0.62
  for (let i = 0; i < mainN; i++) {
    const r = Math.random()
    if (r < 0.4) {
      const tt = Math.random() * 2 - 1
      const top = Math.random() < 0.5
      pts.push({ x: w * tt, y: (top ? a : -b) * (1 - tt * tt), z: (Math.random() - 0.5) * 0.05 })
    } else if (r < 0.78) {
      const ang = Math.random() * TWO_PI
      const rr = 0.4 + (Math.random() - 0.5) * 0.06
      pts.push({ x: Math.cos(ang) * rr, y: Math.sin(ang) * rr * 0.85, z: (Math.random() - 0.5) * 0.05 })
    } else {
      const x = (Math.random() * 2 - 1) * w
      const lim = Math.min(a, b) * (1 - (x / w) * (x / w))
      pts.push({ x, y: (Math.random() * 2 - 1) * lim, z: (Math.random() - 0.5) * 0.05 })
    }
  }
  for (let i = 0; i < pupilN; i++) {
    const ang = Math.random() * TWO_PI
    const rr = Math.sqrt(Math.random()) * 0.13
    pts.push({ x: Math.cos(ang) * rr, y: Math.sin(ang) * rr, z: 0.03 })
  }
  return pts
}

// Neural network — particles cluster into nodes and stream along the edges
// between consecutive layers.
function genNeural(n) {
  const layers = [4, 6, 6, 3]
  const L = layers.length
  const spreadX = 1.15
  const nodes = []
  const ranges = []
  for (let l = 0; l < L; l++) {
    const cnt = layers[l]
    const start = nodes.length
    for (let j = 0; j < cnt; j++) {
      const x = (l / (L - 1) - 0.5) * 2 * spreadX
      const y = cnt > 1 ? (j - (cnt - 1) / 2) / (cnt - 1) * 2 * 0.95 : 0
      nodes.push({ x, y })
    }
    ranges.push([start, nodes.length])
  }
  const edges = []
  for (let l = 0; l < L - 1; l++) {
    for (let a = ranges[l][0]; a < ranges[l][1]; a++) {
      for (let b = ranges[l + 1][0]; b < ranges[l + 1][1]; b++) {
        edges.push([nodes[a], nodes[b]])
      }
    }
  }
  const pts = []
  for (let i = 0; i < n; i++) {
    if (Math.random() < 0.7 && edges.length) {
      const e = edges[(Math.random() * edges.length) | 0]
      const t = Math.random()
      pts.push({
        x: e[0].x + (e[1].x - e[0].x) * t + (Math.random() - 0.5) * 0.015,
        y: e[0].y + (e[1].y - e[0].y) * t + (Math.random() - 0.5) * 0.015,
        z: (Math.random() - 0.5) * 0.14,
      })
    } else {
      const nd = nodes[(Math.random() * nodes.length) | 0]
      const ang = Math.random() * TWO_PI
      const rr = Math.sqrt(Math.random()) * 0.08
      pts.push({ x: nd.x + Math.cos(ang) * rr, y: nd.y + Math.sin(ang) * rr, z: (Math.random() - 0.5) * 0.05 })
    }
  }
  return pts
}

function buildForm(name, n) {
  if (name === 'sphere') return genSphere(n)
  if (name === 'torus') return genTorus(n)
  if (name === 'helix') return genHelix(n)
  if (name === 'brain') return genGlyph('🧠', n, '140px "Apple Color Emoji","Segoe UI Emoji","Noto Color Emoji",sans-serif', 220, 220)
  if (name === 'eye') return genEye(n)
  if (name === 'neural') return genNeural(n)
  if (name.startsWith('text:')) return genGlyph(name.slice(5), n, '700 130px Inter, system-ui, sans-serif', 360, 180)
  return genSphere(n)
}

// Forms that read best facing the viewer (gentle sway instead of full spin).
const faceForward = (name) =>
  name.startsWith('text:') || name === 'brain' || name === 'eye' || name === 'neural'

export default function Constellation({
  count = 1100,
  forms = ['sphere'],
  interactive = false,
  cycleMs = 5000,
  className,
  style,
}) {
  const canvasRef = useRef(null)
  const formIdx = useRef(0)
  const mouse = useRef({ px: -9999, py: -9999, nx: 0, ny: 0, tnx: 0, tny: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const parent = canvas.parentElement

    let W, H, DPR, R
    const resize = () => {
      DPR = Math.min(window.devicePixelRatio || 1, 2)
      W = parent.clientWidth
      H = parent.clientHeight
      canvas.width = W * DPR
      canvas.height = H * DPR
      canvas.style.width = W + 'px'
      canvas.style.height = H + 'px'
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0)
      R = Math.min(W, H) * 0.42
    }
    resize()

    const targets = forms.map(f => buildForm(f, count))
    const pupilN = Math.floor(count * EYE_PUPIL_FRAC)
    const pupilStart = count - pupilN

    const P = []
    for (let i = 0; i < count; i++) {
      const t0 = targets[0][i]
      P.push({
        x: t0.x, y: t0.y, z: t0.z,
        tx: t0.x, ty: t0.y, tz: t0.z,
        size: Math.random() * 2.2 + 1.4,
        shape: SHAPES[(Math.random() * SHAPES.length) | 0],
        color: pickColor(),
        tw: Math.random() * TWO_PI,
      })
    }

    const setForm = (idx) => {
      formIdx.current = ((idx % forms.length) + forms.length) % forms.length
      const tgt = targets[formIdx.current]
      for (let i = 0; i < count; i++) {
        P[i].tx = tgt[i].x; P[i].ty = tgt[i].y; P[i].tz = tgt[i].z
      }
    }

    let cycleTimer = null
    const startCycle = () => {
      if (forms.length < 2 || reduce) return
      clearInterval(cycleTimer)
      cycleTimer = setInterval(() => setForm(formIdx.current + 1), cycleMs)
    }
    startCycle()

    const drawShape = (x, y, s, shape, color, alpha) => {
      ctx.globalAlpha = alpha
      ctx.fillStyle = color
      switch (shape) {
        case 'triangle':
          ctx.beginPath(); ctx.moveTo(x, y - s); ctx.lineTo(x + s, y + s); ctx.lineTo(x - s, y + s); ctx.closePath(); ctx.fill(); break
        case 'diamond':
          ctx.beginPath(); ctx.moveTo(x, y - s); ctx.lineTo(x + s, y); ctx.lineTo(x, y + s); ctx.lineTo(x - s, y); ctx.closePath(); ctx.fill(); break
        case 'square':
          ctx.fillRect(x - s, y - s, s * 2, s * 2); break
        default:
          ctx.beginPath(); ctx.arc(x, y, s, 0, TWO_PI); ctx.fill()
      }
    }

    const REP_R = 95, REP_R2 = REP_R * REP_R, REP_PUSH = 34

    let rot = 0, raf
    const render = () => {
      ctx.clearRect(0, 0, W, H)
      mouse.current.nx += (mouse.current.tnx - mouse.current.nx) * 0.05
      mouse.current.ny += (mouse.current.tny - mouse.current.ny) * 0.05

      const name = forms[formIdx.current]
      const ff = faceForward(name)
      if (!reduce) rot += ff ? 0 : 0.0016
      const cx = W / 2, cy = H / 2
      const sway = Math.sin(performance.now() * 0.0003) * 0.22
      const ay = rot + (ff ? sway : 0) + mouse.current.nx * (ff ? 0.18 : 0.5)
      const ax = -0.32 + mouse.current.ny * (ff ? 0.12 : 0.32)
      const cosY = Math.cos(ay), sinY = Math.sin(ay)
      const cosX = Math.cos(ax), sinX = Math.sin(ax)
      const t = performance.now() * 0.001

      // Eye form: steer the pupil cluster toward the (eased) cursor.
      if (name === 'eye') {
        const tg = targets[formIdx.current]
        const ox = Math.max(-1, Math.min(1, mouse.current.nx)) * 0.24
        const oy = Math.max(-1, Math.min(1, mouse.current.ny)) * 0.2
        for (let i = pupilStart; i < count; i++) {
          P[i].tx = tg[i].x + ox
          P[i].ty = tg[i].y + oy
        }
      }

      const proj = []
      for (let i = 0; i < count; i++) {
        const p = P[i]
        p.x += (p.tx - p.x) * 0.06
        p.y += (p.ty - p.y) * 0.06
        p.z += (p.tz - p.z) * 0.06
        let x = p.x * cosY - p.z * sinY
        let z = p.x * sinY + p.z * cosY
        let y = p.y
        const y2 = y * cosX - z * sinX
        z = y * sinX + z * cosX
        y = y2
        const persp = 1 / (1.6 - z)
        proj.push({ sx: cx + x * R * persp, sy: cy + y * R * persp, depth: z, persp, p })
      }
      proj.sort((a, b) => a.depth - b.depth)

      const mx = mouse.current.px, my = mouse.current.py
      for (const o of proj) {
        let sx = o.sx, sy = o.sy
        if (interactive && mx > -9000) {
          const dx = sx - mx, dy = sy - my
          const d2 = dx * dx + dy * dy
          if (d2 < REP_R2 && d2 > 0.01) {
            const d = Math.sqrt(d2)
            const f = (1 - d / REP_R) * REP_PUSH
            sx += (dx / d) * f
            sy += (dy / d) * f
          }
        }
        const depthN = (o.depth + 1) / 2
        const twinkle = reduce ? 1 : 0.7 + 0.3 * Math.sin(t * 1.6 + o.p.tw)
        const alpha = Math.min(1, (0.18 + depthN * 0.82) * twinkle)
        const s = Math.max(0.5, o.p.size * o.persp * 0.7)
        drawShape(sx, sy, s, o.p.shape, o.p.color, alpha)
      }
      ctx.globalAlpha = 1
      raf = requestAnimationFrame(render)
    }
    render()

    const onMove = (e) => {
      const r = canvas.getBoundingClientRect()
      mouse.current.px = e.clientX - r.left
      mouse.current.py = e.clientY - r.top
      mouse.current.tnx = ((e.clientX - r.left) / r.width - 0.5) * 2
      mouse.current.tny = ((e.clientY - r.top) / r.height - 0.5) * 2
    }
    const onLeave = () => {
      mouse.current.px = -9999; mouse.current.py = -9999
      mouse.current.tnx = 0; mouse.current.tny = 0
    }
    const onClick = () => { setForm(formIdx.current + 1); startCycle() }

    window.addEventListener('mousemove', onMove)
    window.addEventListener('resize', resize)
    if (interactive) {
      canvas.addEventListener('mouseleave', onLeave)
      canvas.addEventListener('click', onClick)
    }
    return () => {
      cancelAnimationFrame(raf)
      clearInterval(cycleTimer)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('resize', resize)
      canvas.removeEventListener('mouseleave', onLeave)
      canvas.removeEventListener('click', onClick)
    }
  }, [count, forms, interactive, cycleMs])

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ display: 'block', width: '100%', height: '100%', cursor: interactive ? 'none' : 'default', ...style }}
    />
  )
}
