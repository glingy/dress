module.exports = {
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://localhost:3001',
        ws: true,
        changeOrigin: false,
        xfwd: false
      }
    }
  }
}
