"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Terminal, Server, Code2, Sparkles, ChevronDown } from "lucide-react";
import About from "./about/page";
import Education from "./education/page";
import Skills from "./skills/page";
import Projects from "./projects/page";
import Services from "./services/page";
import Certificates from "./certificates/page";
import FAQ from "./faq/page";
import Contact from "./contact/page";
import { useRef } from "react";

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <main className="flex flex-col w-full overflow-hidden bg-grid-black dark:bg-grid-white bg-fixed">
      {/* HOME / HERO SECTION */}
      <section 
        id="home" 
        ref={containerRef}
        className="min-h-screen flex flex-col justify-center pt-20 relative w-full overflow-hidden"
      >
        <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
          <div className="absolute top-[10%] left-[20%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] mix-blend-screen animate-pulse" />
          <div className="absolute top-[30%] right-[10%] w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[150px] mix-blend-screen" />
          <div className="absolute bottom-[10%] left-[40%] w-[400px] h-[400px] bg-pink-600/20 rounded-full blur-[100px] mix-blend-screen animate-pulse" />
        </motion.div>

        <div className="container mx-auto px-4 flex flex-col items-center text-center max-w-5xl z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="space-y-8 flex flex-col items-center w-full"
          >
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass border border-white/10 text-sm font-bold uppercase tracking-wider backdrop-blur-xl"
            >
              <Sparkles className="text-yellow-400" size={16} />
              <span>Available for new projects</span>
            </motion.div>

            <h1 className="text-6xl md:text-8xl lg:text-[9rem] font-black tracking-tighter leading-[0.9] uppercase text-foreground">
              Nurul<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
                Shaikh
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl font-medium">
              Architecting <span className="text-foreground">scalability</span>. Engineering <span className="text-foreground">performance</span>. Building the backbone of the modern web.
            </p>

            <div className="flex flex-wrap justify-center gap-6 pt-8 w-full max-w-md">
              <Link
                href="#projects"
                className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-8 py-4 bg-foreground text-background font-bold rounded-2xl hover:scale-[1.02] hover:shadow-2xl hover:shadow-foreground/20 transition-all duration-300"
              >
                Explore Work
                <ArrowRight size={20} />
              </Link>
              <Link
                href="#contact"
                className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-8 py-4 glass font-bold rounded-2xl hover:bg-white/10 transition-all duration-300"
              >
                Let's Talk
              </Link>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 1 }}
              className="grid grid-cols-3 gap-4 md:gap-8 pt-16 w-full max-w-4xl"
            >
              {[
                { icon: Terminal, color: "text-blue-500", title: "Node.js", desc: "Core Engine" },
                { icon: Server, color: "text-purple-500", title: "APIs", desc: "Architecture" },
                { icon: Code2, color: "text-pink-500", title: "Databases", desc: "Optimization" }
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center gap-3 p-6 rounded-3xl glass border border-white/5 hover:border-white/20 transition-colors group">
                  <div className={`p-4 rounded-2xl bg-white/5 group-hover:scale-110 transition-transform duration-500 ${item.color}`}>
                    <item.icon size={32} />
                  </div>
                  <div className="text-center">
                    <h3 className="font-bold text-xl">{item.title}</h3>
                    <p className="text-sm text-muted-foreground font-medium">{item.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground hidden md:flex flex-col items-center gap-2"
        >
          <span className="text-xs font-bold uppercase tracking-widest">Scroll</span>
          <ChevronDown size={20} />
        </motion.div>
      </section>

      {/* SECTIONS */}
      <section id="about" className="w-full relative z-10 bg-background/50 backdrop-blur-3xl border-t border-white/5"><About /></section>
      <section id="education" className="w-full relative z-10 bg-background/50 backdrop-blur-3xl border-t border-white/5"><Education /></section>
      <section id="skills" className="w-full relative z-10 bg-background/50 backdrop-blur-3xl border-t border-white/5"><Skills /></section>
      <section id="services" className="w-full relative z-10 bg-background/50 backdrop-blur-3xl border-t border-white/5"><Services /></section>
      <section id="projects" className="w-full relative z-10 bg-background/50 backdrop-blur-3xl border-t border-white/5"><Projects /></section>
      <section id="certificates" className="w-full relative z-10 bg-background/50 backdrop-blur-3xl border-t border-white/5"><Certificates /></section>
      <section id="faq" className="w-full relative z-10 bg-background/50 backdrop-blur-3xl border-t border-white/5"><FAQ /></section>
      <section id="contact" className="w-full relative z-10 bg-background/50 backdrop-blur-3xl border-t border-white/5 pb-20"><Contact /></section>
    </main>
  );
}
