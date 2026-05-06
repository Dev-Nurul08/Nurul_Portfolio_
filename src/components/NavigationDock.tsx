"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { 
  Home, 
  User, 
  GraduationCap, 
  Terminal, 
  Briefcase, 
  Layers, 
  HelpCircle, 
  Mail,
  Moon,
  Sun
} from "lucide-react";
import { useTheme } from "next-themes";

const navItems = [
  { id: "home", icon: Home, label: "Home" },
  { id: "about", icon: User, label: "About" },
  { id: "education", icon: GraduationCap, label: "Education" },
  { id: "skills", icon: Terminal, label: "Skills" },
  { id: "projects", icon: Briefcase, label: "Projects" },
  { id: "services", icon: Layers, label: "Services" },
  { id: "faq", icon: HelpCircle, label: "FAQ" },
  { id: "contact", icon: Mail, label: "Contact" },
];

export default function NavigationDock() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [active, setActive] = useState("home");
  const [hovered, setHovered] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      let current = "home";
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 300) {
            current = item.id;
          }
        }
      }
      setActive(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;

  return (
    <motion.div 
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-4 w-full md:w-auto"
    >
      <div className="flex items-center justify-center gap-2 md:gap-4 px-6 py-4 glass rounded-[2rem] shadow-2xl border border-white/10 mx-auto overflow-x-auto hide-scrollbar max-w-full">
        {navItems.map((item) => (
          <div key={item.id} className="relative flex flex-col items-center">
            <Link
              href={`#${item.id}`}
              onMouseEnter={() => setHovered(item.id)}
              onMouseLeave={() => setHovered(null)}
              className="relative p-3 rounded-full transition-all duration-300 group outline-none"
            >
              {active === item.id && (
                <motion.div
                  layoutId="activeDockBubble"
                  className="absolute inset-0 bg-white/10 dark:bg-white/20 rounded-full"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <item.icon 
                size={22} 
                className={`relative z-10 transition-colors duration-300 ${
                  active === item.id 
                    ? "text-blue-500 dark:text-blue-400" 
                    : "text-muted-foreground hover:text-foreground"
                }`} 
              />
            </Link>

            {/* Tooltip */}
            {hovered === item.id && (
              <motion.div 
                initial={{ opacity: 0, y: 10, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                className="absolute -top-12 px-3 py-1.5 bg-foreground text-background text-xs font-bold rounded-lg whitespace-nowrap shadow-xl"
              >
                {item.label}
              </motion.div>
            )}
          </div>
        ))}
        
        <div className="w-px h-8 bg-white/10 mx-2 hidden md:block"></div>
        
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="p-3 rounded-full hover:bg-white/10 transition-colors"
        >
          {theme === "dark" ? <Sun size={22} className="text-yellow-400" /> : <Moon size={22} className="text-blue-600" />}
        </button>
      </div>
    </motion.div>
  );
}
