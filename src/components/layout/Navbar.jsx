import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'
import { navLinks, siteConfig } from '../../data/site'
import ThemeToggle from '../ui/ThemeToggle'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const linkClasses = ({ isActive }) =>
    `relative px-3 py-2 text-sm font-medium transition-colors ${
      isActive
        ? 'text-primary-600 dark:text-primary-400'
        : 'text-slate-600 hover:text-primary-600 dark:text-slate-300 dark:hover:text-primary-400'
    }`

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/50 bg-white/80 backdrop-blur-xl dark:border-slate-800/50 dark:bg-slate-950/80">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <Link
          to="/"
          className="text-xl font-bold tracking-tight text-slate-900 dark:text-white"
        >
          <span className="gradient-text">{siteConfig.name.split(' ')[0]}</span>
          <span> </span>
          <span className="text-slate-600 dark:text-slate-400">
               {siteConfig.name.split(' ')[1]}
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <NavLink key={link.path} to={link.path} className={linkClasses}>
              {({ isActive }) => (
                <>
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="navbar-indicator"
                      className="absolute inset-x-1 -bottom-1 h-0.5 rounded-full bg-primary-500"
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
          >
            {isOpen ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-slate-200/50 md:hidden dark:border-slate-800/50"
          >
            <div className="flex flex-col gap-1 px-4 py-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `rounded-lg px-4 py-3 text-sm font-medium ${
                      isActive
                        ? 'bg-primary-500/10 text-primary-600 dark:text-primary-400'
                        : 'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
