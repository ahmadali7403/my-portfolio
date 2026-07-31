import { motion } from 'framer-motion'

export default function SkillCard({ skill, index }) {
  const Icon = skill.icon

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className="glass group rounded-2xl p-6 transition-shadow hover:shadow-xl"
    >
      <div className="mb-4 flex items-center gap-3">
        <div className="rounded-xl bg-slate-100 p-3 dark:bg-slate-800">
          <Icon className={`h-6 w-6 ${skill.color}`} />
        </div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          {skill.name}
        </h3>
      </div>
      <p className="mb-4 text-sm text-slate-600 dark:text-slate-400">
        {skill.description}
      </p>
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-slate-500 dark:text-slate-400">Proficiency</span>
          <span className="font-medium text-primary-600 dark:text-primary-400">
            {skill.level}%
          </span>
        </div>
        <div className="h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.level}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: index * 0.08 + 0.2 }}
            className="h-full rounded-full bg-linear-to-r from-primary-500 to-violet-500"
          />
        </div>
      </div>
    </motion.article>
  )
}
