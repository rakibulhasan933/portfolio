"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Mail, Linkedin, Twitter, ChevronRight, ArrowUp, Menu, X, } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const EnhancedPortfolio = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Scroll tracking
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const skillsData = [{
    name: 'TypeScript',
    icon: 'https://skillicons.dev/icons?i=typescript'
  }, {
    name: 'JavaScript',
    icon: 'https://skillicons.dev/icons?i=javascript'
  }, {
    name: 'React',
    icon: 'https://skillicons.dev/icons?i=react'
  }, {
    name: 'Next.js',
    icon: 'https://skillicons.dev/icons?i=nextjs'
  }, {
    name: 'Node.js',
    icon: 'https://skillicons.dev/icons?i=nodejs'
  }, {
    name: 'MongoDB',
    icon: 'https://skillicons.dev/icons?i=mongodb'
  }, {
    name: 'PostgreSQL',
    icon: 'https://skillicons.dev/icons?i=postgresql'
  }, {
    name: 'Docker',
    icon: 'https://skillicons.dev/icons?i=docker'
  }, {
    name: 'AWS',
    icon: 'https://skillicons.dev/icons?i=aws'
  }, {
    name: 'Tailwind CSS',
    icon: 'https://skillicons.dev/icons?i=tailwindcss'
  }, {
    name: 'Git',
    icon: 'https://skillicons.dev/icons?i=git'
  }, {
    name: 'GraphQL',
    icon: 'https://skillicons.dev/icons?i=graphql'
  }];

  // Simple animated background
  const BackgroundElements = () => (
    <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-50">
      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>
  );

  // Clean navigation
  const Navigation = () => (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? 'bg-slate-900/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'
        }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <motion.div
            className="text-2xl font-bold text-emerald-400"
            whileHover={{ scale: 1.05 }}
            style={{ fontFamily: 'Ubuntu, sans-serif' }}
          >
            Rakibul
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-slate-300 hover:text-emerald-400 transition-colors relative font-medium"
                style={{ fontFamily: 'Ubuntu, sans-serif' }}
                whileHover={{ y: -2 }}
              >
                {item}
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-emerald-400 rounded-full"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>

          {/* Hire Me Button */}
          <motion.button
            className="hidden md:block bg-emerald-400 text-slate-900 px-6 py-2 rounded-lg font-medium hover:bg-emerald-300 transition-colors"
            style={{ fontFamily: 'Ubuntu, sans-serif' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href={'https://www.linkedin.com/in/rakibulhossainrakib'} >Hire Me</Link>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="md:hidden mt-4 py-4 space-y-4"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
            >
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block text-slate-300 hover:text-emerald-400 transition-colors font-medium"
                  style={{ fontFamily: 'Ubuntu, sans-serif' }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );

  // Simplified hero section
  const HeroSection = () => (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <div className="max-w-4xl mx-auto px-6 text-left">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            className="text-emerald-400 text-lg mb-4"
            style={{ fontFamily: 'Ubuntu Mono, monospace' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Hi, my name is
          </motion.p>
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-white mb-4"
            style={{ fontFamily: 'Ubuntu, sans-serif' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            MD Rakibul Hasan.
          </motion.h1>
          <motion.h2
            className="text-4xl md:text-6xl font-bold text-slate-400 mb-6"
            style={{ fontFamily: 'Ubuntu, sans-serif' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            I build things for the web.
          </motion.h2>
          <motion.p
            className="text-lg text-slate-300 max-w-2xl mb-10 leading-relaxed"
            style={{ fontFamily: 'Ubuntu, sans-serif' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            I&apos;m a software engineer specializing in building exceptional digital experiences.
            Currently focused on creating accessible, human-centered products that make a difference.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <motion.button
              className="border-2 border-emerald-400 text-emerald-400 px-8 py-3 rounded-lg font-medium text-lg hover:bg-emerald-400 hover:text-slate-900 transition-all duration-300"
              style={{ fontFamily: 'Ubuntu, sans-serif' }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link href={'https://www.linkedin.com/in/rakibulhossainrakib'} >
                Check out my work!
              </Link>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );

  // Clean about section
  const AboutSection = () => (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-white mb-16"
          style={{ fontFamily: 'Ubuntu, sans-serif' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="text-emerald-400 mr-2">01.</span>About Me
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-12">
          <motion.div
            className="md:col-span-2 space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-slate-300 text-lg leading-relaxed" style={{ fontFamily: 'Ubuntu, sans-serif' }}>
              I craft user-friendly and interactive web experiences with a passion for problem-solving.
              My expertise in both front-end and back-end development allows me to bring websites to life,
              from design and functionality to data and security.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed" style={{ fontFamily: 'Ubuntu, sans-serif' }}>
              I enjoy collaborating with clients to translate their needs into powerful tools that help
              businesses thrive. Always eager to learn and create, I&lsquo;m excited to tackle your next project!
            </p>

            <div>
              <p className="text-slate-300 mb-4" style={{ fontFamily: 'Ubuntu, sans-serif' }}>
                Here are technologies I&lsquo;ve been working with recently:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {['JavaScript (ES6+)', 'TypeScript', 'React.js', 'Next.js', 'Node.js', 'Docker'].map((tech, index) => (
                  <motion.div
                    key={tech}
                    className="flex items-center text-slate-300"
                    style={{ fontFamily: 'Ubuntu, sans-serif' }}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <ChevronRight className="text-emerald-400 mr-2" size={16} />
                    {tech}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative group">
              <Image
                src="https://i.ibb.co/DVyr6LS/31671553-2062830170707480-6027634644545961984-n.jpg"
                width={300}
                height={400}
                priority
                alt="Rakibul Hasan"
                className="rounded-lg w-full relative z-10 filter grayscale hover:grayscale-0 transition-all duration-300"
              />
              <div className="absolute inset-0 border-2 border-emerald-400 rounded-lg translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300" />
            </div>
          </motion.div>
        </div>

        {/* Simple stats */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {[
            { label: 'Completed Projects', value: '20+' },
            { label: 'Technologies', value: '40+' },
            { label: 'Years of Experience', value: '2+' }
          ].map((stat, index) => (
            <div key={stat.label} className="text-center">
              <h3 className="text-5xl font-bold text-emerald-400 mb-2" style={{ fontFamily: 'Ubuntu, sans-serif' }}>
                {stat.value}
              </h3>
              <p className="text-slate-300" style={{ fontFamily: 'Ubuntu, sans-serif' }}>
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );

  // Simple skills section
  const SkillsSection = () => (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-white mb-16"
          style={{ fontFamily: 'Ubuntu, sans-serif' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="text-emerald-400 mr-2">02.</span>My Skills
        </motion.h2>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {skillsData.map((skill, index) => (
            <motion.div
              key={index}
              className="text-center group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-16 h-16 bg-slate-800 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-emerald-400 transition-colors duration-300">
                <span className="text-2xl">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    width={100}
                    height={100}
                  />
                </span>
              </div>
              <p className="text-slate-300 font-medium group-hover:text-emerald-400 transition-colors"
                style={{ fontFamily: 'Ubuntu, sans-serif' }}>
                {skill.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );

  // Clean project showcase
  const ProjectsSection = () => {
    const projects = [
      {
        title: 'Arafat Foundation LTD',
        description: 'A comprehensive non-profit organization website dedicated to humanitarian services with modern design and seamless user experience.',
        image: '/project-1.png',
        tech: ['TypeScript', 'Next.js', 'MongoDB', 'Prisma'],
        github: '#',
        live: 'https://arafatfoundation.org'
      },
      {
        title: 'HealthZenix',
        description: 'AI-powered healthcare platform for symptom analysis and prescription suggestions with intelligent automation.',
        image: 'https://i.ibb.co/wNx66SXJ/Screenshot-129.png',
        tech: ['TypeScript', 'Next.js', 'Redux', 'AI/ML'],
        github: '#',
        live: 'https://healthzenix.vercel.app'
      },
      {
        title: 'Hunger Station',
        description: 'Modern food delivery web app with dynamic UI, mobile-friendly design and smooth user interactions.',
        image: 'https://i.ibb.co/5WcJmtjX/Screenshot-130.png',
        tech: ['TypeScript', 'Next.js', 'Redux', 'MongoDB'],
        github: '#',
        live: 'https://hungerstation.vercel.app'
      }
    ];

    return (
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl font-bold text-white mb-16"
            style={{ fontFamily: 'Ubuntu, sans-serif' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-emerald-400 mr-2">03.</span>Some Things I&lsquo;ve Built
          </motion.h2>

          <div className="space-y-20">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''
                  }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="relative group">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={500}
                    height={300}
                    priority
                    className="rounded-lg shadow-xl w-full filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-emerald-400/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="space-y-4">
                  <div>
                    <p className="text-emerald-400 mb-2" style={{ fontFamily: 'Ubuntu Mono, monospace' }}>
                      Featured Project
                    </p>
                    <h3 className="text-2xl font-bold text-white" style={{ fontFamily: 'Ubuntu, sans-serif' }}>
                      {project.title}
                    </h3>
                  </div>

                  <div className="bg-slate-800/50 p-6 rounded-lg backdrop-blur-sm">
                    <p className="text-slate-300 leading-relaxed" style={{ fontFamily: 'Ubuntu, sans-serif' }}>
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-emerald-400 text-sm"
                        style={{ fontFamily: 'Ubuntu Mono, monospace' }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    <motion.a
                      href={project.github}
                      className="text-slate-300 hover:text-emerald-400 transition-colors"
                      whileHover={{ scale: 1.1 }}
                    >
                      <Github size={22} />
                    </motion.a>
                    <motion.a
                      href={project.live}
                      className="text-slate-300 hover:text-emerald-400 transition-colors"
                      whileHover={{ scale: 1.1 }}
                    >
                      <ExternalLink size={22} />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  // Simple contact section
  const ContactSection = () => (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-emerald-400 mb-4" style={{ fontFamily: 'Ubuntu Mono, monospace' }}>
            04. What&lsquo;s Next?
          </p>
          <h2 className="text-4xl font-bold text-white mb-6" style={{ fontFamily: 'Ubuntu, sans-serif' }}>
            Get In Touch
          </h2>
          <p className="text-lg text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: 'Ubuntu, sans-serif' }}>
            Although I&lsquo;m not currently looking for any new opportunities, my inbox is always open.
            Whether you have a question or just want to say hi, I&lsquo;ll try my best to get back to you!
          </p>

          <motion.a
            href="mailto:rakibulmd933@gmail.com"
            className="inline-block border-2 border-emerald-400 text-emerald-400 px-8 py-3 rounded-lg font-medium hover:bg-emerald-400 hover:text-slate-900 transition-all duration-300"
            style={{ fontFamily: 'Ubuntu, sans-serif' }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Say Hello
          </motion.a>

          <div className="flex justify-center space-x-6 mt-12">
            {[
              { icon: Mail, href: 'mailto:rakibulmd933@gmail.com' },
              { icon: Linkedin, href: 'https://linkedin.com/in/rakibulhossainrakib' },
              { icon: Twitter, href: 'https://twitter.com/rakibul_hasan80' },
              { icon: Github, href: 'https://github.com/rakibulhasan933' }
            ].map(({ icon: Icon, href }) => (
              <motion.a
                key={href}
                href={href}
                className="text-slate-400 hover:text-emerald-400 transition-colors"
                whileHover={{ scale: 1.2, y: -2 }}
              >
                <Icon size={24} />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );

  // Scroll to top button
  const ScrollToTop = () => (
    <AnimatePresence>
      {showScrollTop && (
        <motion.button
          className="fixed bottom-8 right-8 bg-emerald-400 text-slate-900 p-3 rounded-full shadow-lg z-40"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <ArrowUp size={20} />
        </motion.button>
      )}
    </AnimatePresence>
  );

  return (
    <div className="bg-slate-900 min-h-screen text-white overflow-x-hidden">
      {/* Load Ubuntu fonts */}
      <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&family=Ubuntu+Mono:wght@400;700&display=swap" rel="stylesheet" />

      <BackgroundElements />
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <ScrollToTop />

      {/* Simple footer */}
      <footer className="py-8 text-center text-slate-400 border-t border-slate-800">
        <p style={{ fontFamily: 'Ubuntu, sans-serif' }}>
          © {new Date().getFullYear()} Designed & Built by Rakibul Hasan
        </p>
      </footer>
    </div>
  );
};

export default EnhancedPortfolio;