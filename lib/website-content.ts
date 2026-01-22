export const websiteContent = {
  developer: {
    name: 'Rakibul Hasan',
    title: 'Full-Stack Web Developer',
    bio: 'A passionate developer specializing in JavaScript, TypeScript, and Next.js. I craft performant, accessible, and visually stunning web applications.',
    location: 'Dhaka, Bangladesh',
    availability: 'Available for freelance projects and full-time opportunities',
  },
  services: {
    discovery: 'Requirement analysis, architecture design, and technology stack selection',
    frontend: 'React/Next.js development, UI/UX design, component architecture, performance optimization',
    backend: 'API development, database design, authentication & security, server architecture',
    integration: 'API integration, testing, and quality assurance',
    deployment: 'Cloud deployment, CI/CD pipelines, monitoring, infrastructure setup',
    maintenance: 'Bug fixes, feature updates, performance monitoring, 24/7 support',
  },
  skills: {
    languages: ['JavaScript', 'TypeScript', 'Python', 'SQL'],
    frontend: ['React', 'Next.js', 'Tailwind CSS', 'Shadcn/UI', 'GSAP'],
    backend: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'REST API'],
    tools: ['Git', 'Docker', 'AWS', 'Vercel', 'VS Code'],
  },
  experience: [
    {
      role: 'Senior Frontend Developer',
      company: 'Tech Company',
      period: '2022 - Present',
      description: 'Leading frontend development, building reusable components, mentoring junior developers',
    },
    {
      role: 'Full-Stack Developer',
      company: 'Startup',
      period: '2020 - 2022',
      description: 'Developed full-stack applications, managed databases, deployed to production',
    },
  ],
  services_offered: [
    'Custom Web Application Development',
    'SPA (Single Page Application) Development',
    'E-commerce Solutions',
    'Progressive Web Apps (PWA)',
    'API Development & Integration',
    'Performance Optimization',
    'UI/UX Implementation',
    'Database Design & Optimization',
    'Deployment & DevOps',
    'Technical Consulting',
  ],
  process: {
    step1: 'Discovery - Understand your needs and goals',
    step2: 'Planning - Create detailed project roadmap',
    step3: 'Development - Build frontend and backend',
    step4: 'Testing - Comprehensive quality assurance',
    step5: 'Deployment - Launch to production',
    step6: 'Support - Ongoing maintenance and updates',
  },
  faq: [
    {
      question: 'What is your experience level?',
      answer: 'With over 5+ years of experience in web development, I have successfully delivered 50+ projects ranging from startups to enterprise-level applications.',
    },
    {
      question: 'Do you work on freelance projects?',
      answer: 'Yes, I am currently available for freelance projects. My typical response time is within 24 hours.',
    },
    {
      question: 'What technologies do you specialize in?',
      answer: 'I specialize in JavaScript, TypeScript, React, Next.js, Node.js, PostgreSQL, and modern web development practices.',
    },
    {
      question: 'What is your development process?',
      answer: 'My process includes: Discovery & Planning → Frontend Development → Backend Development → Integration & Testing → Deployment → Maintenance & Support.',
    },
    {
      question: 'Do you provide post-launch support?',
      answer: 'Absolutely! I provide ongoing maintenance, bug fixes, feature updates, and performance monitoring after launch.',
    },
  ],
  contact: {
    email: 'hello@rakibul.dev',
    location: 'Dhaka, Bangladesh (Remote Available)',
    responseTime: 'Within 24 hours',
  },
}

export function getRelevantContext(query: string): string {
  const queryLower = query.toLowerCase()
  let context = ''

  // Match queries to relevant content
  if (queryLower.includes('experience') || queryLower.includes('background')) {
    context += `Experience: ${websiteContent.experience.map((e) => `${e.role} at ${e.company} (${e.period})`).join('; ')}\n`
  }

  if (queryLower.includes('skill') || queryLower.includes('technology') || queryLower.includes('language')) {
    context += `Skills: Frontend (${websiteContent.skills.frontend.join(', ')}), Backend (${websiteContent.skills.backend.join(', ')}), Languages (${websiteContent.skills.languages.join(', ')})\n`
  }

  if (queryLower.includes('service') || queryLower.includes('offer') || queryLower.includes('do you')) {
    context += `Services: ${websiteContent.services_offered.join(', ')}\n`
  }

  if (queryLower.includes('process') || queryLower.includes('how')) {
    context += `Process: ${Object.values(websiteContent.process).join(' → ')}\n`
  }

  if (queryLower.includes('availability') || queryLower.includes('available') || queryLower.includes('freelance')) {
    context += `${websiteContent.contact.responseTime}. Email: ${websiteContent.contact.email}\n`
  }

  if (queryLower.includes('about') || queryLower.includes('who are you')) {
    context += `${websiteContent.developer.name} - ${websiteContent.developer.title}. ${websiteContent.developer.bio}\n`
  }

  // Default context
  if (!context) {
    context = `I'm Rakibul Hasan, a Full-Stack Web Developer. I provide complete A-Z business-ready solutions including frontend development, backend development, API integration, testing, deployment, and ongoing support.`
  }

  return context
}
