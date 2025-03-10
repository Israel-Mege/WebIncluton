'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Video, Calendar, Timer, Palette, Code, Heart, ThumbsUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { SummitRegistrationForm } from '@/components/forms/summit/SummitRegistrationForm';
import { HackathonRegistrationForm } from '@/components/forms/hackathon/HackathonRegistrationForm';
import { HackathonChoicesModal } from '@/components/modals/HackathonChoicesModal';

const hackathonFeatures = [
  "Desarrollo de prototipos",
  "Mentorías especializadas",
  "Premios por categoría",
  "Exposición de proyectos"
];

const summitActivities = [
  "Conferencias magistrales",
  "Talleres prácticos",
  "Paneles de discusión",
  "Networking"
];

const prizeCategories = [
  {
    title: "UX/UI Accesible",
    color: "#FF6B2B", // Naranja para diseño
    icon: <Palette className="w-6 h-6" />,
    description: "Diseño centrado en la accesibilidad y experiencia de usuario"
  },
  {
    title: "Desarrollo Técnico",
    color: "#2B7BFF", // Azul para desarrollo
    icon: <Code className="w-6 h-6" />,
    description: "Excelencia en implementación y soluciones técnicas"
  },
  {
    title: "Favorito del Público",
    color: "#4CAF50", // Verde para comunidad
    icon: <ThumbsUp className="w-6 h-6" />,
    description: "Proyecto más votado por la comunidad"
  },
  {
    title: "Valores Humanos",
    color: "#FFD700", // Amarillo para impacto social
    icon: <Heart className="w-6 h-6" />,
    description: "Mayor impacto social y enfoque inclusivo"
  }
];

