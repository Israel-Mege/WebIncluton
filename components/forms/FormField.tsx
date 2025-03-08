'use client';

import { useFormContext } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import React, { forwardRef } from 'react';

interface SelectOption {
  value: string;
  label: string;
}

interface FormFieldProps {
  name: string;
  label: string;
  type?: 'text' | 'email' | 'textarea' | 'select';
  placeholder?: string;
  required?: boolean;
  options?: SelectOption[];
  className?: string;
  description?: string;
}

export const FormField = forwardRef<HTMLInputElement, FormFieldProps>(({
  name,
  label,
  type = 'text',
  placeholder,
  required = false,
  options = [],
  className,
  description
}, ref) => {

  const { register, formState: { errors }, setValue } = useFormContext();
  const error = errors[name]?.message as string;

  return (
    <div className={cn("space-y-2", className)}>
      <Label htmlFor={name} className="flex items-baseline gap-1">
        {label}
        {required && <span className="text-red-500 text-sm">*</span>}
      </Label>
      
      {description && (
        <p className="text-sm text-gray-500 mb-2">{description}</p>
      )}

      {type === 'textarea' ? (
        <Textarea
          id={name}
          placeholder={placeholder}
          {...register(name, { required })}
          className={cn(
            "min-h-[100px]",
            error && "border-red-500 focus-visible:ring-red-500"
          )}
          aria-invalid={!!error}
          aria-describedby={error ? `${name}-error` : undefined}
        />
      ) : type === 'select' ? ( 
        <Select onValueChange={(value) => setValue(name, value)}>
          <SelectTrigger
            className={cn(
              error && "border-red-500 focus-visible:ring-red-500"
            )}
          >
            <SelectValue placeholder={placeholder} />
          </SelectTrigger>
          <SelectContent>
            {options.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      ) : (
        <Input
          id={name}
          type={type}
          {...register(name, { required })}
          placeholder={placeholder}
          className={cn(
            error && "border-red-500 focus-visible:ring-red-500"
          )}
          aria-invalid={!!error}
          aria-describedby={error ? `${name}-error` : undefined}
        />
      )}

      {error && (
        <p
          id={`${name}-error`}
          className="text-sm text-red-500 mt-1"
          role="alert"
        >
          {error}
        </p>
      )}
    </div>
  );
});