'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { AlertCircle, CheckCircle2 } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface FormWrapperProps {
  children: React.ReactNode;
  title: string;
  description: string;
  error?: string;
  success?: string;
  className?: string;
}

export function FormWrapper({
  children,
  title,
  description,
  error,
  success,
  className
}: FormWrapperProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn("w-full max-w-2xl mx-auto overflow-y-auto", className)}
    >
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-3">{title}</h2>
        <p className="text-gray-600">{description}</p>
      </div>

      {error && (
        <Alert variant="destructive" className="mb-6">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {success && (
        <Alert className="mb-6 border-green-500 text-green-700">
          <CheckCircle2 className="h-4 w-4" />
          <AlertTitle>¡Éxito!</AlertTitle>
          <AlertDescription>{success}</AlertDescription>
        </Alert>
      )}

      {children}
    </motion.div>
  );
}