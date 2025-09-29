"use client";

import { motion } from 'framer-motion';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useState } from 'react';
import Image from 'next/image';

const projects = [
  {
    title: "Plataforma Web",
    description: "Plataforma de directorios de emprendimientos.",
    image: "https://res.cloudinary.com/do2rpqupm/image/upload/v1759039065/WhatsApp_Image_2025-09-28_at_12.57.30_AM_rcoogl.jpg",
    tech: ["Next.js", "TypeScript", "Vercel", "Firebase", "Tailwind"],
    github: "#",
    demo: "https://www.tubarrio.pe/"
  },
  {
    title: "Página Web Institucional",
    description: "Web institucional para Global Tasa Perú, enfocada en servicios financieros y contacto directo con clientes.",
    image: "https://res.cloudinary.com/do2rpqupm/image/upload/v1759151450/WhatsApp_Image_2025-09-29_at_8.10.13_AM_izyr4j.jpg",
    tech: ["WordPress", "PHP", "MySQL"],
    github: "#",
    demo: "https://globaltasaperu.com/"
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
    title: "Web Corporativa",
    description: "Empresa que ayuda a empresas y emprendedores a crecer en el mundo digital.",
    image: "https://res.cloudinary.com/do2rpqupm/image/upload/v1759156328/WhatsApp_Image_2025-09-29_at_9.31.49_AM_ykmaor.jpg",
    tech: ["React", "Framer Motion", "Tailwind", "Vercel"],
    github: "#",
    demo: "https://creciendodigitalweb.vercel.app/"
  },
  {
    title: "Web de asesorias digitales",
    description: "Empresa que brinda asesorias estrategicas a pequeñas y grandes empresas.",
    image: "https://res.cloudinary.com/do2rpqupm/image/upload/v1759156844/WhatsApp_Image_2025-09-29_at_9.36.01_AM_yjjzay.jpg",
    tech: ["React", "Node.js", "MongoDB", "Stripe", "Express"],
    github: "#",
    demo: "https://asesorias-cd.vercel.app/"
  },
  {
    title: "Landingpage",
    description: "Landing corporativa para Escuela ADS, institución educativa que ofrece formación en clases de baile Salsa y bachata. Creada con typescript, tailwindcss y next.js.",
    image: "https://res.cloudinary.com/do2rpqupm/image/upload/v1759157071/WhatsApp_Image_2025-09-29_at_9.44.19_AM_ailvao.jpg",
    tech: ["React", "Tailwind", "Vercel","Next.js", "Leaflet"],
    github: "#",
    demo: "https://escuela-ads.vercel.app/"
  },
  {
    title: "Sitio Web Promecal",
    description: "Empresa industrial dedicada a soluciones de ingeniería y metalmecánica.",
    image: "https://res.cloudinary.com/do2rpqupm/image/upload/v1759157292/WhatsApp_Image_2025-09-29_at_9.48.00_AM_awmfj2.jpg",
    tech: ["WordPress", "MySQL", "Docker", "AWS"],
    github: "#",
    demo: "https://promecal.com.pe/"
  },
  {
    title: "Cotizador Digital",
    description: "Aplicación móvil para cotización de servicios de tracking.",
    image: "https://res.cloudinary.com/do2rpqupm/image/upload/v1759157509/WhatsApp_Image_2025-09-29_at_9.51.32_AM_wpeq0p.jpg",
    tech: ["React Native", "Firebase", "Redux", "Expo", "TypeScript"],
    github: "#",
    demo: "https://cotizacion-wcagroup.vercel.app/"
  }
];

const PROJECTS_PER_PAGE = 4;

export default function PortfolioSection() {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(projects.length / PROJECTS_PER_PAGE);
  
  const getCurrentProjects = () => {
    const startIndex = currentPage * PROJECTS_PER_PAGE;
    return projects.slice(startIndex, startIndex + PROJECTS_PER_PAGE);
  };

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

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

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {getCurrentProjects().map((project, index) => (
            <motion.div
              key={`${project.title}-${currentPage}`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-border/50 overflow-hidden bg-card/50 backdrop-blur-sm">
                <div className="relative overflow-hidden aspect-video">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                      <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white text-black" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-1" />
                          Code
                        </a>
                      </Button>
                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700" asChild>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-1" />
                          Demo
                        </a>
                      </Button>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                      Ver Proyecto
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-500 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="outline" 
                        className="border-blue-500/30 text-blue-400 bg-blue-500/10 hover:bg-blue-500/20 transition-colors text-xs"
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

        {/* Pagination */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-4"
        >
          <Button
            variant="outline"
            size="sm"
            onClick={prevPage}
            disabled={currentPage === 0}
            className="border-blue-500/30 hover:bg-blue-500/10"
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            Anterior
          </Button>
          
          <div className="flex gap-2">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i)}
                className={`w-8 h-8 rounded-full text-sm font-medium transition-all duration-200 ${
                  currentPage === i
                    ? 'bg-blue-500 text-white shadow-lg'
                    : 'bg-muted hover:bg-blue-500/20 text-muted-foreground hover:text-blue-400'
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
          
          <Button
            variant="outline"
            size="sm"
            onClick={nextPage}
            disabled={currentPage === totalPages - 1}
            className="border-blue-500/30 hover:bg-blue-500/10"
          >
            Siguiente
            <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}