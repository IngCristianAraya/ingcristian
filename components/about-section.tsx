"use client";

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

const skills = [
  'React', 'Next.js', 'TypeScript', 'JavaScript',
  'Tailwind CSS', 'Node.js', 'Firebase','Supabase', 'PostgreSQL',
  'Git', 'Docker', 'AWS', 'Vercel', 'Python', 'Wordpress','Prisma', 'R'
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Sobre <span className="text-blue-500">Mí</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Conoce más sobre mi experiencia y habilidades
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="p-8 glass-effect border-border/50">
              <CardContent className="p-0">
                <h3 className="text-2xl font-semibold mb-4">Desarrollador Apasionado</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Con más de 3 años de experiencia en desarrollo web, me especializo en crear 
                  aplicaciones modernas y escalables. Mi pasión es transformar ideas en 
                  productos digitales excepcionales que generen impacto real.
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Trabajo con las tecnologías más actuales del ecosistema JavaScript/TypeScript, 
                  siempre enfocado en las mejores prácticas de desarrollo y experiencia de usuario.
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05, duration: 0.5 }}
                    >
                      <Badge 
                        variant="secondary" 
                        className="bg-blue-500/10 text-blue-400 border-blue-500/20 hover:bg-blue-500/20 transition-colors"
                      >
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1"
              >
                <div className="w-full h-full rounded-full bg-background"></div>
              </motion.div>
              
              <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-blue-500/20">
                <Image
                  src="https://res.cloudinary.com/do2rpqupm/image/upload/v1759037929/IMG_20220330_190715_t2vvwk.jpg"
                  alt="Profile"
                  width={256}
                  height={256}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold"
              >
                JS
              </motion.div>
              
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                className="absolute -bottom-4 -left-4 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold"
              >
                TS
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}