import { motion } from 'framer-motion'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import Button from './Button'

export default function ProjectCard({ project, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="glass group overflow-hidden rounded-2xl transition-shadow hover:shadow-2xl"
    >
      <div
        className={`flex h-48 items-center justify-center bg-linear-to-br ${project.gradient}`}
      >
        <span className="text-6xl" role="img" aria-hidden="true">
          {project.emoji}
        </span>
      </div>
      <div className="p-6">
        <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
          {project.title}
        </h3>
        <p className="mb-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
          {project.description}
        </p>
        <div className="mb-5 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-primary-500/10 px-3 py-1 text-xs font-medium text-primary-600 dark:text-primary-400"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-3">
          <Button
            href={project.demoUrl}
            external
            variant="primary"
            className="px-4 py-2 text-xs"
          >
            <FaExternalLinkAlt className="h-3 w-3" />
            Live Demo
          </Button>
          <Button
            href={project.githubUrl}
            external
            variant="outline"
            className="px-4 py-2 text-xs"
          >
            <FaGithub className="h-4 w-4" />
            GitHub
          </Button>
        </div>
      </div>
    </motion.article>
  )
}
