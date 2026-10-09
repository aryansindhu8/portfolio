/**
 * Central portfolio data — generated from Aryan's resume, GitHub and LinkedIn.
 * Every fact on the site comes from this file. Update it here and the whole site follows.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Aryan',
  displayName: 'Aryan',
  firstName: 'ARYAN',
  seriesTag: 'THE SERIES',
  /** Fictional studio card shown at the very start of the opening sequence. */
  originalLabel: 'AN ARYAN ORIGINAL',
  role: 'Software Engineer',
  tagline: ['Software Engineer', 'Full-Stack Developer', 'MERN Stack'],
  intro:
    'An MS Computer Science student at USC and software engineer, building production-grade web platforms, cloud-deployed apps and AI-driven systems with the MERN stack, C++, Python, Docker and AWS.',
  location: 'Los Angeles, CA',
  email: 'aryansin@usc.edu',
  links: {
    linkedin: 'https://www.linkedin.com/in/aryansindhu/',
    github: 'https://github.com/aryansindhu8',
  },
  resumePdf: '/assets/Aryan_Sindhu_Resume.pdf',
  portrait: {
    src: '/assets/portrait-720.webp',
    srcSet: '/assets/portrait-420.webp 420w, /assets/portrait-720.webp 720w, /assets/portrait-1100.webp 1100w',
    alt: 'Portrait of Aryan',
  },
  interests: ['Software Engineering', 'Full-Stack', 'Backend', 'Distributed Systems', 'Cloud Computing', 'System Design', 'Agentic AI'],
};

export const education = [
  {
    school: 'University of Southern California',
    place: 'Los Angeles, CA',
    degree: 'Master of Science — Computer Science',
    period: 'August 2025 – May 2027',
    score: 'GPA 3.8',
  },
  {
    school: 'Chitkara University',
    place: 'Punjab, India',
    degree: 'Bachelor of Engineering — Computer Science & Engineering',
    period: 'August 2020 – May 2024',
    score: 'GPA 4.0 • Top 5% of Cohort',
  },
];

export type Course = { code: string; title: string; prof: string };

/** Relevant graduate coursework at USC (remaining coursework is from the undergraduate degree). */
export const coursework: Course[] = [
  { code: 'CSCI 570', title: 'Analysis of Algorithms', prof: 'Dr. Shawn Shamsian' },
  { code: 'CSCI 572', title: 'Information Retrieval & Web Search Engines', prof: 'Dr. Saty Raghavachary' },
  { code: 'CSCI 571', title: 'Web Technologies', prof: 'Dr. Marco Papa' },
  { code: 'CSCI 526', title: 'Advanced Mobile Devices & Game Consoles', prof: 'Prof. Scott John Easley' },
  { code: 'CSCI 585', title: 'Database Systems', prof: 'Dr. Saty Raghavachary' },
  { code: 'CSCI 530', title: 'Security Systems', prof: 'Prof. Barry Clifford Neuman' },
  { code: 'CSCI 544', title: 'Applied Natural Language Processing', prof: 'Prof. Xiang Ren' },
];

