export function GridBackground() {
  const dots = Array.from({ length: 18 }, (_, i) => i)

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* subtle grid */}
      <div className="absolute inset-0 bg-grid bg-[size:64px_64px] opacity-40 [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,black_10%,transparent_75%)]" />

      {/* radial glow top */}
      <div className="absolute left-1/2 top-[-10%] h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-accent-blue/10 blur-[120px]" />

      {/* floating particles, extremely low opacity */}
      {dots.map((i) => {
        const size = 2 + (i % 3)
        const left = (i * 53) % 100
        const top = (i * 37) % 100
        const duration = 6 + (i % 5)
        const delay = (i % 7) * 0.6
        return (
          <span
            key={i}
            className="absolute rounded-full bg-accent-blue2/40 animate-float"
            style={{
              width: size,
              height: size,
              left: `${left}%`,
              top: `${top}%`,
              opacity: 0.25,
              animationDuration: `${duration}s`,
              animationDelay: `${delay}s`,
            }}
          />
        )
      })}
    </div>
  )
}
