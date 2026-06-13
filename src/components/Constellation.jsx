import { useEffect, useRef } from 'react'

/*
  Particle Constellation — the brand mark.
  Thousands of micro-shapes (triangles, circles, diamonds, squares) arranged on
  and within a sphere, slowly rotating in 3D. Density clusters toward the core,
  drifts sparse at the edges. Colors drawn from the Dala palette. No glow, no
  gradient — depth comes purely from scale + opacity against the void.
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
  for (const p of PALETTE) {
    if ((r -= p.w) < 0) return p.c
  }
  return '#ffffff'
}

const SHAPES = ['circle', 'triangle', 'diamond', 'square']

export default function Constellation({ count = 1100, className, style }) {
  const canvasRef = useRef(null)
  const mouse = useRef({ x: 0, y: 0, tx: 0, ty: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let W, H, DPR, R
    const parent = canvas.parentElement

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

    // Build particles. Most sit on a sphere shell; a slice drift inside the
    // volume so the form reads as a permeable cloud rather than a hard ball.
    const pts = []
    for (let i = 0; i < count; i++) {
      // Fibonacci sphere for an even shell distribution
      const phi = Math.acos(1 - 2 * (i + 0.5) / count)
      const theta = Math.PI * (1 + Math.sqrt(5)) * i
      // radial bias: most near the shell, some pulled inward toward the core
      const rad = 0.55 + 0.45 * Math.pow(Math.random(), 0.5)
      pts.push({
        x: Math.sin(phi) * Math.cos(theta) * rad,
        y: Math.sin(phi) * Math.sin(theta) * rad,
        z: Math.cos(phi) * rad,
        size: Math.random() * 2.2 + 1.4,
        shape: SHAPES[(Math.random() * SHAPES.length) | 0],
        color: pickColor(),
        tw: Math.random() * Math.PI * 2, // twinkle phase
      })
    }

    const drawShape = (x, y, s, shape, color, alpha) => {
      ctx.globalAlpha = alpha
      ctx.fillStyle = color
      switch (shape) {
        case 'triangle':
          ctx.beginPath()
          ctx.moveTo(x, y - s)
          ctx.lineTo(x + s, y + s)
          ctx.lineTo(x - s, y + s)
          ctx.closePath()
          ctx.fill()
          break
        case 'diamond':
          ctx.beginPath()
          ctx.moveTo(x, y - s)
          ctx.lineTo(x + s, y)
          ctx.lineTo(x, y + s)
          ctx.lineTo(x - s, y)
          ctx.closePath()
          ctx.fill()
          break
        case 'square':
          ctx.fillRect(x - s, y - s, s * 2, s * 2)
          break
        default:
          ctx.beginPath()
          ctx.arc(x, y, s, 0, Math.PI * 2)
          ctx.fill()
      }
    }

    let rot = 0
    let raf
    const render = () => {
      ctx.clearRect(0, 0, W, H)
      // ease mouse parallax
      mouse.current.x += (mouse.current.tx - mouse.current.x) * 0.05
      mouse.current.y += (mouse.current.ty - mouse.current.y) * 0.05

      rot += reduce ? 0 : 0.0016
      const cx = W / 2
      const cy = H / 2
      const ay = rot + mouse.current.x * 0.5          // yaw
      const ax = -0.35 + mouse.current.y * 0.35        // fixed tilt + parallax
      const cosY = Math.cos(ay), sinY = Math.sin(ay)
      const cosX = Math.cos(ax), sinX = Math.sin(ax)
      const t = performance.now() * 0.001

      // transform + depth sort
      const proj = pts.map(p => {
        // rotate Y
        let x = p.x * cosY - p.z * sinY
        let z = p.x * sinY + p.z * cosY
        let y = p.y
        // rotate X
        const y2 = y * cosX - z * sinX
        z = y * sinX + z * cosX
        y = y2
        const persp = 1 / (1.6 - z) // depth → perspective scale
        return {
          sx: cx + x * R * persp,
          sy: cy + y * R * persp,
          depth: z,
          persp,
          p,
        }
      })
      proj.sort((a, b) => a.depth - b.depth)

      for (const o of proj) {
        const depthN = (o.depth + 1) / 2 // 0 (back) → 1 (front)
        const twinkle = reduce ? 1 : 0.7 + 0.3 * Math.sin(t * 1.6 + o.p.tw)
        const alpha = (0.18 + depthN * 0.82) * twinkle
        const s = Math.max(0.5, o.p.size * o.persp * 0.7)
        drawShape(o.sx, o.sy, s, o.p.shape, o.p.color, Math.min(1, alpha))
      }
      ctx.globalAlpha = 1
      raf = requestAnimationFrame(render)
    }
    render()

    const onMove = (e) => {
      const r = canvas.getBoundingClientRect()
      mouse.current.tx = ((e.clientX - r.left) / r.width - 0.5) * 2
      mouse.current.ty = ((e.clientY - r.top) / r.height - 0.5) * 2
    }
    window.addEventListener('mousemove', onMove)
    window.addEventListener('resize', resize)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('resize', resize)
    }
  }, [count])

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ display: 'block', width: '100%', height: '100%', ...style }}
    />
  )
}
