# MD Editor Frontend

Este proyecto es la interfaz frontend de una aplicación de edición y visualización de Markdown, desarrollada con tecnologías modernas para ofrecer una experiencia de usuario rápida y eficiente.

## Tecnologías principales
- **React** (con TypeScript)
- **Vite** (bundler y servidor de desarrollo)
- **Tailwind CSS** (estilos utilitarios)

## Estructura del proyecto
- `src/` — Código fuente principal
  - `components/` — Componentes reutilizables de UI y páginas
  - `hooks/` — Custom hooks de React
  - `lib/` — Utilidades
  - `pages/` — Vistas principales
  - `services/` — Lógica de acceso a APIs
  - `store/` — Estado global (ej: usuarios, posts)
  - `types/` — Definiciones de tipos TypeScript
- `public/` — Recursos estáticos

## Clonar el repositorio

```sh
git clone <URL_DEL_REPOSITORIO>
cd md-editor-frontend
```

## Configuración del entorno

Debes crear un archivo `.env` en la raíz del proyecto con las siguientes variables (ajusta los valores según tu backend). En caso de no establecer backend alguno, automáticamente utilizará tu localhost en el puerto 8000:

```env
VITE_API_URL=http://localhost:3000/api
```

## Instalación de dependencias

```sh
npm install
```

## Levantar el proyecto en local

```sh
npm run dev
```

Esto iniciará el servidor de desarrollo en [http://localhost:5173](http://localhost:5173) (o el puerto que indique Vite).

---

Si tienes dudas, revisa los comentarios en el código o consulta la documentación de las tecnologías empleadas.
