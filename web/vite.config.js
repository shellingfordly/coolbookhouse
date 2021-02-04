
const path = require('path')

export default {
  base: './',
  outDir: 'dist',
  port: 3000,
  // 是否开启 https
  open: true,
  https: false,
  // 服务端渲染
  ssr: false,
  alias: {
    '/@/': path.resolve(__dirname, './src')
  },
  proxy: {
    // '/api/': 'http://127.0.0.1:8080/',
    '/api': {
      target: 'http://127.0.0.1:8080/',
      changeOrigin: true,
    }
  }
}