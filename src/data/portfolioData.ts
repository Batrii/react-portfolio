import { Certification, Degree, DeveloperProfile, ExperienceItem, Project, SkillCategory } from '../types';

export const developerProfile: DeveloperProfile = {
  name: 'Badr Eddine Nafiai',
  title: 'Junior Software Engineer',
  status: 'Ready for impact',
  location: 'Paris, France & Remote',
  email: 'badr@engineer.dev',
  github: 'https://github.com',
  linkedin: 'https://linkedin.com',
  bio: 'Junior Software Engineer focused on crafting resilient web architectures, elegant code craftsmanship, and modern user experiences.',
  mission: 'Crafting responsive, reliable, and modern web applications with clean code, modern frontend frameworks, and robust backends. Dedicated to scalable engineering and elegant user journeys.',
  stack: ['TypeScript', 'React', 'Next.js', 'Node.js', 'Python', 'Tailwind CSS', 'PostgreSQL', 'Docker'],
  passions: ['Performant UIs', 'System Architecture', 'Open Source', 'Developer Tooling'],
  currentFocus: 'Full-Stack Reliability & Cloud Native',
  isOpenToOffers: true,
};

export const images = {
  monogram: 'https://lh3.googleusercontent.com/aida/AEtjO1W8v6mROqQoKdwZZI2pW7FYZ5u2pmYk3IbKCoLw2W72UkxCNLg0uV9f6T_B_B1vCE719pi3EBmEQF5G-LwJIsJzhOzTqnTTeDl11jII5ObV1c-WACXI8lAUNeTIU-HLWXqR88HRzVNX-vjWoEwi7lJDQoXOTZ8zAEBx-SZLrbaRT57e3khhfD4TChF3vnagsuDg3zS2HS7NVe1AxLtvLm1Ynt9SFAYIpspMK-FJRWegg3-lQqzQ5tUxAcuu',
  avatar: 'https://lh3.googleusercontent.com/aida/AEtjO1VK-e_Xr1iZxa3pHBAdQwDQuq5Y7yycmioUFdgHG8x0aIMoqp4Fn7McJLedNVIyc_UZsNcMxkqOl6cjUOPkHM4_KokIFThLHeT0eTHACagpbtvqky5R-9AO43duigI5pDfj25whJ8-NBWIUq4adU8Go_eZkvgYUKDMVtwjDlDnHyKp9M3oYRZ1VzT5gMnB2S9V_UcFQxke9a1oXLVngw-4toyQqrnOrslghyNeWNiYGiFm26zTTGDVKwYPA',
  bioCard: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD9TWrWAAyi5q1EN61-r_d0K62PYZM-xSs7jHbbCYwRNs60NFzC96GmcdfoRX6tC-jtkguwnmD48SPyXXmUC3hASLY5Pa8lV4tnVnMsSXpAJOh00Xq_vOVuCYU23IMox2JZ6AodClo-pr1OXtK4T-kWt8F-3v6D6ebrBPNZ34nCC1HKY1fBe4xKFayw7WR4i1Tc3EBqEp5S00SNx-8ziSxZVb--oLS8Y7WAu1kqfRVMedNJ41i4Gl4VIQ',
  projectsCard: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAitsO7z3Mfz_L7sCj7txkoV1HI2eI9YhEuCGlGj7NGV_gtRIItrwPpzzXjxTPnSBPQnabGzhH61Ml2tUzsDS42GfkUhGsWcPL3nRuecTAA55Z6ZguMoIaC0SkQ-ezUkrAsQXnMPzxWNagCZNciYnEn05QJF-Vchin0As6vS8Xn77WLfHvTiHEjG9AbMNVYhYEy9VnsbbTunI5GxqQ2-57jRvW80OVA9y1vfvYyJn3jeoW8PVcqewCetQ',
  educationalCard: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDcuVjsrkufvP8zF5LxtlEWKd3WWrKLeorpio8WrWv_I4LSsiBQWvJJr9HnJJnMrkrP0tm0PIwohptQuLxUO0pKHvaguzfueAKicAOEbMDkv6ltF0hEIFNR2pr8UAkxHQKrOdc3DvWO3DaEHP5KHhafJIEVf2xiMkuVESOXfOqCbXieOQhbsKJ7OyNYoZ1ssf1-kKc92KN33k1-Cvk-erIinJroZ6XexWh9YlDYBwaEv5NGfVDHl06KFQ',
};

