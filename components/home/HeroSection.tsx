'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/theme-context';
import { Button } from '@/components/ui/button';
import { Rocket, Trophy, Notebook, Users, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { ParticipationModal } from '@/components/modals/ParticipationModal';
import { HackathonChoicesModal } from '@/components/modals/HackathonChoicesModal';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { HackathonRegistrationForm } from '@/components/forms/hackathon/HackathonRegistrationForm';
import { SummitRegistrationForm } from '@/components/forms/summit/SummitRegistrationForm';

const quickAccessItems = [
  {
    icon: <Trophy className="w-6 h-6" />,
    text: "Hackathon",
    link: "#challenges"
  },
  {
    icon: <Notebook className="w-6 h-6" />,
    text: "Talleres",
    link: "#workshops"
  },
  {
    icon: <Users className="w-6 h-6" />,
    text: "Impacto",
    link: "#impact"
  }
];

export default function HeroSection() {
  const theme = useTheme();
  const [showParticipationModal, setShowParticipationModal] = useState(false);
  const [showHackathonChoices, setShowHackathonChoices] = useState(false);
  const [showHackathonForm, setShowHackathonForm] = useState(false);
  const [showSummitForm, setShowSummitForm] = useState(false);

  const handleParticipationOption = (option: string) => {
    setShowParticipationModal(false);
    
    switch (option) {
      case 'hackathon':
        setShowHackathonChoices(true);
        break;
      case 'summit':
        setShowSummitForm(true);
        break;
      // Implementar otros casos según sea necesario
    }
  };

  const handleHackathonChoice = (choice: 'team' | 'solo') => {
    setShowHackathonChoices(false);
    if (choice === 'team') {
      setShowHackathonForm(true);
    } else {
      // Implementar lógica para participantes individuales
      window.location.href = 'https://discord.gg/incluton';
    }
  };

  return (
    <>
    <section 
      className="min-h-screen flex flex-col justify-center items-center text-white relative py-20"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/50" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center max-w-4xl mx-auto px-4"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ fontFamily: theme.fonts.heading }}>
          Transforma el futuro con tecnología inclusiva
        </h1>
        <p className="text-xl md:text-2xl mb-12 text-gray-200" style={{ fontFamily: theme.fonts.body }}>
          Únete a INCLUTON 2025
        </p>
        <Button 
          size="lg" 
          className="bg-white text-black hover:bg-gray-100 dark:bg-blue-600 dark:text-white dark:hover:bg-blue-700 transition-all duration-300 text-xl font-bold px-12 py-8 rounded-xl shadow-2xl hover:shadow-3xl hover:scale-105 mb-12"
          onClick={() => setShowParticipationModal(true)}
        >
          <Rocket className="w-6 h-6 mr-3" />
          Regístrate Ahora
        </Button>

        <div className="flex items-center justify-center gap-3 bg-black/30 backdrop-blur-md px-6 py-3 rounded-full mb-4">
          <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse shadow-lg shadow-green-400/50" />
          <p className="text-white dark:text-white font-medium tracking-wide">
            12-18 de Mayo, 2025 · Faltan {Math.ceil((new Date('2025-05-12').getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))} días
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {quickAccessItems.map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 * index }}
              className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-colors"
            >
              {React.cloneElement(item.icon as React.ReactElement)}
              <span className="text-lg">{item.text}</span>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>

    <ParticipationModal
      isOpen={showParticipationModal}
      onClose={() => setShowParticipationModal(false)}
      onSelectOption={handleParticipationOption}
    />

    <HackathonChoicesModal
      isOpen={showHackathonChoices}
      onClose={() => setShowHackathonChoices(false)}
      onSelectOption={handleHackathonChoice}
    />

    <Dialog open={showHackathonForm} onOpenChange={setShowHackathonForm}>
      <DialogContent className="sm:max-w-[800px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Registro Hackathon</DialogTitle>
        </DialogHeader>
        <HackathonRegistrationForm />
      </DialogContent>
    </Dialog>

    <Dialog open={showSummitForm} onOpenChange={setShowSummitForm}>
      <DialogContent className="sm:max-w-[800px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Registro Cumbre Tecnológica</DialogTitle>
        </DialogHeader>
        <SummitRegistrationForm />
      </DialogContent>
    </Dialog>
    </>
  );
}