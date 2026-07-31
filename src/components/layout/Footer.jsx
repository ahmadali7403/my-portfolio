import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { siteConfig, socialLinks } from '../../data/site'

const iconMap = {
  GitHub: FaGithub,
  LinkedIn: FaLinkedin,
  Email: FaEnvelope,
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900/50">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
          <div>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">
              {siteConfig.name}
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              {siteConfig.role}
            </p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="mt-1 inline-block text-sm text-primary-600 hover:underline dark:text-primary-400"
            >
              {siteConfig.email}
            </a>
          </div>

          <div className="flex gap-4">
            {socialLinks.map((link) => {
              const Icon = iconMap[link.name]
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="rounded-lg p-2 text-slate-500 transition-colors hover:bg-slate-200 hover:text-primary-600 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-primary-400"
                >
                  <Icon className="h-5 w-5" />
                </a>
              )
            })}
          </div>
        </div>

        <div className="mt-8 border-t border-slate-200 pt-6 text-center dark:border-slate-800">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            &copy; {year} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
