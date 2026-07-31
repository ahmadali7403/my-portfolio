import { motion } from 'framer-motion'

export default function SectionHeading({ title, subtitle, centered = true }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={centered ? 'mb-12 text-center' : 'mb-12'}
    >
      <h2 className="mb-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto max-w-2xl text-lg text-slate-600 dark:text-slate-400">
          {subtitle}
        </p>
      )}
      <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-linear-to-r from-primary-500 to-violet-500" />
    </motion.div>
  )
}
