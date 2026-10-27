# Portfolio Plan — Rajsekhar Singha Roy
# One-Page Agentic AI Portfolio · React + Vite · Deployed on Vercel

---

## Overview

One-page personal portfolio — clean, all-white, professional with just enough personality.
Primary focus: Agentic AI engineering work and GitHub activity.

**Tone:** Direct and confident. Dry wit in microcopy. No buzzword salad.
**Palette:** All-white base, near-black text, single blue accent. No other colors.
**Audience:** Recruiters and hiring engineers at AI-first companies.

---

## 1. Project Setup

```bash
npm create vite@latest portfolio -- --template react
cd portfolio
npm install
npm install framer-motion react-icons
```

> **framer-motion** → scroll fade-ins + hover lifts  
> **react-icons** → GitHub / LinkedIn / X icons (use `react-icons/fa6`)

---

## 2. Folder Structure

```
portfolio/
├── public/
│   ├── favicon.ico
│   └── og-image.png              ← generate a simple 1200×630 OG card
├── src/
│   ├── assets/
│   │   └── profile.jpg           ← ADD profile photo here (ask user)
│   ├── components/
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── GitHub.jsx
│   │   ├── Skills.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── App.css                   ← all global styles + CSS variables
│   └── main.jsx
├── index.html
├── vite.config.js
└── vercel.json
```

---

## 3. Design System

### 3.1 CSS Variables — paste into `:root` in `App.css`

```css
:root {
  --bg:          #FFFFFF;
  --surface:     #F8F8F8;
  --border:      #E8E8E8;
  --text:        #0D0D0D;
  --text-muted:  #6B7280;
  --accent:      #0057FF;
  --accent-soft: #EEF3FF;
  --accent-dark: #003ECC;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background: var(--bg);
  color: var(--text);
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}
```

### 3.2 Typography

Load in `index.html` `<head>`:
```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
```

| Element        | Size     | Weight | Notes                           |
|----------------|----------|--------|---------------------------------|
| H1 (name)      | 3rem     | 700    |                                 |
| H2 (section)   | 0.75rem  | 600    | ALL CAPS, letter-spacing 0.12em |
| H3 (role/proj) | 1.1rem   | 600    |                                 |
| Body           | 1rem     | 400    | line-height 1.7                 |
| Code/tag/pill  | 0.78rem  | 500    | JetBrains Mono                  |

### 3.3 Layout

- Max content width: `860px`, centered with `margin: 0 auto`
- Section padding: `5rem 1.5rem`
- Card border: `1px solid var(--border)`, border-radius `12px`
- Card padding: `1.75rem`

### 3.4 Motion (framer-motion)

Apply to every section wrapper:
```jsx
<motion.section
  initial={{ opacity: 0, y: 28 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5, ease: 'easeOut' }}
>
```

Project cards:
```jsx
<motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
```

---

## 4. Sections & Content

### 4.1 Hero (`Hero.jsx`)

Full-viewport-height centered column. No background image or gradient — pure white.

**Structure (top to bottom):**

1. Circular profile photo — 88px diameter, thin border `2px solid var(--border)` *(skip if no photo)*
2. Name: `Rajsekhar Singha Roy`
3. **Typing animation** — cycles through:
   - `"Agentic AI Engineer"`
   - `"Multi-Agent Systems Builder"`
   - `"RAG Pipeline Architect"`
   - `"Full Stack + GenAI Engineer"`
   
   Implement with a `useEffect` + `useState` cursor blink. Each phrase types character by character at ~60ms/char, pauses 2s, deletes, next.

4. Subline (muted text):
   ```
   Building autonomous AI systems that replace manual workflows.
   VIT Chennai · Graduating July 2027
   ```

5. Social icon row — four buttons, outlined, hover fills accent:
   - GitHub → `https://github.com/rajsekharrr`
   - LinkedIn → `https://linkedin.com/in/rajsekhar-roy`
   - X → `https://x.com/snapcallin`
   - Email → `mailto:royrajsekhar.is@gmail.com`

   All `target="_blank" rel="noopener noreferrer"`.  
   **Fun touch:** Add a `title` tooltip on the X icon: *"Not that X. The other one."*

