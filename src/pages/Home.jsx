import { motion } from "framer-motion";
import { HiArrowDown, HiDownload, HiEye } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import SEO from "../components/SEO";
import Button from "../components/ui/Button";
import { siteConfig } from "../data/site";

export default function Home() {
  return (
    <>
      <SEO
        title="Home"
        description="Ahmad Ali — Frontend Developer specializing in React, JavaScript, and modern web technologies. View my portfolio, projects, and get in touch."
        path="/"
      />

      <section className="relative flex min-h-[calc(100vh-5rem)] items-center overflow-hidden section-padding">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-primary-500/20 blur-3xl" />
          <div className="absolute -right-32 bottom-20 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl" />
        </div>

        <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary-600 dark:text-primary-400"
            >
              Welcome to my portfolio
            </motion.p>
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Hi, I&apos;m{" "}
              <span className="gradient-text">{siteConfig.name}</span>
            </h1>
            <h2 className="mb-6 text-2xl font-medium text-slate-600 sm:text-3xl dark:text-slate-400">
              {siteConfig.role}
            </h2>
            <p className="mb-8 max-w-lg text-lg leading-relaxed text-slate-600 dark:text-slate-400">
              I build modern, responsive, and user-friendly web applications
              with React and JavaScript. Passionate about clean code, great UX,
              and turning ideas into polished digital experiences.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button to="/contact">Contact Me</Button>
              <Button
                href="/Ahmad_Ali_CV.pdf"
                target="_blank"
                variant="secondary"
              >
                <HiEye className="h-5 w-5" />
                View CV
              </Button>
              <Button
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = "/Ahmad_Ali_CV.pdf";
                  link.download = "Ahmad_Ali_CV.pdf";
                  link.click();
                }}
                variant="secondary"
              >
                <HiDownload className="h-5 w-5" />
                Download CV
              </Button>
            </div>
            <div className="mt-8 flex gap-4">
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="text-slate-500 transition-colors hover:text-primary-600 dark:hover:text-primary-400"
              >
                <FaGithub className="h-6 w-6" />
              </a>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="text-slate-500 transition-colors hover:text-primary-600 dark:hover:text-primary-400"
              >
                <FaLinkedin className="h-6 w-6" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative mx-auto flex h-72 w-72 items-center justify-center sm:h-80 sm:w-80"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-500/30 to-violet-500/30 blur-2xl" />
            <div className="glass relative flex h-full w-full items-center justify-center rounded-full">
              <span className="gradient-text text-7xl font-extrabold sm:text-8xl">
                AA
              </span>
            </div>
          </motion.div>
        </div>

        <motion.a
          href="#highlights"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
          transition={{
            opacity: { delay: 1 },
            y: { repeat: Infinity, duration: 1.5 },
          }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-400 hover:text-primary-500"
          aria-label="Scroll down"
        >
          <HiArrowDown className="h-6 w-6" />
        </motion.a>
      </section>

      <section id="highlights" className="section-padding">
        <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-3">
          {[
            {
              title: "Frontend Focus",
              desc: "Crafting pixel-perfect, responsive interfaces with React and Tailwind CSS.",
            },
            {
              title: "Clean Code",
              desc: "Writing maintainable, reusable components following best practices.",
            },
            {
              title: "Always Learning",
              desc: "Staying current with modern web technologies and industry trends.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-6 text-center"
            >
              <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                {item.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
