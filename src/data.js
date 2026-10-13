/* ============================================================================
 *  PORTFOLIO CONTENT — this is the only file you need to edit.
 *  Everything below is placeholder text written to be obviously swappable.
 * ==========================================================================*/

export const profile = {
  name: 'Yashwant Kumar Singh',
  initials: 'YKS',
  role: 'Java Developer',
  tagline:
    'Java developer building database-driven web applications with Spring Boot, Servlets and SQL.',
  location: 'Noida, Uttar Pradesh',
  available: 'Open to new work',
  phone: '+91-9696289957',
  email: 'yksinghemail@gmail.com',
  resumeUrl: '/resume.pdf', // the PDF lives in public/
  socials: [
    { label: 'GitHub', href: 'https://github.com/Yashwant1304', handle: '@Yashwant1304' },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/yashwant-kumar-singh-1310ba314/',
      handle: 'in/yashwant-kumar-singh',
    },
  ],
}

export const nav = [
  { label: 'Work', id: 'work' },
  { label: 'About', id: 'about' },
  { label: 'Background', id: 'credentials' },
  { label: 'Stack', id: 'stack' },
  { label: 'Contact', id: 'contact' },
]

export const intro = {
  headline:
    'I build the kind of Java web applications that actually store, retrieve and protect data properly.',
  paragraphs: [
    'I am a B.Tech Computer Science graduate (2026) focused on backend development with Java. My work centres on database-driven web applications — authentication, session management, modular CRUD services and the relational schema underneath them.',
    'Most of my hands-on experience comes from full-stack Java training at CodeSquadz and from two complete applications: a multi-category e-commerce platform built on Spring Boot with REST APIs, and a Student Management System built on Servlets, JSP and JDBC against Oracle.',
    'I care about the parts of a web app that are easy to skip and painful to retrofit later — proper authentication, normalised tables, and code that separates concerns instead of putting everything in one file.',
  ],
}

export const projects = [
  {
    title: 'Online Shopping Platform',
    year: '2025',
    role: 'Solo build',
    stack: ['Java', 'Spring Boot', 'REST API', 'SQL'],
    blurb: 'Multi-category e-commerce web app with cart, login and an admin panel.',
    detail:
      'A full e-commerce web application covering the shopping flow end to end: product browsing by category, customer login, cart management and admin functionality. Authentication and session-based access control gate the protected pages so unauthorised users cannot reach them. The backend is split into modular components for login, logout, cart and product-category operations, with all state persisted through relational database operations.',
    accent: '#2563eb',
    links: [{ label: 'Request source', href: 'mailto:yksinghemail@gmail.com' }],
  },
  {
    title: 'Student Management System',
    year: '2025',
    role: 'Solo build',
    stack: ['Java', 'Servlets', 'JSP', 'JDBC', 'Oracle'],
    blurb: 'Database-driven CRUD system for student records, with Excel report export.',
    detail:
      'A Student Management System implementing full CRUD operations over student records and academic information. Login and registration are handled through JDBC-based authentication against an Oracle database, and the modules cover adding, updating, deleting and searching records. Reports for student results and records can be generated dynamically and downloaded as Excel files.',
    accent: '#0f766e',
    links: [{ label: 'Request source', href: 'mailto:yksinghemail@gmail.com' }],
  },
  {
    title: 'Data Structures & LeetCode',
    year: '2025 — 2026',
    role: 'Ongoing practice',
    stack: ['Java', 'Git', 'GitHub'],
    blurb: 'Ongoing algorithm practice — data structures plus regular LeetCode problems.',
    detail:
      'An ongoing practice repository rather than a finished product: implementations of core data structures and a growing set of LeetCode solutions in Java. It is the part of my work that is most in progress and the part I keep returning to.',
    accent: '#b45309',
    links: [
      { label: 'Data Structures', href: 'https://github.com/Yashwant1304/Data-Structure-Algorithms' },
      { label: 'LeetCode', href: 'https://github.com/Yashwant1304/LeetCode_Submission' },
    ],
  },
]

export const experience = [
  {
    period: '2022 — 2026',
    company: 'Sagar Institute of Research and Technology Excellence, Bhopal',
    title: 'B.Tech — Computer Science',
    points: ['CGPA: 7.6'],
  },
  {
    period: '2025',
    company: 'CodeSquadz',
    title: 'Java Full-Stack Development Training',
    points: [
      'Completed hands-on training in Core Java, OOP, JDBC, Servlets, JSP, SQL and web application development.',
      'Built application projects covering Spring Boot, MySQL, Hibernate and JavaScript.',
    ],
  },
]

export const certifications = [
  { label: 'Java Full Stack', issuer: 'CodeSquadz' },
  { label: 'OOPs in Java', issuer: 'Simplilearn' },
]

export const stackGroups = [
  {
    label: 'Languages',
    items: ['Java', 'SQL', 'JavaScript'],
  },
  {
    label: 'Backend',
    items: [
      'Spring Boot',
      'Java Servlets',
      'JSP',
      'JDBC',
      'REST APIs',
      'Hibernate',
    ],
  },
  {
    label: 'Frontend',
    items: ['HTML5', 'CSS3', 'Tailwind CSS'],
  },
  {
    label: 'Database',
    items: ['MySQL', 'Oracle SQL', 'CRUD design', 'Schema design'],
  },
  {
    label: 'Core concepts',
    items: ['OOP', 'MVC', 'Authentication', 'Session management'],
  },
  {
    label: 'Tools',
    items: ['Git', 'GitHub', 'Maven', 'IntelliJ IDEA', 'Eclipse', 'VS Code'],
  },
  {
    label: 'AI tooling',
    items: ['ChatGPT', 'Claude', 'Google Gemini'],
  },
]

export const footer = {
  note: 'Built with React and Tailwind.',
  colophonLink: '#',
}