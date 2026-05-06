"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Code2, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { use } from "react";

const projectsData: Record<string, any> = {
  "employee-management-system": {
    title: "Employee Management System",
    description: "A robust backend system for managing employees, handling authentication, tracking attendance, and role-based access control.",
    overview: "This system was designed to streamline HR processes by providing a secure, centralized platform for employee data. It features role-based access to ensure data privacy and a comprehensive attendance tracking module.",
    features: [
      "Secure JWT-based Authentication",
      "Role-Based Access Control (Admin, Manager, Employee)",
      "Attendance & Leave Management Tracking",
      "Dynamic Dashboard Data Aggregation"
    ],
    tech: ["Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "Bcrypt"],
    github: "#",
    live: "#",
  },
  "lead-scraper-ai": {
    title: "Lead Scraper AI",
    description: "An automated lead generation tool that utilizes AI to extract and structure professional contact information from various sources.",
    overview: "Built to automate the tedious process of finding potential clients, this tool scrapes data from public directories and uses natural language processing to extract relevant contact details and format them into structured CSV files.",
    features: [
      "Automated Web Scraping Engine",
      "AI-Powered Data Extraction and Structuring",
      "Rate Limiting & Proxy Rotation Support",
      "Export to CSV/Excel functionality"
    ],
    tech: ["Node.js", "Puppeteer", "OpenAI API", "Express", "Cheerio"],
    github: "#",
    live: "#",
  },
  "e-commerce-backend": {
    title: "E-Commerce Backend Engine",
    description: "A scalable backend architecture supporting user authentication, order tracking, cart management, and payment gateway integration.",
    overview: "A highly scalable and performant backend system tailored for e-commerce platforms. It handles everything from product catalog management to secure checkout flows and inventory synchronization.",
    features: [
      "Advanced Product Filtering & Search",
      "Secure Shopping Cart & Checkout API",
      "Stripe Payment Gateway Integration",
      "Real-time Inventory Management"
    ],
    tech: ["Node.js", "Express.js", "PostgreSQL", "Prisma", "Stripe API"],
    github: "#",
    live: "#",
  }
};

export default function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const project = projectsData[slug];

  if (!project) {
    return (
      <div className="container mx-auto px-4 pt-32 pb-12 min-h-[calc(100vh-80px)] text-center">
        <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
        <Link href="/projects" className="text-blue-500 hover:underline inline-flex items-center gap-2">
          <ArrowLeft size={16} /> Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 pt-24 pb-12 min-h-[calc(100vh-80px)]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <Link href="/projects" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8">
          <ArrowLeft size={16} /> Back to Projects
        </Link>

        <div className="space-y-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">{project.title}</h1>
            <p className="text-xl text-muted-foreground">{project.description}</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.tech.map((t: string) => (
              <span key={t} className="px-3 py-1.5 rounded-full bg-blue-500/10 text-blue-500 font-medium text-sm border border-blue-500/20">
                {t}
              </span>
            ))}
          </div>

          <div className="flex gap-4">
            <Link href={project.github} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors font-medium">
              <Code2 size={18} /> View Source
            </Link>
            <Link href={project.live} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors font-medium">
              <ExternalLink size={18} /> Live Demo
            </Link>
          </div>

          <div className="w-full h-px bg-border/50 my-8"></div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-6">
              <h2 className="text-2xl font-bold">Project Overview</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {project.overview}
              </p>
            </div>
            
            <div className="glass p-6 rounded-2xl border border-border/50 h-fit">
              <h3 className="text-xl font-bold mb-4">Key Features</h3>
              <ul className="space-y-3">
                {project.features.map((feature: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
