# Next.js Project

Este es un proyecto desarrollado con Next.js que incluye:

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

## Desarrollo

Para ejecutar el proyecto en modo desarrollo:

```bash
npm install
npm run dev
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