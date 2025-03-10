'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter } from 'lucide-react';

const team = [
  {
    name: "Ana García",
    role: "Directora Ejecutiva",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80",
    socialLinks: {
      linkedin: "https://linkedin.com/in/anagarcia",
      twitter: "https://twitter.com/anagarcia"
    }
  },
  {
    name: "Carlos Ruiz",
    role: "Director Técnico",
    image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80",
    socialLinks: {
      linkedin: "https://linkedin.com/in/carlosruiz"
    }
  },
  {
    name: "María Torres",
    role: "Directora de Innovación",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80",
    socialLinks: {
      linkedin: "https://linkedin.com/in/mariatorres",
      twitter: "https://twitter.com/mariatorres"
    }
  },
  {
    name: "David López",
    role: "Director de Comunidad",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80",
    socialLinks: {
      linkedin: "https://linkedin.com/in/davidlopez"
    }
  }
];

export default function OrganizersSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">Equipo Organizador</h2>
          <h3 className="text-2xl font-semibold mb-4">Somos LATAM AI</h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Una comunidad tecnológica inclusiva e intergeneracional que democratiza el acceso a la ciencia, 
            la tecnología y la inteligencia artificial (IA) en Latinoamérica. Nuestra misión es conectar talento, 
            creatividad y propósito para crear soluciones con impacto social.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-gray-600 mb-4">{member.role}</p>
                <div className="flex space-x-4">
                  {member.socialLinks.linkedin && (
                    <a
                      href={member.socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer" 
                      aria-label={`Perfil de LinkedIn de ${member.name} (abre en nueva ventana)`}
                      className="text-gray-600 hover:text-[#0077B5] transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  )}
                  {member.socialLinks.twitter && (
                    <a
                      href={member.socialLinks.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Perfil de Twitter de ${member.name} (abre en nueva ventana)`}
                      className="text-gray-600 hover:text-[#1DA1F2] transition-colors"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}