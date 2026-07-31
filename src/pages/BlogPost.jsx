import { Link, useParams, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { HiArrowLeft, HiCalendar, HiClock } from 'react-icons/hi'
import SEO from '../components/SEO'
import { getBlogPost } from '../data/blog'

function renderContent(content) {
  return content.split('\n\n').map((block, index) => {
    if (block.startsWith('## ')) {
      return (
        <h2
          key={index}
          className="mb-4 mt-8 text-2xl font-bold text-slate-900 dark:text-white"
        >
          {block.replace('## ', '')}
        </h2>
      )
    }

    if (block.startsWith('```')) {
      const code = block.replace(/```\w*\n?/, '').replace(/```$/, '')
      return (
        <pre
          key={index}
          className="my-4 overflow-x-auto rounded-xl bg-slate-900 p-4 text-sm text-slate-100"
        >
          <code>{code.trim()}</code>
        </pre>
      )
    }

    const formatted = block.replace(/`([^`]+)`/g, '<code class="rounded bg-slate-200 px-1.5 py-0.5 text-sm dark:bg-slate-800">$1</code>')

    return (
      <p
        key={index}
        className="mb-4 leading-relaxed text-slate-600 dark:text-slate-400"
        dangerouslySetInnerHTML={{ __html: formatted }}
      />
    )
  })
}

export default function BlogPost() {
  const { slug } = useParams()
  const post = getBlogPost(slug)

  if (!post) {
    return <Navigate to="/blog" replace />
  }

  return (
    <>
      <SEO
        title={post.title}
        description={post.excerpt}
        path={`/blog/${post.slug}`}
        keywords={post.tags.join(', ')}
        type="article"
      />

      <article className="section-padding">
        <div className="mx-auto max-w-3xl">
          <Link
            to="/blog"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-primary-600 hover:underline dark:text-primary-400"
          >
            <HiArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>

          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-10"
          >
            <div
              className={`mb-8 flex h-56 items-center justify-center rounded-2xl bg-gradient-to-br ${post.gradient} p-8`}
            >
              <h1 className="text-center text-3xl font-bold text-white sm:text-4xl">
                {post.title}
              </h1>
            </div>

            <div className="mb-4 flex flex-wrap items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
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
                  className="rounded-full bg-primary-500/10 px-3 py-1 text-xs font-medium text-primary-600 dark:text-primary-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.header>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="prose-custom"
          >
            {renderContent(post.content)}
          </motion.div>
        </div>
      </article>
    </>
  )
}
