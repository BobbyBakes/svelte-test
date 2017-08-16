// rollup.config.js
import * as fs from 'fs';
import svelte from 'rollup-plugin-svelte';

export default {
  entry: 'spec.js',
  dest: 'bundle.js',
  format: 'iife',
  plugins: [
    svelte({
      // By default, all .html and .svelte files are compiled
      // extensions: ['.html'],

      // You can restrict which files are compiled
      // using `include` and `exclude`
      include: '*.html',
    }),
  ]
}