6. CTA button (outlined, accent border):
   ```
   View my work  ↓
   ```
   On click: smooth-scroll to `#projects`.

---

### 4.2 About (`About.jsx`)

Short paragraph block — no card, just text under a section label.

**Section label:** `ABOUT`

**Copy:**
```
I build AI systems that actually do things — not just answer questions.

My work sits at the intersection of LangGraph orchestration, RAG pipelines,
and enterprise automation: agents that route leads, draft reports, and run
research workflows end-to-end without a human in the loop.

Final-year CSE (AI & ML) student at VIT Chennai, graduating July 2027.
Open to full-time Agentic AI / GenAI engineering roles.
```

---

### 4.3 Experience (`Experience.jsx`)

Section label: `EXPERIENCE`

Left-bordered timeline. Each entry has a thin `3px` left border in `var(--accent)`.

**Entry structure:**
```
[Role] — [Company]                    [Date range]
[Company descriptor — small muted tag]
• Bullet 1
• Bullet 2
• Bullet 3 (if applicable)
```

**Entries (newest first):**

---

**Agentic AI Intern** — Quadrafort Technologies  
*Salesforce Global Consulting Partner* · May 2026 – Jun 2026

- Deployed production autonomous AI agents on Salesforce Agentforce 360 using the Einstein AI reasoning engine and LangChain orchestration, executing context-aware enterprise CRM operations end-to-end with zero manual handoffs.
- Engineered modular agentic workflows mapping Salesforce Actions to native Flows and external REST APIs, automating the full intake-to-routing pipeline — eliminating all manual handoff steps.
- Applied structured prompting to enforce multi-step reasoning, maintain context across agent turns, and implement graceful fallback handling for production edge cases.

---

**AI Engineer Intern** — Velocis Systems  
*Cisco Gold Partner* · May 2025 – Jul 2025

- Architected and deployed 3 enterprise GenAI assistants in Python, FastAPI, and LangChain with full RAG pipelines backed by vector databases, grounding LLM responses in internal knowledge bases.
- Applied domain-specific fine-tuning on base LLMs and exposed RAG-augmented models through modular RESTful microservices aligned with enterprise client-report drafting workflows.

---

**Full Stack Developer Intern** — Tribal Wolf  
Jan 2025 – Mar 2025

- Built and shipped production web features using React.js, Node.js, and PostgreSQL.
- Integrated secure third-party payment gateways and optimized backend query performance under concurrent user load.

---

### 4.4 Projects (`Projects.jsx`)

Section label: `PROJECTS`
ID: `id="projects"` ← hero CTA scrolls here

**Layout:** FinSight AI as a full-width "hero project" card at top. LegalRAG and GestureLec as a 2-column grid below. On mobile: all single column.

---

#### Hero Project Card — full width, slightly elevated shadow

**FinSight AI** — Multi-Agent Equity Research Platform  
`September 2026`

Tags (pill row): `LangGraph` `LangChain` `Multi-Agent` `RAG` `Autonomous Agents`

> A 6-agent autonomous research system with specialized agents for financial research, market analysis, news intelligence, risk analysis, portfolio reasoning, and report generation. Implements agent orchestration, tool calling, stateful workflows, agent-to-agent handoffs, and structured outputs — delivering citation-grounded investment reports end-to-end.

Links: `[GitHub ↗]` — ask user if repo is public; if not, omit link

**Fun touch:** On hover, a thin ticker strip animates across the bottom of the card:
```
$LANGRAPH +4.2%  ·  $AGENT +2.7%  ·  $RAG +1.1%  ·  $GPT -0.3%  ·
```
Use a CSS `@keyframes` marquee. Keep it subtle — small font, muted gray, 8px height strip.

---

#### Standard Cards — 2-column grid

**LegalRAG** — Context-Aware Legal Research Assistant  
`March 2026`  
Tags: `LangChain` `FAISS` `RAG` `LLMs`

