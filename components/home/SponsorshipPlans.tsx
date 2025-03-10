'use client';

import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/theme-context';
import { Button } from '@/components/ui/button';
import { Check, Handshake, Users2, Video, Trophy, Download, Star } from 'lucide-react';
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { SponsorRegistrationForm } from '@/components/forms/sponsor/SponsorRegistrationForm';

const plans = [
  {
    name: "Tierra",
    price: "USD 1,000 + IVA",
    tagline: "Siembra el cambio desde las bases",
    description: "Plan perfecto para organizaciones que desean iniciar su compromiso con la inclusión tecnológica.",
    color: "#4CAF50",
    icon: <Users2 className="w-8 h-8" />,
    benefits: [
      "3-5 voluntarios para la organización",
      "Difusión en redes sociales",
      "Mentores técnicos de apoyo",
      "Presencia de marca digital",
      "Certificado Inclusivo 2025"
    ]
  },
  {
    name: "Agua",
    price: "USD 1,500 + IVA",
    tagline: "Fluye con la innovación inclusiva",
    description: "Diseñado para organizaciones que desean compartir su conocimiento y experiencia.",
    color: "#2196F3",
    icon: <Video className="w-8 h-8" />,
    benefits: [
      "Speakers especializados",
      "Workshops técnicos",
      "2 mentores expertos",
      "Espacios de trabajo",
      "Visibilidad en transmisión",
      "Networking directo"
    ]
  },
  {
    name: "Fuego",
    price: "USD 2,000 + IVA",
    tagline: "Enciende el potencial inclusivo",
    description: "Te posiciona como un motor principal de las soluciones ganadoras.",
    color: "#FF5722",
    icon: <Trophy className="w-8 h-8" />,
    benefits: [
      "Premios en tecnología/becas",
      "Programa de aceleración",
      "3 mentores senior",
      "Testing con usuarios",
      "Mención en inauguración",
      "Acceso banco de talentos"
    ]
  },
  {
    name: "Aire",
    price: "desde USD 5,000 + IVA",
    tagline: "Eleva el impacto a escala regional",
    description: "Para quienes desean maximizar su compromiso y liderar la transformación inclusiva en Latinoamérica.",
    color: "#03A9F4",
    icon: <Download className="w-8 h-8" />,
    benefits: [
      "Premios monetarios",
      "Becas de incubación",
      "Implementación garantizada",
      "5 mentores senior",
      "Naming de categoría",
      "Primera opción pilotos"
    ]
  },
  {
    name: "Éter",
    price: "Colaboración a medida",
    tagline: "Trasciende los límites convencionales",
    description: "Nuestra opción más flexible, diseñada para alianzas estratégicas únicas.",
    color: "#9C27B0",
    icon: <Star className="w-8 h-8" />,
    benefits: [
      "Presencia en Catálogo LATAM",
      "Certificación Inclusiva 2025",
      "Red de innovación inclusiva",
      "Reporte personalizado",
      "Menciones en medios"
    ]
  }
];

export default function SponsorshipPlans() {
  const theme = useTheme();
  const [showSponsorForm, setShowSponsorForm] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string>();

  const handlePlanSelection = (planName: string) => {
    setSelectedPlan(planName.toLowerCase());
    setShowSponsorForm(true);
  };

  return (
    <>
    <section className="py-20 bg-white">
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">Planes de Patrocinio</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Elige tu elemento y transforma el futuro de la tecnología inclusiva
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white border rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 min-h-[700px] flex flex-col"
              style={{ borderColor: plan.color }}
            > 
              <div 
                className="p-8 text-white relative overflow-hidden"
                style={{ backgroundColor: plan.color }}
              >
                <div className="absolute top-4 right-4 text-white">
                  {plan.icon}
                </div>
                <h3 className="text-3xl font-bold mb-2">{plan.name}</h3>
                <p className="text-2xl font-semibold">{plan.price}</p>
                <p className="text-sm mt-2 opacity-90">{plan.tagline}</p>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <p className="text-gray-600 mb-6 text-base">{plan.description}</p>
                <ul className="space-y-4 mb-6 flex-grow">
                  {plan.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 flex-shrink-0" style={{ color: plan.color }} />
                      <span className="text-base">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  size="lg"
                  className="w-full text-lg font-semibold py-8 shadow-xl hover:shadow-2xl transition-all duration-300 rounded-xl group hover:scale-105"
                  onClick={() => handlePlanSelection(plan.name)} 
                  style={{ backgroundColor: plan.color, color: 'white' }}
                >
                  <Handshake className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
                  Contratar Plan {plan.name}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-16 max-w-3xl mx-auto">
          <p className="text-gray-600 mb-8">
            Todos los planes son combinables y adaptables según tus objetivos y capacidades.
            ¡Conversemos para encontrar la mejor manera de colaborar!
          </p>
        </div>
      </div>
    </section>

    <Dialog open={showSponsorForm} onOpenChange={setShowSponsorForm}>
      <DialogContent className="sm:max-w-[800px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Contratación de Plan {selectedPlan}</DialogTitle>
        </DialogHeader>
        <SponsorRegistrationForm selectedPlan={selectedPlan} />
      </DialogContent>
    </Dialog>
    </>
  );
}