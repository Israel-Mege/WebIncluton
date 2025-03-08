'use client';

import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Users, UserPlus } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { SoloParticipantForm } from '@/components/forms/hackathon/SoloParticipantForm';

interface HackathonChoicesModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectOption: (option: 'team' | 'solo') => void;
}

export function HackathonChoicesModal({ isOpen, onClose, onSelectOption }: HackathonChoicesModalProps) {
  const [showSoloForm, setShowSoloForm] = useState(false);

  const handleSoloFormClose = (open: boolean) => {
    setShowSoloForm(open);
    if (!open) {
      onClose();
    }
  };

  return (
    <>
      <Dialog open={isOpen && !showSoloForm} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center mb-2">
              ¿Ya tienes equipo?
            </DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Button
                variant="outline"
                className="w-full justify-start h-auto p-6 group hover:bg-gray-50"
                onClick={() => onSelectOption('team')}
              >
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-lg bg-primary/5 text-primary group-hover:scale-110 transition-transform">
                    <Users className="w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold text-lg mb-1">Sí, tengo equipo</h3>
                    <p className="text-sm text-gray-600">Registra a tu equipo completo</p>
                  </div>
                </div>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <Button
                variant="outline"
                className="w-full justify-start h-auto p-6 group hover:bg-gray-50"
                onClick={() => setShowSoloForm(true)}
              >
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-lg bg-primary/5 text-primary group-hover:scale-110 transition-transform">
                    <UserPlus className="w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold text-lg mb-1">No, busco equipo</h3>
                    <p className="text-sm text-gray-600">Te ayudamos a encontrar compañeros</p>
                  </div>
                </div>
              </Button>
            </motion.div>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={showSoloForm} onOpenChange={handleSoloFormClose}>
        <DialogContent className="sm:max-w-[800px] max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Registro Individual</DialogTitle>
          </DialogHeader>
          <SoloParticipantForm />
        </DialogContent>
      </Dialog>
    </>
  );
}