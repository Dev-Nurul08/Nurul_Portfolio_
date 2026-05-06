"use client";

import { motion } from "framer-motion";
import { ExternalLink, Code2, ArrowRight } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "Employee Management System",
    description: "A robust backend system for managing employees, handling authentication, tracking attendance, and role-based access control.",
    tech: ["Node.js", "Express.js", "MongoDB", "REST API"],
    slug: "employee-management-system",
    github: "#",
    live: "#",
  },
  {
    title: "Lead Scraper AI",
    description: "An automated lead generation tool that utilizes AI to extract and structure professional contact information from various sources.",
    tech: ["Node.js", "AI APIs", "Web Scraping", "Express"],
    slug: "lead-scraper-ai",
    github: "#",
    live: "#",
  },
  {
    title: "E-Commerce Backend Engine",
    description: "A scalable backend architecture supporting user authentication, order tracking, cart management, and payment gateway integration.",
    tech: ["Node.js", "Express.js", "PostgreSQL", "JWT"],
    slug: "e-commerce-backend",
    github: "#",
    live: "#",
  }
];

export default function Projects() {
  return (
    <div className="container mx-auto px-4 pt-24 pb-12 min-h-[calc(100vh-80px)]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto space-y-12"
      >
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Featured Projects</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent backend and full-stack development work.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass p-6 rounded-2xl flex flex-col h-full border border-border/50 hover:border-blue-500/50 transition-colors"
            >
              <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
              <p className="text-muted-foreground mb-6 flex-1">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map(t => (
                  <span key={t} className="text-xs font-medium px-2 py-1 rounded bg-blue-500/10 text-blue-500">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-border mt-auto">
                <div className="flex items-center gap-4">
                  <Link href={project.github} className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5 text-sm font-medium">
                    <Code2 size={16} />
                    Code
                  </Link>
                  <Link href={project.live} className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5 text-sm font-medium">
                    <ExternalLink size={16} />
                    Demo
                  </Link>
                </div>
                <Link href={`/projects/${project.slug}`} className="text-blue-500 hover:text-blue-600 transition-colors flex items-center gap-1 text-sm font-semibold">
                  Details <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
