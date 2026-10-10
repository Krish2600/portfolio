export interface Technology {
  name: string;
  icon?: string;
  color?: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  technicalDetail: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  image?: string;
  featured: boolean;
  accentColor: string;
}

export const PROJECTS: Project[] = [
  {
    id: "distributed-job-orchestrator",
    title: "Distributed Job Orchestrator",
    category: "Distributed Systems · Backend",
    tagline: "Fault-tolerant background job processing platform",
    description:
      "A background job processing platform built in C++ and backed by Redis. Designed to handle job queuing, execution, and monitoring with built-in fault tolerance — failed jobs are automatically retried, and job state is persisted across restarts.",
    technicalDetail:
      "Built a thread-pool-based executor with configurable concurrency, a Redis connection pool for high-throughput state management, and structured job lifecycles (queued → running → completed/failed). Worker processes claim jobs atomically via Redis to prevent duplicate execution. The whole system is containerized with Docker for reproducible deployment.",
    technologies: ["C++", "Redis", "Docker", "Threading", "Connection Pooling"],
    githubUrl: "https://github.com/Krish2600/distributed-job-orchestrator",
    demoUrl: "http://jobflowkrish.duckdns.org:3000/",
    image: "/assets/projects/job-orchestrator-real.png",
    featured: true,
    accentColor: "#5B8CFF",
  },
  {
    id: "codecraft-studio",
    title: "CodeCraft Studio",
    category: "Real-Time Collaboration · Full Stack",
    tagline: "Browser-based collaborative IDE with CRDT sync",
    description:
      "A real-time collaborative code editor that lets multiple developers work in the same file simultaneously without conflicts. Built on top of the Monaco Editor (the engine behind VS Code) with operational transformation handled by Yjs CRDTs.",
    technicalDetail:
      "Yjs provides conflict-free document synchronization — any concurrent edit from any peer converges to the same state without a central lock. Remote cursors are tracked and broadcast via Socket.IO so collaborators can see each other's position in real time. User sessions and project files are persisted in SQLite.",
    technologies: ["React", "TypeScript", "Monaco Editor", "Yjs", "CRDTs", "Socket.IO", "SQLite", "Node.js"],
    githubUrl: "https://github.com/Krish2600/codecraft-studio",
    demoUrl: "https://codecraft-nhvw.onrender.com/",
    image: "/assets/projects/codecraft-real.png",
    featured: true,
    accentColor: "#3DD68C",
  },
  {
    id: "nexus-compiler",
    title: "Nexus Compiler",
    category: "Compilers · Systems",
    tagline: "Four-stage compiler for a Pascal-like DSL",
    description:
      "A complete compiler pipeline for a custom Pascal-inspired domain-specific language, built from scratch. Covers the full translation journey from source text to pseudo-x86 assembly code.",
    technicalDetail:
      "The pipeline has four stages: a hand-written lexer that tokenises the source, a recursive-descent parser that builds an AST, a semantic analysis pass that enforces type rules, and a code generator that produces three-address intermediate code and then pseudo-x86 output. A Flask web interface lets you paste source code and inspect each compiler stage's output.",
    technologies: ["Python", "Flask", "JavaScript", "HTML/CSS", "Recursive Descent", "3AC"],
    githubUrl: "https://github.com/Krish2600/Nexus-Compiler",
    demoUrl: "https://nexuscompiler.vercel.app/",
    image: "/assets/projects/nexus-compiler-real.png",
    featured: true,
    accentColor: "#A78BFA",
  },
  {
    id: "quantflow",
    title: "QuantFlow",
    category: "Real-Time Systems · Finance",
    tagline: "Real-time stock simulator with GBM price engine",
    description:
      "A paper-trading platform where users can buy and sell simulated stocks whose prices evolve in real time using a Geometric Brownian Motion model — the same stochastic process used in quantitative finance.",
    technicalDetail:
      "Price ticks are generated server-side using GBM and pushed to clients via WebSockets for zero-latency updates. The Express API handles order placement, portfolio management, and trade history. Prisma manages the SQLite schema, and the React frontend visualises live price charts.",
    technologies: ["TypeScript", "React", "Express", "WebSockets", "GBM", "Prisma", "SQLite"],
    githubUrl: "https://github.com/Krish2600/quantflow",
    demoUrl: "https://quantflow-8fu9.onrender.com/",
    image: "/assets/projects/quantflow-real.png",
    featured: false,
    accentColor: "#FF9A3C",
  },
  {
    id: "churn-predictor",
    title: "Customer Churn Predictor",
    category: "Machine Learning · Data Science",
    tagline: "ML pipeline for customer churn probability scoring",
    description:
      "An end-to-end machine learning workflow that predicts the probability of a customer churning. The model is served through a Flask web interface that accepts customer feature inputs and returns a churn probability score.",
    technicalDetail:
      "The pipeline includes data preprocessing, feature engineering, and model training with TensorFlow/Keras and scikit-learn. Class imbalance is addressed during training. The Flask app wraps the trained model for inference and exposes a simple UI for manual prediction testing.",
    technologies: ["Python", "TensorFlow", "Keras", "scikit-learn", "Flask", "Pandas", "NumPy"],
    githubUrl: "https://github.com/Krish2600/churn-probability-predictor",
    demoUrl: "https://churnpredict-5lq5.onrender.com/",
    image: "/assets/projects/churnpredict.png",
    featured: false,
    accentColor: "#F97316",
  },
  {
    id: "medimitra",
    title: "MediMitra",
    category: "AI · Healthcare",
    tagline: "Multilingual AI health chatbot (EN/HI/BHO)",
    description:
      "An intelligent healthcare chatbot that supports conversations in English, Hindi, and Bhojpuri — making health information accessible to a broader population. Users can interact via text or voice.",
    technicalDetail:
      "Built with Streamlit for rapid deployment, MediMitra routes user queries through a Groq LLM API for fast, low-latency inference. A language detection layer routes the conversation into the appropriate prompt context, and a text-to-speech module handles voice output.",
    technologies: ["Python", "Streamlit", "Groq LLM", "NLP", "Speech Recognition"],
    githubUrl: "https://github.com/Krish2600/MediMitra",
    demoUrl: "https://medimitra-ai.streamlit.app/",
    image: "/assets/projects/medimitra.png",
    featured: false,
    accentColor: "#EC4899",
  },
  {
    id: "flipstudy",
    title: "Flipstudy",
    category: "Education · Interactive UI",
    tagline: "Interactive 3D flashcard study application",
    description:
      "An interactive flashcard study app with smooth 3D card-flip animations. Designed to make spaced-repetition learning more engaging through tactile, visually satisfying interactions.",
    technicalDetail:
      "The card-flip effect uses CSS 3D transforms with preserve-3d to create a convincing physical flip. Cards are managed with vanilla JavaScript, and a deck system lets users organize cards by topic. The build pipeline uses Vite for fast development and optimized production output.",
    technologies: ["HTML", "CSS", "JavaScript", "Vite", "CSS 3D Transforms"],
    githubUrl: "https://github.com/Krish2600/flipstudy",
    demoUrl: "https://flipstudy-three.vercel.app/",
    image: "/assets/projects/flipstudy-real.png",
    featured: false,
    accentColor: "#06B6D4",
  },
];

