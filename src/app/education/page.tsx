"use client";

import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Code, Terminal } from "lucide-react";

const educationTimeline = [
  {
    year: "Present",
    title: "Self-Taught Backend Developer",
    institution: "Continuous Learning",
    description: "Actively building robust backend systems, REST APIs, and database architectures using Node.js, Express.js, and MongoDB. Focusing on scalability, clean code, and modern web development practices.",
    icon: <Terminal className="w-6 h-6 text-blue-400" />
  },
  {
    year: "Recent",
    title: "Full Stack Web Development",
    institution: "Online Courses & Documentation",
    description: "Mastered core web technologies including HTML5, CSS3, JavaScript, and Next.js. Developed practical skills by building complex projects like Employee Management Systems and AI Lead Scrapers.",
    icon: <Code className="w-6 h-6 text-purple-400" />
  },
  {
    year: "Foundation",
    title: "Computer Science Fundamentals",
    institution: "Academic & Personal Study",
    description: "Built a strong foundation in programming logic, algorithms, and data structures. This knowledge serves as the backbone for efficient backend engineering and complex problem solving.",
    icon: <BookOpen className="w-6 h-6 text-green-400" />
  }
];

export default function Education() {
  return (
    <div className="container mx-auto px-4 pt-24 pb-12 min-h-[calc(100vh-80px)]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto space-y-12"
      >
        <div className="text-center space-y-4">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-blue-500/10 rounded-full text-blue-500">
              <GraduationCap size={40} />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Education & Journey</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My path to becoming a proficient backend developer through academic foundation and rigorous self-directed learning.
          </p>
        </div>

        <div className="relative border-l border-border/50 ml-6 md:ml-12 space-y-12 pb-8">
          {educationTimeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative pl-8 md:pl-12"
            >
              <div className="absolute -left-[25px] top-1 bg-background border border-border p-2 rounded-full shadow-sm z-10 flex items-center justify-center">
                {item.icon}
              </div>
              
              <div className="glass p-6 rounded-2xl border border-border/50 hover:border-blue-500/30 transition-colors">
                <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold text-blue-500 bg-blue-500/10 rounded-full">
                  {item.year}
                </span>
                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                <h4 className="text-lg text-muted-foreground mb-4 font-medium flex items-center gap-2">
                  {item.institution}
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
