# WebIncluton

Hackathon de inclusión tecnológica.

## Despliegue en Railway

Este proyecto está configurado para ser desplegado en [Railway](https://railway.app/), una plataforma moderna para desplegar aplicaciones web.

### Pasos para desplegar en Railway

1. Crea una cuenta en [Railway](https://railway.app/)
2. Instala la CLI de Railway:
   ```bash
   npm i -g @railway/cli
   ```
3. Inicia sesión en Railway:
   ```bash
   railway login
   ```
4. Crea un nuevo proyecto:
   ```bash
   railway init
   ```
5. Conecta tu repositorio de GitHub o despliega directamente:
   ```bash
   railway up
   ```
6. Configura las variables de entorno en el panel de Railway

### Variables de entorno

Copia el archivo `.env.example` a `.env` y configura las variables según sea necesario.

### Comandos útiles

- `railway link`: Vincula tu proyecto local con un proyecto de Railway
- `railway status`: Muestra el estado de tu proyecto
- `railway logs`: Muestra los logs de tu aplicación
- `railway open`: Abre el panel de Railway para tu proyecto

## Desarrollo local

1. Clona el repositorio
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

## Tecnologías utilizadas

- Next.js
- React
- Tailwind CSS

## Características

- Next.js 13+
- TypeScript
- Tailwind CSS
- Componentes UI modernos
- GitFlow como flujo de trabajo

## Estructura del Proyecto

```
├── app/           # Directorio principal de Next.js
├── components/    # Componentes reutilizables
├── contexts/      # Contextos de React
├── hooks/         # Hooks personalizados
└── lib/           # Utilidades y configuraciones
```

## GitFlow

Este proyecto sigue la metodología GitFlow con las siguientes ramas:

- `main`: Código en producción
- `develop`: Rama de desarrollo
- `feature/*`: Nuevas características
- `release/*`: Preparación para producción
- `hotfix/*`: Correcciones urgentes

## Convenciones de Commits

Seguimos la convención de Conventional Commits:

- `feat:` Nuevas características
- `fix:` Correcciones
- `chore:` Tareas de mantenimiento
- `docs:` Documentación
- `style:` Cambios de estilo
- `refactor:` Refactorizaciones
- `test:` Pruebas
- `perf:` Mejoras de rendimiento 