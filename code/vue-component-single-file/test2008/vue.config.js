const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      // '/api': {
      //   target: 'https://i.maoyan.com',
      //   changeOrigin: true
      // },
      '/kerwin': {
        target: 'https://i.maoyan.com',
        changeOrigin: true,
        pathRewrite: {
          '/kerwin': ''
        }
      }

    }
  }
})