export const projectsData: Project[] = [
  {
    id: 'nexus-cloud-dashboard',
    title: 'Nexus Cloud Analytics',
    category: 'Full-Stack',
    featured: true,
    shortDescription: 'Real-time telemetry and microservices health monitoring platform with sub-second stream ingestion.',
    fullDescription: 'Nexus is an enterprise-grade cloud observability console built with Next.js 14, Node.js, and Redis streams. Features instant event telemetry, interactive anomaly detection visualizations, customizable incident dashboards, and granular team permission policies.',
    image: images.projectsCard,
    technologies: ['TypeScript', 'Next.js 14', 'Tailwind CSS', 'Node.js', 'Redis', 'PostgreSQL', 'Docker'],
    features: [
      'Sub-50ms real-time metric updates via WebSockets',
      'Interactive time-series charts with dynamic filtering',
      'Configurable alert policies with webhook dispatchers',
      'Role-based access control (RBAC) with OAuth2'
    ],
    architecture: 'Microservices event pipeline with worker queues, decoupled Next.js Edge frontend, and connection-pooled PostgreSQL.',
    demoUrl: 'https://example.com/demo/nexus',
    githubUrl: 'https://github.com',
    stars: 48,
  },
  {
    id: 'fluid-canvas-engine',
    title: 'Fluid Canvas Studio',
    category: 'Frontend',
    featured: true,
    shortDescription: 'High-performance interactive vector drawing and design prototyping web application.',
    fullDescription: 'A modern browser-based design editor inspired by Figma, engineered from the ground up using HTML5 Canvas, WebGL shaders, and React state machines. Supports multi-layer compositing, parametric vector paths, undo/redo trees, and asset exports.',
    image: images.bioCard,
    technologies: ['React 19', 'TypeScript', 'HTML5 Canvas', 'Tailwind CSS', 'Zustand', 'Vite'],
    features: [
      'Hardware-accelerated 60fps rendering pipeline',
      'Infinite zoomable and pannable viewport canvas',
      'Complex boolean operations on vector geometries',
      'High-resolution SVG & PNG exporter engine'
    ],
    architecture: 'Custom rendering loop with spatial indexing (R-Tree) for instant hit detection and optimized dirty rectangle repainting.',
    demoUrl: 'https://example.com/demo/fluid-canvas',
    githubUrl: 'https://github.com',
    stars: 32,
  },
  {
    id: 'sentinel-api-gateway',
    title: 'Sentinel API Gateway & Proxy',
    category: 'Systems & APIs',
    featured: true,
    shortDescription: 'High-throughput reverse proxy with dynamic token-bucket rate limiting and latency caching.',
    fullDescription: 'A lightweight, robust API Gateway built in Node.js & TypeScript. Provides distributed rate-limiting using Redis token buckets, JWT validation, automated SSL termination, and real-time request logging to Prometheus.',
    image: images.educationalCard,
    technologies: ['TypeScript', 'Node.js', 'Express', 'Redis', 'Prometheus', 'Docker'],
    features: [
      'Sliding window & token-bucket rate limiting strategies',
      'Low-overhead JWT authentication and claims verification',
      'Distributed caching layer with automatic invalidation',
      'Prometheus and OpenTelemetry metrics endpoints'
    ],
    architecture: 'Event-driven non-blocking I/O proxy with cluster worker distribution and zero-copy response piping.',
    demoUrl: 'https://example.com/demo/sentinel',
    githubUrl: 'https://github.com',
    stars: 29,
  },
  {
    id: 'algo-visualizer',
    title: 'Graph & Pathfinding Visualizer',
    category: 'Frontend',
    featured: false,
    shortDescription: 'Interactive educational suite visualizing graph traversal, sorting algorithms, and memory trees.',
    fullDescription: 'Comprehensive educational web application allowing students and engineers to step through Dijkstra, A*, QuickSort, and Red-Black Trees with adjustable execution speeds and call-stack introspection.',
    image: images.projectsCard,
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Web Audio API'],
    features: [
      'Custom maze generator and dynamic heuristic weights',
      'Step-by-step debug playback with breakpoint support',
      'Harmonic acoustic feedback tuned to element comparisons'
    ],
    architecture: 'Generator-based step execution decoupled from the React rendering loop for smooth time-travel animations.',
    demoUrl: 'https://example.com/demo/algo-vis',
    githubUrl: 'https://github.com',
    stars: 19,
  }
];

export const degreesData: Degree[] = [
  {
    id: 'bachelor-cs',
    degree: 'Bachelor of Science in Computer Science',
    field: 'Software Engineering & Distributed Systems',
    institution: 'University School of Computer Science & Engineering',
    location: 'Paris, France',
    period: '2021 — 2024',
    honors: 'Summa Cum Laude / Highest Honors',
    gpa: '3.9 / 4.0',
    keyCourses: [
      'Data Structures & Algorithms',
      'Object-Oriented Design & Design Patterns',
      'Operating Systems & Concurrency',
      'Database Systems & Query Optimization',
      'Computer Networks & Distributed Protocols',
      'Software Architecture & Agile Methodologies'
    ],
    description: 'Focused rigorously on computer science fundamentals, theoretical computation, clean systems design, and end-to-end full-stack development methodologies. Led peer coding workshops and capstone projects.'
  }
];

