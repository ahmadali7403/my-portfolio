import { motion } from 'framer-motion'
import SEO from '../components/SEO'
import SectionHeading from '../components/ui/SectionHeading'
import { siteConfig } from '../data/site'

const timeline = [
  {
    year: '2023',
    title: 'Started BS Computer Science',
    description:
      'Began my journey in computer science, exploring programming fundamentals and web development.',
  },
  {
    year: '2024',
    title: 'Discovered Web Development',
    description:
      'Fell in love with frontend development — HTML, CSS, JavaScript, and building interactive UIs.',
  },
  {
    year: '2025',
    title: 'Learned React & Modern Tools',
    description:
      'Mastered React, Tailwind CSS, Git, and started building real-world projects and applications.',
  },
 
  {
    year: '2026',
    title: 'Pursuing Frontend Career',
    description:
      'Currently in 7th semester, actively seeking internships and freelance opportunities.',
  },
]

export default function About() {
  return (
    <>
      <SEO
        title="About"
        description="Learn about Ahmad Ali — a Frontend Developer and BS Computer Science student passionate about building modern web applications."
        path="/about"
      />

      <section className="section-padding">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            title="About Me"
            subtitle="Get to know my background, journey, and aspirations"
          />

          <div className="grid gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="glass rounded-2xl p-8">
                <h3 className="mb-4 text-xl font-bold text-slate-900 dark:text-white">
                  Introduction
                </h3>
                <p className="leading-relaxed text-slate-600 dark:text-slate-400">
                  I&apos;m {siteConfig.name}, a passionate {siteConfig.role}{' '}
                  currently pursuing my {siteConfig.education}. I specialize in
                  building responsive, accessible, and performant web applications
                  using React, JavaScript, and Tailwind CSS.
                </p>
              </div>

              <div className="glass rounded-2xl p-8">
                <h3 className="mb-4 text-xl font-bold text-slate-900 dark:text-white">
                  Education
                </h3>
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-500/10 text-primary-600 dark:text-primary-400">
                    🎓
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white">
                      Bachelor of Science in Computer Science
                    </h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      7th Semester — In Progress
                    </p>
                    <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                      Studying data structures, algorithms, software engineering,
                      databases, and web technologies.
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass rounded-2xl p-8">
                <h3 className="mb-4 text-xl font-bold text-slate-900 dark:text-white">
                  Career Goals
                </h3>
                <ul className="space-y-3 text-slate-600 dark:text-slate-400">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-primary-500">▸</span>
                    Secure a frontend developer position at a software house
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-primary-500">▸</span>
                    Build a strong portfolio of production-quality projects
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-primary-500">▸</span>
                    Contribute to open-source React projects
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-primary-500">▸</span>
                    Grow into a senior frontend engineer role
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="mb-8 text-xl font-bold text-slate-900 dark:text-white">
                My Journey
              </h3>
              <div className="relative space-y-8 border-l-2 border-primary-500/30 pl-8">
                {timeline.map((item, index) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative"
                  >
                    <span className="absolute -left-[41px] flex h-5 w-5 items-center justify-center rounded-full bg-primary-500 ring-4 ring-slate-50 dark:ring-slate-950" />
                    <span className="mb-1 block text-sm font-semibold text-primary-600 dark:text-primary-400">
                      {item.year}
                    </span>
                    <h4 className="mb-1 font-semibold text-slate-900 dark:text-white">
                      {item.title}
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
