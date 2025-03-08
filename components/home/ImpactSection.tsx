'use client';

import { motion } from 'framer-motion';
import { Users2, Building2, Laptop2, FileCode2, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const impactStats = [
  {
    value: "1000+",
    label: "millones de personas con discapacidad a nivel mundial",
    color: "#FF6B2B", // Naranja
    icon: <Users2 className="w-8 h-8" />
  },
  {
    value: "80%",
    label: "enfrentan barreras de acceso al empleo formal",
    color: "#2B7BFF", // Azul
    icon: <Building2 className="w-8 h-8" />
  },
  {
    value: "60%",
    label: "encuentran obstáculos en el acceso a la tecnología",
    color: "#4CAF50", // Verde
    icon: <Laptop2 className="w-8 h-8" />
  },
  {
    value: "<10%",
    label: "países con regulaciones IA inclusivas",
    color: "#FFD700", // Amarillo
    icon: <FileCode2 className="w-8 h-8" />
  }
];

export default function ImpactSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">Impacto Social</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Deja tu huella en la historia de la inclusión tecnológica
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {impactStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center p-8 rounded-xl bg-white border hover:shadow-xl hover:scale-[1.02] transition-all duration-300 group relative overflow-hidden"
            >
              <div 
                className="mb-4 p-4 rounded-2xl shadow-lg transition-all duration-300 text-white"
                style={{ background: stat.color }}
              >
                {stat.icon}
              </div>
              <h3 
                className="text-4xl font-bold mb-2"
                style={{ color: stat.color }}
              >
                {stat.value}
              </h3>
              <p className="text-gray-600 text-lg">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button 
            size="lg"
            className="bg-gradient-to-r from-pink-500 to-blue-600 hover:from-pink-600 hover:to-blue-700 text-white text-lg font-semibold px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl"
          >
            <ExternalLink className="w-5 h-5 mr-2" />
            Explorar Catálogo de Soluciones Accesibles
          </Button>
        </motion.div>
      </div>
    </section>
  );
}