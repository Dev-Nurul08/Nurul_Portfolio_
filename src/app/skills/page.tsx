"use client";

import { motion } from "framer-motion";

const skills = [
  { category: "Backend Frameworks", items: ["Node.js", "Express.js", "REST APIs", "Authentication"] },
  { category: "Frontend Core", items: ["HTML5", "CSS3", "JavaScript", "Responsive Design"] },
  { category: "Styling", items: ["Tailwind CSS", "Bootstrap"] },
  { category: "Tools & IDEs", items: ["VS Code", "Cursor", "Antigravity", "Codex"] },
  { category: "Core Competencies", items: ["API Architecture", "Database Management", "AI Integration", "Fast Learner"] },
];

export default function Skills() {
  return (
    <div className="container mx-auto px-4 pt-24 pb-12 min-h-[calc(100vh-80px)]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto space-y-12"
      >
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Skills & Expertise</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical abilities and the tools I use to build robust applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass p-6 rounded-2xl hover:bg-muted/30 transition-colors"
            >
              <h3 className="text-xl font-bold mb-4 text-blue-500">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 bg-background/50 border border-border rounded-full text-sm font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
