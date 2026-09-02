export interface SkillCategory {
  id: string
  title: string
  icon: 'ai' | 'frontend' | 'backend' | 'database' | 'tools'
  skills: string[]
}

/**
 * Add/remove technologies here — the Skills section and the
 * marquee bar on the homepage both read from this file.
 */
export const skillCategories: SkillCategory[] = [
  {
    id: 'ai',
    title: 'AI & Machine Learning',
    icon: 'ai',
    skills: ['TensorFlow', 'PyTorch', 'Computer Vision', 'CNN', 'NumPy', 'Pandas', 'Scikit-learn'],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    icon: 'frontend',
    skills: ['React', 'Tailwind CSS', 'JavaScript (ES6+)', 'TypeScript', 'Framer Motion', 'Vite'],
  },
  {
    id: 'backend',
    title: 'Backend',
    icon: 'backend',
    skills: ['Python (Flask)', 'Laravel (PHP)', 'Spring Boot', 'REST APIs', 'Node.js (Basics)'],
  },
  {
    id: 'database',
    title: 'Database',
    icon: 'database',
    skills: ['MySQL', 'SQLite', 'MongoDB (Basics)', 'Firebase'],
  },
  {
    id: 'tools',
    title: 'Tools & Others',
    icon: 'tools',
    skills: ['Git & GitHub', 'Docker', 'VS Code', 'Postman', 'Linux'],
  },
]

export const marqueeTech: string[] = [
  'TensorFlow',
  'React',
  'Laravel',
  'Flask',
  'Tailwind CSS',
  'MySQL',
  'Git',
  'Docker',
  'Linux',
  'OpenCV',
  'Pandas',
  'NumPy',
]
