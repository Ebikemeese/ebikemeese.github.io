import type { Service, NavLink, Experience } from "./index.d"


export const navLinks: NavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  // redux,
  tailwind,
  // nodejs,
  // mongodb,
  threejs,
  // creator,
  github,
  django,
  drf,
  appwrite,
  boostrap,
  clerk,
  gsap,
  jquery,
  postgresql,
  sentry,
  supabase,

  //projects
  greatkart,
  blogify,
  brainwave,
  converso,
  djangobnb,
  iphone,
  portfolio,
  xora,
  zentry
} from "../assets/tech";


export const services: Service[] = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  // {
  //   title: "React Native Developer",
  //   icon: creator,
  // },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Full-Stack Developer",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  // {
  //   name: "Node JS",
  //   icon: nodejs,
  // },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Git",
    icon: github,
  },
  {
    name: "Django",
    icon: django,
  },
  {
    name: "Django REST Framework",
    icon: drf,
  },
  {
    name: "Appwrite",
    icon: appwrite,
  },
  {
    name: "Bootstrap",
    icon: boostrap,
  },
  {
    name: "Clerk",
    icon: clerk,
  },
  {
    name: "GSAP",
    icon: gsap,
  },
  {
    name: "jQuery",
    icon: jquery,
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
  },
  {
    name: "Sentry",
    icon: sentry,
  },
  {
    name: "Supabase",
    icon: supabase,
  }
];

