'use client';

import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Code2, Presentation, Handshake, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { SponsorRegistrationForm } from '@/components/forms/sponsor/SponsorRegistrationForm';
import { MentorRegistrationForm } from '@/components/forms/mentor/MentorRegistrationForm';

interface ParticipationOption {
  title: string;
  description: string;
  icon: React.ReactNode;
  action: () => void;
}

interface ParticipationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectOption: (option: string) => void;
}

export function ParticipationModal({ isOpen, onClose, onSelectOption }: ParticipationModalProps) {
  const [showSponsorForm, setShowSponsorForm] = useState(false);
  const [showMentorForm, setShowMentorForm] = useState(false);

  const options: ParticipationOption[] = [
    {
      title: "Hackaton",
      description: "Desarrolla soluciones inclusivas",
      icon: <Code2 className="w-6 h-6" />,
      action: () => {
        onClose();
        onSelectOption('hackathon');
      }
    },
    {
      title: "Cumbre Tecnológica",
      description: "Aprende de expertos",
      icon: <Presentation className="w-6 h-6" />,
      action: () => {
        onClose();
        onSelectOption('summit');
      }
    },
    {
      title: "Mentor",
      description: "Comparte tu experiencia",
      icon: <Users className="w-6 h-6" />,
      action: () => {
        onClose();
        setShowMentorForm(true);
      }
    },
    {
      title: "Patrocinador",
      description: "Apoya la innovación inclusiva",
      icon: <Handshake className="w-6 h-6" />,
      action: () => {
        onClose();
        setShowSponsorForm(true);
      }
    }
  ];

  return (
    <>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center mb-2">
              ¿Cómo quieres participar?
            </DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            {options.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Button
                  variant="outline"
                  className="w-full justify-start h-auto p-6 group hover:bg-gray-50"
                  onClick={option.action}
                >
                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-lg bg-primary/5 text-primary group-hover:scale-110 transition-transform">
                      {option.icon}
                    </div>
                    <div className="text-left">
                      <h3 className="font-semibold text-lg mb-1">{option.title}</h3>
                      <p className="text-sm text-gray-600">{option.description}</p>
                    </div>
                  </div>
                </Button>
              </motion.div>
            ))}
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={showSponsorForm} onOpenChange={setShowSponsorForm}>
        <DialogContent className="sm:max-w-[800px] max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Registro de Patrocinador</DialogTitle>
          </DialogHeader>
          <SponsorRegistrationForm />
        </DialogContent>
      </Dialog>

      <Dialog open={showMentorForm} onOpenChange={setShowMentorForm}>
        <DialogContent className="sm:max-w-[800px] max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Registro de Mentor</DialogTitle>
          </DialogHeader>
          <MentorRegistrationForm />
        </DialogContent>
      </Dialog>
    </>
  );
}