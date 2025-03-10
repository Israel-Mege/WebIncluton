'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Menu, X, Instagram, Linkedin, Facebook, Music2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { ParticipationModal } from '@/components/modals/ParticipationModal';
import { HackathonChoicesModal } from '@/components/modals/HackathonChoicesModal';
import { ThemeToggle } from './ThemeToggle';
import { HackathonRegistrationForm } from '@/components/forms/hackathon/HackathonRegistrationForm';
import { SummitRegistrationForm } from '@/components/forms/summit/SummitRegistrationForm';

const socialLinks = [
  {
    icon: <Instagram className="w-5 h-5" />,
    href: "https://www.instagram.com/incluton/",
    color: "#E1306C"
  },
  {
    icon: <Linkedin className="w-5 h-5" />,
    href: "https://www.linkedin.com/company/incluton",
    color: "#0077B5"
  },
  {
    icon: <Facebook className="w-5 h-5" />,
    href: "https://web.facebook.com/incluton",
    color: "#1877F2"
  },
  {
    icon: <Music2 className="w-5 h-5" />,
    href: "https://www.tiktok.com/@incluton",
    color: "currentColor"
  }
];

const menu = [
  {
    title: "Desafíos",
    path: "/challenges",
  },
  {
    title: "Catálogo",
    path: "/tools",
  }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-[#FF6B2B] to-[#2B7BFF] bg-clip-text text-transparent">
              INCLUTON
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-4 mr-4">
              <ThemeToggle />
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer" 
                  aria-label={`Síguenos en ${
                    link.icon.type === Instagram ? "Instagram" :
                    link.icon.type === Linkedin ? "LinkedIn" :
                    link.icon.type === Facebook ? "Facebook" :
                    "TikTok"
                  } (abre en nueva ventana)`}
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                  style={{ color: link.color }}
                >
                  {link.icon}
                </a>
              ))}
            </div>
            {menu.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                {item.title}
              </Link>
            ))}
            <Button 
              size="lg"
              className="bg-gray-900 hover:bg-gray-800 text-white font-semibold px-8 shadow-lg hover:shadow-xl transition-all duration-300"
              aria-label="Abrir formulario de registro"
              onClick={() => setShowParticipationModal(true)}
            >
              Regístrate
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label={isOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden bg-white border-b"
        >
          <div className="px-4 py-4 space-y-4">
            <div className="flex justify-end mb-4">
              <ThemeToggle />
            </div>
            {menu.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className="block text-gray-600 hover:text-gray-900 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.title}
              </Link>
            ))}
            <Button 
              size="lg"
              className="w-full bg-gray-900 hover:bg-gray-800 text-white text-lg font-semibold py-6 shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => setShowParticipationModal(true)}
            >
              Regístrate
            </Button>
          </div>
        </motion.div>
      )}
    </nav>
    
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