import { Certification, Degree, DeveloperProfile, ExperienceItem, Project, SkillCategory } from '../types';

export const developerProfile: DeveloperProfile = {
  name: 'Badr Eddine Nafiai',
  title: 'Junior Software Engineer',
  status: 'Ready for impact',
  location: 'El Jadida, Morocco',
  email: 'nafiaibadr002@gmail.com',
  phone: '+212 6-56-51-16-91',
  github: 'https://github.com/Batrii',
  linkedin: 'https://www.linkedin.com/in/badr-eddine-nafiai-9a1b00290',
  bio: 'Junior Software Engineer focused on crafting resilient web architectures, elegant code craftsmanship, and modern user experiences.',
  mission: 'Crafting responsive, reliable, and modern web applications with clean code, modern frontend frameworks, and robust backends. Dedicated to scalable engineering and elegant user journeys.',
  stack: ['TypeScript', 'React', 'Next.js', 'Node.js', 'Python', 'Tailwind CSS', 'PostgreSQL', 'Docker'],
  passions: ['Performant UIs', 'System Architecture', 'Open Source', 'Developer Tooling'],
  currentFocus: 'Full-Stack Reliability & Cloud Native',
  isOpenToOffers: true,
};

export const images = {
  avatar: './src/images/bnafiai.jpg',
  bioCard: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD9TWrWAAyi5q1EN61-r_d0K62PYZM-xSs7jHbbCYwRNs60NFzC96GmcdfoRX6tC-jtkguwnmD48SPyXXmUC3hASLY5Pa8lV4tnVnMsSXpAJOh00Xq_vOVuCYU23IMox2JZ6AodClo-pr1OXtK4T-kWt8F-3v6D6ebrBPNZ34nCC1HKY1fBe4xKFayw7WR4i1Tc3EBqEp5S00SNx-8ziSxZVb--oLS8Y7WAu1kqfRVMedNJ41i4Gl4VIQ',
  projectsCard: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAitsO7z3Mfz_L7sCj7txkoV1HI2eI9YhEuCGlGj7NGV_gtRIItrwPpzzXjxTPnSBPQnabGzhH61Ml2tUzsDS42GfkUhGsWcPL3nRuecTAA55Z6ZguMoIaC0SkQ-ezUkrAsQXnMPzxWNagCZNciYnEn05QJF-Vchin0As6vS8Xn77WLfHvTiHEjG9AbMNVYhYEy9VnsbbTunI5GxqQ2-57jRvW80OVA9y1vfvYyJn3jeoW8PVcqewCetQ',
  educationalCard: './src/images/edu.jpeg',
  pic_42: './src/images/pic_42.jpg',
  monogram: './src/images/screen.png',
};

export const projectsData: Project[] = [
  {
   id: 'ft-transcendence',
  title: 'ft_transcendence',
  category: 'Full-Stack',
  featured: true,
  shortDescription:
    'Real-time multiplayer coding challenge platform with authentication, REST APIs, battles, and WebSocket communication.',
  fullDescription:
    'A multiplayer coding challenge platform developed as a team project. I worked mainly on the backend, designing the database schema and REST APIs, integrating Better Auth authentication, implementing real-time multiplayer features with Socket.IO, and working with PostgreSQL and Prisma.',
  image: images.pic_42,
  technologies: [
    'TypeScript',
    'NestJS',
    'Node.js',
    'PostgreSQL',
    'Prisma',
    'Better Auth',
    'Socket.IO',
    'Redis',
    'Docker'
  ],
  features: [
    'Email/password authentication and OAuth integration',
    'REST APIs for users, challenges, and battles',
    'Real-time multiplayer communication with WebSockets',
    'Battle management with SOLO, DUO, and GROUP modes',
    'PostgreSQL database design with Prisma ORM',
    'Redis integration for caching and real-time data'
  ],
  architecture:
    'Modular NestJS backend organized into controllers, services, modules, DTOs, database access, authentication, and WebSocket gateways.',
  demoUrl: '',
  githubUrl: '',
  stars: 50,
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
    id: 'webserv',
    title: 'Webserver',
    category: 'Systems / C++',
    featured: true,
    shortDescription:
      'HTTP web server implemented from scratch in C++ with socket programming and I/O multiplexing.',
    fullDescription:
      'A team project focused on understanding how web servers work internally. I implemented socket creation and communication and worked on epoll-based I/O multiplexing to handle multiple client connections efficiently.',
    image: images.pic_42,
    technologies: [
      'C++',
      'Linux',
      'Sockets',
      'epoll',
      'I/O Multiplexing',
      'HTTP',
      'Git'
    ],
    features: [
      'TCP socket communication',
      'Non-blocking I/O',
      'Multiple simultaneous client connections',
      'epoll-based I/O multiplexing',
      'HTTP request and response handling'
    ],
    architecture:
      'Event-driven server architecture using Linux sockets and epoll to monitor multiple connections without creating one blocking process per client.',
    demoUrl: '',
    githubUrl: '',
    stars: 30,
  },
  {
    id: 'inception',
    title: 'Inception',
    category: 'DevOps / Infrastructure',
    featured: true,
    shortDescription:
      'Containerized web infrastructure built with Docker Compose, Nginx, WordPress, and MariaDB.',
    fullDescription:
      'A system administration project focused on containerization and infrastructure fundamentals. I designed and deployed an isolated Docker environment containing Nginx, WordPress, and MariaDB, with persistent volumes and HTTPS configuration.',
    image: images.pic_42,
    technologies: [
      'Docker',
      'Docker Compose',
      'Nginx',
      'MariaDB',
      'WordPress',
      'Linux',
      'Bash',
      'TLS/SSL'
    ],
    features: [
      'Multi-container infrastructure with Docker Compose',
      'Nginx reverse proxy with HTTPS',
      'MariaDB database container',
      'WordPress with PHP-FPM',
      'Persistent Docker volumes',
      'Isolated Docker network'
    ],
    architecture:
      'Multi-container architecture where Nginx handles HTTPS and forwards requests to WordPress/PHP-FPM, while WordPress communicates with MariaDB through an isolated Docker network.',
    demoUrl: '',
    githubUrl: '',
    stars: 15,
  },
];

