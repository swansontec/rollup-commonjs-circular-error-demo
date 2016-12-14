import commonjs from 'rollup-plugin-commonjs'
import nodeResolve from 'rollup-plugin-node-resolve'

export default {
  entry: 'index.js',
  plugins: [
    commonjs({
      include: 'node_modules/**'
    }),
    nodeResolve()
  ],
  targets: [
    {
      dest: 'dist/index.cjs.js',
      format: 'cjs',
      sourceMap: true
    }
  ]
}