export const experience = [
  {
    company: 'University of Southern California',
    role: 'Course Grader — CSCI 599 (Agentic AI) & CSCI 526 (Game Development)',
    place: 'Los Angeles, CA',
    period: 'August 2026 – Present',
    points: [
      'Evaluate technical assignments and capstone projects for 250+ students across Agentic AI and game development courses, assessing code quality, system design and project execution across LLM agents, multi-agent systems, RAG, REST APIs and Unity-based applications.',
      'Support 250+ students and course operations by resolving technical questions on Piazza and Discord, validating lecture demos and collaborating with faculty on grading and course operations.',
    ],
  },
  {
    company: 'Infoaccords Technology',
    role: 'Software Engineering Intern',
    place: 'Chandigarh, India',
    period: 'August 2023 – August 2024',
    points: [
      'Architected and delivered 5+ production-grade full-stack features for the Ministry of POS platform, working directly under the CEO to translate business requirements into scalable solutions and accelerating product releases by 30% using React.js, Node.js, Express.js, PostgreSQL, MongoDB, Stripe, AWS and REST APIs.',
      'Engineered responsive React interfaces for a high-volume product catalog, reducing page load time by 40% through lazy loading, component optimization, efficient API integration, database indexing and cloud deployment.',
    ],
  },
  {
    company: 'Citadel India Tech',
    role: 'Software Engineering Intern',
    place: 'Haryana, India',
    period: 'December 2022 – June 2023',
    points: [
      'Architected and optimized scalable RESTful services supporting enterprise workflows, reducing API latency by 30% through efficient SQL query optimization, modular backend architecture and Python-based automation.',
      'Improved production reliability by reducing software defects by 35% through automated testing, systematic debugging, peer code reviews and cross-functional collaboration while delivering production-ready full-stack software.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  /** Omit when the repository isn't public — the GitHub button is hidden instead of linking to a 404. */
  github?: string;
  /** Optional live deployment URL — renders a "Watch live" button in the overlay. */
  demo?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

/** Ordered most-recent first (by end date). */
export const projects: Project[] = [
  {
    id: 'ai-data-analysis',
    title: 'AI-Assisted Data Analysis & ML',
    year: 'Jul 2026',
    genre: 'Data Science • AI • ML',
    logline: 'An AI-assisted data-science workflow that analyzes, visualizes and models real-world datasets through natural-language prompts.',
    stack: ['Python', 'Google Colab', 'Gemini', 'Pandas', 'Matplotlib', 'Machine Learning'],
    build: [
      'Analyzed the 2024 Stack Overflow Developer Survey — demographics, language usage and salary — using Gemini-driven analysis and automated code generation in Google Colab.',
      'Ran exploratory data analysis and built a regression model relating developer age to salary for predictive analysis, refining AI-generated Pandas and Matplotlib workflows across CSV and JSON data.',
    ],
    features: [
      'Natural-language data analysis in Colab',
      'EDA with histograms & pie charts',
      'Age-vs-salary regression model',
      'Nested JSON extraction (NoSQL-style access)',
      'AI-generated Pandas / Matplotlib pipelines',
    ],
    metrics: [
      { value: '2024 SO', label: 'Developer Survey dataset' },
      { value: 'Regression', label: 'age → salary model' },
      { value: 'CSV + JSON', label: 'structured & semi-structured' },
    ],
    palette: { from: '#2a0610', via: '#7a0f24', to: '#0b0710', accent: '#ff3d5a' },
    motif: 'shield',
  },
  {
    id: 'spatial-viz',
    title: 'Spatial Data Visualization',
    year: 'Jun 2026',
    genre: 'Web • Maps • GenAI',
    logline: 'An interactive geospatial web app that plots real-world coordinates on a live map, bootstrapped with a locally hosted LLM.',
    stack: ['JavaScript', 'Leaflet.js', 'HTML', 'CSS', 'Ollama', 'Gemma', 'Dyad'],
    build: [
      'Generated the initial web app with Dyad and a locally hosted Gemma LLM via Ollama, then debugged and reworked its event-handling and callback logic.',
      'Built an interactive Leaflet.js map with latitude/longitude inputs that dynamically plot and validate location markers.',
    ],
    features: [
      'Interactive Leaflet.js mapping',
      'Dynamic lat/long marker plotting',
      'LLM-generated code (Gemma via Ollama)',
      'Prompt-engineered frontend',
      'Coordinate validation',
    ],
    metrics: [
      { value: 'Leaflet', label: 'interactive map' },
      { value: 'Local LLM', label: 'Gemma via Ollama' },
      { value: 'Prompt → UI', label: 'AI-generated frontend' },
    ],
    github: 'https://github.com/aryansindhu8/ai-assisted-spatial-data-visualization',
    demo: 'https://aryansindhu8.github.io/ai-assisted-spatial-data-visualization/',
    palette: { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' },
    motif: 'flow',
  },
  {
    id: 'text-to-sql',
    title: 'AI Text-to-SQL & Query Validation',
    year: 'Jun 2026',
    genre: 'AI • Databases • SQL',
    logline: 'An AI workflow that turns natural-language business questions into executable SQL and validates them against a relational database.',
    stack: ['Kimi K2.6', 'TiDB Cloud', 'SQL', 'Prompt Engineering'],
    build: [
      'Used the Kimi K2.6 LLM with schema context to generate context-aware SQL across multiple related tables.',
      'Deployed a TiDB Cloud database with synthetic test data and executed the generated SQL — aggregations, date filters and multi-table joins — verifying correctness from the results.',
    ],
    features: [
      'Schema-aware NL → SQL generation',
      'TiDB Cloud execution',
      'Aggregations, filters & multi-table queries',
      'Result-based correctness validation',
      'Prompt engineering',
    ],
    metrics: [
      { value: 'NL → SQL', label: 'schema-aware' },
      { value: 'TiDB Cloud', label: 'live execution' },
      { value: 'Multi-table', label: 'joins & aggregations' },
    ],
    github: 'https://github.com/aryansindhu8/ai-text-to-sql-validation',
    palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' },
    motif: 'shield',
  },
  {
    id: 'artsphere',
    title: 'ArtSphere',
    year: 'Feb – May 2026',
    genre: 'Full-Stack • Cloud • APIs',
    logline: 'A cloud-native art discovery platform that unifies two major museum collections behind one secure interface.',
    stack: ['Node.js', 'Express.js', 'Bootstrap 5', 'Leaflet.js', 'Google Cloud Run', 'Docker'],
    build: [
      'Built a full-stack artwork discovery platform integrating the Metropolitan Museum and Harvard Art Museums APIs through scalable Node.js/Express services, with server-side pagination and response normalization.',
      'Added Wikipedia-powered artist biographies, Leaflet.js museum-location maps and persistent localStorage favorites, then containerized with Docker and deployed on Google Cloud Run.',
    ],
    features: [
      'Unified proxy over the Met & Harvard Art Museums APIs',
      'Server-side pagination & normalized responses',
      'Wikipedia artist biographies',
      'Interactive Leaflet.js museum maps',
      'Persistent localStorage favorites',
      'Dockerized deployment on Google Cloud Run',
    ],
    metrics: [
      { value: '50%', label: 'less API complexity' },
      { value: '70%', label: 'faster repeat search' },
      { value: '2', label: 'museum APIs unified' },
    ],
    github: 'https://github.com/aryansindhu8/artSphere',
    demo: 'https://art-explorer-704411817667.us-central1.run.app/',
    palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' },
    motif: 'flow',
  },
  {
    id: 'er-diagram',
    title: 'LLM-Assisted ER Modeling',
    year: 'May 2026',
    genre: 'AI • Databases • Tooling',
    logline: 'An AI-assisted database-design workflow that generates and compares ER models for a college system using local LLMs.',
    stack: ['Python', 'Streamlit', 'Ollama', 'Llama', 'Gemma', 'LiteLLM', 'Mermaid'],
    build: [
      'Built a Python + Streamlit multi-LLM interface (via LiteLLM) that sends one prompt to several locally hosted models — Llama and Gemma through Ollama — and compares their responses side by side.',
      'Designed a 15-entity ER diagram for a college management system, generated in Mermaid syntax, then selected and refined the stronger LLM-proposed schema with documented rationale.',
    ],
    features: [
      'Multi-LLM side-by-side comparison',
      '15 interconnected entities',
      'Mermaid-rendered ER diagrams',
      'Privacy-preserving local LLMs',
      'Documented design decisions',
    ],
    metrics: [
      { value: '15', label: 'entities modeled' },
      { value: 'Multi-LLM', label: 'side-by-side compare' },
      { value: 'Mermaid', label: 'ER diagrams' },
    ],
    github: 'https://github.com/aryansindhu8/llm-assisted-er-diagram',
    palette: { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' },
    motif: 'tenants',
  },
  {
    id: 'cinescope',
    title: 'CineScope',
    year: 'Oct 2025 – Jan 2026',
    genre: 'Full-Stack • Cloud • Secure APIs',
    logline: 'A movie discovery app that keeps every API credential on the server behind a secure Flask proxy.',
    stack: ['Python', 'Flask', 'TMDB API', 'YouTube Data API', 'Google Cloud Run', 'Docker'],
    build: [
      'Built a secure movie discovery platform with Flask services integrating the TMDB and YouTube APIs behind a server-side proxy that keeps credentials in environment variables.',
      'Aggregated metadata, trailers, cast, genres and ratings into unified responses with asynchronous rendering, then containerized with Docker and deployed on Google Cloud Run.',
    ],
    features: [
      'Secure server-side proxy for TMDB & YouTube keys',
      'Unified metadata, trailers, cast & ratings',
      'Asynchronous dynamic rendering',
      'Gunicorn + Docker production image',
      'Deployed on Google Cloud Run',
    ],
    metrics: [
      { value: '40%', label: 'more responsive' },
      { value: '0', label: 'exposed API keys' },
      { value: '2', label: 'APIs integrated' },
    ],
    github: 'https://github.com/aryansindhu8/CineScope',
    demo: 'https://movie-explorer-205906543872.us-central1.run.app/',
    palette: { from: '#1a0d02', via: '#8a4a07', to: '#0a0806', accent: '#ffb547' },
    motif: 'shield',
  },
  {
    id: 'dna-alignment',
    title: 'DNA Sequence Alignment',
    year: 'Nov – Dec 2025',
    genre: 'Algorithms • Python',
    logline: 'Two algorithms for optimal DNA sequence alignment — a dynamic-programming solution and a memory-efficient divide-and-conquer variant.',
    stack: ['Python', 'Dynamic Programming', 'Divide & Conquer'],
    build: [
      'Implemented a dynamic-programming algorithm computing the minimum-cost alignment between two sequences with configurable gap and mismatch penalties, plus alignment reconstruction.',
      'Developed a memory-efficient variant combining DP with divide-and-conquer, and benchmarked both on execution time and memory across increasing problem sizes.',
    ],
    features: [
      'Minimum-cost DP alignment',
      'Memory-efficient divide & conquer',
      'Optimal alignment reconstruction',
      'Time & memory benchmarking',
      'CPU-time / memory vs. size analysis',
    ],
    metrics: [
      { value: '2', label: 'algorithms compared' },
      { value: 'DP + D&C', label: 'space-optimized' },
      { value: 'Time vs. memory', label: 'benchmarked' },
    ],
    github: 'https://github.com/aryansindhu8/memory-efficient-dna-sequence-alignment',
    palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' },
    motif: 'flow',
  },
  {
    id: 'agentic-rag',
    title: 'Agentic AI & Multimodal RAG',
    year: 'Nov 2025',
    genre: 'Agentic AI • RAG',
    logline: 'An AI agent with multimodal retrieval-augmented generation, built on Google ADK and Gemini with tool use and document grounding.',
    stack: ['Python', 'Google ADK', 'Gemini', 'RAG', 'Multimodal AI'],
    build: [
      'Built an LLM-powered agent with Python, Google ADK and Gemini, integrating Google Search as a tool so it can pull external information when answering.',
      'Implemented multimodal RAG over user-provided PDFs, images and audio, exposed through both command-line and browser interfaces with env-managed API integration.',
    ],
    features: [
      'Google ADK agent with Gemini',
      'Google Search tool use',
      'Multimodal RAG (PDF, image, audio)',
      'CLI & browser interfaces',
      'Foundations for multi-agent systems',
    ],
    metrics: [
      { value: 'Multimodal', label: 'PDF · image · audio' },
      { value: 'Google ADK', label: '+ Gemini' },
      { value: 'RAG + tools', label: 'search-augmented' },
    ],
    github: 'https://github.com/aryansindhu8/agentic-rag-google-adk',
    palette: { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' },
    motif: 'shield',
  },
  {
    id: 'hadoop-inverted-index',
    title: 'Hadoop MapReduce Inverted Index',
    year: 'Oct 2025',
    genre: 'Big Data • Java',
    logline: 'An inverted-indexing system over a large text corpus, built with Hadoop MapReduce for unigram and bigram terms.',
    stack: ['Java', 'Hadoop', 'MapReduce'],
    build: [
      'Built unigram and bigram inverted indexes with the MapReduce model, using custom Mapper and Reducer logic to map terms to document IDs and occurrence frequencies.',
      'Added a preprocessing pipeline (punctuation/number removal, lowercasing) and HashMap-based aggregation, producing term → docID:frequency postings for fast lookup.',
    ],
    features: [
      'Custom Mapper & Reducer logic',
      'Unigram & bigram indexing',
      'Text normalization pipeline',
      'term → docID:frequency postings',
      'Core information-retrieval concepts',
    ],
    metrics: [
      { value: 'Uni + bigram', label: 'inverted index' },
      { value: 'MapReduce', label: 'custom Mapper/Reducer' },
      { value: 'term→doc:freq', label: 'postings' },
    ],
    github: 'https://github.com/aryansindhu8/hadoop-inverted-index',
    palette: { from: '#1a0d02', via: '#8a4a07', to: '#0a0806', accent: '#ffb547' },
    motif: 'flow',
  },
  {
    id: 'news-web-crawler',
    title: 'Multithreaded Web Crawler',
    year: 'Sep 2025',
    genre: 'Java • Concurrency • Data',
    logline: 'A multithreaded Java crawler built on crawler4j that maps and analyzes a large-scale news website.',
    stack: ['Java', 'crawler4j', 'Multithreading', 'HTTP/HTTPS', 'CSV'],
    build: [
      'Configured a crawler4j-based multithreaded crawler that processes up to 20,000 pages with controlled depth, domain restriction, URL deduplication and politeness delays.',
      'Collected HTTP/HTTPS status codes, redirects, internal/external URLs, content types and file sizes, generating structured CSV datasets and crawl statistics.',
    ],
    features: [
      'Up to 20,000 pages crawled',
      'Multithreaded, domain-restricted crawling',
      'HTTP status, redirect & URL analysis',
      'Content-type & file-size capture',
      'CSV crawl-statistics output',
    ],
    metrics: [
      { value: '20,000', label: 'pages crawled' },
      { value: 'crawler4j', label: 'multithreaded' },
      { value: 'CSV', label: 'crawl statistics' },
    ],
    github: 'https://github.com/aryansindhu8/news-web-crawler',
    palette: { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' },
    motif: 'flow',
  },
  {
    id: 'recipe-finder',
    title: 'Recipe Finder',
    year: 'Aug – Sep 2025',
    genre: 'Web • SPA • Cloud',
    logline: 'A framework-free single-page recipe app on TheMealDB API, containerized and deployed to the cloud.',
    stack: ['JavaScript', 'HTML', 'CSS', 'TheMealDB API', 'Docker', 'Google Cloud Run'],
    build: [
      'Built a single-page application with vanilla HTML, CSS and JavaScript, integrating TheMealDB REST API via the Fetch API with asynchronous request handling.',
      'Dynamically rendered recipe details, ingredients, instructions and YouTube tutorials with client-side navigation, then containerized with Docker and hosted on Google Cloud Run.',
    ],
    features: [
      'Vanilla-JS single-page app',
      'TheMealDB REST API via Fetch',
      'YouTube tutorial embeds',
      'Client-side navigation & state',
      'Docker + Google Cloud Run',
    ],
    metrics: [
      { value: 'Vanilla JS', label: 'no frameworks' },
      { value: 'TheMealDB', label: 'REST API' },
      { value: 'Cloud Run', label: 'Docker deploy' },
    ],
    github: 'https://github.com/aryansindhu8/Recipe-Finder',
    demo: 'https://recipe-finder-42553282238.us-central1.run.app/',
    palette: { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' },
    motif: 'flow',
  },
  {
    id: 'search-engine-comparison',
    title: 'Search Engine Ranking Analysis',
    year: 'Aug 2025',
    genre: 'Information Retrieval • Python',
    logline: 'A Python system that compares a search engine’s results against Google across 100 queries using overlap and rank-correlation metrics.',
    stack: ['Python', 'BeautifulSoup', 'Requests', 'JSON', 'CSV'],
    build: [
      'Built a web scraper with Requests and BeautifulSoup to collect the top-10 organic results for each of 100 queries, then normalized URLs to match results across engines.',
      'Computed percentage overlap and Spearman’s rank-correlation coefficient over ~1,000 results, producing structured JSON and CSV outputs for analysis.',
    ],
    features: [
      'Top-10 organic result scraping',
      'URL normalization & matching',
      'Percentage overlap analysis',
      'Spearman rank correlation',
      'JSON / CSV outputs',
    ],
    metrics: [
      { value: '100', label: 'queries compared' },
      { value: '~1,000', label: 'results analyzed' },
      { value: 'Spearman', label: 'rank correlation' },
    ],
    palette: { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' },
    motif: 'flow',
  },
  {
    id: 'dentaledge',
    title: 'DentalEdge',
    year: 'Jan – May 2024',
    genre: 'MERN • Healthcare • Payments',
    logline: 'A multi-functional dentist-hub platform with appointment scheduling and online payments, built MERN with an Agile team.',
    stack: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'SQL', 'Razorpay', 'REST APIs'],
    build: [
      'Built backend services with Node.js, Express, MongoDB and SQL, improving data-handling performance by 40% with modular, service-oriented REST APIs.',
      'Developed a responsive React frontend and integrated third-party appointment scheduling and payment processing, lifting transaction success rates by 30%, in an Agile team with testing and code reviews.',
    ],
    features: [
      'Appointment scheduling',
      'Online payment processing',
      'MERN + SQL backend',
      'Modular, scalable REST APIs',
      'Responsive React UI',
    ],
    metrics: [
      { value: '40%', label: 'better data-handling' },
      { value: '30%', label: 'higher txn success' },
      { value: 'Agile', label: 'team delivery' },
    ],
    // DentalEdge's repository is private — the GitHub button is hidden.
    demo: 'https://www.rcdso.in/',
    palette: { from: '#2a0610', via: '#7a0f24', to: '#0b0710', accent: '#ff3d5a' },
    motif: 'tenants',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'merit-scholar',
    title: 'Merit Scholar',
    org: 'Chitkara University',
    detail: 'Graduated with a 4.0 GPA, in the top 5% of the Computer Science & Engineering cohort.',
    laurel: 'Top 5% of Cohort',
  },
  {
    id: 'publication',
    title: 'Published Co-Author',
    org: 'Empowering Rural Farmers with AI',
    detail: 'Co-authored a peer-reviewed AI publication demonstrating a 15% productivity improvement by synthesizing 10+ AI, ML and IoT studies and analyzing data from 600 survey participants.',
    laurel: 'Peer-Reviewed',
  },
  {
    id: 'grader',
    title: 'Course Grader',
    org: 'USC — Agentic AI & Game Dev',
    detail: 'Selected to grade and support 250+ students across CSCI 599 (Agentic AI) and CSCI 526 (Game Development).',
    laurel: '250+ Students',
  },
  {
    id: 'research-assistant',
    title: 'Research Assistant',
    org: 'CCET',
    detail: 'Conducted applied AI research in precision agriculture, feeding into the peer-reviewed rural-farming publication.',
    laurel: 'AI Research',
  },
  {
    id: 'volunteer',
    title: 'Community Volunteer',
    org: 'Udham NGO',
    detail: 'Volunteered with the Udham NGO, contributing time and technical skills to community initiatives.',
    laurel: 'Give Back',
  },
];

export type Certification = { issuer: string; name: string; link?: string };

export const certifications: Certification[] = [
  { issuer: 'Meta', name: 'Full Stack Developer Professional Certificate (In Progress)' },
  { issuer: 'Meta', name: 'Introduction to Front-End Development' },
  { issuer: 'Meta', name: 'Programming with JavaScript' },
  { issuer: 'Meta', name: 'Version Control' },
  { issuer: 'Meta', name: 'HTML and CSS in Depth' },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Languages',
    subtitle: 'C++ is primary',
    skills: [
      { name: 'C++', mono: 'C+', note: 'Most proficient' },
      { name: 'JavaScript', mono: 'Js', note: 'ES6+' },
      { name: 'Python', mono: 'Py' },
      { name: 'Java', mono: 'Jv' },
      { name: 'SQL', mono: 'Sq' },
      { name: 'HTML5', mono: 'Ht' },
      { name: 'CSS3', mono: 'Cs' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    subtitle: 'Interfaces & the web platform',
    skills: [
      { name: 'React.js', mono: 'Re' },
      { name: 'JavaScript', mono: 'Js' },
      { name: 'Bootstrap 5', mono: 'Bs' },
      { name: 'HTML5', mono: 'Ht' },
      { name: 'CSS3', mono: 'Cs' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    subtitle: 'Server-side logic & APIs',
    skills: [
      { name: 'Node.js', mono: 'No' },
      { name: 'Express.js', mono: 'Ex' },
      { name: 'Flask', mono: 'Fl' },
      { name: 'REST APIs', mono: 'Ap' },
      { name: 'MERN Stack', mono: 'Mn' },
    ],
  },
  {
    id: 'databases',
    title: 'Databases',
    subtitle: 'Modeling • Indexing',
    skills: [
      { name: 'PostgreSQL', mono: 'Pg' },
      { name: 'MongoDB', mono: 'Mg' },
      { name: 'MySQL', mono: 'My' },
      { name: 'TiDB', mono: 'Ti' },
    ],
  },
  {
    id: 'cloud',
    title: 'Cloud & Tools',
    subtitle: 'Shipping & infrastructure',
    skills: [
      { name: 'AWS', mono: 'Aw' },
      { name: 'Google Cloud Run', mono: 'Gc' },
      { name: 'Docker', mono: 'Dk' },
      { name: 'Git / GitHub', mono: 'Gt' },
      { name: 'Postman', mono: 'Pm' },
    ],
  },
  {
    id: 'ai',
    title: 'AI & Data',
    subtitle: 'LLMs, RAG & analysis',
    skills: [
      { name: 'LLMs', mono: 'Lm' },
      { name: 'RAG', mono: 'Rg' },
      { name: 'Google ADK', mono: 'Ad' },
      { name: 'Ollama', mono: 'Ol' },
      { name: 'Pandas', mono: 'Pd' },
      { name: 'Matplotlib', mono: 'Mp' },
    ],
  },
  {
    id: 'fundamentals',
    title: 'CS Fundamentals',
    subtitle: 'The foundations',
    skills: [
      { name: 'Data Structures & Algorithms', mono: 'Ds' },
      { name: 'OOP', mono: 'Oo' },
      { name: 'Operating Systems', mono: 'Os' },
      { name: 'DBMS', mono: 'Db' },
      { name: 'Computer Networks', mono: 'Cn' },
      { name: 'Distributed Systems', mono: 'Di' },
      { name: 'Information Retrieval', mono: 'Ir' },
      { name: 'Agile / Scrum', mono: 'Ag' },
    ],
  },
  {
    id: 'interests',
    title: 'Interests',
    subtitle: 'Where I want to grow',
    skills: [
      { name: 'Software Engineering', mono: 'Se' },
      { name: 'Full-Stack', mono: 'Fs' },
      { name: 'Backend', mono: 'Bk' },
      { name: 'Distributed Systems', mono: 'Di' },
      { name: 'Cloud Computing', mono: 'Cc' },
      { name: 'System Design', mono: 'Sd' },
      { name: 'Agentic AI', mono: 'Ai' },
    ],
  },
];

/**
 * Factual cross-references shown when a skill card is hovered/tapped:
 * where the skill appears in the projects, experience or achievements on the resume.
 */
export const skillEvidence: Record<string, string[]> = {
  'C++': ['Most proficient language', 'USC & undergrad coursework'],
  JavaScript: ['ArtSphere', 'CineScope', 'Spatial Data Visualization', 'Recipe Finder'],
  Python: ['DNA Alignment', 'Agentic RAG', 'Search Engine Analysis', 'Citadel India Tech'],
  Java: ['Hadoop Inverted Index', 'Web Crawler'],
  SQL: ['AI Text-to-SQL', 'Citadel India Tech', 'Infoaccords Technology'],
  'React.js': ['DentalEdge', 'Infoaccords Technology'],
  'Bootstrap 5': ['ArtSphere'],
  HTML5: ['Spatial Data Visualization', 'Recipe Finder'],
  CSS3: ['Spatial Data Visualization', 'Recipe Finder'],
  'Node.js': ['ArtSphere', 'DentalEdge', 'Infoaccords Technology'],
  'Express.js': ['ArtSphere', 'DentalEdge', 'Infoaccords Technology'],
  Flask: ['CineScope'],
  'REST APIs': ['ArtSphere', 'DentalEdge', 'Citadel India Tech'],
  'MERN Stack': ['DentalEdge'],
  PostgreSQL: ['Infoaccords Technology'],
  MongoDB: ['DentalEdge', 'Infoaccords Technology'],
  TiDB: ['AI Text-to-SQL Validation'],
  AWS: ['Infoaccords Technology'],
  'Google Cloud Run': ['ArtSphere', 'CineScope', 'Recipe Finder'],
  Docker: ['ArtSphere', 'CineScope', 'Recipe Finder'],
  'Git / GitHub': ['Meta Version Control', 'All projects'],
  LLMs: ['Agentic RAG', 'AI Text-to-SQL', 'ER Modeling'],
  RAG: ['Agentic AI & Multimodal RAG'],
  'Google ADK': ['Agentic AI & Multimodal RAG'],
  Ollama: ['ER Modeling', 'Spatial Data Visualization'],
  Pandas: ['AI-Assisted Data Analysis'],
  Matplotlib: ['AI-Assisted Data Analysis'],
  'Data Structures & Algorithms': ['DNA Alignment', 'CSCI 570'],
  'Information Retrieval': ['Hadoop Inverted Index', 'Search Engine Analysis', 'CSCI 572'],
  'Distributed Systems': ['USC coursework', 'Current focus'],
  'System Design': ['Current focus'],
  'Agentic AI': ['USC CSCI 599 grading', 'Agentic RAG', 'Current focus'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Origin',
    period: '2020 – 2024',
    synopsis: 'Four years at Chitkara University — Computer Science & Engineering, finishing with a 4.0 GPA as a Merit Scholar in the top 5% of the cohort.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'The Engineer',
        description: 'Bachelor of Engineering in Computer Science & Engineering at Chitkara University — 4.0 GPA, Merit Scholar, top 5% of cohort.',
        tags: ['B.E. CSE', 'GPA 4.0', 'Top 5%'],
        runtime: 'Aug 2020 – May 2024',
        palette: violet,
      },
    ],
  },
  {
    number: 2,
    title: 'Into Industry',
    period: '2022 – 2024',
    synopsis: 'Two software engineering internships and applied AI research — from backend services to a pan-India product platform.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'The Backend Intern',
        description: 'At Citadel India Tech — scalable RESTful services with API latency cut by 30% and software defects reduced by 35%.',
        tags: ['REST APIs', 'SQL', 'Python'],
        runtime: 'Dec 2022 – Jun 2023',
        palette: ocean,
      },
      {
        code: 'S02 E02',
        title: 'Under the CEO',
        description: 'At Infoaccords — built a pan-India POS e-commerce platform under the CEO: 5+ production features, releases up 30%, page load down 40%.',
        tags: ['React.js', 'Node.js', 'PostgreSQL', 'Stripe'],
        runtime: 'Aug 2023 – Aug 2024',
        palette: amber,
      },
      {
        code: 'S02 E03',
        title: 'The Researcher',
        description: 'Research Assistant at CCET — co-authored a peer-reviewed publication on empowering rural farmers with AI.',
        tags: ['AI Research', 'Precision Agriculture', 'Publication'],
        runtime: '2024',
        palette: jade,
      },
    ],
  },
  {
    number: 3,
    title: 'The Masters',
    period: '2025 – Present',
    synopsis: 'Westward to USC for an MS in Computer Science — and grading the next class of Agentic AI and game developers.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'Westward',
        description: 'Master of Science in Computer Science at the University of Southern California, Los Angeles — 3.8 GPA.',
        tags: ['MS CS', 'USC', 'GPA 3.8'],
        runtime: 'Aug 2025 – May 2027',
        palette: crimson,
      },
      {
        code: 'S03 E02',
        title: 'The Grader',
        description: 'Course Grader for CSCI 599 (Agentic AI) and CSCI 526 (Game Development) — supporting 250+ students on LLM agents, RAG and Unity.',
        tags: ['Agentic AI', 'LLMs', 'RAG', 'Unity'],
        runtime: 'Aug 2026 – Present',
        palette: violet,
      },
    ],
  },
  {
    number: 4,
    title: 'The Originals',
    period: '2024 – 2026',
    synopsis: 'Shipped projects across the stack — cloud apps, AI & RAG experiments, algorithms and big-data work, and a MERN healthcare platform.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'The Full-Stack Builder',
        description: 'ArtSphere and CineScope — cloud-native platforms on Google Cloud Run unifying museum and movie APIs behind secure backends.',
        tags: ['Node.js', 'Flask', 'Docker', 'Cloud Run'],
        runtime: '2025 – 2026',
        palette: ocean,
      },
      {
        code: 'S04 E02',
        title: 'The AI Tinkerer',
        description: 'Agentic RAG, Text-to-SQL, LLM-assisted ER modeling and AI-driven data analysis — building with Gemini, Google ADK and local LLMs.',
        tags: ['Agentic AI', 'RAG', 'LLMs', 'Gemini'],
        runtime: '2025 – 2026',
        palette: crimson,
      },
      {
        code: 'S04 E03',
        title: 'The Systems Engineer',
        description: 'Memory-efficient algorithms, a Hadoop MapReduce index, a multithreaded crawler and search-engine ranking analysis.',
        tags: ['Java', 'Hadoop', 'Algorithms', 'IR'],
        runtime: '2025',
        palette: amber,
      },
    ],
  },
  {
    number: 5,
    title: "What's Next",
    period: 'Now streaming',
    synopsis: 'Pursuing full-time Software Engineer roles, with interests spanning full-stack, backend, distributed systems, cloud and Agentic AI.',
    episodes: [
      {
        code: 'S05 E01',
        title: 'The Next Chapter',
        description: 'Targeting full-time Software Engineer roles — with interests across Full-Stack, Backend, Distributed Systems, Cloud Computing, System Design and Agentic AI.',
        tags: ['Software Engineer', 'Backend', 'Distributed Systems', 'Agentic AI'],
        runtime: 'In production',
        palette: violet,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Targeting', title: 'Software Engineer', detail: 'Full-Stack · Backend · Distributed Systems', palette: crimson },
  { label: 'Primary language', title: 'C++', detail: 'then JavaScript, Python & Java', palette: amber },
  { label: 'Live Original', title: 'ArtSphere', detail: 'Deployed on Google Cloud Run', palette: ocean },
  { label: 'Live Original', title: 'CineScope', detail: 'Secure Flask proxy • Cloud Run', palette: amber },
  { label: 'Academic high', title: '4.0 GPA', detail: 'Merit Scholar, top 5% at Chitkara', palette: violet },
  { label: 'Published work', title: 'AI for Farmers', detail: 'Peer-reviewed • 600 participants', palette: jade },
  { label: 'Biggest build', title: 'Pan-India POS', detail: 'Infoaccords • under the CEO', palette: crimson },
  { label: 'Backend win', title: '-30% API Latency', detail: 'Citadel India Tech', palette: ocean },
  { label: 'Now at', title: 'USC MS CS', detail: 'Los Angeles • 3.8 GPA', palette: violet },
  { label: 'Current focus', title: 'System Design', detail: 'with Distributed Systems & Cloud', palette: jade },
];

/** Slides for the "▶ Play Intro" cinematic sequence. */
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Education',
    title: 'MS · Computer Science',
    lines: ['University of Southern California, Los Angeles · GPA 3.8', 'August 2025 – May 2027'],
    chips: ['B.E. CSE — GPA 4.0, Top 5%'],
  },
  {
    kicker: 'Skills',
    title: 'Full-stack, end to end.',
    lines: ['C++, JavaScript, Python, Java · React, Node.js, Express, Flask', 'PostgreSQL, MongoDB, MySQL · AWS, Google Cloud Run, Docker'],
    chips: ['C++', 'MERN', 'Python', 'React', 'Docker', 'AWS'],
  },
  {
    kicker: 'Experience',
    title: 'From interns to the CEO',
    lines: ['Infoaccords — pan-India POS platform, releases +30%, page load -40%', 'Citadel India Tech — API latency -30%, defects -35%', 'USC — grading 250+ Agentic AI & game-dev students'],
  },
  {
    kicker: 'Projects',
    title: 'Shipped Projects',
    lines: ['ArtSphere & CineScope — cloud-native, live on Cloud Run', 'Agentic RAG · Text-to-SQL · LLM-assisted ER modeling', 'Algorithms, Hadoop MapReduce & a MERN healthcare platform'],
  },
  {
    kicker: 'Recognition',
    title: 'Top Moments',
    lines: ['Merit Scholar — 4.0 GPA, top 5% of cohort', 'Published co-author — AI for rural farmers', 'Research Assistant — CCET'],
  },
  {
    kicker: 'Certified',
    title: 'Meta Full-Stack',
    lines: ['Professional Certificate in progress', 'Front-End • JavaScript • Version Control • HTML & CSS'],
  },
  {
    kicker: 'Current mission',
    title: 'Software Engineer',
    lines: ['Full-Stack · Backend · Distributed Systems · Cloud · System Design · Agentic AI'],
  },
];

export type ProfileId = 'aryan' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'aryan',
    name: 'Aryan',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, achievements & skills first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, stack & GitHub first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'The story arc & highlights first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Education & experience', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Originals • 2024 – 2026`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 highlights', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'My Achievements', meta: `${achievements.length} Moments • ${certifications.length} Certifications`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};
