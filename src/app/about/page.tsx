"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <div className="container mx-auto px-4 pt-24 pb-12 min-h-[calc(100vh-80px)] flex flex-col justify-center">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative mx-auto w-full max-w-sm aspect-[4/5] lg:order-2"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-2xl rotate-3 scale-105 -z-10" />
          <div className="relative w-full h-full rounded-2xl overflow-hidden glass p-2 border-border/50 shadow-2xl">
            <Image
              src="/images/avatar.png"
              alt="Nurul Shaikh"
              fill
              className="object-cover rounded-xl"
              priority
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-6 lg:order-1"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">About Me</h2>
          
          <div className="prose prose-lg dark:prose-invert">
            <p className="text-xl text-muted-foreground leading-relaxed">
              I am currently pursuing my Diploma in Computer Science at Vidhyadeep University, and I am in my final year. I am a well-certified backend developer with a deep passion for understanding how the web works behind the scenes.
            </p>
            
            <motion.div 
              whileHover={{ x: 5 }}
              className="glass p-6 rounded-xl my-6 border-l-4 border-l-blue-500 shadow-lg"
            >
              <h3 className="text-xl font-bold mb-2">My Journey</h3>
              <p className="text-muted-foreground">
                I started my backend development journey out of pure curiosity. I wanted to know how websites actually work in the backend—how we communicate through them, how the signup and login processes function securely, how systems remember user sessions, and how they track orders. That curiosity drove me to dive deep into backend architecture and REST APIs.
              </p>
            </motion.div>

            <p className="text-muted-foreground leading-relaxed">
              As a quick learner, I continuously adapt to new technologies. While I may not have extensive field experience yet, my practical knowledge in building complete applications, handling databases, and writing clean backend code with Node.js and Express is strong. 
            </p>

            <p className="text-muted-foreground leading-relaxed mt-4">
              I also heavily integrate Artificial Intelligence into my workflow. I am highly proficient in using modern AI-powered IDEs and tools such as Cursor, Antigravity, VS Code, and Codex to reduce development time and boost efficiency without compromising code quality.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
