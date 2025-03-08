'use client';

import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { FormWrapper } from '../FormWrapper';
import { FormField } from '../FormField';
import { useState } from 'react';
import { Disc as Discord } from 'lucide-react';

const soloParticipantSchema = z.object({
  fullName: z.string()
    .min(3, 'El nombre debe tener al menos 3 caracteres')
    .max(100, 'El nombre no puede exceder 100 caracteres'),
  email: z.string()
    .email('Email inválido'),
  role: z.string()
    .min(1, 'Selecciona tu rol'),
  experience: z.string()
    .min(50, 'Cuéntanos más sobre tu experiencia')
    .max(500, 'La descripción no puede exceder 500 caracteres'),
  interests: z.string()
    .min(50, 'Cuéntanos qué tipo de proyecto te gustaría desarrollar')
    .max(500, 'La descripción no puede exceder 500 caracteres')
});

type SoloParticipantData = z.infer<typeof soloParticipantSchema>;

const roleOptions = [
  { value: 'developer', label: 'Desarrollador' },
  { value: 'designer', label: 'Diseñador' },
  { value: 'pm', label: 'Project Manager' },
  { value: 'accessibility', label: 'Especialista en Accesibilidad' }
];

export function SoloParticipantForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string>();
  const [success, setSuccess] = useState(false);

  const methods = useForm<SoloParticipantData>({
    resolver: zodResolver(soloParticipantSchema),
    defaultValues: {
      fullName: '',
      email: '',
      role: '',
      experience: '',
      interests: ''
    }
  });

  const onSubmit = async (data: SoloParticipantData) => {
    setIsSubmitting(true);
    setError(undefined);
    
    try {
      // TODO: Implement API call
      console.log('Form data:', data);
      setSuccess(true);
    } catch (err) {
      setError('Hubo un error al procesar tu registro. Por favor intenta nuevamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (success) {
    return (
      <FormWrapper
        title="¡Registro Exitoso!"
        description="¡Bienvenido a INCLUTON 2025!"
        success="Te hemos enviado un email con los siguientes pasos."
      >
        <div className="text-center space-y-6">
          <p className="text-gray-600">
            Para encontrar el equipo perfecto, únete a nuestro servidor de Discord donde podrás:
          </p>
          <ul className="text-left space-y-3 max-w-md mx-auto text-gray-600">
            <li className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full" />
              <span>Conocer otros participantes</span>
            </li>
            <li className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full" />
              <span>Formar equipo según tus intereses</span>
            </li>
            <li className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full" />
              <span>Recibir mentorías y apoyo</span>
            </li>
            <li className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full" />
              <span>Participar en eventos exclusivos</span>
            </li>
          </ul>
          <Button
            onClick={() => window.location.href = 'https://discord.gg/incluton'}
            className="bg-[#5865F2] hover:bg-[#4752C4] text-white font-semibold px-8 py-6 text-lg w-full md:w-auto"
          >
            <Discord className="w-5 h-5 mr-2" />
            Unirme al Discord
          </Button>
        </div>
      </FormWrapper>
    );
  }

  return (
    <FormWrapper
      title="Registro Individual"
      description="Encuentra el equipo perfecto para crear tecnología inclusiva"
      error={error}
    >
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            name="fullName"
            label="Nombre completo"
            placeholder="Tu nombre completo"
            required
          />
          
          <FormField
            name="email"
            label="Email"
            type="email"
            placeholder="tu@email.com"
            required
          />
          
          <FormField
            name="role"
            label="Rol principal"
            type="select"
            options={roleOptions}
            placeholder="Selecciona tu rol"
            required
          />
          
          <FormField
            name="experience"
            label="Experiencia relevante"
            type="textarea"
            placeholder="Cuéntanos sobre tu experiencia en tecnología, accesibilidad o proyectos similares..."
            required
          />
          
          <FormField
            name="interests"
            label="Intereses y expectativas"
            type="textarea"
            placeholder="¿Qué tipo de proyecto te gustaría desarrollar? ¿Qué habilidades buscas en tus compañeros de equipo?"
            required
          />
          
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-pink-500 to-blue-600 hover:from-pink-600 hover:to-blue-700 text-white text-lg font-semibold py-6"
          >
            {isSubmitting ? 'Procesando...' : 'Registrarme'}
          </Button>
        </form>
      </FormProvider>
    </FormWrapper>
  );
}