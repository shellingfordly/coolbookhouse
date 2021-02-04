const mongoose = require('mongoose')

let bookSchema = mongoose.Schema({
  name: { // 书名
    type: String,
    required: true,
  },
  link: { // 连接地址
    type: String,
    required: true,
  },
  uppsw: String, // 提取码
  gzpsw: String, // 解压秘密
  user: String, // 贡献者
  date: Number,
})

module.exports = mongoose.model('book_list', bookSchema)