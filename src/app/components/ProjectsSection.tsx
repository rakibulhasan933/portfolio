'use client';

import React, { memo } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
    {
        title: 'Arafat Foundation LTD',
        description: 'A comprehensive non-profit organization website dedicated to humanitarian services with modern design and seamless user experience.',
        image: 'https://via.placeholder.com/600x400/1e293b/34d399?text=Arafat+Foundation+LTD',
        tech: ['TypeScript', 'Next.js', 'MongoDB', 'Prisma'],
        github: '#',
        live: 'https://arafatfoundation.org'
    },
    {
        title: 'HealthZenix',
        description: 'AI-powered healthcare platform for symptom analysis and prescription suggestions with intelligent automation.',
        image: 'https://via.placeholder.com/600x400/1e293b/34d399?text=HealthZenix',
        tech: ['TypeScript', 'Next.js', 'Redux', 'AI/ML'],
        github: '#',
        live: 'https://healthzenix.vercel.app'
    },
    {
        title: 'Hunger Station',
        description: 'Modern food delivery web app with dynamic UI, mobile-friendly design and smooth user interactions.',
        image: 'https://via.placeholder.com/600x400/1e293b/34d399?text=Hunger+Station',
        tech: ['TypeScript', 'Next.js', 'Redux', 'MongoDB'],
        github: '#',
        live: 'https://hungerstation.vercel.app'
    }
];

const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
};

const ProjectsSection = memo(() => (
    <section id="projects" className="py-20 px-6">
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
                <span className="text-emerald-400 mr-2">03.</span>Some Things I&lsquo;ve Built
            </motion.h2>

            <div className="space-y-20">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.title}
                        className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''
                            }`}
                        initial="hidden"
                        whileInView="visible"
                        variants={fadeInVariants}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true, margin: "-50px" }}
                    >
                        <div className="relative group">
                            <Image
                                src={project.image}
                                alt={`${project.title} - Project Screenshot`}
                                width={600}
                                height={400}
                                className="rounded-lg shadow-xl w-full filter grayscale hover:grayscale-0 transition-all duration-300"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                                placeholder="blur"
                                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+JNuBNKTRQyM8rnJA7g=="
                                priority={index === 0} // Only prioritize first image
                                loading={index === 0 ? "eager" : "lazy"}
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
                                    className="text-slate-300 hover:text-emerald-400 focus:text-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-slate-900 rounded-full p-2 transition-colors"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 1.05 }}
                                    aria-label={`View ${project.title} on GitHub`}
                                >
                                    <Github size={22} />
                                </motion.a>
                                <motion.a
                                    href={project.live}
                                    className="text-slate-300 hover:text-emerald-400 focus:text-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-slate-900 rounded-full p-2 transition-colors"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 1.05 }}
                                    aria-label={`View ${project.title} live demo`}
                                    target="_blank"
                                    rel="noopener noreferrer"
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
));

ProjectsSection.displayName = 'ProjectsSection';

export default ProjectsSection;