export const certificationsData: Certification[] = [
  {
    id: 'meta-frontend',
    name: 'Meta Front-End Developer Professional Certificate',
    issuer: 'Meta / Coursera',
    issueDate: '2024',
    credentialId: 'META-FED-984210',
    credentialUrl: 'https://coursera.org',
    skills: ['React', 'JavaScript (ES6+)', 'TypeScript', 'UX/UI Principles', 'Version Control (Git)', 'Jest & Unit Testing'],
    badgeColor: 'border-primary text-primary'
  },
  {
    id: 'aws-cloud-practitioner',
    name: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    issueDate: '2024',
    credentialId: 'AWS-CCP-719342',
    credentialUrl: 'https://aws.amazon.com/verification',
    skills: ['AWS Lambda', 'Amazon EC2', 'Amazon S3', 'CloudWatch', 'VPC & IAM Security', 'Cloud Economics'],
    badgeColor: 'border-secondary text-secondary'
  },
  {
    id: 'algorithms-stanford',
    name: 'Algorithms Specialization: Design & Analysis',
    issuer: 'Stanford Online',
    issueDate: '2023',
    credentialId: 'STANFORD-ALGO-4412',
    credentialUrl: 'https://online.stanford.edu',
    skills: ['Greedy Algorithms', 'Dynamic Programming', 'Graph Theory', 'NP-Completeness', 'Asymptotic Complexity'],
    badgeColor: 'border-primary-container text-primary-container'
  },
  {
    id: 'docker-containerization',
    name: 'Docker & Kubernetes Essentials',
    issuer: 'Linux Foundation',
    issueDate: '2023',
    credentialId: 'LNX-DKR-2023-88',
    credentialUrl: 'https://training.linuxfoundation.org',
    skills: ['Container Orchestration', 'Multi-stage Builds', 'Docker Compose', 'CI/CD Pipelines'],
    badgeColor: 'border-tertiary text-tertiary'
  }
];

export const experienceData: ExperienceItem[] = [
  {
    id: 'exp-intern',
    role: 'Software Engineering Intern',
    company: 'TechFlow Solutions',
    location: 'Paris, France',
    period: 'March 2024 — August 2024',
    type: 'Full-time Internship',
    highlights: [
      'Engineered and shipped responsive client portal modules with React 18 and TypeScript, reducing user task completion time by 28%.',
      'Refactored legacy REST endpoints in Node.js/Express, introducing schema validation (Zod) and automated Jest unit tests with 85%+ coverage.',
      'Implemented Redis caching for high-frequency database lookups, cutting 95th percentile latency from 320ms to 45ms.',
      'Collaborated in an agile scrum team participating in daily standups, bi-weekly sprint demos, and code reviews.'
    ],
    stack: ['TypeScript', 'React', 'Node.js', 'Express', 'Redis', 'Jest', 'Tailwind CSS']
  },
  {
    id: 'exp-freelance',
    role: 'Junior Full-Stack Web Developer',
    company: 'Freelance & Open Source Contributor',
    location: 'Remote',
    period: '2023 — Present',
    type: 'Independent Projects',
    highlights: [
      'Delivered bespoke web applications for 5+ small business clients with seamless responsive layouts and 98+ Google Lighthouse scores.',
      'Authored reusable open-source React components and custom hooks with 1,200+ monthly npm downloads.',
      'Set up automated GitHub Actions CI/CD pipelines for linting, testing, and continuous cloud deployment to Vercel and AWS.'
    ],
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'GitHub Actions']
  }
];

export const skillCategories: SkillCategory[] = [
  {
    category: 'Frontend Engineering',
    skills: [
      { name: 'TypeScript', level: 92, highlight: true },
      { name: 'React (Hooks, Context, v18/19)', level: 95, highlight: true },
      { name: 'Next.js (App Router, SSR)', level: 88, highlight: true },
      { name: 'Tailwind CSS & Modern CSS', level: 95, highlight: true },
      { name: 'HTML5 & Semantic Accessibility', level: 90 },
      { name: 'State Management (Zustand/Redux)', level: 86 }
    ]
  },
  {
    category: 'Backend & APIs',
    skills: [
      { name: 'Node.js & Express', level: 88, highlight: true },
      { name: 'RESTful API Architecture', level: 90, highlight: true },
      { name: 'PostgreSQL & SQL Schema Design', level: 84 },
      { name: 'Python (FastAPI / Scripting)', level: 80 },
      { name: 'Redis Caching & Pub/Sub', level: 78 },
      { name: 'Authentication (JWT, OAuth2)', level: 85 }
    ]
  },
  {
    category: 'DevOps & Tooling',
    skills: [
      { name: 'Git & GitHub Collaboration', level: 92, highlight: true },
      { name: 'Docker & Containerization', level: 82, highlight: true },
      { name: 'CI/CD Pipelines (GitHub Actions)', level: 80 },
      { name: 'Linux Command Line / Bash', level: 85 },
      { name: 'AWS Cloud Basics', level: 75 },
      { name: 'Vite & Build Optimization', level: 88 }
    ]
  },
  {
    category: 'Engineering Mindset',
    skills: [
      { name: 'Clean Code & DRY Principles', level: 94, highlight: true },
      { name: 'Data Structures & Algorithms', level: 88, highlight: true },
      { name: 'Unit & Integration Testing', level: 82 },
      { name: 'Agile / Scrum Collaboration', level: 90 },
      { name: 'Technical Documentation', level: 88 }
    ]
  }
];
