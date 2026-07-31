export const siteConfig = {
  name: 'Ahmad Ali',
  role: 'Frontend Developer',
  email: 'ahmadrafiq7403@gmail.com',
  education: 'BS Computer Science (7th Semester)',
  siteUrl: 'https://ahmadali-portfolio.vercel.app',
  github: 'https://github.com/ahmadali7403',
  linkedin: 'https://linkedin.com/in/ahmad-ali-800641398',
  twitter: 'https://twitter.com/ahmadali',
}

export const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Skills', path: '/skills' },
  { name: 'Projects', path: '/projects' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
]

export const socialLinks = [
  { name: 'GitHub', url: siteConfig.github, label: 'GitHub profile' },
  { name: 'LinkedIn', url: siteConfig.linkedin, label: 'LinkedIn profile' },
  { name: 'Email', url: `mailto:${siteConfig.email}`, label: 'Send email' },
]
