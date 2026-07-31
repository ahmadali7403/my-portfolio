import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const variants = {
  primary:
    'bg-gradient-to-r from-primary-600 to-violet-600 text-white shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40',
  secondary:
    'border border-primary-500/30 bg-primary-500/10 text-primary-600 hover:bg-primary-500/20 dark:text-primary-400',
  outline:
    'border border-slate-300 text-slate-700 hover:border-primary-500 hover:text-primary-600 dark:border-slate-600 dark:text-slate-200 dark:hover:border-primary-400 dark:hover:text-primary-400',
}

export default function Button({
  children,
  variant = 'primary',
  to,
  href,
  external = false,
  className = '',
  ...props
}) {
  const baseClasses = `inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-300 ${variants[variant]} ${className}`

  if (to) {
    return (
      <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
        <Link to={to} className={baseClasses} {...props}>
          {children}
        </Link>
      </motion.div>
    )
  }

  if (href) {
    return (
      <motion.a
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        className={baseClasses}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        {...props}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      className={baseClasses}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      {...props}
    >
      {children}
    </motion.button>
  )
}
