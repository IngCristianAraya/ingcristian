"use client";

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const projects = [
  {
    title: "Plataforma Web",
    description: "Plataforma de directorios de emprendimientos.",
    image: "https://res.cloudinary.com/do2rpqupm/image/upload/v1759039065/WhatsApp_Image_2025-09-28_at_12.57.30_AM_rcoogl.jpg",
    tech: ["Next.js", "TypeScript", "Vercel", "Firebase", "Tailwing"],
    github: "#",
    demo: "https://www.tubarrio.pe/"
  },
  {
    title: "Dashboard Analytics",
    description: "Dashboard interactivo para visualización de datos con gráficos en tiempo real y métricas detalladas.",
    image: "https://images.pexels.com/photos/590041/pexels-photo-590041.jpg?auto=compress&cs=tinysrgb&w=800",
    tech: ["React", "D3.js", "Node.js", "MongoDB"],
    github: "#",
    demo: "#"
  },
  {
    title: "SaaS Aplicación",
    description: "Aplicación SaaS multi-tenant con autenticación avanzada y panel de administración completo.",
    image: "https://res.cloudinary.com/do2rpqupm/image/upload/v1759038650/WhatsApp_Image_2025-09-28_at_12.50.31_AM_lstyvy.jpg",
    tech: ["Next.js", "TypeScript", "React", "Vercel", "Tailwind"],
    github: "#",
    demo: "https://delifoods-gamma.vercel.app/"
  },
  {
    title: "Mobile App Landing",
    description: "Landing page responsive para aplicación móvil con animaciones personalizadas y optimización SEO.",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
    tech: ["React", "Framer Motion", "Tailwind", "Vercel"],
    github: "#",
    demo: "https://delifoods-gamma.vercel.app/"
  }
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Mi <span className="text-blue-500">Portafolio</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Proyectos destacados que demuestran mis habilidades
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
            >
              <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-border/50 overflow-hidden">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                      <Button size="sm" variant="secondary" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-1" />
                          Code
                        </a>
                      </Button>
                      <Button size="sm" variant="secondary" asChild>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-1" />
                          Demo
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-500 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="outline" 
                        className="border-blue-500/20 text-blue-400"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}