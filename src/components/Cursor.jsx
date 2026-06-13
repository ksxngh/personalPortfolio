import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const pos = useRef({ x: 0, y: 0 })
  const ring = useRef({ x: 0, y: 0 })
  const raf = useRef(null)

  useEffect(() => {
    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY }
      if (dotRef.current) {
        dotRef.current.style.left = e.clientX - 3.5 + 'px'
        dotRef.current.style.top = e.clientY - 3.5 + 'px'
      }
    }

    const animate = () => {
      ring.current.x += (pos.current.x - ring.current.x) * 0.14
      ring.current.y += (pos.current.y - ring.current.y) * 0.14
      if (ringRef.current) {
        ringRef.current.style.left = ring.current.x - 17 + 'px'
        ringRef.current.style.top = ring.current.y - 17 + 'px'
      }
      raf.current = requestAnimationFrame(animate)
    }

    // Event delegation — works with dynamically rendered elements
    const interactive = 'a, button, .card, .pill'
    const onOver = (e) => {
      if (e.target.closest(interactive)) ringRef.current?.classList.add('hovered')
    }
    const onOut = (e) => {
      if (e.target.closest(interactive)) ringRef.current?.classList.remove('hovered')
    }

    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseover', onOver)
    document.addEventListener('mouseout', onOut)
    raf.current = requestAnimationFrame(animate)

    return () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseout', onOut)
      cancelAnimationFrame(raf.current)
    }
  }, [])

  return (
    <>
      <div ref={dotRef} className="cursor" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  )
}
