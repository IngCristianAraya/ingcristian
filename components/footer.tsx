"use client";

import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border/50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <span>© 2020 desarrollado por Ing. Cristian Araya. </span>
            <a href="https://www.facebook.com/CreciendoDigital.tv" target="_blank" rel="noopener noreferrer">
              <motion.div
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Code2 className="h-4 w-4 text-blue-500" />
              </motion.div>
            </a>
            
          </div>
        </motion.div>
      </div>
    </footer>
  );
}