> RAG pipeline over Indian Supreme Court judgments — grounded retrieval, citation linking, and RAG evaluation to surface relevant case law and reduce hallucinations.

`[GitHub ↗]` — link if public

---

**GestureLec** — Gesture-Controlled AI Lecture Assistant  
`April 2026`  
Tags: `OpenCV` `MediaPipe` `Whisper` `FLAN-T5` `GPT`

> Real-time gesture recognition pipeline for hands-free media control + automated lecture pipeline (transcription → chapter detection → summarization → notes). Reduced post-lecture study prep time by 2×.

`[GitHub ↗]` — link if public

---

### 4.5 GitHub (`GitHub.jsx`)

Section label: `GITHUB`
Subheading: *"What I've been shipping"*

Embed live stat images from GitHub Readme Stats — these auto-update:

```jsx
// Row 1: Stats + Top Languages side by side
<img
  src="https://github-readme-stats.vercel.app/api?username=rajsekharrr&show_icons=true&theme=default&bg_color=ffffff&title_color=0057FF&icon_color=0057FF&text_color=0D0D0D&hide_border=true&rank_icon=github"
  alt="GitHub Stats"
/>
<img
  src="https://github-readme-stats.vercel.app/api/top-langs/?username=rajsekharrr&layout=compact&bg_color=ffffff&title_color=0057FF&text_color=0D0D0D&hide_border=true"
  alt="Top Languages"
/>

// Row 2: Activity graph — full width
<img
  src="https://github-readme-activity-graph.vercel.app/graph?username=rajsekharrr&bg_color=ffffff&color=0057FF&line=0057FF&point=0D0D0D&hide_border=true&theme=minimal"
  alt="GitHub Activity Graph"
/>
```

Wrap images in `max-width: 100%` and add a thin `var(--border)` border + `12px` radius to match card style.

Below the graphs, add a plain text link:
```
→ github.com/rajsekharrr
```

---

### 4.6 Skills (`Skills.jsx`)

Section label: `SKILLS`

Grouped pills. Group label in small ALL-CAPS muted text above each group. Pills styled:
```css
.pill {
  background: var(--accent-soft);
  color: var(--accent);
  border: 1px solid var(--border);
  border-radius: 999px;
  padding: 4px 12px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.78rem;
  font-weight: 500;
  display: inline-block;
}
```

**Groups:**

`AGENTIC & GENAI`  
LangChain · LangGraph · Agentforce 360 · Autonomous Agents · Multi-Agent Systems · Prompt Engineering · Tool Calling · Agent Orchestration · Fine-Tuning

`RAG & KNOWLEDGE`  
RAG · Vector Search · Embeddings · FAISS · ChromaDB · RAG Evaluation · Citation Grounding · Knowledge Pipelines · Semantic Search

`AI & NLP`  
GPT · FLAN-T5 · Whisper · Sentence Transformers · MediaPipe · OpenCV · Speech-to-Text · Gesture Recognition

`ENGINEERING`  
Python · JavaScript · FastAPI · React.js · Node.js · PostgreSQL · AWS · REST APIs · CI/CD · Git · C++

---

**Certifications** — 2 small cards below skills, in a row:

| Badge | Details |
|---|---|
| IBM RAG and Agentic AI Specialization | May – Sep 2026 · RAG pipelines, vector databases, multimodal GenAI, LangChain, LangGraph, production AI workflows |
| Oracle Cloud Infrastructure — Generative AI Professional | May – Jun 2025 · LLM deployment, inference pipelines, vector database integration, distributed cloud architecture |

Style: `var(--surface)` background, left accent border, inline with cert name bold and dates muted.

---

### 4.7 Footer (`Footer.jsx`)

Centered, minimal:

```
Rajsekhar Singha Roy

[GitHub icon]  [LinkedIn icon]  [X icon]  [Email icon]

Made with React · Deployed on Vercel

Made with too much coffee and a few too many agent handoffs.

© 2026 Rajsekhar Singha Roy
```

