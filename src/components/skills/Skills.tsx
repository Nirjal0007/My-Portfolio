import { skillCategories } from '@/data/skills'
import { SectionReveal, StaggerGroup, staggerItem } from '@/components/ui/SectionReveal'
import { AnimatedHeading } from '@/components/ui/AnimatedHeading'
import { motion } from 'framer-motion'

export function Skills() {
  return (
    <section id="skills" className="relative px-6 py-32 md:py-40">
      <div className="mx-auto max-w-6xl">
        <SectionReveal blur={false} y={12}>
          <span className="mb-3 block font-mono text-sm tracking-wide text-accent-blue2">
            Stack
          </span>
        </SectionReveal>
        <AnimatedHeading
          text="Technologies I Work With"
          className="mb-16 text-4xl font-semibold tracking-tight text-paper sm:text-5xl"
        />

        <StaggerGroup
          className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-5"
          staggerDelay={0.08}
        >
          {skillCategories.map((category) => (
            <motion.div key={category.id} variants={staggerItem} className="relative pl-4">
              <motion.span
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="absolute left-0 top-0 h-full w-px origin-top bg-base-border"
              />
              <h3 className="mb-5 text-sm font-semibold uppercase tracking-widest text-muted">
                {category.title}
              </h3>
              <ul className="space-y-3">
                {category.skills.map((skill) => (
                  <li key={skill} className="text-[15px] text-muted-light">
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}
