"use client";

import { motion } from "framer-motion";
import { Award, ShieldCheck } from "lucide-react";

export default function Certificates() {
  return (
    <div className="container mx-auto px-4 pt-24 pb-12 min-h-[calc(100vh-80px)]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto space-y-12 text-center"
      >
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Certifications</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            I am a highly certified backend developer. I continuously invest in learning and validating my skills.
          </p>
        </div>

        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="glass p-12 rounded-3xl border border-border mt-12 flex flex-col items-center justify-center max-w-2xl mx-auto"
        >
          <div className="w-24 h-24 bg-blue-500/10 rounded-full flex items-center justify-center mb-6">
            <Award className="w-12 h-12 text-blue-500" />
          </div>
          <h2 className="text-2xl font-bold mb-4">Certificates Coming Soon</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto">
            I will be uploading my official certifications for Node.js, Backend Architecture, and more very soon. Stay tuned!
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-muted/50 rounded-full text-sm font-medium">
            <ShieldCheck className="w-4 h-4 text-green-500" />
            Verified Skills
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
