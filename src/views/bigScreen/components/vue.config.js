const path = require('path')
const webpack = require('webpack')
// eslint-disable-next-line no-unused-vars
function resolve (dir) {
  return path.join(__dirname, dir)
}
const CompressionPlugin = require('compression-webpack-plugin')

module.exports = {
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  configureWebpack: config => {
    config.externals = {
      vuex: 'vuex',
      vue: 'vue',
      vueRouter: 'vue-router',
      '@antv/g2plot': '@antv/g2plot',
      '@jiaminghi/data-view': '@jiaminghi/data-view',
      axios: 'axios',
      echarts: 'echarts',
      'element-ui': 'element-ui',
      'insert-css': 'insert-css',
      jquery: 'jquery',
      lodash: 'lodash',
      moment: 'moment',
      qs: 'qs',
      sortablejs: 'sortablejs',
      'tiny-sass-compiler': 'tiny-sass-compiler',
      'vue-codemirror': 'vue-codemirror',
      'vue-contextmenujs': 'vue-contextmenujs',
      'vue-draggable-resizable-gorkys': 'vue-draggable-resizable-gorkys',
      'vue-json-editor': 'vue-json-editor',
      'vue-json-viewer': 'vue-json-viewer',
      'vue-quill-editor': 'vue-quill-editor',
      'vue-sketch-ruler': 'vue-sketch-ruler',
      vuedraggable: 'vuedraggable',
      ztree: 'ztree'
    }
    config.resolve.alias = {
      ...config.resolve.alias,
      ...{
        '@': resolve('../../../../src'),
        'gc-starter-bigscreen': resolve('../../../../src/views/bigScreen'),
        'gc-starter-ui-plus': resolve('../../../../src/gc-starter')
      }
    }
    return {
      plugins: [
        new CompressionPlugin({
          test: /\.js$|\.html$|\.css$|\.jpg$|\.jpeg$|\.png/, // 需要压缩的文件类型
          threshold: 10240, // 归档需要进行压缩的文件大小最小值，10K以上的进行压缩
          deleteOriginalAssets: false // 是否删除原文件
        }),
        new webpack.ProvidePlugin({
          jQuery: 'jquery',
          $: 'jquery',
          'window.jQuery': 'jquery'
        })
      ]
    }
  },
  chainWebpack: config => {
    config.module
      .rule('images')
      .test(/\.(jpg|png|jpeg|gif)$/i)
      .use('url-loader')
      .loader('url-loader')
      .options({
        limit: 1024 * 1024,
        esModule: false
      })
      .end()
    // set svg-sprite-loader
    config.module
      .rule('svg')
      .exclude.add(resolve('../../../assets/images/bigScreenIcon/svg'))
      .add(resolve('../components/Svgs/svg'))
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('../../../assets/images/bigScreenIcon/svg'))
      .add(resolve('../components/Svgs/svg'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
  }
}