export interface SkillGroup {
  label: string;
  skills: string[];
}

export const SKILL_GROUPS: SkillGroup[] = [
  {
    label: "Languages",
    skills: ["C++", "C", "Python", "JavaScript", "TypeScript", "Java"],
  },
  {
    label: "Backend & Web",
    skills: ["Node.js", "Express", "Flask", "Django", "React"],
  },
  {
    label: "Databases & Infra",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "SQLite", "RabbitMQ"],
  },
  {
    label: "DevOps & Cloud",
    skills: ["Docker", "Kubernetes", "NGINX", "AWS", "Git"],
  },
  {
    label: "Concepts",
    skills: ["WebSockets", "REST APIs", "Concurrency", "Distributed Systems", "System Design", "DSA", "Message Queues"],
  },
];

export interface EngineeringFocus {
  title: string;
  description: string;
  icon: string;
  relatedProject?: string;
}

export const ENGINEERING_FOCUSES: EngineeringFocus[] = [
  {
    title: "Distributed Job Processing",
    description: "Designing fault-tolerant systems that distribute work across workers, handle failures gracefully, and guarantee job completion.",
    icon: "Network",
    relatedProject: "Distributed Job Orchestrator",
  },
  {
    title: "Real-Time Collaboration",
    description: "Building systems where multiple users interact with shared state concurrently — from collaborative editors to live data dashboards.",
    icon: "Users",
    relatedProject: "CodeCraft Studio",
  },
  {
    title: "Concurrency & Fault Tolerance",
    description: "Thread pools, atomic operations, connection pooling, and retry logic — the engineering behind systems that stay reliable under load.",
    icon: "Cpu",
    relatedProject: "Distributed Job Orchestrator",
  },
  {
    title: "Database Design & Caching",
    description: "Schema design, query optimization, Redis caching strategies, and choosing the right store for the right data access pattern.",
    icon: "Database",
    relatedProject: "CodeCraft Studio",
  },
  {
    title: "Compiler Pipelines",
    description: "Lexing, parsing, AST construction, semantic analysis, and code generation — understanding computation from the ground up.",
    icon: "Code2",
    relatedProject: "Nexus Compiler",
  },
  {
    title: "Intelligent Applications",
    description: "Integrating ML models and LLM APIs to build applications that understand context and generate useful, accurate responses.",
    icon: "Brain",
    relatedProject: "MediMitra",
  },
];
