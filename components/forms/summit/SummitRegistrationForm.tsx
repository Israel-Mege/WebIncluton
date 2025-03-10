'use client';

import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { FormWrapper } from '../FormWrapper';
import { FormField } from '../FormField';
import { useState } from 'react';

const summitFormSchema = z.object({
  fullName: z.string()
    .min(3, 'El nombre debe tener al menos 3 caracteres')
    .max(100, 'El nombre no puede exceder 100 caracteres'),
  email: z.string()
    .email('Ingresa un email válido'),
  organization: z.string()
    .optional(),
  role: z.string()
    .min(2, 'El rol es requerido'),
  interests: z.string()
    .min(1, 'Selecciona al menos un área de interés'),
  accessibilityNeeds: z.string()
    .optional()
});

type SummitFormData = z.infer<typeof summitFormSchema>;

const interestOptions = [
  { value: 'ux-ui', label: 'Diseño UX/UI' },
  { value: 'development', label: 'Desarrollo' },
  { value: 'accessibility', label: 'Accesibilidad' },
  { value: 'social-innovation', label: 'Innovación social' }
];

export function SummitRegistrationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string>();
  const [success, setSuccess] = useState(false);

  const methods = useForm<SummitFormData>({
    resolver: zodResolver(summitFormSchema),
    defaultValues: {
      fullName: '',
      email: '',
      organization: '',
      role: '',
      interests: '',
      accessibilityNeeds: ''
    }
  });

  const onSubmit = async (data: SummitFormData) => {
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
        description="Te hemos enviado un email con los detalles de tu participación"
        success="Tu registro para la Cumbre de Inclusión Tecnológica ha sido confirmado."
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
      title="Registro para la Cumbre"
      description="Únete a la Cumbre de Inclusión Tecnológica y sé parte del cambio"
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
            placeholder="Nombre de tu organización"
            description="Opcional - Empresa o institución a la que representas"
          />
          
          <FormField
            name="role"
            label="Rol/Ocupación"
            placeholder="Tu rol o ocupación actual"
            required
          />
          
          <FormField
            name="interests"
            label="Áreas de interés"
            type="select"
            options={interestOptions}
            placeholder="Selecciona tu área principal de interés"
            required
          />
          
          <FormField
            name="accessibilityNeeds"
            label="Necesidades de accesibilidad"
            type="textarea"
            placeholder="Describe si necesitas algún apoyo específico para participar"
            description="Ayúdanos a hacer el evento más inclusivo"
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