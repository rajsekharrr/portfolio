import { motion } from 'framer-motion'

const projects = [
  {
    name: 'LegalRAG',
    date: 'March 2026',
    tags: ['LangChain', 'FAISS', 'RAG', 'LLMs'],
    description: 'A legal search tool for Indian Supreme Court judgments. It finds relevant case law, links the citations, and checks its own retrieval so the answer is more useful and less made up.',
    href: 'https://github.com/rajsekharrr/Legal-RAG-Indian-Judgments',
  },
  {
    name: 'GestureLec',
    date: 'April 2026',
    tags: ['OpenCV', 'MediaPipe', 'Whisper', 'FLAN-T5', 'GPT'],
    description: 'Control media with hand gestures, then turn a lecture into a transcript, chapters, summary, and notes. Basically, less scrubbing through recordings and more actual studying.',
    href: 'https://github.com/rajsekharrr/Gesture_Lect',
  },
]

function ProjectTags({ tags }) {
  return (
    <div className="projects__tags">
      {tags.map((tag) => <span className="pill" key={tag}>{tag}</span>)}
    </div>
  )
}

function GithubLink({ href }) {
  return (
    <a className="projects__github" href={href} target="_blank" rel="noopener noreferrer">
      GitHub ↗
    </a>
  )
}

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2 className="section-label">PROJECTS</h2>
      <motion.article
        className="project-card project-card--hero"
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2 }}
      >
        <div className="project-card__header">
          <div>
            <h3>FinSight AI</h3>
            <p className="project-card__date">September 2026</p>
          </div>
        </div>
        <ProjectTags tags={['LangGraph', 'LangChain', 'Multi-Agent', 'RAG', 'Autonomous Agents']} />
        <p className="project-card__description">
          Six specialist agents take on the parts of equity research that usually require a
          dozen tabs and a heroic amount of copy paste. They research markets, news, risk,
          portfolios, and then turn it all into a citation grounded investment report.
          LangGraph handles the handoffs, tools, memory, and structured output.
        </p>
        <GithubLink href="https://github.com/rajsekharrr/Multi-agent-equity-research" />
        <div className="project-card__tech-strip" aria-hidden="true">
          Built with LangGraph + LangChain
        </div>
        <div className="projects__ticker" aria-hidden="true">
          <span>$LANGRAPH +4.2%  ·  $AGENT +2.7%  ·  $RAG +1.1%  ·  $GPT -0.3%  ·</span>
        </div>
      </motion.article>
      <div className="projects__grid">
        {projects.map((project) => (
          <motion.article
            className="project-card"
            key={project.name}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
          >
            <div className="project-card__header">
              <h3>{project.name}</h3>
              <p className="project-card__date">{project.date}</p>
            </div>
            <ProjectTags tags={project.tags} />
            <p className="project-card__description">{project.description}</p>
            <GithubLink href={project.href} />
            <div className="project-card__tech-strip" aria-hidden="true">
              Built with {project.tags[0]} + {project.tags[1]}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

export default Projects