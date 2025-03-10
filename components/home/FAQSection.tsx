'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const categories = [
  {
    title: "Sobre el Evento",
    questions: [
      {
        question: "¿Qué es INCLUTON?",
        answer: "INCLUTON es un hackathon enfocado en desarrollar soluciones tecnológicas inclusivas, reuniendo a desarrolladores, diseñadores y expertos en accesibilidad."
      },
      {
        question: "¿Cuándo y dónde se realiza?",
        answer: "El evento se realizará del 12 al 18 de Mayo de 2025, en formato híbrido con actividades virtuales y presenciales."
      },
      {
        question: "¿Quién puede participar?",
        answer: "Cualquier persona interesada en tecnología inclusiva puede participar, sin importar su nivel de experiencia."
      }
    ]
  },
  {
    title: "Participación",
    questions: [
      {
        question: "¿Cómo me registro?",
        answer: "Puedes registrarte a través de nuestro formulario en línea. El proceso es simple y gratuito."
      },
      {
        question: "¿Necesito un equipo?",
        answer: "Puedes participar individualmente o en equipo. Facilitamos la formación de equipos durante el evento."
      },
      {
        question: "¿Qué conocimientos requiero?",
        answer: "No se requieren conocimientos específicos, solo interés en crear tecnología inclusiva."
      }
    ]
  },
  {
    title: "Premios y Evaluación",
    questions: [
      {
        question: "¿Cómo se evalúan los proyectos?",
        answer: "Los proyectos son evaluados por un jurado experto según criterios de innovación, impacto social y viabilidad."
      },
      {
        question: "¿Qué premios hay?",
        answer: "Ofrecemos premios en diferentes categorías, incluyendo apoyo para el desarrollo y mentorías especializadas."
      }
    ]
  }
];

export default function FAQSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">Preguntas Frecuentes</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Encuentra respuestas a las preguntas más comunes sobre INCLUTON
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-lg p-6"
            >
              <h3 className="text-xl font-semibold mb-6">{category.title}</h3>
              <Accordion type="single" collapsible className="space-y-4">
                {category.questions.map((item, itemIndex) => (
                  <AccordionItem key={itemIndex} value={`item-${categoryIndex}-${itemIndex}`}>
                    <AccordionTrigger className="text-left">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent>
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}