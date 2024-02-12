import Finanseer from '@/public/Finanseer.png';
import unZwillingFrontend from '@/public/unZwilling-frontend-questions.png';
import unZwillingBackend from '@/public/unZwilling-backend-code.png';

export const boxData = [
  {
    title: 'Finance Dashboard',
    subtitle: 'Full-Stack',
    description: `A sample finance dashboard web app. It shows word count, character count and social media post limits.`,
    tags: [
      'Vite.js',
      'React',
      'TypeScript',
      'Material UI',
      'React-router',
      'Redux',
      'Recharts',
      'Emotion',
    ],
    imageUrl: Finanseer,
    siteUrl: 'https://fin-dashboard.vercel.app',
  },
  {
    title: 'Microservice for Questions',
    subtitle: 'Front-End',
    description: `Designed and built a pixel-perfect clone of zwilling.com for Questions & Answers microservice using React, JavaScript ES6, HTML/CSS'
      \nBuilt local mock back-end with Node.js, Express, MongoDB, and Faker to facilitate development.
      \nUsed Figma to design wireframes to plan component hierarchy.`,
    tags: ['React', 'JavaScript ES6', 'HTML/CSS', 'CSS Modules', 'Figma'],
    imageUrl: unZwillingFrontend,
    siteUrl: '#',
  },
  {
    title: 'Microservice for Reviews',
    subtitle: 'Back-End',
    description: `Designed and developed REST API and database for handling user-generated product reviews.
        \nReduced local response times under stress of 10 million records to over 5000 RPS, achieving response times under 20ms.
        \nDeployed databases on AWS EC2 with NGINX load-balancing, surpassing goals by achieving over 2000 RPS under 1000 ms.
        \nPackaged the service and deployed components as Docker containers using AWS.
      `,
    tags: [
      'Node.js',
      'JavaScript',
      'MongoDB',
      'Express',
      'AWS EC2',
      'Docker',
      'NGINX',
    ],
    imageUrl: unZwillingBackend,
    siteUrl: '#',
  },
  {
    title: 'Finance Dashboard',
    subtitle: 'Full-Stack',
    description:
      'A sample finance dashboard web app. It shows word count, character count and social media post limits.',
    tags: [
      'Vite.js',
      'React',
      'TypeScript',
      'Material UI',
      'React-router',
      'Redux',
      'Recharts',
      'Emotion',
    ],
    imageUrl: Finanseer,
    siteUrl: 'https://fin-dashboard.vercel.app',
  },
  {
    title: 'Microservice for Questions',
    subtitle: 'Front-End',
    description: `Designed and built a pixel-perfect clone of zwilling.com for Questions & Answers microservice using React, JavaScript ES6, HTML/CSS'
      \nBuilt local mock back-end with Node.js, Express, MongoDB, and Faker to facilitate development.
      \nUsed Figma to design wireframes to plan component hierarchy.`,
    tags: ['React', 'JavaScript ES6', 'HTML/CSS', 'CSS Modules', 'Figma'],
    imageUrl: unZwillingFrontend,
    siteUrl: '#',
  },
  {
    title: 'Microservice for Reviews',
    subtitle: 'Back-End',
    description: `Designed and developed REST API and database for handling user-generated product reviews'
        \nReduced local response times under stress of 10 million records to over 5000 RPS, achieving response times under 20ms.
        \nDeployed databases on AWS EC2 with NGINX load-balancing, surpassing goals by achieving over 2000 RPS under 1000 ms.
        \nPackaged the service and deployed components as Docker containers using AWS.
      `,
    tags: [
      'Node.js',
      'JavaScript',
      'MongoDB',
      'Express',
      'AWS EC2',
      'Docker',
      'NGINX',
    ],
    imageUrl: unZwillingBackend,
    siteUrl: '#',
  },
] as const;
