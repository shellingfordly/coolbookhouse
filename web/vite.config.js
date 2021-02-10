import vue from '@vitejs/plugin-vue'
const path = require('path')

export default {
  plugins: [vue()],
  alias: {
    '/@': path.resolve(__dirname, './src')
  },
  server: {
    port: 8081,
    proxy: {
      '/api': 'http://localhost:8080',
    }
  }
}