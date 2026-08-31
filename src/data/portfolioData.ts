export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  year: string;
  heroImage: string;
  bgImage: string;
  gallery: string[];
  role: string[];
  tags: string[];
  liveUrl?: string;
}

export interface Service {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  points: string[];
}

export interface Stat {
  number: string;
  label: string;
  subtext: string;
}

export interface Article {
  id: string;
  title: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
  excerpt: string;
  content: string[];
  author: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export const personalInfo = {
  name: "ABDUL MOEED",
  titles: ["CREATIVE DEVELOPER", "UI/UX DESIGNER", "FRONTEND ENGINEER", "VISUAL STORYTELLER"],
  impactWords: ["TENSION", "IMMERSION", "IMPACT"],
  heroBio: "I create digital experiences that aren't just seen — they're felt. From the first impression to the smallest interaction, I focus on making every experience clear, immersive, and memorable.",
  aboutBio: "I don't just build websites — I create digital experiences that people enjoy exploring. Combining design intuition with creative technology, every line of code is written with speed, precision, and visual flair.",
  email: "contact@abdulmoeed.dev",
  socials: {
    instagram: "https://instagram.com/abdulmoeed.design",
    github: "https://github.com/abdulmoeed",
    linkedin: "https://linkedin.com/in/abdulmoeed",
    behance: "https://behance.net/abdulmoeed",
  },
  portrait: "/assets/abdul-moeed-portrait.png",
};

export const statsData: Stat[] = [
  {
    number: "10+",
    label: "FEATURED EXPERIENCES",
    subtext: "Each one distinct. Each one demanding precision & execution.",
  },
  {
    number: "25+",
    label: "CREATIVE CONCEPTS",
    subtext: "Each one pushed beyond the obvious boundaries of UI/UX.",
  },
  {
    number: "06+",
    label: "YEARS CRAFTING",
    subtext: "Evolving constantly. Learning fast, building faster.",
  },
];

export const servicesData: Service[] = [
  {
    number: "01",
    title: "UI/UX DESIGN",
    subtitle: "INTERFACE CRAFT",
    description: "Designing sleek, intuitive, user-centered digital interfaces that solve real-world problems while leaving a lasting visual impression.",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1200&q=80",
    points: ["Interface Architecture", "Design Systems", "User Research", "Wireframing & Prototyping"],
  },
  {
    number: "02",
    title: "FRONTEND DEVELOPMENT",
    subtitle: "PERFECT EXECUTION",
    description: "Building responsive, modern, scalable frontends using React, TypeScript, and Tailwind with high code quality and pixel precision.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
    points: ["React & Next.js Ecosystem", "TypeScript Codebase", "Component Libraries", "API Integration"],
  },
  {
    number: "03",
    title: "CREATIVE DEVELOPMENT",
    subtitle: "MOTION & INTERACTION",
    description: "Fusing design aesthetics with high-performance animations, scroll effects, and micro-interactions powered by GSAP and Framer Motion.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    points: ["GSAP & ScrollTrigger", "Lenis Smooth Scroll", "Micro-Animations", "Interactive Layouts"],
  },
  {
    number: "04",
    title: "INTERACTIVE WEB EXPERIENCES",
    subtitle: "IMMERSIVE DIGITAL JOURNEYS",
    description: "Crafting bespoke website experiences tailored to captivate audiences, boost brand storytelling, and achieve award-level aesthetics.",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
    points: ["Editorial Layouts", "Storytelling Flow", "Audio & Visual Motion", "Cross-Platform Precision"],
  },
  {
    number: "05",
    title: "3D WEB DEVELOPMENT",
    subtitle: "SPATIAL INTERACTION",
    description: "Integrating modern WebGL graphics, canvas particle effects, and Three.js environments to elevate digital storytelling into 3 dimensions.",
    image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1200&q=80",
    points: ["Three.js & Canvas Shaders", "Spatial Web Interfaces", "Interactive WebGL", "GPU Optimization"],
  },
  {
    number: "06",
    title: "PERFORMANCE OPTIMIZATION",
    subtitle: "BLAZING SPEEDS",
    description: "Optimizing web apps for 60fps smooth scrolling, instant page load times, Lighthouse 100 performance scores, and SEO dominance.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    points: ["Asset Compression & Lazy Load", "GPU Acceleration", "SEO & Meta Perfection", "Core Web Vitals"],
  },
];

export const projectsData: Project[] = [
  {
    id: "aetheria-experience",
    number: "01",
    title: "AETHERIA DIGITAL ARCHITECTURE",
    category: "Creative Website & 3D Interaction",
    description: "An immersive digital platform built for an international architectural studio, combining WebGL spatial visualizers with editorial dark typography.",
    year: "2026",
    heroImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    bgImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80"
    ],
    role: [
      "Creative Direction & Layout Architecture",
      "GSAP Scroll-Driven Motion Systems",
      "React + Vite Frontend Development",
      "Three.js Spatial Interactive Scene"
    ],
    tags: ["React", "GSAP", "Three.js", "Tailwind CSS", "Design System"],
    liveUrl: "https://abdulmoeed.dev/projects/aetheria"
  },
  {
    id: "lumina-os",
    number: "02",
    title: "LUMINA DESIGN SYSTEM & SAAS",
    category: "UI/UX & Product Design",
    description: "A high-performance design system and web application interface for real-time collaborative creative workflow management.",
    year: "2025",
    heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    bgImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"
    ],
    role: [
      "End-to-end UX Strategy & UI Design",
      "Component Architecture & Token System",
      "Responsive React App Implementation"
    ],
    tags: ["UI/UX Design", "Figma", "React", "TypeScript", "Tailwind"],
    liveUrl: "https://abdulmoeed.dev/projects/lumina"
  },
  {
    id: "nexus-e-commerce",
    number: "03",
    title: "NEXUS LUXURY E-COMMERCE",
    category: "Digital Storefront & Motion",
    description: "An editorial e-commerce platform crafted for luxury timepiece brand featuring fluid page transitions, custom cursors, and micro-interactions.",
    year: "2025",
    heroImage: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80",
    bgImage: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=1200&q=80"
    ],
    role: [
      "Visual Design & Editorial Typography",
      "Interactive Product Preview Mechanics",
      "Headless E-Commerce Integration"
    ],
    tags: ["E-Commerce", "GSAP", "React", "State Management"],
    liveUrl: "https://abdulmoeed.dev/projects/nexus"
  },
  {
    id: "vortex-sound",
    number: "04",
    title: "VORTEX SOUND LABS",
    category: "Creative Development & Audio Visualizer",
    description: "An experimental interactive web application generating real-time canvas visualizers mapped to ambient music tracks.",
    year: "2024",
    heroImage: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=80",
    bgImage: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80"
    ],
    role: [
      "Web Audio API & WebGL Audio Reactive Pipeline",
      "Interactive Canvas Shader Systems",
      "UI Interface Design"
    ],
    tags: ["Web Audio API", "WebGL", "Canvas", "Creative Coding"],
    liveUrl: "https://abdulmoeed.dev/projects/vortex"
  }
];

