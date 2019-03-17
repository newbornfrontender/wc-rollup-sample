import resolve from 'rollup-plugin-node-resolve';

import html from './plugins/html';
import css from './plugins/css';

export default {
  input: 'src/index.js',

  output: {
    format: 'esm',
    dir: 'public',
    preferConst: true,
  },

  plugins: [
    resolve({
      jsnext: true,
      browser: true,
      modulesOnly: true,
    }),

    html(),
    css(),
  ],
};
