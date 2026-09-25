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
  titles: ["GRAPHIC DESIGNER", "SOCIAL MEDIA MANAGER", "BRAND IDENTITY EXPERT", "VISUAL STORYTELLER"],
  impactWords: ["DESIGN", "IMPACT", "BRAND"],
  heroBio: "I craft visual identities and social media presences that aren't just seen — they're felt. From brand strategy to content creation, I make every visual moment clear, captivating, and unforgettable.",
  aboutBio: "I don't just design graphics — I build powerful brands and commanding social media presences. Combining design intuition with strategic storytelling, every visual is crafted with precision, purpose, and aesthetic flair.",
  email: "design.moeed@gmail.com",
  socials: {
    instagram: "https://www.instagram.com/manimoeed?stkn=YmhqcnZrN3RneGg=",
    github: "https://github.com/designmoeed-coder/",
    linkedin: "https://www.linkedin.com/in/abdul-moeed-5a763a327/",
    behance: "https://www.behance.net/manimoeed",
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
    title: "GRAPHIC DESIGN",
    subtitle: "VISUAL IDENTITY CRAFT",
    description: "Creating stunning, memorable visual identities that communicate brand essence with precision — from logos and typography to complete design systems.",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1200&q=80",
    points: ["Logo & Brand Identity", "Design Systems", "Print & Digital Assets", "Typography & Color Theory"],
  },
  {
    number: "02",
    title: "SOCIAL MEDIA MANAGEMENT",
    subtitle: "BRAND PRESENCE & GROWTH",
    description: "Building and managing powerful social media presences with strategic content planning, audience engagement, and data-driven growth tactics.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1200&q=80",
    points: ["Content Strategy & Planning", "Community Management", "Analytics & Reporting", "Paid Ads & Campaigns"],
  },
  {
    number: "03",
    title: "CONTENT CREATION",
    subtitle: "VISUAL STORYTELLING",
    description: "Producing high-impact social content — reels, carousels, stories, and static posts — that stop the scroll and ignite engagement across all platforms.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    points: ["Reels & Video Editing", "Carousel & Story Design", "Copywriting & Captions", "Trend-Driven Content"],
  },
  {
    number: "04",
    title: "BRAND STRATEGY",
    subtitle: "IDENTITY & POSITIONING",
    description: "Crafting comprehensive brand strategies that define your visual voice, audience positioning, and messaging to stand out in competitive markets.",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
    points: ["Brand Audit & Research", "Visual Voice Development", "Competitor Analysis", "Brand Guidelines"],
  },
  {
    number: "05",
    title: "ADVERTISING CREATIVES",
    subtitle: "HIGH-CONVERSION VISUALS",
    description: "Designing scroll-stopping ad creatives for Meta, Instagram, TikTok, and Google — visuals engineered to convert attention into action.",
    image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1200&q=80",
    points: ["Meta & Instagram Ads", "TikTok Ad Creatives", "A/B Testing Visuals", "Conversion-Optimized Design"],
  },
  {
    number: "06",
    title: "PACKAGING & PRINT DESIGN",
    subtitle: "TANGIBLE BRAND EXPERIENCES",
    description: "Designing premium packaging and print materials that elevate brand perception — from product packaging to business cards and marketing collateral.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    points: ["Product Packaging Design", "Business Cards & Stationery", "Brochures & Flyers", "Mockup & Presentation"],
  },
];

export const projectsData: Project[] = [
  {
    id: "dental-clinic-social-media",
    number: "01",
    title: "DENTAL CLINIC SOCIAL MEDIA",
    category: "Social Media Content & Graphic Design",
    description: "A complete social media content suite designed for a dental clinic — featuring educational posts, promotional creatives, and scroll-stopping visuals crafted to boost patient engagement and grow clinic's online presence.",
    year: "2026",
    heroImage: "/assets/projects/dental-clinic/consultation.jpg",
    bgImage: "/assets/projects/dental-clinic/toothache.jpg",
    gallery: [
      "/assets/projects/dental-clinic/toothache.jpg",
      "/assets/projects/dental-clinic/smile-care.jpg",
      "/assets/projects/dental-clinic/dental-implant.jpg",
      "/assets/projects/dental-clinic/consultation.jpg",
      "/assets/projects/dental-clinic/goals-post.jpg",
      "/assets/projects/dental-clinic/brush.jpg",
      "/assets/projects/dental-clinic/reminder.jpg"
    ],
    role: [
      "Social Media Content Strategy",
      "Graphic Design & Visual Creation",
      "Educational Post Design",
      "Promotional Creative Production"
    ],
    tags: ["Social Media", "Graphic Design", "Healthcare", "Instagram", "Photoshop"],
    liveUrl: "https://www.behance.net/manimoeed"
  },
  {
    id: "nutrition-health-social",
    number: "02",
    title: "NUTRITION & HEALTH SOCIAL MEDIA",
    category: "Social Media Content & Health Branding",
    description: "A visually rich social media content series for a nutrition and health brand — educational posts covering vitamins, diet myths, sarcopenia awareness, and aesthetics & food, all designed with a premium maroon and gold color palette.",
    year: "2025",
    heroImage: "/assets/projects/nutrition-health/aesthetics-food.jpg",
    bgImage: "/assets/projects/nutrition-health/chocolate.jpg",
    gallery: [
      "/assets/projects/nutrition-health/chocolate.jpg",
      "/assets/projects/nutrition-health/nutrition-benefits.jpg",
      "/assets/projects/nutrition-health/sarcopenia.jpg",
      "/assets/projects/nutrition-health/aesthetics-food.jpg",
      "/assets/projects/nutrition-health/vitamin-a.jpg"
    ],
    role: [
      "Social Media Content Strategy",
      "Graphic Design & Visual Branding",
      "Educational Health Post Design",
      "Color System & Brand Consistency"
    ],
    tags: ["Social Media", "Health & Nutrition", "Graphic Design", "Photoshop", "Instagram"],
    liveUrl: "https://www.behance.net/manimoeed"
  },
  {
    id: "crove-bakery-brand",
    number: "03",
    title: "CROVÉ BAKERY & COFFEE",
    category: "Brand Identity & Visual System",
    description: "Complete visual identity and brand design for Crové Bakery & Coffee — featuring custom logo typography, packaging collateral, coffee cup branding, outdoor 3D signage, and event banner displays designed in an iconic cobalt blue & white aesthetic.",
    year: "2025",
    heroImage: "/assets/projects/crove-bakery/brand-collateral.png",
    bgImage: "/assets/projects/crove-bakery/signage.png",
    gallery: [
      "/assets/projects/crove-bakery/logo.png",
      "/assets/projects/crove-bakery/cups.png",
      "/assets/projects/crove-bakery/signage.png",
      "/assets/projects/crove-bakery/banners.png",
      "/assets/projects/crove-bakery/brand-collateral.png"
    ],
    role: [
      "Brand Identity & Logo Design",
      "Packaging & Coffee Cup Mockups",
      "Storefront 3D Signage Design",
      "Marketing Collateral & Banners",
      "Color Palette & Typography System"
    ],
    tags: ["Brand Identity", "Logo Design", "Packaging", "Illustrator", "Photoshop"],
    liveUrl: "https://www.behance.net/manimoeed"
  },
  {
    id: "pulse-ad-creatives",
    number: "04",
    title: "PULSE AD CREATIVES SUITE",
    category: "Advertising Design & Social Ads",
    description: "A suite of high-conversion advertising creatives for a fitness brand across Meta, Instagram, and TikTok — achieving 3.5x ROAS with visually compelling, scroll-stopping designs.",
    year: "2024",
    heroImage: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=80",
    bgImage: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80"
    ],
    role: [
      "Ad Creative Strategy & Visual Direction",
      "Meta & Instagram Ad Design",
      "TikTok Creative Production"
    ],
    tags: ["Meta Ads", "Instagram Ads", "TikTok", "Ad Creatives", "Conversion Design"],
    liveUrl: "https://behance.net/abdulmoeed/pulse"
  }
];

