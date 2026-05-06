"use client";

import { motion } from "framer-motion";
import { Mail, Phone, UserCircle, MapPin } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="container mx-auto px-4 pt-24 pb-12 min-h-[calc(100vh-80px)]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Let's Connect</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to start your next project or need a robust backend solution? Feel free to reach out to me!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-blue-500">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground font-medium">Email</p>
                <Link href="mailto:shaikhnurul8200@gmail.com" className="font-bold hover:text-blue-500 transition-colors">
                  shaikhnurul8200@gmail.com
                </Link>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-green-500">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground font-medium">Phone</p>
                <Link href="tel:9274490242" className="font-bold hover:text-green-500 transition-colors">
                  +91 92744 90242
                </Link>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-blue-700">
                <UserCircle size={20} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground font-medium">LinkedIn</p>
                <Link href="https://www.linkedin.com/in/nurul-shaikh/" target="_blank" className="font-bold hover:text-blue-700 transition-colors">
                  linkedin.com/in/nurul-shaikh
                </Link>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-red-500">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground font-medium">Location</p>
                <p className="font-bold">Navsari, Gujarat, India</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="glass p-8 rounded-2xl border border-border"
          >
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-2 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-2 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Message</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
                  placeholder="How can I help you?"
                ></textarea>
              </div>
              <button className="w-full py-3 bg-primary text-primary-foreground font-bold rounded-lg hover:opacity-90 transition-opacity">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
