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
          label: 'Continuidad PI1 → PI2',
          link: '/continuidad',
        },
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
        {
          label: 'Metodología',
          link: '/metodologia',
        },
        {
          label: 'Herramientas',
          link: '/herramientas',
        },
        {
          label: 'Recursos',
          link: '/recursos',
        },
        {
          label: 'Profesores',
          link: '/profesores',
        },
        {
          label: 'Licencia',
          link: '/licencia',
        },
        {
          label: 'Preguntas Frecuentes',
          link: '/faq',
        },
        {
          label: 'Ideas para Proyectos',
          link: '/ideas',
        },
      ],
    }),
    mdx(),
  ],
});
