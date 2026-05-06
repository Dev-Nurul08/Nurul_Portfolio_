"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#services", label: "Services" },
  { href: "#certificates", label: "Certificates" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("#home");
  const [isScrolled, setIsScrolled] = useState(false);

  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  useEffect(() => {
    setMounted(true);
    
    // Update active section on scroll
    const handleScroll = () => {
      const sections = links.map(link => link.href.substring(1));
      let current = "#home";
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            current = `#${section}`;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-4 w-full z-50 transition-all duration-500 px-4 md:px-8">
      <motion.div 
        className={`max-w-6xl mx-auto h-14 rounded-full flex items-center justify-between px-6 transition-all duration-500 ${
          isScrolled 
            ? "glass border border-border/50 shadow-lg shadow-black/20 dark:shadow-white/5" 
            : "bg-transparent border border-transparent shadow-none"
        }`}
      >
        <Link href="#home" className={`text-lg font-extrabold tracking-tighter shrink-0 transition-colors duration-500 ${isScrolled ? "text-foreground" : "text-foreground/80"}`}>
          NURUL<span className="text-blue-500">.DEV</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium">
          {links.map((link) => (
            <Link
              key={link.href}
              href={pathname === "/" ? link.href : `/${link.href}`}
              className={`transition-colors hover:text-blue-500 ${
                activeSection === link.href ? "text-blue-500 font-bold" : "text-foreground/70"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="w-px h-4 bg-border/50 mx-2"></div>
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-1.5 rounded-full hover:bg-muted transition-colors text-foreground/70 hover:text-foreground"
            aria-label="Toggle theme"
          >
            {mounted && theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </nav>

        {/* Mobile Toggle */}
        <div className="flex lg:hidden items-center gap-3">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-1.5 rounded-full hover:bg-muted transition-colors"
          >
            {mounted && theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="p-1.5">
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-20 left-4 right-4 glass border border-border/50 rounded-2xl flex flex-col p-4 lg:hidden gap-2 shadow-2xl"
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={pathname === "/" ? link.href : `/${link.href}`}
                onClick={() => setIsOpen(false)}
                className={`text-base font-medium p-3 rounded-xl transition-colors ${
                  activeSection === link.href 
                    ? "text-blue-500 bg-blue-500/10 font-bold" 
                    : "text-foreground/70 hover:bg-muted hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
