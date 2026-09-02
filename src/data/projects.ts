export interface Project {
  id: string
  number: string
  title: string
  description: string
  image: string
  tech: string[]
  githubUrl?: string
  demoUrl?: string
  featured?: boolean
}

/**
 * Add a new project by adding a new object to this array.
 * Nothing in the UI needs to change — cards render automatically.
 */
export const projects: Project[] = [
  {
    id: 'smartagro-ai',
    number: '01',
    title: 'SmartAgro AI',
    description:
      'Deep learning-based plant disease detection and advisory system using a custom CNN trained on plant leaf images.',
    image: '/projects/smartagro.jpg',
    tech: ['TensorFlow', 'CNN', 'Flask', 'Tailwind'],
    githubUrl: 'https://github.com/nirjal0007/smartagro-ai',
    demoUrl: '#',
    featured: true,
  },
  {
    id: 'ai-civic-inspector',
    number: '02',
    title: 'AI Civic Inspector',
    description:
      'AI powered civic issue reporting platform for Nepal infrastructure — citizens report issues with photos, auto-classified and mapped.',
    image: '/projects/civic-inspector.jpg',
    tech: ['React', 'Flask', 'Leaflet', 'Gemini API'],
    githubUrl: 'https://github.com/nirjal0007/ai-civic-inspector',
    demoUrl: '#',
    featured: true,
  },
  {
    id: 'constructify',
    number: '03',
    title: 'Constructify',
    description:
      'Construction management system with quote requests, project tracking and an admin panel for contractors.',
    image: '/projects/constructify.jpg',
    tech: ['Laravel', 'MySQL', 'Tailwind'],
    githubUrl: 'https://github.com/nirjal0007/constructify',
    demoUrl: '#',
    featured: true,
  },
  {
    id: 'womencare-system',
    number: '04',
    title: 'WomenCare System',
    description:
      'Menstrual cycle tracker, mood journal and community platform designed with a privacy-first approach.',
    image: '/projects/womencare.jpg',
    tech: ['React', 'Spring Boot', 'MySQL'],
    githubUrl: 'https://github.com/nirjal0007/womencare-system',
    demoUrl: '#',
    featured: true,
  },
]
