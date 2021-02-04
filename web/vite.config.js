
const path = require('path')

module.exports = {
  base: './',
  outDir: 'dist',
  port: 3000,
  // 是否自动在浏览器打开
  open: true,
  // 是否开启 https
  https: false,
  // 服务端渲染
  ssr: false,
  alias: {
    '/@/': path.resolve(__dirname, './src')
  },
  proxy: {
    '/api': 'http://127.0.0.1:8080/',
  }
}