export const faqCategories = [
  'General',
  'Services',
  'Process',
  'Pricing',
  'Technical'
] as const;

export type FAQCategory = typeof faqCategories[number];

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: FAQCategory;
}

export const faqs: FAQItem[] = [
  {
    id: 'general-1',
    question: 'What services do you offer?',
    answer: 'I offer full-stack web development services including frontend development with React, backend development with Node.js, database design, API development, and complete web application development. I specialize in modern technologies like Next.js, TypeScript, and PostgreSQL.',
    category: 'General',
  },
  {
    id: 'general-2',
    question: 'How can I get in touch with you?',
    answer: 'You can reach me via email at hello@rakibul.dev or use the contact form on my website. I typically respond to inquiries within 24 hours.',
    category: 'General',
  },
  {
    id: 'general-3',
    question: 'What is your experience level?',
    answer: 'I have extensive experience in full-stack web development with expertise in JavaScript, TypeScript, React, Next.js, Node.js, and database management. I have worked on various projects ranging from small websites to complex web applications.',
    category: 'General',
  },
  {
    id: 'services-1',
    question: 'Do you offer maintenance and support services?',
    answer: 'Yes, I offer ongoing maintenance and support for web applications including bug fixes, performance optimization, feature updates, and server management.',
    category: 'Services',
  },
  {
    id: 'services-2',
    question: 'Can you help with existing projects?',
    answer: 'Absolutely! I can help with code refactoring, bug fixing, performance optimization, adding new features, or migrating your project to newer technologies.',
    category: 'Services',
  },
  {
    id: 'services-3',
    question: 'Do you do mobile app development?',
    answer: 'I specialize in web development, but I can create responsive web applications that work seamlessly on mobile devices. For native mobile apps, I can recommend trusted partners.',
    category: 'Services',
  },
  {
    id: 'process-1',
    question: 'What is your development process?',
    answer: 'My process includes: 1) Initial consultation to understand requirements, 2) Design and planning, 3) Development with regular updates, 4) Testing and QA, 5) Deployment, and 6) Post-launch support.',
    category: 'Process',
  },
  {
    id: 'process-2',
    question: 'How long does a typical project take?',
    answer: 'Project duration depends on complexity and scope. A simple website might take 2-4 weeks, while a complex web application could take 2-6 months. I provide detailed timelines during the planning phase.',
    category: 'Process',
  },
  {
    id: 'process-3',
    question: 'Do you provide regular updates during development?',
    answer: 'Yes, I provide regular updates and maintain transparent communication throughout the project. You can track progress and provide feedback at each stage.',
    category: 'Process',
  },
  {
    id: 'pricing-1',
    question: 'What are your pricing rates?',
    answer: 'My pricing is competitive and depends on project complexity, scope, and requirements. I offer flexible engagement models including hourly rates, fixed-price projects, and retainer-based arrangements. Contact me for a custom quote.',
    category: 'Pricing',
  },
  {
    id: 'pricing-2',
    question: 'Do you offer payment plans?',
    answer: 'Yes, I can work out payment arrangements based on project milestones. Typically, I require an initial deposit to begin work, with the remaining amount due upon completion.',
    category: 'Pricing',
  },
  {
    id: 'technical-1',
    question: 'What technology stack do you use?',
    answer: 'I primarily work with Next.js, React, TypeScript, Node.js, Express, PostgreSQL, and MongoDB. I can also work with other technologies based on project requirements.',
    category: 'Technical',
  },
  {
    id: 'technical-2',
    question: 'Do you write clean, maintainable code?',
    answer: 'Absolutely! Code quality is a priority. I follow best practices, write well-documented code, use proper naming conventions, and create applications that are easy to maintain and scale.',
    category: 'Technical',
  },
  {
    id: 'technical-3',
    question: 'How do you handle security?',
    answer: 'Security is paramount. I implement industry best practices including secure authentication, data encryption, input validation, protection against common vulnerabilities (SQL injection, XSS, CSRF), and regular security updates.',
    category: 'Technical',
  },
];
