
const path = require('path')

export default {
  base: './',
  outDir: 'dist',
  port: 3000,
  // 是否开启 https
  https: false,
  // 服务端渲染
  ssr: false,
  alias: {
    '/@/': path.resolve(__dirname, './src')
  },
}
