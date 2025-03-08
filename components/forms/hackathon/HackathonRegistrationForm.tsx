'use client';

import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { FormWrapper } from '../FormWrapper';
import { FormField } from '../FormField';
import { useState } from 'react';

const hackathonFormSchema = z.object({
  teamName: z.string()
    .min(3, 'El nombre del equipo debe tener al menos 3 caracteres')
    .max(50, 'El nombre del equipo no puede exceder 50 caracteres'),
  challenge: z.string()
    .min(1, 'Selecciona un desafío'),
  projectDescription: z.string()
    .min(50, 'La descripción debe tener al menos 50 caracteres')
    .max(500, 'La descripción no puede exceder 500 caracteres'),
  members: z.array(z.object({
    name: z.string().min(3, 'El nombre debe tener al menos 3 caracteres'),
    email: z.string().email('Email inválido'),
    role: z.string().min(1, 'Selecciona un rol')
  })).min(3, 'El equipo debe tener al menos 3 miembros').max(5, 'El equipo no puede tener más de 5 miembros')
});

type HackathonFormData = z.infer<typeof hackathonFormSchema>;

const roleOptions = [
  { value: 'developer', label: 'Desarrollador' },
  { value: 'designer', label: 'Diseñador' },
  { value: 'pm', label: 'Project Manager' },
  { value: 'accessibility', label: 'Especialista en Accesibilidad' }
];

const challengeOptions = [
  { value: 'voice-nav', label: 'Navegación por voz' },
  { value: 'real-time-captions', label: 'Subtítulos en tiempo real' },
  { value: 'gesture-control', label: 'Control gestual' },
  { value: 'adaptive-interface', label: 'Interfaz adaptativa' },
  { value: 'multimodal-assistant', label: 'Asistente multimodal' }
];

export function HackathonRegistrationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string>();
  const [success, setSuccess] = useState(false);

  const methods = useForm<HackathonFormData>({
    resolver: zodResolver(hackathonFormSchema),
    defaultValues: {
      teamName: '',
      challenge: '',
      projectDescription: '',
      members: [{
        name: '',
        email: '',
        role: ''
      }]
    }
  });

  const onSubmit = async (data: HackathonFormData) => {
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
        description="Tu equipo ha sido registrado para la hackaton"
        success="Te hemos enviado un email con los siguientes pasos."
      >
        <div className="text-center">
          <p className="text-gray-600 mb-6">
            Revisa tu bandeja de entrada para más información sobre el evento.
          </p>
          <Button
            onClick={() => window.location.href = '/'}
            className="bg-gradient-to-r from-pink-500 to-blue-600 hover:from-pink-600 hover:to-blue-700 text-white"
          >
            Volver al inicio
          </Button>
        </div>
      </FormWrapper>
    );
  }

  return (
    <FormWrapper
      title="Registro de Equipo"
      description="Registra a tu equipo para participar en la hackaton"
      error={error}
    >
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            name="teamName"
            label="Nombre del equipo"
            placeholder="Nombre de tu equipo"
            required
          />
          
          <FormField
            name="challenge"
            label="Desafío seleccionado"
            type="select"
            options={challengeOptions}
            placeholder="Selecciona el desafío"
            required
          />
          
          <FormField
            name="projectDescription"
            label="Descripción del proyecto"
            type="textarea"
            placeholder="Describe brevemente tu propuesta de solución"
            required
          />
          
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Miembros del equipo</h3>
            {[0, 1, 2].map((index) => (
              <div key={index} className="p-4 bg-gray-50 rounded-lg space-y-4">
                <h4 className="font-medium">Miembro {index + 1}</h4>
                <FormField
                  name={`members.${index}.name`}
                  label="Nombre completo"
                  placeholder="Nombre del participante"
                  required
                />
                <FormField
                  name={`members.${index}.email`}
                  label="Email"
                  type="email"
                  placeholder="email@ejemplo.com"
                  required
                />
                <FormField
                  name={`members.${index}.role`}
                  label="Rol en el equipo"
                  type="select"
                  options={roleOptions}
                  placeholder="Selecciona el rol"
                  required
                />
              </div>
            ))}
          </div>
          
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-pink-500 to-blue-600 hover:from-pink-600 hover:to-blue-700 text-white"
          >
            {isSubmitting ? 'Procesando...' : 'Registrar Equipo'}
          </Button>
        </form>
      </FormProvider>
    </FormWrapper>
  );
}