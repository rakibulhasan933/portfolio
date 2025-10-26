"use client";

import React, { useState, useEffect, useCallback, useMemo, memo, lazy, Suspense } from 'react';
import { motion, AnimatePresence, useReducedMotion, LazyMotion, domAnimation } from 'framer-motion';
import { Github, ExternalLink, Mail, Linkedin, Twitter, ChevronRight, Menu, X, ArrowUp } from 'lucide-react';
import Image from 'next/image';

// Lazy load heavy components
const ProjectsSection = lazy(() => import('@/app/components/ProjectsSection').catch(() => {
  const ErrorComponent = memo(() => <div>Error loading projects</div>);
  ErrorComponent.displayName = 'ErrorComponent';
  return { default: ErrorComponent };
}));

// Memoized skill data to prevent re-creation
const skillsData = [
  { name: 'TypeScript', icon: 'https://skillicons.dev/icons?i=typescript' },
  { name: 'JavaScript', icon: 'https://skillicons.dev/icons?i=javascript' },
  { name: 'React', icon: 'https://skillicons.dev/icons?i=react' },
  { name: 'Next.js', icon: 'https://skillicons.dev/icons?i=nextjs' },
  { name: 'Node.js', icon: 'https://skillicons.dev/icons?i=nodejs' },
  { name: 'MongoDB', icon: 'https://skillicons.dev/icons?i=mongodb' },
  { name: 'PostgreSQL', icon: 'https://skillicons.dev/icons?i=postgresql' },
  { name: 'Docker', icon: 'https://skillicons.dev/icons?i=docker' },
  { name: 'AWS', icon: 'https://skillicons.dev/icons?i=aws' },
  { name: 'Tailwind CSS', icon: 'https://skillicons.dev/icons?i=tailwindcss' },
  { name: 'Git', icon: 'https://skillicons.dev/icons?i=git' },
  { name: 'GraphQL', icon: 'https://skillicons.dev/icons?i=graphql' }
];

// Memoized animation variants
const fadeInVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const slideInVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0 }
};

// Optimized Background Elements with reduced complexity
const BackgroundElements = memo(() => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) return null;

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-30" aria-hidden="true">
      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl will-change-transform"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 90, 180, 270, 360],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop"
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 rounded-full blur-3xl will-change-transform"
        animate={{
          scale: [1.1, 1, 1.1],
          rotate: [360, 270, 180, 90, 0],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop"
        }}
      />
    </div>
  );
});

BackgroundElements.displayName = 'BackgroundElements';

