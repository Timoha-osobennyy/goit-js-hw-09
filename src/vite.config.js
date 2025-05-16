import { defineConfig } from 'vite';
import { glob } from 'glob';
import path from 'path';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';

const htmlEntries = {};
glob.sync('./src/*.html').forEach(file => {
  const name = path.basename(file, path.extname(file));
  htmlEntries[name] = file;
});

export default defineConfig(({ command }) => ({
  define: {
    [command === 'serve' ? 'global' : '_global']: {}, 
  },
  root: 'src',
  build: {
    base: '/goit-js-hw-09/',
    sourcemap: true,
    rollupOptions: {
      input: htmlEntries,
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) return 'vendor';
        },
        entryFileNames: chunkInfo => {
          return chunkInfo.name === 'commonHelpers' ? 'commonHelpers.js' : '[name].js';
        },
        assetFileNames: assetInfo => {
          if (assetInfo.name && assetInfo.name.endsWith('.html')) {
            return '[name].[ext]';
          }
          return 'assets/[name]-[hash][extname]';
        },
      },
    },
    outDir: '../dist',
    emptyOutDir: true,
  },
  plugins: [
    injectHTML(),
    FullReload(['./src/**/*.html']),
  ],
}));
