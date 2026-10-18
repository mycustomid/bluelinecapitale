import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://bluelinecapitale.com',
  output: 'static',
  trailingSlash: 'always',
  build: { format: 'directory' },
  i18n: {
    locales: ['en', 'fr'],
    defaultLocale: 'en',
    routing: { prefixDefaultLocale: true }
  }
});
