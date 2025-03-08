'use client';

import { motion } from 'framer-motion';
import { Eye, Ear, HandMetal, Brain, Users, Plus, Search, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';

const challenges = [
  {
    id: "1",
    title: "Navegación por voz",
    category: "Visual",
    description: "Desarrolla una solución que permita navegar por sitios web usando solo comandos de voz",
    impact: "Alto",
    difficulty: "Intermedio",
    icon: <Eye className="w-12 h-12" />,
    requirements: [
      "Reconocimiento de voz preciso",
      "Navegación fluida por elementos de la página",
      "Retroalimentación auditiva clara",
      "Soporte para múltiples idiomas"
    ],
    resources: [
      "API de Web Speech",
      "ARIA landmarks",
      "Semantic HTML",
      "Screen reader compatibility"
    ]
  },
  {
    id: "2",
    title: "Subtítulos en tiempo real",
    category: "Auditiva",
    description: "Crea un sistema de generación automática de subtítulos para contenido multimedia",
    impact: "Alto",
    difficulty: "Avanzado",
    icon: <Ear className="w-12 h-12" />,
    requirements: [
      "Transcripción en tiempo real",
      "Alta precisión en el reconocimiento",
      "Soporte para múltiples idiomas",
      "Sincronización precisa con el audio"
    ],
    resources: [
      "Speech-to-Text APIs",
      "WebVTT",
      "Audio processing",
      "Real-time streaming"
    ]
  },
  {
    id: "3",
    title: "Control gestual",
    category: "Motriz",
    description: "Implementa un sistema de control por gestos para personas con movilidad reducida",
    impact: "Alto",
    difficulty: "Avanzado",
    icon: <HandMetal className="w-12 h-12" />,
    requirements: [
      "Detección precisa de gestos",
      "Calibración personalizada",
      "Respuesta en tiempo real",
      "Modos alternativos de entrada"
    ],
    resources: [
      "Computer Vision APIs",
      "WebRTC",
      "Motion tracking",
      "Gesture recognition"
    ]
  },
  {
    id: "4",
    title: "Interfaz adaptativa",
    category: "Cognitiva",
    description: "Diseña una interfaz que se adapte a diferentes niveles de comprensión",
    impact: "Medio",
    difficulty: "Intermedio",
    icon: <Brain className="w-12 h-12" />,
    requirements: [
      "Personalización de la complejidad",
      "Ayudas visuales claras",
      "Instrucciones paso a paso",
      "Feedback constante"
    ],
    resources: [
      "UX/UI guidelines",
      "Cognitive load theory",
      "Progressive enhancement",
      "Accessibility standards"
    ]
  },
  {
    id: "5",
    title: "Asistente multimodal",
    category: "Multiple",
    description: "Desarrolla un asistente que combine diferentes formas de interacción",
    impact: "Alto",
    difficulty: "Avanzado",
    icon: <Users className="w-12 h-12" />,
    requirements: [
      "Múltiples modos de entrada",
      "Integración seamless",
      "Personalización avanzada",
      "Soporte offline"
    ],
    resources: [
      "AI/ML APIs",
      "Natural Language Processing",
      "Multimodal interfaces",
      "Progressive Web Apps"
    ]
  }
];

const difficultyDescriptions = [
  "Nivel Básico - Para principiantes",
  "Nivel Intermedio - Experiencia moderada requerida",
  "Nivel Avanzado - Para expertos en el área"
];

const categories = ["Visual", "Auditiva", "Motriz", "Cognitiva", "Multiple"];
const difficultyLevels = ["Básico", "Intermedio", "Avanzado"];

const ALL_CATEGORIES = "all-categories";
const ALL_DIFFICULTIES = "all-difficulties";

export default function ChallengesClient() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(ALL_CATEGORIES);
  const [selectedDifficulty, setSelectedDifficulty] = useState(ALL_DIFFICULTIES);

  const filteredChallenges = challenges.filter(challenge => {
    const matchesSearch = challenge.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         challenge.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === ALL_CATEGORIES || challenge.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === ALL_DIFFICULTIES || challenge.difficulty === selectedDifficulty;
    return matchesSearch && matchesCategory && matchesDifficulty;
  });

  return (
    <>
      <div className="max-w-[1800px] mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl font-bold mb-8">Desafíos de Accesibilidad Digital</h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12">
            Explora los retos técnicos que buscan transformar la experiencia digital para todos
          </p>
          <div className="flex flex-col md:flex-row gap-6 max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              placeholder="Buscar desafíos..."
              className="pl-10 h-12 text-lg"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-full md:w-[200px] h-12 text-lg">
              <SelectValue placeholder="Categoría" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value={ALL_CATEGORIES}>Todas las categorías</SelectItem>
              {categories.map(category => (
                <SelectItem key={category} value={category}>{category}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={selectedDifficulty} onValueChange={setSelectedDifficulty}>
            <SelectTrigger className="w-full md:w-[200px] h-12 text-lg">
              <SelectValue placeholder="Dificultad" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value={ALL_DIFFICULTIES}>Todas las dificultades</SelectItem>
              {difficultyLevels.map(level => (
                <SelectItem key={level} value={level}>{level}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mb-20">
        {filteredChallenges.map((challenge, index) => (
          <motion.div
            key={challenge.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white p-10 rounded-xl shadow-lg border hover:shadow-2xl transition-all flex flex-col min-h-[500px] relative overflow-hidden group"
          >
            <div 
              className="absolute top-0 right-0 w-40 h-40 -mr-10 -mt-10 rounded-full transform group-hover:scale-110 transition-all duration-300 opacity-10"
              style={{ background: challenge.category === "Visual" ? "#FF6B2B" :
                                 challenge.category === "Auditiva" ? "#2B7BFF" :
                                 challenge.category === "Motriz" ? "#4CAF50" :
                                 challenge.category === "Cognitiva" ? "#FFD700" :
                                 "#9C27B0" }}
            ></div>
            <div className="relative mb-6">
              <div 
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-all duration-300"
                style={{ background: challenge.category === "Visual" ? "#FF6B2B" :
                                   challenge.category === "Auditiva" ? "#2B7BFF" :
                                   challenge.category === "Motriz" ? "#4CAF50" :
                                   challenge.category === "Cognitiva" ? "#FFD700" :
                                   "#9C27B0" }}
              >
                {challenge.icon}
              </div>
            </div>
            <div className="flex gap-3 mb-6">
              <span 
                className="text-base font-medium px-4 py-2 rounded-full"
                style={{ 
                  background: `${challenge.category === "Visual" ? "#FF6B2B20" :
                               challenge.category === "Auditiva" ? "#2B7BFF20" :
                               challenge.category === "Motriz" ? "#4CAF5020" :
                               challenge.category === "Cognitiva" ? "#FFD70020" :
                               "#9C27B020"}`,
                  color: challenge.category === "Visual" ? "#FF6B2B" :
                         challenge.category === "Auditiva" ? "#2B7BFF" :
                         challenge.category === "Motriz" ? "#4CAF50" :
                         challenge.category === "Cognitiva" ? "#FFD700" :
                         "#9C27B0"
                }}
              >
                {challenge.category}
              </span>
              <span 
                className="text-base font-medium px-4 py-2 rounded-full"
                style={{ 
                  background: `${challenge.category === "Visual" ? "#FF6B2B10" :
                               challenge.category === "Auditiva" ? "#2B7BFF10" :
                               challenge.category === "Motriz" ? "#4CAF5010" :
                               challenge.category === "Cognitiva" ? "#FFD70010" :
                               "#9C27B010"}`,
                  color: challenge.category === "Visual" ? "#FF6B2B" :
                         challenge.category === "Auditiva" ? "#2B7BFF" :
                         challenge.category === "Motriz" ? "#4CAF50" :
                         challenge.category === "Cognitiva" ? "#FFD700" :
                         "#9C27B0"
                }}
              >
                {challenge.difficulty}
              </span>
            </div>
            <h3 
              className="text-2xl font-bold mb-4 transition-colors"
              style={{ 
                color: challenge.category === "Visual" ? "#FF6B2B" :
                       challenge.category === "Auditiva" ? "#2B7BFF" :
                       challenge.category === "Motriz" ? "#4CAF50" :
                       challenge.category === "Cognitiva" ? "#FFD700" :
                       "#9C27B0"
              }}
            >{challenge.title}</h3>
            <p className="text-gray-600 text-lg mb-6 flex-grow leading-relaxed">{challenge.description}</p>
            <div className="mt-auto">
              <Button 
                className="w-full text-lg font-semibold py-6 shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl text-white"
                style={{
                  background: `linear-gradient(to right, ${
                    challenge.category === "Visual" ? "#FF6B2B" :
                    challenge.category === "Auditiva" ? "#2B7BFF" :
                    challenge.category === "Motriz" ? "#4CAF50" :
                    challenge.category === "Cognitiva" ? "#FFD700" :
                    "#9C27B0"
                  }, ${
                    challenge.category === "Visual" ? "#FF8F5B" :
                    challenge.category === "Auditiva" ? "#5B9FFF" :
                    challenge.category === "Motriz" ? "#6FDF70" :
                    challenge.category === "Cognitiva" ? "#FFE44D" :
                    "#D35CE0"
                  })`
                }}
              >
                Ver detalles
              </Button>
            </div>
          </motion.div>
        ))}
        
        {/* Add Challenge Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-10 rounded-xl shadow-lg border hover:shadow-2xl transition-all flex flex-col items-center justify-center cursor-pointer min-h-[500px] group"
          role="button"
          tabIndex={0}
          aria-label="Proponer nuevo desafío de accesibilidad"
          onClick={() => setModalOpen(true)}
          onKeyPress={(e) => e.key === 'Enter' && setModalOpen(true)}
        >
          <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-gray-100 text-gray-600 group-hover:bg-gray-200 transition-colors">
              <Plus className="w-10 h-10" />
            </div>
          </div>
          <h3 className="text-2xl font-bold mb-4">Proponer nuevo desafío</h3>
          <p className="text-gray-600 text-lg text-center">
            ¿Tienes una idea para un nuevo desafío de accesibilidad?
          </p>
        </motion.div>
      </div>
      </div>

      {/* New Challenge Modal */}
      <Dialog open={isModalOpen} onOpenChange={setModalOpen}>
        <DialogContent className="sm:max-w-[600px] max-h-[85vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Proponer nuevo desafío</DialogTitle>
            <DialogDescription>
              Comparte tu idea para un nuevo desafío de accesibilidad digital
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <label className="text-sm font-medium">Nombre completo</label>
              <Input placeholder="Tu nombre" />
            </div>
            <div className="grid gap-2">
              <label className="text-sm font-medium">Email</label>
              <Input type="email" placeholder="tu@email.com" />
            </div>
            <div className="grid gap-2">
              <label className="text-sm font-medium">Título del desafío</label>
              <Input placeholder="Nombre descriptivo para el desafío" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <label className="text-sm font-medium">Categoría</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona categoría" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map(category => {
                      const value = category.toLowerCase().replace(/\s+/g, '-');
                      return (
                        <SelectItem key={category} value={value}>{category}</SelectItem>
                      );
                    })}
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <label className="text-sm font-medium">Dificultad estimada</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona dificultad" />
                  </SelectTrigger>
                  <SelectContent>
                    {difficultyLevels.map(level => {
                      const value = level.toLowerCase().replace(/\s+/g, '-');
                      return (
                        <SelectItem key={level} value={value}>{level}</SelectItem>
                      );
                    })}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid gap-2">
              <label className="text-sm font-medium">Descripción del desafío</label>
              <Textarea 
                placeholder="Describe el problema que busca resolver y su importancia..."
                className="min-h-[80px] resize-none"
              />
            </div>
            <div className="grid gap-2">
              <label className="text-sm font-medium">Recursos necesarios</label>
              <Textarea 
                placeholder="Lista las tecnologías, APIs o herramientas necesarias..."
                className="min-h-[80px] resize-none"
              />
            </div>
            <Button 
              className="w-full bg-gradient-to-r from-pink-500 to-blue-600 hover:from-pink-600 hover:to-blue-700 text-white py-6 text-lg font-semibold mt-2"
              onClick={() => setModalOpen(false)}
            >
              Enviar propuesta
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}