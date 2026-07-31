import SEO from '../components/SEO'
import SectionHeading from '../components/ui/SectionHeading'
import SkillCard from '../components/ui/SkillCard'
import { skills } from '../data/skills'

export default function Skills() {
  return (
    <>
      <SEO
        title="Skills"
        description="Explore Ahmad Ali's technical skills including HTML, CSS, JavaScript, React, Tailwind CSS, Git, and GitHub."
        path="/skills"
        keywords="Skills, HTML, CSS, JavaScript, React, Tailwind CSS, Git, GitHub, Frontend Developer"
      />

      <section className="section-padding">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            title="Skills & Technologies"
            subtitle="Tools and technologies I use to bring ideas to life"
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