export const degreesData: Degree[] = [
  {
    id: '1337',
    degree: 'Software Engineering / Computer Programming',
    field: 'Programming, Algorithms & Systems Architecture',
    institution: '1337 (42 Network School)',
    location: 'UM6P, Benguerir, Morocco',
    period: '2024 — 2026 (Ongoing)',
    honors: '',
    gpa: '',
    keyCourses: [
      'C / C++ Programming',
      'Algorithms & Problem Solving',
      'Systems Programming',
      'Systems Architecture',
      'Peer Programming',
      'Project-Based Software Development'
    ],
    description:
      'Intensive project-based programming curriculum focused on peer learning, C/C++, algorithms, and systems architecture.'
  },
  {
    id: 'professional-bachelor',
    degree: 'Professional Bachelor’s Degree',
    field: 'Computer Engineering & Emerging Technologies',
    institution: 'ENSA El Jadida — Chouaib Doukkali University',
    location: 'El Jadida, Morocco',
    period: '2023 — 2024',
    honors: '',
    gpa: '',
    keyCourses: [
      'Computer Engineering',
      'Emerging Technologies',
      'Software Development'
    ],
    description:
      'Professional bachelor’s degree in Computer Engineering and Emerging Technologies.'
  },
  {
    id: 'specialized-technician',
    degree: 'Specialized Technician in Digital Development',
    field: 'Digital Development',
    institution: 'ISTA Cité de l’Air',
    location: 'El Jadida, Morocco',
    period: '2021 — 2023',
    honors: '',
    gpa: '',
    keyCourses: [
      'Digital Development',
      'Programming',
      'Software Development'
    ],
    description:
      'Specialized technical training in digital development.'
  },
  {
    id: 'baccalaureate',
    degree: 'Baccalaureate in Physical Sciences',
    field: 'Physical Sciences',
    institution: '',
    location: 'Morocco',
    period: '2019 — 2020',
    honors: '',
    gpa: '',
    keyCourses: [],
    description:
      'Baccalaureate in Physical Sciences.'
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
  id: 'exp-1337',
  role: 'Software Engineering Student',
  company: '1337 — 42 Network',
  location: 'Benguerir, Morocco',
  period: '2024 — Present',
  type: 'Project-Based / Peer Learning',
  highlights: [
    'Developed systems and web applications through project-based learning, working extensively with C, C++, Linux, Git, and Unix system programming.',
    'Built a C++ HTTP web server using sockets and epoll-based I/O multiplexing to handle multiple client connections.',
    'Developed a containerized infrastructure with Docker Compose, Nginx, MariaDB, and WordPress, including HTTPS, persistent storage, and isolated networks.',
    'Currently developing a multiplayer coding challenge platform with NestJS, TypeScript, PostgreSQL, Prisma, WebSockets, authentication, and Redis.'
  ],
  stack: [
    'C',
    'C++',
    'Linux',
    'Git',
    'Docker',
    'Nginx',
    'TypeScript',
    'NestJS',
    'PostgreSQL',
    'Prisma',
    'WebSockets',
    'Redis'
  ]
},
{
  id: 'exp-ensa',
  role: 'Computer Engineering Student',
  company: 'ENSA El Jadida',
  location: 'El Jadida, Morocco',
  period: '2023 — 2024',
  type: 'Academic Projects',
  highlights: [
    'Studied computer engineering with a focus on software development, programming, databases, and emerging technologies.',
    'Developed academic projects involving programming, databases, software engineering, and problem solving.',
    'Strengthened practical programming skills through hands-on development and collaborative project work.'
  ],
  stack: [
    'C',
    'C++',
    'SQL',
    'Git',
    'Linux',
    'Software Engineering'
  ]
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
