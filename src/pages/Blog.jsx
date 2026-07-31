import SEO from '../components/SEO'
import SectionHeading from '../components/ui/SectionHeading'
import BlogCard from '../components/ui/BlogCard'
import { blogPosts } from '../data/blog'

export default function Blog() {
  return (
    <>
      <SEO
        title="Blog"
        description="Read articles by Ahmad Ali on React, JavaScript, React Router, and frontend development tips."
        path="/blog"
        keywords="Blog, React, JavaScript, Frontend Development, Web Development Tips"
      />

      <section className="section-padding">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            title="Blog"
            subtitle="Thoughts, tutorials, and insights on frontend development"
          />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, index) => (
              <BlogCard key={post.slug} post={post} index={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
