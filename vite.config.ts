import { resolve } from 'path';
import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import sveltePreprocess from 'svelte-preprocess';
import unocss from 'unocss/vite';
import { presetUno } from 'unocss';
// import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      formats: ['es'],
      fileName: 'awesome-components',
    },
  },
  plugins: [
    svelte({
      compilerOptions: {
        customElement: true,
      },
      preprocess: sveltePreprocess(),
    }),
    unocss({
      mode: 'shadow-dom',
      presets: [presetUno()],
    }),
    // dts(),
  ],
});
