'use client';

import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { FormWrapper } from '../FormWrapper';
import { FormField } from '../FormField';
import { useState } from 'react';

const mentorFormSchema = z.object({
  fullName: z.string()
    .min(3, 'El nombre debe tener al menos 3 caracteres')
    .max(100, 'El nombre no puede exceder 100 caracteres'),
  email: z.string()
    .email('Email inválido'),
  organization: z.string()
    .min(2, 'La organización es requerida'),
  role: z.string()
    .min(2, 'El rol es requerido'),
  expertise: z.string()
    .min(1, 'Selecciona tu área de expertise'),
  availability: z.string()
    .min(1, 'Selecciona tu disponibilidad'),
  experience: z.string()
    .min(50, 'Cuéntanos más sobre tu experiencia')
    .max(500, 'La descripción no puede exceder 500 caracteres'),
  motivation: z.string()
    .min(50, 'Cuéntanos por qué quieres ser mentor')
    .max(500, 'La descripción no puede exceder 500 caracteres')
});

type MentorFormData = z.infer<typeof mentorFormSchema>;

const expertiseOptions = [
  { value: 'ux-ui', label: 'Diseño UX/UI' },
  { value: 'frontend', label: 'Desarrollo Frontend' },
  { value: 'backend', label: 'Desarrollo Backend' },
  { value: 'accessibility', label: 'Accesibilidad Digital' },
  { value: 'product', label: 'Gestión de Producto' }
];

const availabilityOptions = [
  { value: 'full', label: 'Toda la semana' },
  { value: 'partial', label: 'Días específicos' },
  { value: 'flexible', label: 'Horario flexible' }
];

export function MentorRegistrationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string>();
  const [success, setSuccess] = useState(false);

  const methods = useForm<MentorFormData>({
    resolver: zodResolver(mentorFormSchema),
    defaultValues: {
      fullName: '',
      email: '',
      organization: '',
      role: '',
      expertise: '',
      availability: '',
      experience: '',
      motivation: ''
    }
  });

  const onSubmit = async (data: MentorFormData) => {
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
        description="Gracias por tu interés en ser mentor en INCLUTON 2025"
        success="Evaluaremos tu perfil y te contactaremos pronto."
      >
        <div className="text-center">
          <p className="text-gray-600 mb-6">
            Te hemos enviado un email con más información sobre el programa de mentorías.
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
      title="Registro de Mentor"
      description="Comparte tu experiencia y guía a los equipos participantes"
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
            name="expertise"
            label="Área de expertise"
            type="select"
            options={expertiseOptions}
            placeholder="Selecciona tu especialidad"
            required
          />
          
          <FormField
            name="availability"
            label="Disponibilidad"
            type="select"
            options={availabilityOptions}
            placeholder="Selecciona tu disponibilidad"
            required
          />
          
          <FormField
            name="experience"
            label="Experiencia relevante"
            type="textarea"
            placeholder="Describe tu experiencia en el área seleccionada"
            required
          />
          
          <FormField
            name="motivation"
            label="Motivación"
            type="textarea"
            placeholder="¿Por qué quieres ser mentor en INCLUTON?"
            required
          />
          
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-pink-500 to-blue-600 hover:from-pink-600 hover:to-blue-700 text-white"
          >
            {isSubmitting ? 'Procesando...' : 'Enviar postulación'}
          </Button>
        </form>
      </FormProvider>
    </FormWrapper>
  );
}