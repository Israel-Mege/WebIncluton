'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, BookOpen, Lightbulb } from 'lucide-react';

const pillars = [
  {
    title: "Inclusión Total",
    color: "#FF6B2B", // Naranja vibrante
    description: "La tecnología es para todos",
    icon: <Heart className="w-8 h-8" />
  },
  {
    title: "Colaboración Intergeneracional",
    color: "#2B7BFF", // Azul brillante
    description: "Uniendo experiencia y nuevas perspectivas",
    icon: <Users className="w-8 h-8" />
  },
  {
    title: "Democratización del Conocimiento",
    color: "#4CAF50", // Verde vibrante
    description: "Acceso universal al aprendizaje",
    icon: <BookOpen className="w-8 h-8" />
  },
  {
    title: "Innovación con Impacto Social",
    color: "#FFD700", // Amarillo brillante
    description: "Soluciones que transforman vidas",
    icon: <Lightbulb className="w-8 h-8" />
  }
];

export default function AboutSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">¿Qué es Incluton?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Un hackathon único que une tecnología e inclusión para crear soluciones que transforman vidas.
            Más que un evento, es un movimiento hacia un futuro digital verdaderamente accesible para todas las personas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 group border border-gray-100 relative overflow-hidden"
            >
              <div 
                className="absolute top-0 right-0 w-32 h-32 -mr-8 -mt-8 rounded-full transform group-hover:scale-110 transition-all duration-300 opacity-10"
                style={{ background: pillar.color }}
              ></div>
              <div className="relative mb-6">
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-all duration-300"
                  style={{ background: pillar.color }}
                >
                  {React.cloneElement(pillar.icon as React.ReactElement, { className: "w-8 h-8" })}
                </div>
              </div>
              <h3 
                className="text-2xl font-bold mb-3 transition-colors"
                style={{ color: pillar.color }}
              >{pillar.title}</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                {pillar.title === "Inclusión Total" ? "La tecnología es para todas las personas" :
                 pillar.title === "Colaboración Intergeneracional" ? "Uniendo experiencia y nuevas perspectivas de todas las generaciones" :
                 pillar.title === "Democratización del Conocimiento" ? "Acceso universal e igualitario al aprendizaje" :
                 "Soluciones que transforman vidas y promueven la equidad"}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}