export const processData: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery & Strategy",
    description: "Every great project begins with deep listening and understanding. I explore your core goals, user persona, and competitive landscape to establish a rock-solid creative foundation."
  },
  {
    number: "02",
    title: "Creative Direction & UX",
    description: "Ideas are transformed through intentional wireframing, moodboards, visual hierarchy exploration, motion concepts, and custom design systems built for longevity."
  },
  {
    number: "03",
    title: "Digital Craftsmanship",
    description: "Translating concepts into interactive realities. Every interaction, animation curve, and line of TypeScript code is optimized for 60fps speed, accessibility, and elegance."
  },
  {
    number: "04",
    title: "Launch & Evolution",
    description: "Deployment is just the start. I perform cross-browser testing, SEO audits, speed optimizations, and iterate continuously based on real user interactions."
  }
];

export const articlesData: Article[] = [
  {
    id: "motion-beyond-animation",
    title: "Motion Beyond Animation: Crafting Intentional UI Dynamics",
    date: "July 1, 2026",
    category: "CREATIVE DEVELOPMENT",
    readTime: "5 MIN READ",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80",
    excerpt: "Why motion design in web development must serve cognitive feedback rather than mere eye candy. A breakdown of physics-based spring curves and scroll-trigger mechanics.",
    content: [
      "In modern web design, animation is often misused as window dressing. True creative development uses motion as an intuitive narrative tool that guides the user's focus seamlessly.",
      "When we design transitions in GSAP or Framer Motion, we are crafting the physical rhythm of an interface. Timing functions should mimic physical inertia—accelerating with purpose and deceleration with grace.",
      "By integrating scroll-linked timelines, we empower the user to feel like they are directly driving the experience forward."
    ],
    author: "ABDUL MOEED"
  },
  {
    id: "psychology-of-dark-interfaces",
    title: "The Psychology of Dark Editorial Interfaces",
    date: "June 14, 2026",
    category: "UI/UX DESIGN",
    readTime: "6 MIN READ",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    excerpt: "Exploring the emotional pull of monochromatic dark aesthetics, high-contrast serif typography, and generous negative space.",
    content: [
      "Dark interfaces emit a subtle aura of luxury, quiet focus, and cinematic drama. However, building an accessible dark palette requires far more than setting a background to pure black.",
      "Near-black shades such as #0A0A0A and #0D0D0D reduce harsh glare while allowing off-white typography (#F2F0EA) to pop effortlessly without causing visual fatigue.",
      "Hierarchy is amplified by stark contrasts: pairing bold geometric display headings with delicate, wide-tracked uppercase metadata tags creates timeless rhythm."
    ],
    author: "ABDUL MOEED"
  },
  {
    id: "designing-experiences-not-websites",
    title: "Designing Experiences, Not Websites",
    date: "May 22, 2026",
    category: "FRONTEND ENGINEERING",
    readTime: "4 MIN READ",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
    excerpt: "Moving beyond cookie-cutter grids and standard templates to craft memorable, award-winning web moments.",
    content: [
      "The web is saturated with uniform layouts and predictable templates. To stand out, digital products must cultivate an emotional connection from the very first frame.",
      "From preloader counter animations to interactive custom cursors and smooth parallax image reveals, every micro-detail contributes to a feeling of premium craftsmanship.",
      "When technology and design work in total harmony, a website ceases to be a static page—it becomes a living experience."
    ],
    author: "ABDUL MOEED"
  }
];
