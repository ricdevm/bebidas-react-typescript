# Buscador de Bebidas - React + TypeScript

Este proyecto es una aplicación web para buscar recetas de bebidas, guardar favoritas y generar recetas usando inteligencia artificial. Está construido con un stack moderno de tecnologías frontend.

## Tecnologías utilizadas

- **React 19**: Librería principal para la construcción de interfaces de usuario.
- **TypeScript**: Tipado estático para mayor robustez y mantenibilidad.
- **Vite**: Herramienta de desarrollo y bundler ultrarrápido.
- **Tailwind CSS**: Framework de utilidades CSS para estilos rápidos y responsivos.
- **Zustand**: Manejo de estado global simple y eficiente.
- **Zod**: Validación y tipado de esquemas de datos.
- **Headless UI**: Componentes accesibles y sin estilos para React.
- **Heroicons**: Íconos SVG listos para usar en React.
- **Axios**: Cliente HTTP para consumir APIs.
- **React Router DOM**: Enrutamiento declarativo para aplicaciones React.
- **@openrouter/ai-sdk-provider** y **ai**: Integración con modelos de IA para generación de recetas.

## Características

- **Búsqueda de recetas** por nombre, ingrediente y categoría.
- **Visualización de detalles** de cada bebida en un modal.
- **Favoritos**: Guarda y elimina recetas favoritas (persistencia en localStorage).
- **Notificaciones**: Mensajes de éxito y error.
- **Generación de recetas con IA**: Solicita recetas personalizadas usando inteligencia artificial.
- **Diseño responsive** y moderno.

## Estructura del proyecto

```
.
├── public/
│   ├── bg.jpg
│   └── logo.svg
├── src/
│   ├── components/
│   ├── layouts/
│   ├── lib/
│   ├── pages/
│   ├── schemas/
│   ├── services/
│   ├── stores/
│   ├── types/
│   ├── index.css
│   ├── main.tsx
│   └── router.tsx
├── .env
├── package.json
├── tsconfig.json
├── vite.config.ts
└── ...
```

## Instalación y uso

1. **Clona el repositorio**  
   ```sh
   git clone https://github.com/tu-usuario/bebidas-react-typescript.git
   cd bebidas-react-typescript
   ```

2. **Instala las dependencias**  
   ```sh
   npm install
   ```

3. **Configura las variables de entorno**  
   Crea un archivo `.env` y agrega tu clave de OpenRouter:
   ```
   VITE_OPENROUTER_KEY=tu_clave
   ```

4. **Inicia el servidor de desarrollo**  
   ```sh
   npm run dev
   ```

5. **Abre la aplicación**  
   Ve a [http://localhost:5173](http://localhost:5173) en tu navegador.

## Scripts útiles

- `npm run dev`: Inicia el servidor de desarrollo.
- `npm run build`: Compila la aplicación para producción.
- `npm run preview`: Previsualiza la build de producción.
- `npm run lint`: Ejecuta el linter.

## Licencia

MIT

---

Desarrollado por Ricdev