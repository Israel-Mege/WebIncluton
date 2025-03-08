'use client';

import { motion } from 'framer-motion';
import { Palette, Code, Notebook, Rocket, Presentation } from 'lucide-react';
import { Button } from '@/components/ui/button';
import React from 'react';
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { SpeakerRegistrationForm } from '@/components/forms/speaker/SpeakerRegistrationForm';

const workshops = [
  {
    title: "Diseño UX/UI accesible",
    description: "Aprende a crear interfaces que todos puedan usar",
    duration: "2 horas",
    color: "#FF6B2B", // Naranja para diseño
    icon: <Palette className="w-8 h-8" />
  },
  {
    title: "Programación inclusiva",
    description: "Desarrolla aplicaciones accesibles desde el código",
    duration: "2 horas",
    color: "#2B7BFF", // Azul para desarrollo
    icon: <Code className="w-8 h-8" />
  },
  {
    title: "Tecnologías asistivas",
    description: "Explora herramientas que facilitan la accesibilidad",
    duration: "2 horas",
    color: "#4CAF50", // Verde para herramientas
    icon: <Notebook className="w-8 h-8" />
  },
  {
    title: "Cómo crear un MVP",
    description: "De la idea al prototipo funcional en tiempo récord",
    duration: "2 horas",
    color: "#FFD700", // Amarillo para MVP
    icon: <Rocket className="w-8 h-8" />
  }
];

export default function WorkshopsSection() {
  const [showSpeakerForm, setShowSpeakerForm] = useState(false);

  return (
    <>
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">Aprende, Crea e Impacta</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Talleres prácticos para los Equipos de la hackaton, diseñados para potenciar tus habilidades y llevar tu solución al siguiente nivel
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {workshops.map((workshop, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 group border border-gray-100"
            >
              <div 
                className="mb-6 transform group-hover:scale-110 transition-transform duration-300 ease-in-out"
                style={{ color: workshop.color }}
              >
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center"
                  style={{ background: `${workshop.color}15` }}
                >
                  {React.cloneElement(workshop.icon as React.ReactElement, { className: "w-10 h-10" })}
                </div>
              </div>
              <h3 
                className="text-2xl font-bold mb-3 transition-colors"
                style={{ color: workshop.color }}
              >{workshop.title}</h3>
              <p className="text-gray-600 text-lg mb-4 leading-relaxed">
                {workshop.title === "Diseño UX/UI accesible" ? "Aprende a crear interfaces que todas las personas puedan usar" :
                 workshop.title === "Programación inclusiva" ? "Desarrolla aplicaciones accesibles desde el código para cada persona usuaria" :
                 workshop.title === "Tecnologías asistivas" ? "Explora herramientas que facilitan la accesibilidad universal" :
                 "De la idea al prototipo funcional con enfoque en la inclusión"}
              </p>
              <p 
                className="text-base font-medium transition-colors"
                style={{ color: workshop.color }}
              >Duración: {workshop.duration} | Exclusivo para participantes</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-pink-500 to-blue-600 hover:from-pink-600 hover:to-blue-700 text-white text-lg font-semibold px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl group"
            onClick={() => setShowSpeakerForm(true)}
          >
            <Presentation className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
            ¿Quieres ser expositor?
          </Button>
        </div>
      </div>
    </section>

    <Dialog open={showSpeakerForm} onOpenChange={setShowSpeakerForm}>
      <DialogContent className="sm:max-w-[800px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Registro de Expositor</DialogTitle>
        </DialogHeader>
        <SpeakerRegistrationForm />
      </DialogContent>
    </Dialog>
    </>
  );
}