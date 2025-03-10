'use client';

import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { useEffect, useState } from 'react';

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex items-center space-x-2 bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-full transition-colors">
      <Switch
        id="theme-mode"
        checked={theme === 'dark'}
        onCheckedChange={(checked) => setTheme(checked ? 'dark' : 'light')}
        className="data-[state=checked]:bg-blue-600 data-[state=unchecked]:bg-orange-500"
        aria-label="Alternar modo oscuro"
      />
      <Label
        htmlFor="theme-mode"
        className="flex items-center text-sm font-medium cursor-pointer select-none text-gray-800 dark:text-white"
      >
        {theme === 'dark' ? (
          <Moon className="h-5 w-5 mr-2 text-blue-600" />
        ) : (
          <Sun className="h-5 w-5 mr-2 text-orange-500" />
        )}
        {theme === 'dark' ? 'Modo oscuro' : 'Modo claro'}
      </Label>
    </div>
  );
}