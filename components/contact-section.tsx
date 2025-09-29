"use client";

import { motion } from 'framer-motion';
import { Mail, MessageCircle, Linkedin, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useForm } from 'react-hook-form';

type FormData = {
  name: string;
  email: string;
  message: string;
};

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    description: "ingcristian.araya@gmail.com",
    action: "Enviar email",
    link: "mailto:ingcristian.araya@gmail.com"
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    description: "+51 901 426 737",
    action: "Chatear",
    link: "https://wa.me/51901426737"
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    description: "/in/ingcristianaraya",
    action: "Conectar",
    link: "https://linkedin.com/in/ingcristianaraya"
  }
];

export default function ContactSection() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    // Crear mensaje para WhatsApp
    const message = `Hola! Mi nombre es ${data.name}.%0A%0AEmail: ${data.email}%0A%0AMensaje: ${data.message}`;
    const whatsappUrl = `https://wa.me/51901426737?text=${message}`;
    
    // Abrir WhatsApp en nueva ventana
    window.open(whatsappUrl, '_blank');
    
    // Limpiar formulario
    reset();
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Trabajemos <span className="text-blue-500">Juntos</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            ¿Tienes un proyecto en mente? ¡Hablemos!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold mb-6">Métodos de Contacto</h3>
            
            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={method.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Card className="glass-effect border-border/50 hover:shadow-lg transition-all duration-300 hover:border-blue-500/30">
                    <CardContent className="p-4 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                          <method.icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold">{method.title}</h4>
                          <p className="text-muted-foreground text-sm">{method.description}</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" asChild>
                        <a href={method.link} target="_blank" rel="noopener noreferrer">
                          {method.action}
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mt-8 p-6 glass-effect border border-border/50 rounded-lg"
            >
              <div className="flex items-center gap-3 mb-2">
                <MapPin className="h-5 w-5 text-blue-500" />
                <h4 className="font-semibold">Ubicación</h4>
              </div>
              <p className="text-muted-foreground">Lima, Perú</p>
              <p className="text-sm text-muted-foreground mt-1">
                Disponible para proyectos remotos y presenciales
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="glass-effect border-border/50">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6">Envíame un Mensaje</h3>
                
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div>
                    <Input
                      placeholder="Tu nombre"
                      {...register("name", { required: "El nombre es requerido" })}
                      className="bg-background/50"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <Input
                      type="email"
                      placeholder="Tu email"
                      {...register("email", { 
                        required: "El email es requerido",
                        pattern: {
                          value: /^\S+@\S+$/i,
                          message: "Email inválido"
                        }
                      })}
                      className="bg-background/50"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <Textarea
                      placeholder="Cuéntame sobre tu proyecto..."
                      rows={5}
                      {...register("message", { required: "El mensaje es requerido" })}
                      className="bg-background/50"
                    />
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                    )}
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                    size="lg"
                  >
                    Enviar Mensaje
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}