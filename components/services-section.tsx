"use client";

import { motion } from 'framer-motion';
import { Code as Code2, Smartphone, Globe, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const services = [
  {
    icon: Code2,
    title: "Desarrollo Web",
    description: "Aplicaciones web modernas y responsivas usando las últimas tecnologías como React, Next.js y TypeScript."
  },
  {
    icon: Smartphone,
    title: "Apps Móviles",
    description: "Desarrollo de aplicaciones móviles híbridas con React Native para iOS y Android."
  },
  {
    icon: Globe,
    title: "Landing Pages",
    description: "Páginas de aterrizaje optimizadas para conversión con diseño atractivo y carga rápida."
  },
  {
    icon: Zap,
    title: "Aplicaciones SaaS",
    description: "Plataformas completas SaaS con autenticación, pagos y paneles de administración."
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Mis <span className="text-blue-500">Servicios</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Soluciones digitales completas para tu negocio
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
            >
              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 glass-effect border-border/50 h-full">
                <CardContent className="p-6 text-center">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4"
                  >
                    <service.icon className="h-8 w-8 text-white" />
                  </motion.div>
                  
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-500 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}