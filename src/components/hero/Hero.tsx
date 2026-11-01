import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react'
import { profile } from '@/data/profile'
import { navSocialIcons } from '@/data/social'
import { Button } from '@/components/ui/Button'

const SOCIAL_ICONS = { github: Github, linkedin: Linkedin, mail: Mail }

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
}
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
}

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })

  const textY = useTransform(scrollYProgress, [0, 1], [0, 80])
  const textOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])
  const photoY = useTransform(scrollYProgress, [0, 1], [0, -60])
  const photoOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  function scrollToProjects() {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative flex min-h-screen items-center overflow-hidden px-6 pb-16 pt-32 md:pt-24"
    >
      <div className="mx-auto grid max-w-6xl w-full items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          style={{ y: textY, opacity: textOpacity }}
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div
            variants={item}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-base-border bg-base-900/60 px-4 py-1.5 text-xs font-medium tracking-wide text-accent-blue2"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent-blue2" />
            SOFTWARE DEVELOPER · AI/ML ENTHUSIAST
          </motion.div>

          <motion.div variants={item} className="mb-8">
  <p className="mb-4 text-sm font-medium uppercase tracking-[0.35em] text-accent-blue2">
    Hi, I'm
  </p>

  <h1 className="text-[15vw] font-black uppercase leading-[0.82] tracking-[-0.06em] text-white sm:text-7xl lg:text-[6rem] xl:text-[7rem]">
    {profile.firstName}
    <br />
    {profile.lastName}
  </h1>
</motion.div>

          <motion.p
  variants={item}
  className="max-w-xl text-lg leading-8 text-muted-light"
>
  {profile.tagline}
</motion.p>
          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
            <Button onClick={scrollToProjects} icon={<ArrowRight size={16} />}>
              View Projects
            </Button>
            <Button
              variant="secondary"
              href="https://github.com/nirjal0007"
              target="_blank"
              icon={<Github size={16} />}
            >
              View GitHub
            </Button>
          </motion.div>

          <motion.div variants={item} className="mt-10 flex items-center gap-4">
            {navSocialIcons.map((s) => {
              const Icon = SOCIAL_ICONS[s.icon]
              return (
                <a
                  key={s.id}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.id}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-base-border bg-base-900/60 text-muted-light transition-all duration-300 hover:-translate-y-1 hover:border-accent-blue/50 hover:text-accent-blue2 hover:shadow-glow"
                >
                  <Icon size={17} />
                </a>
              )
            })}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          style={{ y: photoY, opacity: photoOpacity }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="relative aspect-square w-full">
            {/* Main Blue Glow */}
            <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-[120px]" />

            {/* Purple Accent Glow */}
            <div className="absolute -top-8 right-6 h-56 w-56 rounded-full bg-violet-500/20 blur-[100px]" />

            {/* Soft Blue Ambient Light */}
            <div className="absolute bottom-6 -left-10 h-64 w-64 rounded-full bg-cyan-400/10 blur-[120px]" />

            {/* Outer Ring */}
            <div className="absolute inset-5 rounded-full border border-blue-500/20 shadow-[0_0_70px_rgba(59,130,246,0.18)]" />

            {/* Inner Circle */}
            <div className="absolute inset-8 rounded-full bg-[#090D16]" />

            {/* Floating Portrait */}
            <motion.img
              src={profile.photo}
              alt={profile.name}
              loading="eager"
              animate={{
                bottom: ['0px', '6px', '0px', '-3px', '0px'],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="
                absolute
                bottom-0
                left-1/2
                z-30
                w-[98%]
                -max-w-none
                -translate-x-[52%]
                object-contain
                drop-shadow-[0_30px_80px_rgba(59,130,246,0.45)]
                pointer-events-none
                select-none
              "
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
