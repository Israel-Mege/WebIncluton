import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Redirigir a la página principal
    router.push('/');
  }, []);

  return (
    <div>
      <h1>Cargando...</h1>
    </div>
  );
} 