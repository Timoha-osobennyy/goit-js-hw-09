import { defineConfig } from 'vite';
import htmlInject from 'vite-plugin-html-inject';
import path from 'path';

export default defineConfig({
  base: '/goit-js-hw-09/', // добавляем base сюда
  plugins: [
    htmlInject({
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
