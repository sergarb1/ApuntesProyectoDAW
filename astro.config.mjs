import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://sergarb1.github.io',
  base: '/ApuntesProyectoDAW',
  integrations: [
    starlight({
      title: 'Apuntes Proyecto Intermodular DAW I y II',
      description: 'Guía Didáctica de Proyecto Intermodular I y II - Desarrollo de Aplicaciones Web (DAW) · Curso 2026-2027',
      logo: {
        src: './src/assets/logo.svg',
        replacesTitle: false,
      },
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/sergarb1/ApuntesProyectoDAW' },
      ],
      editLink: {
        baseUrl: 'https://github.com/sergarb1/ApuntesProyectoDAW/edit/main',
      },
      lastUpdated: true,
      pagination: true,
      pagefind: true,
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 4,
      },
      customCss: [
        './src/styles/custom.css',
      ],
      head: [
        {
          tag: 'link',
          attrs: {
            rel: 'icon',
            type: 'image/svg+xml',
            href: '/pi-guia-didactica/favicon.svg',
          },
        },
        {
          tag: 'meta',
          attrs: {
            name: 'license',
            content: 'CC BY-SA 4.0',
          },
        },
      ],
      components: {
        Footer: './src/components/Footer.astro',
        Hero: './src/components/Hero.astro',
      },
      sidebar: [
        {
          label: 'Inicio',
          link: '/',
        },
        {
          label: 'Guía Didáctica',
          collapsed: false,
          items: [
            { label: 'Continuidad PI1 → PI2', link: '/continuidad' },
            {
              label: 'PI1 - Proyecto Intermodular I',
              collapsed: false,
              items: [
                { label: 'Introducción', link: '/pi1/' },
                { label: 'Competencias', link: '/pi1/competencias' },
                {
                  label: 'Fases del Proyecto',
                  items: [
                    { label: 'Reto 1: Identificación', link: '/pi1/fases/reto-1' },
                    { label: 'Reto 2: Análisis', link: '/pi1/fases/reto-2' },
                    { label: 'Reto 3: Diseño', link: '/pi1/fases/reto-3' },
                    { label: 'Reto 4: Implementación MVP', link: '/pi1/fases/reto-4' },
                    { label: 'Reto 5: Presentación', link: '/pi1/fases/reto-5' },
                  ],
                },
                { label: 'Evaluación', link: '/pi1/evaluacion' },
              ],
            },
            {
              label: 'PI2 - Proyecto Intermodular II',
              collapsed: false,
              items: [
                { label: 'Introducción', link: '/pi2/' },
                { label: 'Competencias', link: '/pi2/competencias' },
                {
                  label: 'Sprints',
                  items: [
                    { label: 'Sprint 0: Auditoría', link: '/pi2/fases/sprint-0' },
                    { label: 'Sprint 1: Arquitectura', link: '/pi2/fases/sprint-1' },
                    { label: 'Sprint 2: Frontend', link: '/pi2/fases/sprint-2' },
                    { label: 'Sprint 3: Backend y APIs', link: '/pi2/fases/sprint-3' },
                    { label: 'Sprint 4: Testing', link: '/pi2/fases/sprint-4' },
                    { label: 'Sprint 5: Despliegue', link: '/pi2/fases/sprint-5' },
                    { label: 'Sprint 6: Defensa', link: '/pi2/fases/sprint-6' },
                  ],
                },
                { label: 'Entregables', link: '/pi2/entregables' },
                { label: 'Evaluación', link: '/pi2/evaluacion' },
              ],
            },
            { label: 'Metodología', link: '/metodologia' },
            { label: 'Herramientas', link: '/herramientas' },
            { label: 'Recursos', link: '/recursos' },
            { label: 'Profesores', link: '/profesores' },
            { label: 'Licencia', link: '/licencia' },
            { label: 'Preguntas Frecuentes', link: '/faq' },
            { label: 'Ideas para Proyectos', link: '/ideas' },
          ],
        },
        {
          label: 'Apuntes',
          collapsed: true,
          items: [
            {
              label: 'Apuntes PI1',
              collapsed: true,
              items: [
                { label: 'Introducción', link: '/apuntes-pi1/' },
                { label: 'U1. Fundamentos de Programación', link: '/apuntes-pi1/u1-fundamentos-programacion' },
                { label: 'U2. Programación Orientada a Objetos', link: '/apuntes-pi1/u2-poo' },
                { label: 'U3. Diseño de Bases de Datos', link: '/apuntes-pi1/u3-diseno-bd' },
                { label: 'U4. Lenguajes de Marcas', link: '/apuntes-pi1/u4-lenguajes-marcas' },
                { label: 'U5. Desarrollo Frontend Básico', link: '/apuntes-pi1/u5-frontend-basico' },
                { label: 'U6. Desarrollo Backend Básico', link: '/apuntes-pi1/u6-backend-basico' },
                { label: 'U7. Control de Versiones con Git', link: '/apuntes-pi1/u7-git' },
                { label: 'U8. Metodologías y Herramientas', link: '/apuntes-pi1/u8-metodologias' },
              ],
            },
            {
              label: 'Apuntes PI2',
              collapsed: true,
              items: [
                { label: 'Introducción', link: '/apuntes-pi2/' },
                { label: 'U1. Arquitectura Web y Patrones', link: '/apuntes-pi2/u1-arquitectura-web' },
                { label: 'U2. Frontend con Framework', link: '/apuntes-pi2/u2-frontend-framework' },
                { label: 'U3. APIs REST', link: '/apuntes-pi2/u3-apis-rest' },
                { label: 'U4. Diseño de Interfaces UI/UX', link: '/apuntes-pi2/u4-ui-ux' },
                { label: 'U5. Testing Automatizado', link: '/apuntes-pi2/u5-testing' },
                { label: 'U6. Seguridad en Aplicaciones Web', link: '/apuntes-pi2/u6-seguridad' },
                { label: 'U7. Docker y Contenerización', link: '/apuntes-pi2/u7-docker' },
                { label: 'U8. Despliegue Cloud y CI/CD', link: '/apuntes-pi2/u8-despliegue-ci-cd' },
                { label: 'U9. Metodologías Ágiles Avanzadas', link: '/apuntes-pi2/u9-metodologias-agiles' },
              ],
            },
          ],
        },
      ],
    }),
    mdx(),
  ],
});
