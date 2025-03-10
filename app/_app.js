import { useEffect } from 'react';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    // Forzar la carga de la página inicial
    if (router.pathname === '/') {
      router.push('/');
    }
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp; 