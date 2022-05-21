const { defineConfig } = require('rollup')
import pkg from './package.json'
import resolve from 'rollup-plugin-node-resolve' // 依赖引用插件
import postcss from 'rollup-plugin-postcss'
import commonjs from 'rollup-plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'
import babel from '@rollup/plugin-babel'
import vuePlugin from 'rollup-plugin-vue'
import { terser } from 'rollup-plugin-terser' // 代码压缩

export default defineConfig({
  input: './src/index.ts',
  output: [
    {
      file: pkg.main,
      exports: 'named',
      format: 'cjs',
      globals: {
        'vue': 'vue' // 指明 global.vue 即是外部依赖 vue
      }
    },
    {
      file: pkg.module,
      exports: 'named',
      format: 'esm',
      globals: {
        'vue': 'vue' // 指明 global.vue 即是外部依赖 vue
      }
    },
    {
      file: pkg.browser,
      format: 'umd',
      exports: 'named',
      name: 'cyanMenu',
      globals: {
        'vue': 'vue' // 指明 global.vue 即是外部依赖 vue
      }
    },
  ],
  external: ['vue'],
  plugins: [
    resolve(),
    vuePlugin({
      // 把单文件组件中的样式，插入到html中的style标签
      css: true,
      // 把组件转换成 render 函数
      compileTemplate: true
    }),
    typescript(),
    commonjs(),
    terser(),
    postcss(),
    babel({
      exclude: '**/node_modules/**'
    }),
  ]
})