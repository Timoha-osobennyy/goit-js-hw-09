import { defineConfig } from 'vite';
import htmlInject from 'vite-plugin-html-inject';
import path from 'path';

export default defineConfig({
  plugins: [
    htmlInject({
      // Обрабатывает все .html файлы и вставляет partials
      injectData: {},
    }),
  ],
  root: '.',
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        gallery: path.resolve(__dirname, 'gallery.html'),
        form: path.resolve(__dirname, 'form.html'),
      },
    },
  },
});
