'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Instagram, Linkedin, Facebook, Send, Music2 } from 'lucide-react';
import { useState, useRef } from 'react';

const socialMedia = [
  {
    icon: <Instagram className="w-6 h-6" />,
    link: "https://www.instagram.com/incluton/",
    label: "Instagram"
  },
  {
    icon: <Linkedin className="w-6 h-6" />,
    link: "https://www.linkedin.com/company/incluton",
    label: "LinkedIn"
  },
  {
    icon: <Facebook className="w-6 h-6" />,
    link: "https://web.facebook.com/incluton",
    label: "Facebook"
  },
  {
    icon: <Music2 className="w-6 h-6" />,
    link: "https://www.tiktok.com/@incluton",
    label: "TikTok"
  }
];

export default function ContactSection() {
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simular envío
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSuccess(true);
      formRef.current?.reset();
      
      // Feedback auditivo
      const msg = new SpeechSynthesisUtterance('Mensaje enviado con éxito');
      window.speechSynthesis.speak(msg);
    } catch (err) {
      setError('Error al enviar el mensaje. Por favor intente nuevamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">¿Tienes preguntas? Escríbenos</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos aquí para ayudarte a ser parte de esta revolución tecnológica inclusiva
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Nombre
              </label>
              <Input 
                id="name" 
                name="name"
                placeholder="Tu nombre" 
                required
                aria-required="true"
              />
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <Input 
                  id="email" 
                  name="email"
                  type="email" 
                  placeholder="tu@email.com"
                  required
                  aria-required="true"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Mensaje
                </label>
                <Textarea
                  id="message" 
                  name="message"
                  placeholder="¿En qué podemos ayudarte?" 
                  className="min-h-[150px] text-base"
                  required
                  aria-required="true"
                />
                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full text-lg font-semibold py-6 bg-gradient-to-r from-pink-500 to-blue-600 hover:from-pink-600 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl"
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                </Button>
              </div>
            </form>
            {success && (
              <div role="alert" className="p-4 bg-green-50 text-green-700 rounded-lg">
                ¡Mensaje enviado con éxito! Te contactaremos pronto.
              </div>
            )}
            {error && (
              <div role="alert" className="p-4 bg-red-50 text-red-700 rounded-lg">
                {error}
              </div>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:pl-16"
          >
            <h3 className="text-2xl font-semibold mb-6">Conéctate con nosotros</h3>
            <p className="text-gray-600 mb-8">
              Síguenos en nuestras redes sociales para estar al día con las últimas novedades,
              workshops y oportunidades de INCLUTON 2025.
            </p>
            
            <div className="space-y-6">
              {socialMedia.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 text-gray-600 hover:text-primary transition-colors"
                >
                  {social.icon}
                  <span>{social.label}</span>
                </a>
              ))}
            </div>

            <div className="mt-12">
              <h4 className="text-xl font-semibold mb-4">Contacto directo</h4>
              <a
                href="mailto:contacto@latamai.org"
                className="text-primary hover:underline"
              >
                contacto@latamai.org
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}