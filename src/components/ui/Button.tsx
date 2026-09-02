import { useRef, useState, type ReactNode, type MouseEvent } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface ButtonProps {
  children: ReactNode
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'ghost'
  icon?: ReactNode
  iconPosition?: 'left' | 'right'
  className?: string
  target?: string
}

export function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  icon,
  iconPosition = 'right',
  className,
  target,
}: ButtonProps) {
  const ref = useRef<HTMLElement | null>(null)
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [ripples, setRipples] = useState<{ x: number; y: number; id: number }[]>([])

  function handleMouseMove(e: MouseEvent) {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left - rect.width / 2) * 0.25
    const y = (e.clientY - rect.top - rect.height / 2) * 0.25
    setPos({ x, y })
  }

  function handleMouseLeave() {
    setPos({ x: 0, y: 0 })
  }

  function handleClick(e: MouseEvent) {
    const el = ref.current
    if (el) {
      const rect = el.getBoundingClientRect()
      const id = Date.now()
      setRipples((r) => [...r, { x: e.clientX - rect.left, y: e.clientY - rect.top, id }])
      setTimeout(() => setRipples((r) => r.filter((rp) => rp.id !== id)), 600)
    }
    onClick?.()
  }

  const base =
    'group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-lg px-6 py-3 text-sm font-medium transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue/60'

  const variants: Record<string, string> = {
    primary:
      'bg-gradient-to-br from-accent-blue to-blue-600 text-white shadow-glow hover:shadow-glow-lg',
    secondary:
      'border border-base-border bg-base-800/60 text-white hover:border-accent-blue/50 hover:bg-base-800',
    ghost: 'text-muted-light hover:text-white',
  }

  const Comp = (href ? motion.a : motion.button) as typeof motion.a

  return (
    <Comp
      ref={ref as any}
      href={href}
      target={target}
      onClick={handleClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: 'spring', stiffness: 200, damping: 15, mass: 0.4 }}
      className={cn(base, variants[variant], className)}
    >
      {icon && iconPosition === 'left' && (
        <span className="transition-transform duration-300 group-hover:-translate-x-0.5">{icon}</span>
      )}
      <span>{children}</span>
      {icon && iconPosition === 'right' && (
        <span className="transition-transform duration-300 group-hover:translate-x-0.5">{icon}</span>
      )}
      {ripples.map((r) => (
        <span
          key={r.id}
          className="pointer-events-none absolute h-2 w-2 animate-ping rounded-full bg-white/40"
          style={{ left: r.x - 4, top: r.y - 4 }}
        />
      ))}
    </Comp>
  )
}
