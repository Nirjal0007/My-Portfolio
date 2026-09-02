import { useEffect, useRef } from 'react'
import { useIsDesktop } from '@/hooks/useIsDesktop'

export function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null)
  const isDesktop = useIsDesktop()

  useEffect(() => {
    if (!isDesktop) return
    const el = ref.current
    if (!el) return

    let raf = 0
    let targetX = window.innerWidth / 2
    let targetY = window.innerHeight / 2
    let x = targetX
    let y = targetY

    function onMove(e: PointerEvent) {
      targetX = e.clientX
      targetY = e.clientY
    }

    function tick() {
      x += (targetX - x) * 0.15
      y += (targetY - y) * 0.15
      if (el) el.style.transform = `translate3d(${x - 200}px, ${y - 200}px, 0)`
      raf = requestAnimationFrame(tick)
    }

    window.addEventListener('pointermove', onMove)
    raf = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('pointermove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [isDesktop])

  if (!isDesktop) return null

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[1] h-[400px] w-[400px] rounded-full opacity-[0.15] mix-blend-screen"
      style={{
        background:
          'radial-gradient(circle, rgba(79,140,255,0.9) 0%, rgba(79,140,255,0.15) 45%, transparent 70%)',
        willChange: 'transform',
      }}
    />
  )
}