// Optimized Navigation with performance improvements
const Navigation = memo(({ isScrolled, isMobileMenuOpen, setIsMobileMenuOpen }: {
  isScrolled: boolean;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (value: boolean | ((prev: boolean) => boolean)) => void;
}) => {
  const navItems = useMemo(() => ['Home', 'About', 'Skills', 'Projects', 'Contact'], []);

  const handleMobileMenuToggle = useCallback(() => {
    setIsMobileMenuOpen((prev: boolean) => !prev);
  }, [setIsMobileMenuOpen]);

  const handleNavClick = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, [setIsMobileMenuOpen]);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? 'bg-slate-900/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'
        }`}
      initial={false}
      animate={{ y: 0 }}
      style={{ willChange: isScrolled ? 'auto' : 'transform' }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <motion.div
            className="text-2xl font-bold text-emerald-400 select-none"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ fontFamily: 'Ubuntu, sans-serif' }}
          >
            Rakibul
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8" role="navigation" aria-label="Main navigation">
            {navItems.map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-slate-300 hover:text-emerald-400 transition-colors relative font-medium focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-slate-900 rounded-sm px-2 py-1"
                style={{ fontFamily: 'Ubuntu, sans-serif' }}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                aria-label={`Navigate to ${item} section`}
              >
                {item}
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-emerald-400 rounded-full"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-white p-2 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-slate-900 rounded-md"
            onClick={handleMobileMenuToggle}
            whileTap={{ scale: 0.95 }}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>

          {/* Hire Me Button */}
          <motion.button
            className="hidden md:block bg-emerald-400 text-slate-900 px-6 py-2 rounded-lg font-medium hover:bg-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-slate-900 transition-colors"
            style={{ fontFamily: 'Ubuntu, sans-serif' }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Hire Me
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence mode="wait">
          {isMobileMenuOpen && (
            <motion.nav
              className="md:hidden mt-4 py-4 space-y-4"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              role="navigation"
              aria-label="Mobile navigation"
            >
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block text-slate-300 hover:text-emerald-400 transition-colors font-medium focus:outline-none focus:text-emerald-400 py-2"
                  style={{ fontFamily: 'Ubuntu, sans-serif' }}
                  onClick={handleNavClick}
                >
                  {item}
                </a>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
});

Navigation.displayName = 'Navigation';

// Optimized Hero Section
const HeroSection = memo(() => (
  <section id="home" className="min-h-screen flex items-center justify-center relative">
    <div className="max-w-4xl mx-auto px-6 text-left">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
      >
        <motion.p
          className="text-emerald-400 text-lg mb-4"
          style={{ fontFamily: 'Ubuntu Mono, monospace' }}
          variants={fadeInVariants}
          transition={{ duration: 0.6 }}
        >
          Hi, my name is
        </motion.p>
        <motion.h1
          className="text-5xl md:text-7xl font-bold text-white mb-4"
          style={{ fontFamily: 'Ubuntu, sans-serif' }}
          variants={fadeInVariants}
          transition={{ duration: 0.6 }}
        >
          MD Rakibul Hasan.
        </motion.h1>
        <motion.h2
          className="text-4xl md:text-6xl font-bold text-slate-400 mb-6"
          style={{ fontFamily: 'Ubuntu, sans-serif' }}
          variants={fadeInVariants}
          transition={{ duration: 0.6 }}
        >
          I build things for the web.
        </motion.h2>
        <motion.p
          className="text-lg text-slate-300 max-w-2xl mb-10 leading-relaxed"
          style={{ fontFamily: 'Ubuntu, sans-serif' }}
          variants={fadeInVariants}
          transition={{ duration: 0.6 }}
        >
          I&apos;m a software engineer specializing in building exceptional digital experiences.
          Currently focused on creating accessible, human-centered products that make a difference.
        </motion.p>
        <motion.div
          variants={fadeInVariants}
          transition={{ duration: 0.6 }}
        >
          <motion.button
            className="border-2 border-emerald-400 text-emerald-400 px-8 py-3 rounded-lg font-medium text-lg hover:bg-emerald-400 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-slate-900 transition-all duration-300"
            style={{ fontFamily: 'Ubuntu, sans-serif' }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Check out my work!
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  </section>
));

HeroSection.displayName = 'HeroSection';

// Optimized About Section
const AboutSection = memo(() => {
  const techList = useMemo(() => ['JavaScript (ES6+)', 'TypeScript', 'React.js', 'Next.js', 'Node.js', 'Docker'], []);
  const stats = useMemo(() => [
    { label: 'Completed Projects', value: '20+' },
    { label: 'Technologies', value: '40+' },
    { label: 'Years of Experience', value: '2+' }
  ], []);

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-white mb-16"
          style={{ fontFamily: 'Ubuntu, sans-serif' }}
          initial="hidden"
          whileInView="visible"
          variants={fadeInVariants}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <span className="text-emerald-400 mr-2">01.</span>About Me
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-12">
          <motion.div
            className="md:col-span-2 space-y-6"
            initial="hidden"
            whileInView="visible"
            variants={slideInVariants}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-50px" }}
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
                {techList.map((tech, index) => (
                  <motion.div
                    key={tech}
                    className="flex items-center text-slate-300"
                    style={{ fontFamily: 'Ubuntu, sans-serif' }}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <ChevronRight className="text-emerald-400 mr-2 flex-shrink-0" size={16} />
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
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className="relative group">
              <Image
                src="https://i.ibb.co/DVyr6LS/31671553-2062830170707480-6027634644545961984-n.jpg"
                width={300}
                height={400}
                priority
                alt="Rakibul Hasan - Software Engineer"
                className="rounded-lg w-full relative z-10 filter grayscale hover:grayscale-0 transition-all duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 300px"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+JNuBNKTRQyM8rnJA7g=="
              />
              <div className="absolute inset-0 border-2 border-emerald-400 rounded-lg translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300" />
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-5xl font-bold text-emerald-400 mb-2" style={{ fontFamily: 'Ubuntu, sans-serif' }}>
                {stat.value}
              </h3>
              <p className="text-slate-300" style={{ fontFamily: 'Ubuntu, sans-serif' }}>
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
});

AboutSection.displayName = 'AboutSection';

// Optimized Skills Section
const SkillsSection = memo(() => (
  <section id="skills" className="py-20 px-6">
    <div className="max-w-6xl mx-auto">
      <motion.h2
        className="text-4xl font-bold text-white mb-16"
        style={{ fontFamily: 'Ubuntu, sans-serif' }}
        initial="hidden"
        whileInView="visible"
        variants={fadeInVariants}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <span className="text-emerald-400 mr-2">02.</span>My Skills
      </motion.h2>

      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-50px" }}
      >
        {skillsData.map((skill, index) => (
          <motion.div
            key={`${skill.name}-${index}`}
            className="text-center group cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-16 h-16 bg-slate-800 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-emerald-400 transition-colors duration-300 overflow-hidden">
              <Image
                src={skill.icon}
                alt={`${skill.name} icon`}
                width={32}
                height={32}
                loading="lazy"
                className="object-contain"
                sizes="32px"
              />
            </div>
            <p className="text-slate-300 font-medium group-hover:text-emerald-400 transition-colors text-sm"
              style={{ fontFamily: 'Ubuntu, sans-serif' }}>
              {skill.name}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
));

SkillsSection.displayName = 'SkillsSection';

// Optimized Contact Section
const ContactSection = memo(() => {
  const socialLinks = useMemo(() => [
    { icon: Mail, href: 'mailto:rakibulmd933@gmail.com', label: 'Email' },
    { icon: Linkedin, href: 'https://linkedin.com/in/rakibulhossainrakib', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/rakibul_hasan80', label: 'Twitter' },
    { icon: Github, href: 'https://github.com/rakibulhasan933', label: 'GitHub' }
  ], []);

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.p
            className="text-emerald-400 mb-4"
            style={{ fontFamily: 'Ubuntu Mono, monospace' }}
            variants={fadeInVariants}
          >
            04. What&lsquo;s Next?
          </motion.p>
          <motion.h2
            className="text-4xl font-bold text-white mb-6"
            style={{ fontFamily: 'Ubuntu, sans-serif' }}
            variants={fadeInVariants}
          >
            Get In Touch
          </motion.h2>
          <motion.p
            className="text-lg text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: 'Ubuntu, sans-serif' }}
            variants={fadeInVariants}
          >
            Although I&lsquo;m not currently looking for any new opportunities, my inbox is always open.
            Whether you have a question or just want to say hi, I&lsquo;ll try my best to get back to you!
          </motion.p>

          <motion.a
            href="mailto:rakibulmd933@gmail.com"
            className="inline-block border-2 border-emerald-400 text-emerald-400 px-8 py-3 rounded-lg font-medium hover:bg-emerald-400 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-slate-900 transition-all duration-300"
            style={{ fontFamily: 'Ubuntu, sans-serif' }}
            variants={fadeInVariants}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Say Hello
          </motion.a>

          <motion.div
            className="flex justify-center space-x-6 mt-12"
            variants={fadeInVariants}
          >
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={href}
                href={href}
                className="text-slate-400 hover:text-emerald-400 focus:text-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-slate-900 rounded-full p-2 transition-colors"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 1.1 }}
                aria-label={label}
              >
                <Icon size={24} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
});

ContactSection.displayName = 'ContactSection';

// Optimized Scroll to Top Button
const ScrollToTop = memo(({ showScrollTop }: { showScrollTop: boolean }) => {
  const handleScrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <AnimatePresence mode="wait">
      {showScrollTop && (
        <motion.button
          className="fixed bottom-8 right-8 bg-emerald-400 text-slate-900 p-3 rounded-full shadow-lg z-40 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-slate-900"
          onClick={handleScrollToTop}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.2 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </motion.button>
      )}
    </AnimatePresence>
  );
});

ScrollToTop.displayName = 'ScrollToTop';

// Main Portfolio Component
const EnhancedPortfolio = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Optimized scroll handler with throttling
  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    setIsScrolled(scrollY > 50);
    setShowScrollTop(scrollY > 500);
  }, []);

  useEffect(() => {
    let ticking = false;

    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledHandleScroll, { passive: true });
    return () => window.removeEventListener('scroll', throttledHandleScroll);
  }, [handleScroll]);

  // Close mobile menu when clicking outside or pressing escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (isMobileMenuOpen && !(e.target as Element).closest('nav')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    <LazyMotion features={domAnimation} strict>
      <div className="bg-slate-900 min-h-screen text-white overflow-x-hidden">
        <BackgroundElements />
        <Navigation
          isScrolled={isScrolled}
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
        />
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <Suspense fallback={
            <div className="py-20 px-6 flex justify-center items-center">
              <div className="text-emerald-400">Loading projects...</div>
            </div>
          }>
            <ProjectsSection />
          </Suspense>
          <ContactSection />
        </main>
        <ScrollToTop showScrollTop={showScrollTop} />

        {/* Optimized footer */}
        <footer className="py-8 text-center text-slate-400 border-t border-slate-800">
          <p style={{ fontFamily: 'Ubuntu, sans-serif' }}>
            © {new Date().getFullYear()} Designed & Built by Rakibul Hasan
          </p>
        </footer>
      </div>
    </LazyMotion>
  );
};

export default EnhancedPortfolio;