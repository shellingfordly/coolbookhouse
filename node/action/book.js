const BookSchema = require('../models/book')

module.exports = {
  // 获取
  "GET /book/get.list.1.0.0": async cxt => {
    const res = await BookSchema.find()
    cxt.body = { status: 1000, data: res }
  },
  // 增加book
  "POST /book/add.1.0.0": async cxt => {
    const book = cxt.request.body
    const params = {
      ...book,
      date: new Date().getTime()
    }
    const res = await BookSchema.create(params)
    if(res._id) {
      cxt.body = { status: 1000, data: '添加成功！' }
    }else 
    cxt.body = { status: 1001, data: '添加失败！' }

  },
}
