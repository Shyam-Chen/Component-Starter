import path from 'path';
import { defineConfig } from 'vite';
import { angular } from '@nitedani/vite-plugin-angular/plugin';

export default defineConfig({
  plugins: [angular({ typecheck: false })],
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'src'),
    },
  },
});
