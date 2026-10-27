function Experience() {
  const entries = [
    {
      role: 'Agentic AI Intern',
      company: 'Quadrafort Technologies',
      descriptor: 'Salesforce Global Consulting Partner',
      dates: 'May 2026 – Jun 2026',
      bullets: [
        'Shipped autonomous agents on Salesforce Agentforce 360 that handled real CRM work with Einstein AI and LangChain, without needing a human to pass the baton every few seconds.',
        'Connected Salesforce Actions, native Flows, and REST APIs into one intake and routing workflow. Fewer handoffs, fewer tabs, much less ritual.',
        'Built prompts that kept context across agent turns and gave the system a sensible fallback when production decided to get creative.',
      ],
    },
    {
      role: 'AI Engineer Intern',
      company: 'Velocis Systems',
      descriptor: 'Cisco Gold Partner',
      dates: 'May 2025 – Jul 2025',
      bullets: [
        'Built and shipped three GenAI assistants with Python, FastAPI, LangChain, and RAG pipelines backed by vector databases, so answers came from company knowledge instead of vibes.',
        'Fine tuned models for specific domains and wrapped them in REST services that helped enterprise teams draft client reports faster.',
      ],
    },
    {
      role: 'Full Stack Developer Intern',
      company: 'Tribal Wolf',
      dates: 'Jan 2025 – Mar 2025',
      bullets: [
        'Built and shipped production features with React, Node, and PostgreSQL.',
        'Added secure payment integrations and cleaned up backend queries so the app stayed quick when more users showed up.',
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