export default function EventStructureSection() {
  const [isSummitModalOpen, setSummitModalOpen] = useState(false);
  const [showHackathonChoices, setShowHackathonChoices] = useState(false);
  const [showHackathonForm, setShowHackathonForm] = useState(false);
  const eventDate = new Date('2025-05-12');
  const now = new Date();
  const timeLeft = eventDate.getTime() - now.getTime();
  const daysLeft = Math.ceil(timeLeft / (1000 * 60 * 60 * 24));

  const handleHackathonChoice = (choice: 'team' | 'solo') => {
    setShowHackathonChoices(false);
    if (choice === 'team') {
      setShowHackathonForm(true);
    } else {
      window.location.href = 'https://discord.gg/incluton';
    }
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">Estructura del Evento</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Una semana de innovación y aprendizaje colaborativo para transformar el futuro digital
          </p>
          <div className="flex items-center justify-center mt-8 space-x-4">
            <div className="flex items-center space-x-2 text-primary">
              <Calendar className="w-5 h-5" />
              <span>12-18 Mayo, 2025</span>
            </div>
            <div className="flex items-center space-x-2 text-primary">
              <Timer className="w-5 h-5" />
              <span>Faltan {daysLeft} días</span>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20 max-w-[1600px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-lg shadow-lg border relative overflow-hidden group hover:shadow-xl transition-all flex flex-col"
          >
            <Badge className="absolute top-4 right-4 bg-black text-white">Competencia</Badge>
            <div className="mb-6">
              <Trophy className="w-12 h-12 text-gray-800" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Hackaton Virtual</h3>
            <p className="text-gray-600 mb-6">
              Equipos diversos y multidisciplinarios colaborarán desarrollando soluciones tecnológicas
              para desafíos reales de accesibilidad digital, evaluados bajo cinco criterios principales:
            </p>
            <div className="mb-6">
              <h4 className="font-semibold mb-3">Criterios de Evaluación:</h4>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-600">
                  <div className="w-2 h-2 bg-gray-800 rounded-full mr-3" />
                  Innovación y creatividad
                </li>
                <li className="flex items-center text-gray-600">
                  <div className="w-2 h-2 bg-gray-800 rounded-full mr-3" />
                  Impacto social y alcance
                </li>
                <li className="flex items-center text-gray-600">
                  <div className="w-2 h-2 bg-gray-800 rounded-full mr-3" />
                  Viabilidad técnica
                </li>
                <li className="flex items-center text-gray-600">
                  <div className="w-2 h-2 bg-gray-800 rounded-full mr-3" />
                  Favorito del público
                </li>
                <li className="flex items-center text-gray-600">
                  <div className="w-2 h-2 bg-gray-800 rounded-full mr-3" />
                  Valores humanos e inclusión
                </li>
              </ul>
            </div>
            <div className="space-y-3 mt-auto">
              <Button 
                size="lg"
                className="w-full bg-gradient-to-r from-[#FF6B2B] to-[#2B7BFF] hover:from-[#FF6B2B] hover:to-[#2B7BFF] text-white text-lg font-semibold py-6 shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl"
                onClick={() => setShowHackathonChoices(true)}
              >
                Participa en la Hackaton
              </Button>
              <Button 
                variant="outline"
                size="lg" 
                className="w-full text-lg font-semibold py-6 hover:bg-gray-50 transition-all duration-300 rounded-xl border-2 text-gray-800"
              >
                Descargar Bases
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-lg shadow-lg border relative overflow-hidden group hover:shadow-xl transition-all flex flex-col"
          >
            <Badge className="absolute top-4 right-4 bg-black text-white">Aprendizaje</Badge>
            <div className="mb-6">
              <Video className="w-12 h-12 text-gray-800" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Cumbre de Inclusión Tecnológica</h3>
            <p className="text-gray-600 mb-6">
              Un espacio de aprendizaje y networking donde expertos internacionales
              compartirán conocimientos sobre tecnología inclusiva.
            </p>
            <div className="mb-6">
              <h4 className="font-semibold mb-3">Actividades:</h4>
              <ul className="space-y-2">
                {summitActivities.map((activity, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-gray-800 rounded-full mr-3" />
                    {activity}
                  </li>
                ))}
              </ul>
            </div>
            <Button 
              size="lg"
              className="w-full bg-gradient-to-r from-[#FF6B2B] to-[#2B7BFF] hover:from-[#FF6B2B] hover:to-[#2B7BFF] text-white text-lg font-semibold py-6 shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl mt-auto"
              onClick={() => setSummitModalOpen(true)}
            >
              Asiste a la Cumbre Tecnológica
            </Button>
          </motion.div>
        </div>

        {/* Hackathon Choices Modal */}
        <HackathonChoicesModal
          isOpen={showHackathonChoices}
          onClose={() => setShowHackathonChoices(false)}
          onSelectOption={handleHackathonChoice}
        />

        {/* Hackathon Registration Form */}
        <Dialog open={showHackathonForm} onOpenChange={setShowHackathonForm}>
          <DialogContent className="sm:max-w-[800px] max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Registro Hackathon</DialogTitle>
            </DialogHeader>
            <HackathonRegistrationForm />
          </DialogContent>
        </Dialog>

        {/* Summit Registration Modal */}
        <Dialog open={isSummitModalOpen} onOpenChange={setSummitModalOpen}>
          <DialogContent className="sm:max-w-[800px] max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Registro Cumbre Tecnológica</DialogTitle>
            </DialogHeader>
            <SummitRegistrationForm />
          </DialogContent>
        </Dialog>

        <div className="mt-24 max-w-[1600px] mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8">Categorías Premiadas</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {prizeCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all border"
              >
                <div 
                  className="flex flex-col items-center text-center space-y-3"
                  style={{ color: category.color }}
                >
                  <div 
                    className="p-3 rounded-full"
                    style={{ background: `${category.color}15` }}
                  >
                    {React.cloneElement(category.icon as React.ReactElement)}
                  </div>
                  <h4 className="font-semibold">{category.title}</h4>
                  <p className="text-sm text-gray-600 mt-2">{category.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}