import path from 'path';
import { eslint } from 'rollup-plugin-eslint';
import svelte from 'rollup-plugin-svelte';
import { getBabelOutputPlugin } from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import copy from 'rollup-plugin-copy';

const production = !process.env.ROLLUP_WATCH;

const cpnConfig = (file, mod) => ({
  input: path.join(__dirname, 'src', file),
  output: {
    file: path.join(__dirname, 'dist', file.substring(file.lastIndexOf('.'), 0) + '.js'),
    format: 'esm',
    sourcemap: true,
  },
  plugins: [
    eslint(),
    svelte({
      customElement: true,
      tag: null,
      dev: !production,
    }),
    getBabelOutputPlugin({
      configFile: path.resolve(__dirname, 'babel.config.js'),
    }),
    resolve({
      browser: true,
      dedupe: ['svelte'],
    }),
    commonjs(),
    copy({
      targets: [
        {
          src: path.join(__dirname, `./src/${mod}/package.json`),
          dest: path.join(__dirname, `./dist/${mod}`),
        },
        {
          src: path.join(__dirname, `./src/${mod}/index.js`),
          dest: path.join(__dirname, `./dist/${mod}`),
        },
      ],
    }),
    production && terser(),
  ],
  watch: {
    clearScreen: false,
  },
});

export default [
  { ...cpnConfig('./soft-shape/SoftShape.svelte', 'soft-shape') },
  // { ...cpnConfig('<INPUT_CPN>') },
];
