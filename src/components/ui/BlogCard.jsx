import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { HiClock, HiCalendar } from 'react-icons/hi'

export default function BlogCard({ post, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className="glass group overflow-hidden rounded-2xl transition-shadow hover:shadow-xl"
    >
      <Link to={`/blog/${post.slug}`} className="block">
        <div
          className={`flex h-44 items-center justify-center bg-linear-to-br ${post.gradient} p-6`}
        >
          <h3 className="text-center text-xl font-bold text-white drop-shadow-md">
            {post.title}
          </h3>
        </div>
        <div className="p-6">
          <p className="mb-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
            {post.excerpt}
          </p>
          <div className="mb-4 flex flex-wrap items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-1">
              <HiCalendar className="h-4 w-4" />
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </span>
            <span className="flex items-center gap-1">
              <HiClock className="h-4 w-4" />
              {post.readTime}
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.article>
  )
}
