# Rajsekhar Singha Roy — Portfolio

Personal portfolio for **Rajsekhar Singha Roy**, an Agentic AI and Full Stack Engineer building autonomous multi-agent systems, RAG pipelines, and enterprise automation workflows.

**Live portfolio:** Deployed on Vercel  
**Resume:** [View resume](https://drive.google.com/file/d/16IZIt_Ywv9HHt666mf1k4FO8jf0uVDDr/view?usp=drive_link)

## About

This is a focused, one-page portfolio built to showcase practical Agentic AI engineering work, selected projects, GitHub activity, technical skills, and experience.

The site highlights:

- Autonomous agents and multi-agent orchestration
- LangGraph and LangChain workflows
- Retrieval-Augmented Generation (RAG)
- Enterprise AI automation
- Full Stack engineering experience
- GitHub contribution activity

## Featured work

### FinSight AI

A six-agent autonomous equity research platform for financial research, market analysis, news intelligence, risk analysis, portfolio reasoning, and citation-grounded report generation.

### LegalRAG

A RAG pipeline over Indian Supreme Court judgments with grounded retrieval, citation linking, and evaluation designed to reduce hallucinations in legal question answering.

### GestureLec

A real-time gesture-control and lecture-processing system covering hands-free media control, transcription, chapter detection, summarization, and notes.

## Tech stack

- **Frontend:** React, Vite, Framer Motion
- **Languages:** JavaScript, Python, C++
- **AI and Agentic Systems:** LangChain, LangGraph, Agentforce 360, GPT, FLAN-T5
- **Knowledge and RAG:** FAISS, ChromaDB, embeddings, vector search, citation grounding
- **Backend and infrastructure:** FastAPI, Node.js, PostgreSQL, REST APIs, AWS
- **Integrations:** GitHub Calendar, React Icons, Google Fonts
- **Deployment:** Vercel

## Run locally

Requirements:

- Node.js 18 or newer
- npm

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open the local URL shown by Vite, usually `http://localhost:5173`.

To test the production build locally:

```bash
npm run build
npm run preview
```

## Deployment

This project is configured for Vercel:

1. Push the repository to GitHub.
2. Import the repository at [vercel.com](https://vercel.com).
3. Select **Vite** as the framework preset.
4. Use `npm run build` as the build command.
5. Use `dist` as the output directory.
6. Deploy.

The SPA rewrite is defined in [`vercel.json`](./vercel.json).

## Project structure

```text
src/
├── components/
│   ├── Experience.jsx
│   ├── Footer.jsx
│   ├── GitHub.jsx
│   ├── Hero.jsx
│   └── Projects.jsx
├── App.css
├── App.jsx
└── main.jsx
public/
└── hero-video.mp4
```

## Updating the portfolio

When requesting future updates, describe the content or behavior you want changed. The implementation workflow is:

1. Update the relevant React component and styles.
2. Run `npm run build`.
3. Review the result locally with `npm run dev`.
4. Commit and push the verified changes to GitHub.
5. Vercel deploys the latest pushed version automatically when the repository is connected.

Do not commit credentials, private API keys, or other secrets.

## Contact

- GitHub: [@rajsekharrr](https://github.com/rajsekharrr)
- LinkedIn: [rajsekhar-roy](https://linkedin.com/in/rajsekhar-roy)
- X: [@snapcallin](https://x.com/snapcallin)
- Email: [royrajsekhar.is@gmail.com](mailto:royrajsekhar.is@gmail.com)

## License

This portfolio is personal work. Please do not reuse the branding, personal information, resume, images, or video without permission.