export const processData: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery & Brand Research",
    description: "Every great visual identity begins with deep listening. I explore your brand values, target audience, competitor landscape, and market positioning to build a rock-solid creative strategy."
  },
  {
    number: "02",
    title: "Creative Direction & Concept",
    description: "Ideas become identity through moodboarding, color psychology, typography pairing, and visual concept development — each choice made with purpose and brand intention."
  },
  {
    number: "03",
    title: "Design & Content Production",
    description: "Translating strategy into stunning visuals. Every graphic, post, reel, and ad creative is crafted with pixel-perfect precision, aesthetic consistency, and emotional resonance."
  },
  {
    number: "04",
    title: "Launch & Growth Optimization",
    description: "Publishing is just the beginning. I monitor analytics, optimize content performance, A/B test creatives, and evolve the strategy based on real audience behavior and engagement data."
  }
];

export const articlesData: Article[] = [
  {
    id: "psychology-of-color-in-branding",
    title: "The Psychology of Color in Brand Identity Design",
    date: "July 1, 2026",
    category: "GRAPHIC DESIGN",
    readTime: "5 MIN READ",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80",
    excerpt: "How strategic color choices in brand identity trigger specific emotional responses — and why the right palette is the most powerful tool in a designer's arsenal.",
    content: [
      "Color is not decoration — it is a silent language. In brand identity, every hue carries psychological weight that shapes perception, builds trust, and drives purchasing behavior.",
      "Luxury brands gravitate toward deep neutrals and blacks not merely for aesthetics, but because these tones communicate exclusivity, timelessness, and quiet authority.",
      "The most powerful brand palettes are those where every color earns its place — chosen not for beauty alone, but for the precise emotional territory it commands."
    ],
    author: "ABDUL MOEED"
  },
  {
    id: "social-media-content-strategy",
    title: "Why Most Social Media Strategies Fail (And What to Do Instead)",
    date: "June 14, 2026",
    category: "SOCIAL MEDIA",
    readTime: "6 MIN READ",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    excerpt: "Brands that treat social media as a broadcasting channel rather than a community-building tool are leaving massive growth on the table. Here's the smarter approach.",
    content: [
      "The brands that dominate social media are not those that post the most — they are those that understand their audience deeply and create content that resonates on an emotional level.",
      "A strategic content calendar balances value, entertainment, and conversion in deliberate proportions. Every post should serve a specific role in the larger brand narrative.",
      "Consistency of visual identity across every platform builds brand recognition exponentially — the audience should recognize your content before they even see your name."
    ],
    author: "ABDUL MOEED"
  },
  {
    id: "designing-brands-not-logos",
    title: "Designing Brands, Not Just Logos",
    date: "May 22, 2026",
    category: "BRAND IDENTITY",
    readTime: "4 MIN READ",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
    excerpt: "A logo is a symbol. A brand is an experience. Moving beyond the icon to craft holistic visual identities that command attention, build loyalty, and endure the test of time.",
    content: [
      "The most iconic brands in the world are not defined by their logos alone — they are defined by the complete sensory experience they deliver at every touchpoint.",
      "From the weight of a business card to the tone of an Instagram caption, every element contributes to a unified brand perception that either builds trust or destroys it.",
      "When brand identity and social media strategy work in perfect harmony, a business ceases to be a company — it becomes a movement that people want to be part of."
    ],
    author: "ABDUL MOEED"
  }
];
