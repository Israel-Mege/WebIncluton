'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function VideoSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">Conoce INCLUTON 2025</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre cómo estamos transformando el futuro de la tecnología inclusiva
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="aspect-video w-full max-w-4xl mx-auto rounded-xl overflow-hidden shadow-xl"
        >
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/your-video-id"
            title="INCLUTON 2025 - Transforma el futuro con tecnología inclusiva"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
            aria-label="Video de presentación de INCLUTON 2025"
          ></iframe>
          <div className="mt-4">
            <a 
              href="#transcripcion"
              className="text-primary hover:underline"
              aria-label="Ver transcripción del video"
            >
              Ver transcripción
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}