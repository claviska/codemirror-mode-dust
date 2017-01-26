import babel from 'rollup-plugin-babel';
import babelrc from 'babelrc-rollup';

let pkg = require('./package.json');

export default {
  entry: 'index.js',
  plugins: [
    babel(babelrc({ path: '.rollup.babelrc' })),
  ],
  targets: [
    {
      dest: pkg['main'],
      format: 'umd',
      moduleName: 'registerDustMode'
    },
    {
      dest: pkg['jsnext:main'],
      format: 'es'
    }
  ]
};
