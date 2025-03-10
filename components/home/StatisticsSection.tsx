'use client';

import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { LucideCrop as LucideProps } from 'lucide-react';

const Users2 = dynamic(() => import('lucide-react').then(mod => mod.Users2));
const Briefcase = dynamic(() => import('lucide-react').then(mod => mod.Briefcase));
const Monitor = dynamic(() => import('lucide-react').then(mod => mod.Monitor));
const ScrollText = dynamic(() => import('lucide-react').then(mod => mod.ScrollText));

const stats = [
  {
    value: "1000+",
    label: "millones de personas con discapacidad",
    icon: Users2
  },
  {
    value: "80%",
    label: "sin empleo formal",
    icon: Monitor
  },
  {
    value: "60%",
    label: "enfrentan barreras tecnológicas",
    icon: Briefcase
  },
  {
    value: "<10%",
    label: "países con regulaciones IA inclusivas",
    icon: ScrollText
  }
];

export default function StatisticsSection() {
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center p-6 rounded-lg bg-gray-50"
            >
              <div className="mb-4 text-primary">
                {stat.icon && <stat.icon className="w-8 h-8" />}
              </div>
              <h3 className="text-4xl font-bold mb-2 bg-gradient-to-r from-pink-500 to-blue-600 bg-clip-text text-transparent">
                {stat.value}
              </h3>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}