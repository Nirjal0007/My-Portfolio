export interface Profile {
  name: string;
  firstName: string;
  lastName: string;
  role: string;
  tagline: string;

  bio: string;

  aboutTitle: string;
  aboutDescription: string;

  location: string;
  photo: string;
  resumeUrl: string;

  stats: { label: string; value: string }[];

  highlights: {
    icon: "code" | "brain" | "rocket" | "target";
    title: string;
    description: string;
  }[];
}

export const profile: Profile = {
  name: 'Nirjal Acharya',
  firstName: 'Nirjal',
  lastName: 'Acharya',
  role: 'AI Engineer & Full Stack Developer',
  tagline: 'Building AI-powered software that solves real-world problems.',
  bio: "I'm a BIT student from Kathmandu, Nepal passionate about Artificial Intelligence, Deep Learning, and building impactful full stack applications. I love turning ideas into products that make a real difference.",
  location: 'Kathmandu, Nepal',
  photo: '/profile1.png',
  resumeUrl: '/Nirjal_Acharya.pdf',
  aboutTitle:"I enjoy building AI-powered software that transforms research into practical applications.",

aboutDescription:
  "My interests include computer vision, deep learning, intelligent web systems, and full-stack development. I enjoy turning ideas into real-world products that solve meaningful problems.",
  stats: [
    { label: 'Years Coding', value: '3+' },
    { label: 'Projects Shipped', value: '10+' },
  ],
  highlights: [
    {
      icon: 'code',
      title: 'Problem Solver',
      description: 'I enjoy solving complex problems with clean and efficient code.',
    },
    {
      icon: 'brain',
      title: 'AI Enthusiast',
      description: 'Exploring deep learning, computer vision and intelligent systems.',
    },
    {
      icon: 'rocket',
      title: 'Builder',
      description: 'I build, ship and iterate to bring ideas to life.',
    },
    {
      icon: 'target',
      title: 'Always Learning',
      description: 'Always curious and learning new tools and technologies.',
    },
  ],
}
