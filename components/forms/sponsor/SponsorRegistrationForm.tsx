'use client';

import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { FormWrapper } from '../FormWrapper';
import { FormField } from '../FormField';
import { useState } from 'react';

const sponsorFormSchema = z.object({
  companyName: z.string()
    .min(2, 'El nombre de la empresa es requerido')
    .max(100, 'El nombre no puede exceder 100 caracteres'),
  contactName: z.string()
    .min(3, 'El nombre del contacto es requerido'),
  email: z.string()
    .email('Email inválido'),
  phone: z.string()
    .min(10, 'Teléfono inválido'),
  plan: z.string()
    .min(1, 'Selecciona un plan de patrocinio'),
  message: z.string()
    .optional()
});

type SponsorFormData = z.infer<typeof sponsorFormSchema>;

const planOptions = [
  { value: 'tierra', label: 'Plan Tierra - USD 1,000' },
  { value: 'agua', label: 'Plan Agua - USD 1,500' },
  { value: 'fuego', label: 'Plan Fuego - USD 2,000' },
  { value: 'aire', label: 'Plan Aire - USD 5,000' },
  { value: 'eter', label: 'Plan Éter - Personalizado' }
];

interface SponsorRegistrationFormProps {
  selectedPlan?: string;
}

export function SponsorRegistrationForm({ selectedPlan }: SponsorRegistrationFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string>();
  const [success, setSuccess] = useState(false);

  const methods = useForm<SponsorFormData>({
    resolver: zodResolver(sponsorFormSchema),
    defaultValues: {
      companyName: '',
      contactName: '',
      email: '',
      phone: '',
      plan: selectedPlan || '',
      message: ''
    }
  });

  const onSubmit = async (data: SponsorFormData) => {
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
        description="Gracias por tu interés en patrocinar INCLUTON 2025"
        success="Te contactaremos pronto para coordinar los siguientes pasos."
      >
        <div className="text-center">
          <p className="text-gray-600 mb-6">
            Hemos enviado un email con la información detallada del plan seleccionado.
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
      title="Registro de Patrocinador"
      description="Únete a nuestra misión de hacer la tecnología accesible para todos"
      error={error}
    >
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            name="companyName"
            label="Nombre de la empresa"
            placeholder="Nombre de tu empresa"
            required
          />
          
          <FormField
            name="contactName"
            label="Nombre del contacto"
            placeholder="Persona responsable"
            required
          />
          
          <FormField
            name="email"
            label="Email corporativo"
            type="email"
            placeholder="email@empresa.com"
            required
          />
          
          <FormField
            name="phone"
            label="Teléfono de contacto"
            placeholder="+1234567890"
            required
          />
          
          <FormField
            name="plan"
            label="Plan de patrocinio"
            type="select"
            options={planOptions}
            placeholder="Selecciona un plan"
            required
          />
          
          <FormField
            name="message"
            label="Mensaje adicional"
            type="textarea"
            placeholder="¿Tienes alguna pregunta o requerimiento especial?"
          />
          
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-pink-500 to-blue-600 hover:from-pink-600 hover:to-blue-700 text-white"
          >
            {isSubmitting ? 'Procesando...' : 'Completar registro'}
          </Button>
        </form>
      </FormProvider>
    </FormWrapper>
  );
}