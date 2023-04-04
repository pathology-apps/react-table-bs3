import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from '@rollup/plugin-terser';
import babel from '@rollup/plugin-babel';
import postcss from 'rollup-plugin-postcss';

const isProduction = process.env.NODE_ENV === 'production';

export default {
  input: 'src/index.tsx',
  output: [
    {
      file: 'dist/index.cjs.js',
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: 'dist/index.esm.js',
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    postcss({ // Add this block
      plugins: [
        require('postcss-preset-env')(),
      ],
      inject: true,
      minimize: isProduction,
      sourceMap: true,
      extensions: ['.css', '.scss'],
      use: {
        'sass': {
          includePaths: ['./node_modules']
        }
      },
    }),
    typescript(),
    resolve(),
    commonjs(),
    isProduction && terser(),
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**',
    }),
  ],
};
