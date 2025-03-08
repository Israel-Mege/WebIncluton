'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { SponsorRegistrationForm } from '@/components/forms/sponsor/SponsorRegistrationForm';

const sponsors = [
  {
    name: "AccessTech Solutions",
    image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=100&q=80",
    url: "#"
  },
  {
    name: "Inclusive AI Labs",
    image: "https://images.unsplash.com/photo-1560179707-f14e90ef3624?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=100&q=80",
    url: "#"
  },
  {
    name: "Global Accessibility Partners",
    image: "https://images.unsplash.com/photo-1560179707-f14e90ef3625?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=100&q=80",
    url: "#"
  },
  {
    name: "Digital Inclusion Institute",
    image: "https://images.unsplash.com/photo-1560179707-f14e90ef3626?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=100&q=80",
    url: "#"
  }
];

export default function SponsorsSection() {
  const [showSponsorForm, setShowSponsorForm] = useState(false);

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">Aliados por la Inclusión</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empresas comprometidas con un futuro tecnológico más inclusivo
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 mb-20 max-w-[1600px] mx-auto">
          {sponsors.map((sponsor, index) => (
            <motion.a
              key={index}
              href={sponsor.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center group h-40 relative overflow-hidden"
            >
              <img
                src={sponsor.image}
                alt={sponsor.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-300" />
            </motion.a>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button 
            size="lg"
            onClick={() => setShowSponsorForm(true)}
            className="bg-gradient-to-r from-[#FF6B2B] to-[#2B7BFF] hover:from-[#FF6B2B] hover:to-[#2B7BFF] text-white text-lg font-semibold px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl"
          >
            Conviértete en sponsor
          </Button>
        </div>
      </div>
      
      <Dialog open={showSponsorForm} onOpenChange={setShowSponsorForm}>
        <DialogContent className="sm:max-w-[800px] max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Registro de Patrocinador</DialogTitle>
          </DialogHeader>
          <SponsorRegistrationForm />
        </DialogContent>
      </Dialog>
    </section>
  );
}