---

## 5. Social Links Reference

All links: `target="_blank" rel="noopener noreferrer"`

| Platform  | URL                                        |
|-----------|--------------------------------------------|
| GitHub    | https://github.com/rajsekharrr            |
| LinkedIn  | https://linkedin.com/in/rajsekhar-roy     |
| X         | https://x.com/snapcallin                  |
| Email     | mailto:royrajsekhar.is@gmail.com           |
| Phone     | +91 99888 77689 *(do not display publicly)*|

---

## 6. Vercel Deployment

### `vercel.json` (create in project root)
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}
```

### `vite.config.js` — no changes needed for Vercel.

### Deploy steps:
1. Push repo to GitHub (name it `portfolio` or `rajsekharrr.github.io`)
2. Go to vercel.com → New Project → Import from GitHub
3. Vercel auto-detects Vite → Framework: Vite → Build Command: `npm run build` → Output: `dist`
4. Deploy → done

---

## 7. SEO & Meta Tags (`index.html`)

```html
<title>Rajsekhar Singha Roy — Agentic AI Engineer</title>
<meta name="description" content="Agentic AI and Full Stack Engineer building autonomous multi-agent systems and RAG pipelines. VIT Chennai, graduating 2027." />
<meta name="author" content="Rajsekhar Singha Roy" />

<!-- Open Graph -->
<meta property="og:type" content="website" />
<meta property="og:title" content="Rajsekhar Singha Roy — Agentic AI Engineer" />
<meta property="og:description" content="Multi-agent systems, RAG pipelines, enterprise AI automation." />
<meta property="og:image" content="/og-image.png" />

<!-- Twitter card -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:site" content="@snapcallin" />
<meta name="twitter:title" content="Rajsekhar Singha Roy — Agentic AI Engineer" />
```

---

## 8. Responsiveness

All layouts must collapse gracefully:
- Projects grid: 2-col on `>768px`, 1-col on mobile
- GitHub stats row: side-by-side on `>640px`, stacked on mobile
- Hero: reduce H1 to `2rem` on mobile
- Navigation: no nav bar needed (one page with smooth scroll)

---

## 9. Open Questions for User — Answer Before Coding

- [ ] **Profile photo** — Do you want a photo on the hero? If yes, drop a headshot in `src/assets/profile.jpg`. YES
- [ ] **GitHub repo links** — Are FinSight AI, LegalRAG, and GestureLec repos public? Share the URLs so project cards can link out. YES PUBLIC
- [ ] **AI Portfolio project** — Should your conversational recruiter chatbot be included as a fourth project card? YES
- [ ] **Custom domain?** — Using the default `.vercel.app` URL, or do you have a domain to connect? DEFAULT
- [ ] **Navbar or no navbar?** — Since it's one page, you probably don't need one. But if you want smooth-scroll links at the top (Work / GitHub / Skills / Contact), say so. NO

---

## 10. Agent Checklist

Copy this into your VS Code agent chat as the build task:

```
[ ] Scaffold Vite + React project
[ ] npm install framer-motion react-icons
[ ] Add Inter + JetBrains Mono to index.html
[ ] Create App.css with all CSS variables from Section 3.1
[ ] Build Hero.jsx with typing animation
[ ] Build About.jsx
[ ] Build Experience.jsx (timeline with left accent border)
[ ] Build Projects.jsx (hero card + 2-col grid + ticker easter egg on FinSight)
[ ] Build GitHub.jsx (3 readme-stats images)
[ ] Build Skills.jsx (grouped pills + cert cards)
[ ] Build Footer.jsx with fun tagline
[ ] Wire all components in App.jsx in order
[ ] Add framer-motion fade-up to every section wrapper
[ ] Add hover lift to project cards
[ ] Make fully responsive (mobile breakpoints)
[ ] Add vercel.json
[ ] Update index.html with all meta tags from Section 7
[ ] Run npm run build — fix any errors
[ ] Push to GitHub → deploy on Vercel
```
