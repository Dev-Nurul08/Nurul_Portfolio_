"use client";

import { motion } from "framer-motion";
import { Globe, Database, LineChart, Code } from "lucide-react";

const services = [
  {
    title: "Full Web Development",
    description: "End-to-end web application development. I build responsive, highly optimized, and fast-loading frontends connected to robust backend systems.",
    icon: Globe,
  },
  {
    title: "REST API Architecture",
    description: "Designing and developing secure, scalable, and efficient RESTful APIs to power your web or mobile applications using Node.js and Express.",
    icon: Code,
  },
  {
    title: "Database Integration",
    description: "Proper structuring and integration of databases to ensure your data is stored securely, relations are maintained, and retrieval is blazing fast.",
    icon: Database,
  },
  {
    title: "Analytics & Tracking Integration",
    description: "Seamless integration of Google Analytics and other tracking tools to help you monitor your user behavior, sessions, and overall website performance.",
    icon: LineChart,
  },
];

export default function Services() {
  return (
    <div className="container mx-auto px-4 pt-24 pb-12 min-h-[calc(100vh-80px)]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto space-y-12"
      >
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Services I Provide</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            I offer a wide range of web development services focused on performance, backend architecture, and seamless user experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass p-8 rounded-2xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-colors" />
              
              <service.icon className="w-12 h-12 text-blue-500 mb-6" />
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
