function Experience() {
  const entries = [
    {
      role: 'Agentic AI Intern',
      company: 'Quadrafort Technologies',
      descriptor: 'Salesforce Global Consulting Partner',
      dates: 'May 2026 – Jun 2026',
      bullets: [
        'Deployed production autonomous AI agents on Salesforce Agentforce 360 using the Einstein AI reasoning engine and LangChain orchestration, executing context-aware enterprise CRM operations end-to-end with zero manual handoffs.',
        'Engineered modular agentic workflows mapping Salesforce Actions to native Flows and external REST APIs, automating the full intake-to-routing pipeline — eliminating all manual handoff steps.',
        'Applied structured prompting to enforce multi-step reasoning, maintain context across agent turns, and implement graceful fallback handling for production edge cases.',
      ],
    },
    {
      role: 'AI Engineer Intern',
      company: 'Velocis Systems',
      descriptor: 'Cisco Gold Partner',
      dates: 'May 2025 – Jul 2025',
      bullets: [
        'Architected and deployed 3 enterprise GenAI assistants in Python, FastAPI, and LangChain with full RAG pipelines backed by vector databases, grounding LLM responses in internal knowledge bases.',
        'Applied domain-specific fine-tuning on base LLMs and exposed RAG-augmented models through modular RESTful microservices aligned with enterprise client-report drafting workflows.',
      ],
    },
    {
      role: 'Full Stack Developer Intern',
      company: 'Tribal Wolf',
      dates: 'Jan 2025 – Mar 2025',
      bullets: [
        'Built and shipped production web features using React.js, Node.js, and PostgreSQL.',
        'Integrated secure third-party payment gateways and optimized backend query performance under concurrent user load.',
      ],
    },
  ]

  return (
    <div id="experience" className="experience">
      <h2 className="section-label">EXPERIENCE</h2>
      <div className="experience__timeline">
        {entries.map((entry) => (
          <article className="experience__entry" key={`${entry.role}-${entry.company}`}>
            <header className="experience__header">
              <div>
                <h3>{entry.role} <span>—</span> {entry.company}</h3>
                {entry.descriptor && (
                  <p className="experience__descriptor">{entry.descriptor}</p>
                )}
              </div>
              <time className="experience__dates">{entry.dates}</time>
            </header>
            <ul>
              {entry.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </div>
  )
}

export default Experience