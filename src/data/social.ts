export interface SocialLink {
  id: string
  label: string
  value: string
  href: string
  icon: 'mail' | 'github' | 'linkedin' | 'file'
  accent?: boolean
}

export const socialLinks: SocialLink[] = [
  {
    id: 'email',
    label: 'Email',
    value: 'acharyanirjal7@gmail.com',
    href: 'mailto:acharyanirjal7@gmail.com',
    icon: 'mail',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    value: 'linkedin.com/in/nirjal-acharya-99668383',
    href: 'https://linkedin.com/in/nirjal-acharya-99668383',
    icon: 'linkedin',
  },
  {
    id: 'github',
    label: 'GitHub',
    value: 'github.com/nirjal0007',
    href: 'https://github.com/nirjal0007',
    icon: 'github',
  },
  {
    id: 'resume',
    label: 'Resume',
    value: 'Download PDF',
    href: '/Nirjal_Acharya.pdf',
    icon: 'file',
    accent: true,
  },
]

export const navSocialIcons: { id: string; href: string; icon: 'github' | 'linkedin' | 'mail' }[] = [
  { id: 'github', href: 'https://github.com/nirjal0007', icon: 'github' },
  { id: 'linkedin', href: 'https://linkedin.com/in/nirjal-acharya-99668383', icon: 'linkedin' },
  { id: 'email', href: 'mailto:acharyanirjal7@gmail.com', icon: 'mail' },
]
