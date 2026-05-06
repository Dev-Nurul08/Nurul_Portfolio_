"use client";

import { motion } from "framer-motion";
import { HelpCircle, ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "What specific backend services do you offer?",
    answer: "I specialize in end-to-end backend development, including RESTful API design, database architecture (MongoDB, PostgreSQL), server-side logic using Node.js and Express.js, and implementing secure authentication systems."
  },
  {
    question: "Do you also handle frontend development?",
    answer: "Yes, while my primary expertise is in backend systems, I am also proficient in full-stack development. I can build responsive, dynamic user interfaces using HTML, CSS, React, and Next.js, and integrate them seamlessly with the backend."
  },
  {
    question: "Can you integrate third-party APIs like Google Analytics?",
    answer: "Absolutely. I have experience integrating various third-party services and APIs, including Google Analytics, payment gateways, and AI services, to extend the functionality of web applications."
  },
  {
    question: "How do you handle database security and optimization?",
    answer: "I implement industry best practices such as data sanitization, proper indexing, using environment variables for credentials, and setting up role-based access control (RBAC) to ensure databases are secure and performant."
  },
  {
    question: "Are you available for freelance projects or full-time roles?",
    answer: "I am actively looking for opportunities to apply my skills. Whether it's a freelance project to build a custom solution or a full-time role as a backend developer, I am ready to contribute and grow."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="container mx-auto px-4 pt-24 pb-12 min-h-[calc(100vh-80px)]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto space-y-12"
      >
        <div className="text-center space-y-4">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-blue-500/10 rounded-full text-blue-500">
              <HelpCircle size={40} />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Frequently Asked Questions</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Common questions about my expertise, workflow, and the services I provide.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="glass border border-border/50 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
              >
                <span className="font-semibold text-lg">{faq.question}</span>
                <ChevronDown 
                  className={`transform transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`} 
                  size={20} 
                />
              </button>
              
              <motion.div
                initial={false}
                animate={{ height: openIndex === index ? "auto" : 0, opacity: openIndex === index ? 1 : 0 }}
                className="overflow-hidden"
              >
                <div className="p-6 pt-0 text-muted-foreground border-t border-border/50">
                  {faq.answer}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
