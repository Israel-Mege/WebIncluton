'use client';

import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { FormWrapper } from '../FormWrapper';
import { FormField } from '../FormField';
import { useState } from 'react';

const speakerFormSchema = z.object({
  fullName: z.string()
    .min(3, 'El nombre debe tener al menos 3 caracteres')
    .max(100, 'El nombre no puede exceder 100 caracteres'),
  email: z.string()
    .email('Email inválido'),
  organization: z.string()
    .min(2, 'La organización es requerida'),
  role: z.string()
    .min(2, 'El rol es requerido'),
  talkTitle: z.string()
    .min(5, 'El título debe tener al menos 5 caracteres')
    .max(100, 'El título no puede exceder 100 caracteres'),
  talkDescription: z.string()
    .min(50, 'La descripción debe tener al menos 50 caracteres')
    .max(500, 'La descripción no puede exceder 500 caracteres'),
  talkType: z.string()
    .min(1, 'Selecciona el tipo de presentación'),
  experience: z.string()
    .min(50, 'Cuéntanos más sobre tu experiencia')
});

type SpeakerFormData = z.infer<typeof speakerFormSchema>;

const talkTypeOptions = [
  { value: 'workshop', label: 'Taller práctico' },
  { value: 'talk', label: 'Charla' },
  { value: 'panel', label: 'Panel de discusión' }
];

export function SpeakerRegistrationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string>();
  const [success, setSuccess] = useState(false);

  const methods = useForm<SpeakerFormData>({
    resolver: zodResolver(speakerFormSchema),
    defaultValues: {
      fullName: '',
      email: '',
      organization: '',
      role: '',
      talkTitle: '',
      talkDescription: '',
      talkType: '',
      experience: ''
    }
  });

  const onSubmit = async (data: SpeakerFormData) => {
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
        title="¡Propuesta Recibida!"
        description="Gracias por tu interés en ser expositor en INCLUTON 2025"
        success="Evaluaremos tu propuesta y te contactaremos pronto."
      >
        <div className="text-center">
          <p className="text-gray-600 mb-6">
            Te hemos enviado un email con la confirmación de recepción.
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
      title="Registro de Expositor"
      description="Comparte tu conocimiento y experiencia en INCLUTON 2025"
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
            name="organization"
            label="Organización"
            placeholder="Empresa o institución"
            required
          />
          
          <FormField
            name="role"
            label="Cargo actual"
            placeholder="Tu rol o cargo"
            required
          />
          
          <FormField
            name="talkType"
            label="Tipo de presentación"
            type="select"
            options={talkTypeOptions}
            placeholder="Selecciona el formato"
            required
          />
          
          <FormField
            name="talkTitle"
            label="Título de la presentación"
            placeholder="Título descriptivo de tu charla o taller"
            required
          />
          
          <FormField
            name="talkDescription"
            label="Descripción"
            type="textarea"
            placeholder="Describe el contenido y objetivos de tu presentación"
            required
          />
          
          <FormField
            name="experience"
            label="Experiencia relevante"
            type="textarea"
            placeholder="Cuéntanos sobre tu experiencia en el tema"
            required
          />
          
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-pink-500 to-blue-600 hover:from-pink-600 hover:to-blue-700 text-white"
          >
            {isSubmitting ? 'Procesando...' : 'Enviar propuesta'}
          </Button>
        </form>
      </FormProvider>
    </FormWrapper>
  );
}