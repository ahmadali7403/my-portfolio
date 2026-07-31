import SEO from '../components/SEO'
import SectionHeading from '../components/ui/SectionHeading'
import ProjectCard from '../components/ui/ProjectCard'
import { projects } from '../data/projects'

export default function Projects() {
  return (
    <>
      <SEO
        title="Projects"
        description="Browse Ahmad Ali's frontend projects including Weather App, Todo App, Calculator, and Drag & Drop App."
        path="/projects"
        keywords="Projects, Weather App, Todo App, Calculator, React Projects, Portfolio"
      />

      <section className="section-padding">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            title="Featured Projects"
            subtitle="A selection of projects I've built to showcase my skills"
          />

          <div className="grid gap-8 sm:grid-cols-2">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
