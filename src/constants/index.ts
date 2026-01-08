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
  redux,
  tailwind,
  nodejs,
  mongodb,
  threejs,
  // creator,
  github,
  django,
  drf,
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
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: github,
  },
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
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: github,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: typescript,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: reactjs,
    source_code_link: "https://github.com/",
  },
];

export { technologies, testimonials, projects };
