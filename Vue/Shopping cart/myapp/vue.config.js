module.exports = {
    devServer: {
      proxy: {
        '/db': {
          target: 'http://localhost:8888',
          pathRewrite: {
            '^/db': ''
          }
        }
      }
    }
  }