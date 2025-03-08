'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Rocket, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { ParticipationModal } from '@/components/modals/ParticipationModal';
import { HackathonChoicesModal } from '@/components/modals/HackathonChoicesModal';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { HackathonRegistrationForm } from '@/components/forms/hackathon/HackathonRegistrationForm';
import { SummitRegistrationForm } from '@/components/forms/summit/SummitRegistrationForm';

export default function RegistrationSection() {
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
    }
  };

  const handleHackathonChoice = (choice: 'team' | 'solo') => {
    setShowHackathonChoices(false);
    if (choice === 'team') {
      setShowHackathonForm(true);
    } else {
      window.location.href = 'https://discord.gg/incluton';
    }
  };

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
          <h2 className="text-4xl font-bold mb-6">Regístrate y Transforma el Futuro</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Únete a INCLUTON 2025 y sé parte del cambio hacia una tecnología más inclusiva
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 bg-white p-8 rounded-xl shadow-lg text-center lg:text-left"
          >
            <h3 className="text-3xl font-bold mb-4">Sé parte del cambio</h3>
            <p className="text-xl text-gray-600 mb-8">
              Únete a la revolución de la tecnología inclusiva y ayuda a construir un futuro digital para todos
            </p>
            <Button 
              size="lg" 
              onClick={() => setShowParticipationModal(true)}
              className="text-xl px-8 py-8 h-auto bg-gradient-to-r from-pink-500 to-blue-600 hover:from-pink-600 hover:to-blue-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 group"
            >
              <Rocket className="w-6 h-6 mr-3 group-hover:translate-x-1 transition-transform" />
              Participa Ahora
              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Equipo colaborando"
              className="rounded-xl shadow-lg"
            />
          </motion.div>
        </div>
      </div>
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