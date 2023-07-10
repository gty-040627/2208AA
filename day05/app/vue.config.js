const { defineConfig } = require('@vue/cli-service')
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

// console.log(process)
const target =
  process.env.VUE_APP_MOCK_SCHEAM === 'true'
    ? process.env.VUE_APP_MOCK_URL
    : process.env.VUE_APP_CONSOLE_URL
console.log(target, 'target')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  //根目录
  publicPath: './',
  //打包输出文件地址
  outputDir: 'dist',
  //放置静态资源
  assetsDir: 'assets',

  // //配置插件
  // configureWebpack: {
  //   plugins: [new MyAwesomeWebpackPlugin()]
  // },
  // //配置loader
  // chainWebpack: (config) => {
  //   config.module
  //     .rule('vue')
  //     .use('vue-loader')
  //     .tap((option) => {
  //       return options
  //     })
  // },

  //配置svg
  chainWebpack(config) {
    // when there are many pages, it will cause too many meaningless requests
    config.plugins.delete('prefetch')
    // set svg-sprite-loader
    config.module.rule('svg').exclude.add(resolve('src/icons')).end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
  },

  //启动服务代理配置
  devServer: {
    //端口号
    //为什么端口号不适用8080端口，因为后端的主服务和一些服务固定只能使用8080端口，为了防止端口冲突，一般会进行修改端口号
    port: '8627',
    //开发时运行的域名
    host: '0.0.0.0',
    //启动项目时，直接启动浏览器
    open: false,
    //是否启动https
    https: false,
    proxy: {
      [process.env.VUE_APP_BASE_API]: {
        changeOrigin: true, // 配置代理默认开启target方式
        secure: false, //如果是http接口，需要配置该参数
        target,
        //路径重写
        pathRewrite: {
          ['^' + process.env.VUE_APP_BASE_API]: ''
        }
      }
    }
  }
})
