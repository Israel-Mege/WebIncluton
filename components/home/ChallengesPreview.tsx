'use client';

import { motion } from 'framer-motion';
import { Eye, Ear, HandMetal, Brain, Users, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';

const challenges = [
  {
    id: "1",
    title: "Navegación por voz",
    category: "Visual",
    description: "Desarrolla una solución que permita navegar por sitios web usando solo comandos de voz",
    impact: "Alto",
    difficulty: "Intermedio",
    color: "#FF6B2B", // Naranja para accesibilidad visual
    icon: <Eye className="w-8 h-8" />
  },
  {
    id: "2",
    title: "Subtítulos en tiempo real",
    category: "Auditiva",
    description: "Crea un sistema de generación automática de subtítulos para contenido multimedia",
    impact: "Alto",
    difficulty: "Avanzado",
    color: "#2B7BFF", // Azul para accesibilidad auditiva
    icon: <Ear className="w-8 h-8" />
  },
  {
    id: "3",
    title: "Control gestual",
    category: "Motriz",
    description: "Implementa un sistema de control por gestos para personas con movilidad reducida",
    impact: "Alto",
    difficulty: "Avanzado",
    color: "#4CAF50", // Verde para accesibilidad motriz
    icon: <HandMetal className="w-8 h-8" />
  },
  {
    id: "4",
    title: "Interfaz adaptativa",
    category: "Cognitiva",
    description: "Diseña una interfaz que se adapte a diferentes niveles de comprensión",
    impact: "Medio",
    difficulty: "Intermedio",
    color: "#FFD700", // Amarillo para accesibilidad cognitiva
    icon: <Brain className="w-8 h-8" />
  },
  {
    id: "5",
    title: "Asistente multimodal",
    category: "Multiple",
    description: "Desarrolla un asistente que combine diferentes formas de interacción",
    impact: "Alto",
    difficulty: "Avanzado",
    color: "#9C27B0", // Púrpura para múltiple
    icon: <Users className="w-8 h-8" />
  }
];

export default function ChallengesPreview() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">Desafíos que Transforman</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explora los desafíos de accesibilidad digital que puedes resolver
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {challenges.map((challenge, index) => (
            <motion.div
              key={challenge.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 group relative overflow-hidden"
            >
              <div 
                className="absolute top-0 right-0 w-40 h-40 -mr-10 -mt-10 rounded-full transform group-hover:scale-110 transition-all duration-300 opacity-10"
                style={{ background: challenge.color }}
              ></div>
              <div className="relative mb-6">
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-all duration-300"
                  style={{ background: challenge.color }}
                >
                  {React.cloneElement(challenge.icon as React.ReactElement, { className: "w-8 h-8" })}
                </div>
              </div>
              <div className="flex items-center space-x-2 mb-4">
                <span 
                  className="text-base font-medium px-4 py-2 rounded-full transition-colors"
                  style={{ 
                    background: `${challenge.color}20`,
                    color: challenge.color 
                  }}
                >
                  {challenge.category}
                </span>
                <span 
                  className="text-base font-medium px-4 py-2 rounded-full transition-colors"
                  style={{ 
                    background: `${challenge.color}10`,
                    color: challenge.color 
                  }}
                >
                  {challenge.difficulty}
                </span>
              </div>
              <h3 
                className="text-2xl font-bold mb-3 transition-colors"
                style={{ color: challenge.color }}
              >{challenge.title}</h3>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">{challenge.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-base font-medium text-gray-600 group-hover:text-primary transition-colors">Impacto: {challenge.impact}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/challenges">
            <Button size="lg" className="group bg-gradient-to-r from-pink-500 to-blue-600 hover:from-pink-600 hover:to-blue-700 text-white text-lg px-8 py-6 h-auto">
              Ver más desafíos
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}