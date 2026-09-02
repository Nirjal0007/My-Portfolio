import { motion } from 'framer-motion'
import type { ElementType } from 'react'
import { cn } from '@/lib/utils'

interface AnimatedHeadingProps {
  text: string
  as?: ElementType
  className?: string
  delay?: number
}

const container = {
  hidden: {},
  show: (delay: number) => ({
    transition: { staggerChildren: 0.06, delayChildren: delay },
  }),
}

const word = {
  hidden: { opacity: 0, y: '110%' },
  show: {
    opacity: 1,
    y: '0%',
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
}

export function AnimatedHeading({ text, as: Tag = 'h2', className, delay = 0 }: AnimatedHeadingProps) {
  const words = text.split(' ')

  return (
    <Tag className={cn('overflow-hidden', className)}>
      <motion.span
        className="inline-block"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
        custom={delay}
        variants={container}
      >
        {words.map((w, i) => (
          <span key={i} className="inline-block overflow-hidden pb-1 pr-[0.28em] align-top">
            <motion.span className="inline-block" variants={word}>
              {w}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Tag>
  )
}
