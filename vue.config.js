'use strict'
const path = require('path')
const CompressionPlugin = require('compression-webpack-plugin')
const webpack = require('webpack')
function resolve (dir) {
  return path.join(__dirname, dir)
}
const publicPath =
  process.env.VUE_APP_HISTORY === 'y' ? process.env.VUE_APP_BASE + '/' : ''
const JS_CDN = [
  publicPath + 'static/libs/vuex/vuex.min.js',
  publicPath + 'static/libs/vue-router/vue-router.min.js'
]
const CSS_CDN = []

const cdn = {
  css: CSS_CDN,
  js: JS_CDN
}
const port = process.env.port || process.env.npm_config_port || 7521 // dev port

const plugins = [
  new webpack.ProvidePlugin({
    jQuery: 'jquery',
    $: 'jquery',
    'window.jQuery': 'jquery'
  })
]
module.exports = {
  pages: {
    index: {
      entry: ['node_modules/babel-polyfill', 'src/main.js'],
      template: 'public/index.html',
      filename: 'index.html',
      chunks: 'all'
    }
  },
  publicPath:
    process.env.VUE_APP_HISTORY === 'y' ? process.env.VUE_APP_BASE : './',
  outputDir: 'bigScreen',
  assetsDir: 'static',
  lintOnSave: process.env.NODE_ENV === 'development',
  productionSourceMap: false,
  runtimeCompiler: true,
  devServer: {
    hot: true,
    port: port,
    client: {
      overlay: false,
    },
  },
  css: {
    // 向所有 Sass 样式传入全局变量
    loaderOptions: {
      sass: {
        // @ 是 src 的别名
        data: `
        @import "~gc-starter-ui-plus/packages/assets/styles/theme-default/common/gc-var.scss";
        @import "./src/assets/style/variables.scss";
        `
      }
    },
    extract: false
  },

  configureWebpack: config => {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    // name: name,
    Object.assign(config.resolve, {
      alias: {
        '@': resolve('src'),
        vue$: 'vue/dist/vue.common',
        // 大屏工程路径别名
        'gc-starter-bigscreen': resolve('src/views/bigScreen'),
        'gc-starter-ui-plus': resolve('src/gc-starter'),
        'gc-starter-bigscreen-ui': resolve('src/views/bigScreen/components/index.js')
      },
      fallback: {
        path: false,
        fs: false
      }
    })
    // 如果是开发模式，忽略一些组件打包，采用cdn
    config.externals =
      process.env.NODE_ENV === 'production'
        ? {
            'vue-router': 'VueRouter',
            vuex: 'Vuex'
          }
        : {}
    if (process.env.NODE_ENV === 'production') {
      return {
        plugins: [
          new CompressionPlugin({
            test: /\.js$|\.html$|\.css$|\.jpg$|\.jpeg$|\.png/, // 需要压缩的文件类型
            threshold: 10240, // 归档需要进行压缩的文件大小最小值，10K以上的进行压缩
            deleteOriginalAssets: false // 是否删除原文件
          }),
          ...plugins
        ]
      }
    } else {
      return {
        plugins: [
          ...plugins
        ]
      }
    }
  },

  chainWebpack: config => {
    // 禁用热重载
    config.plugins.delete('hmr')
    if (process.env.NODE_ENV === 'production') {
      config.plugin('html-index').tap(args => {
        // html中添加cdn
        args[0].cdn = cdn
        // 修复 Lazy loading routes Error
        args[0].chunksSortMode = 'none'
        return args
      })
    }

    config.plugins.delete('prefetch-index') //  关闭prefetch
    config.module
      .rule('svg')
      .exclude.add(resolve('src/assets/images/appPrependIcon/svg'))
      .add(resolve('src/assets/images/pageIcon/svg'))
      .add(resolve('src/assets/images/bigScreenIcon/svg'))
      .add(resolve('src/views/bigScreen/components/Svgs/svg'))
      .end()

    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/assets/images/appPrependIcon/svg'))
      .add(resolve('src/assets/images/pageIcon/svg'))
      .add(resolve('src/assets/images/bigScreenIcon/svg'))
      .add(resolve('src/views/bigScreen/components/Svgs/svg'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
  },
  // 在这里配置需要对node_modules中需要进行语法转义的依赖
  transpileDependencies: []
}
