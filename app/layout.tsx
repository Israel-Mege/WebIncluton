import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/contexts/theme-context';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'INCLUTON 2025 - Transforma el futuro con tecnología inclusiva',
  description: 'Únete al hackathon más inclusivo de 2025. Del 12 al 18 de Mayo, creando tecnología accesible para todos.',
  keywords: 'hackathon, inclusión, tecnología, accesibilidad, innovación social',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