export const experiences: Experience[] = [
  {
    title: "Web Development",
    icon: reactjs,
    iconBg: "#383E56",
    date: "2024 - Present",
    points: [
      "Built responsive, production-ready user interfaces using React, TypeScript, and Tailwind CSS.",
      "Translated UI designs and wireframes into reusable, maintainable React components.",
      "Implemented modern UI patterns using shadcn/ui and Aceternity UI.",
      "Integrated frontend applications with REST APIs and authentication services.",
      "Added animations and interactive elements using Framer Motion and GSAP.",
      "Ensured responsive layouts and consistent UI behaviour accross devices ans screen sizes.",
      "Focused on clean component structure, perfomance, and reusability.",
    ],
  },
  {
    title: "Backend Development",
    icon: django,
    iconBg: "#E6DEDD",
    date: "2024 - Present",
    points: [
      "Developed server-side logic using Python, Django, and Django REST Framework.",
      "Implemented authentication and authorization systems using Clerk, Supabase and Appwrite.",
      "Built and maintained backend services supporting web applications.",
      "Worked with relational databases including PostgreSQL and SQLite.",
      "Implemented real-time features using WebSockets (Daphne).",
      "Integrated multiple payment gateways including Stripe, Paystack, Flutterwave, and PayPal.",
      "Monitored backend and Frontend system errors using Sentry.",
    ],
  },
  {
    title: "Full-Stack Development",
    icon: mobile,
    iconBg: "#383E56",
    date: "2024 - Present",
    points: [
      "Built complete web applications combining React frontends with Django-based backends.",
      "Delivered end-to-end features including UI, APIs, databases, authentication, and payments.",
      "Developed Saas platforms, e-commerce systems, booking platforms, an real-time applications.",
      "Deployed applications using Render, GitHub Pages, and cloud-hosted PostgreSQL.",
      "Worked independently in fully remote environments, managing features from development to production.",
      "Focused on scalability, maintainability, and clean application architecture."
    ],
  },
  // {
  //   title: "API Development",
  //   icon: drf,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Greatkart",
    description:
      "Multi-vendor e-commerce website, a complete, professional online marketplace system where multiple vendors can sell products under one platform.",
    tags: [
      {
        name: "django",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "orange-text-gradient"
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "bootstrap",
        color: "orange-text-gradient",
      },
      {
        name: "javascript",
        color: "blue-text-gradient"
      },
      {
        name: "jquery",
        color: "green-text-gradient",
      },
      {
        name: "postgresql",
        color: "pink-text-gradient",
      },
      {
        name: "sentry",
        color: "green-text-gradient"
      },
    ],
    image: greatkart,
    source_code_link: "https://greatkart-ad.onrender.com",
    catalog: "https://wa.me/p/25121177120887948/2348123208257",
  },
  {
    name: "Converso",
    description:
      "Converso LMS is an AI-driven Learning management SAAS designed to make learning interactive, personalized, and engaging.",
    tags: [
      {
        name: "django",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "orange-text-gradient"
      },
      {
        name: "javascript",
        color: "blue-text-gradient"
      },
      {
        name: "clerk",
        color: "green-text-gradient",
      },
      {
        name: "tailwind css",
        color: "pink-text-gradient",
      },
      {
        name: "supabase",
        color: "orange-text-gradient",
      },
      {
        name: "vapi ai",
        color: "blue-text-gradient"
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "sentry",
        color: "pink-text-gradient",
      },
      {
        name: "vite",
        color: "orange-text-gradient",
      },
    ],
    image: converso,
    source_code_link: "https://ebikemeese.github.io/Saas-app",
    catalog: "https://wa.me/p/25150245704678153/2348123208257",
  },
  {
    name: "Brainwave",
    description:
      "Modern UI/UX. Experience a visually stunning, next-level website with bento grid layout, fluid transitions that make browsing a delight and immersive scrolling for a dynamic user experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "vite",
        color: "orange-text-gradient",
      },
    ],
    image: brainwave,
    source_code_link: "https://ebikemeese.github.io/Brainwave",
    catalog: "https://wa.me/p/25635943382668214/2348123208257",
  },
  {
    name: "John Doe's Portfolio",
    description:
      "A portfolio website that showcase projects, skills, and creativity with a modern, interactive immersive 3D visuals and smooth animations. Best viewed on Laptop/desktop.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "three.js",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "javascript",
        color: "blue-text-gradient"
      },
      {
        name: "framer motion",
        color: "orange-text-gradient",
      },
      {
        name: "aceternity ui",
        color: "blue-text-gradient"
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://ebikemeese.github.io/John-doe-portfolio",
    catalog: "https://wa.me/p/25459739463681260/2348123208257",
  },
  {
    name: "Zentry Clone",
    description:
      "The metagame experience, step into the future of web gaming with this immersive, ultra-smooth Zentry clone! Built for stunning 3D visuals, fluid animations, and creative interactions.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "three.js",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "blue-text-gradient"
      },
      {
        name: "tailwind css",
        color: "pink-text-gradient",
      },
      {
        name: "gsap",
        color: "orange-text-gradient",
      },
      {
        name: "vite",
        color: "blue-text-gradient"
      },
    ],
    image: zentry,
    source_code_link: "https://ebikemeese.github.io/Award-winning",
    catalog: "https://wa.me/p/32644800018501904/2348123208257",
  },
  {
    name: "Xora",
    description:
      "Video editing SAAS landing page, a modern, responsive, and lightening-fast landing page built to showcase your SAAS products beautifully! Perfect for startups, SAAS tools, and creative platforms.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "vite",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "blue-text-gradient"
      },
      {
        name: "tailwind css",
        color: "pink-text-gradient",
      },
    ],
    image: xora,
    source_code_link: "https://ebikemeese.github.io/Xora",
    catalog: "https://wa.me/p/25331184193187764/2348123208257",
  },
  {
    name: "DjangoBnb",
    description:
      "AirBnb clone - Experience a modern, real-time Airbnb clone built with Djano + React(Typescript)! Search, book, chat, and manage properties effortlessly - complete with WhatsApp-style chat and live status updates.",
    tags: [
      {
        name: "django",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "orange-text-gradient"
      },
      {
        name: "websocket(daphne)",
        color: "green-text-gradient",
      },
      {
        name: "tailwind css",
        color: "pink-text-gradient",
      },
      {
        name: "postgresql",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "orange-text-gradient",
      },
      {
        name: "vite",
        color: "blue-text-gradient"
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "sentry",
        color: "pink-text-gradient",
      },
      {
        name: "render",
        color: "orange-text-gradient",
      },
      {
        name: "javascript",
        color: "blue-text-gradient"
      },
    ],
    image: djangobnb,
    source_code_link: "https://ebikemeese.github.io/DjangoBnb",
    catalog: "https://wa.me/p/24072471452451490/2348123208257",
  },
  {
    name: "iPhone 15 Pro Clone",
    description:
      "A fully interactive iPhone 15 Pro website, inspired by Apple's official product page! Experience 3D animations, smooth transitions, and immersive interactions like never before.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "three.js",
        color: "orange-text-gradient"
      },
      {
        name: "gsap",
        color: "green-text-gradient",
      },
      {
        name: "tailwind css",
        color: "pink-text-gradient",
      },
      {
        name: "vite",
        color: "blue-text-gradient"
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
    ],
    image: iphone,
    source_code_link: "https://ebikemeese.github.io/iPhone-15-clone",
    catalog: "https://wa.me/p/25492359273784706/2348123208257",
  },
  {
    name: "Blogify",
    description:
      "Full-stack content management system, a modern blog platform built with React + Django + Django REST Framework. Perfect for bloggers and developers!",
    tags: [
      {
        name: "django",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "orange-text-gradient"
      },
      {
        name: "websocket(daphne)",
        color: "green-text-gradient",
      },
      {
        name: "tailwind css",
        color: "pink-text-gradient",
      },
      {
        name: "react",
        color: "orange-text-gradient",
      },
      {
        name: "vite",
        color: "blue-text-gradient"
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "sentry",
        color: "pink-text-gradient",
      },
      {
        name: "render",
        color: "orange-text-gradient",
      },
      {
        name: "javascript",
        color: "blue-text-gradient"
      },
      {
        name: "postgresql",
        color: "green-text-gradient",
      },
    ],
    image: blogify,
    source_code_link: "https://ebikemeese.github.io/React-blog-app",
    catalog: "https://wa.me/p/25138632185779320/2348123208257",
  },

];

export { technologies, testimonials, projects };
