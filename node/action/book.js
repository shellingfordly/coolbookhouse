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
      createTime: new Date().getTime()
    }
    const res = await BookSchema.create(params)
    if (res._id) {
      cxt.body = { status: 1000, data: '添加成功！' }
    } else
      cxt.body = { status: 1001, data: '添加失败！' }
  },
  // 搜索 book
  "POST /book/search.1.0.0": async cxt => {
    const params = cxt.request.body
    const res = await BookSchema.find()
    console.log("POST /book/searchs")
    const data = res.filter(book=>book.name.includes(params.name))
    cxt.body = { status: 1000, data }
  },
  // 修改 book
  "POST /book/update.1.0.0": async cxt => {
    const book = cxt.request.body
    console.log('update', book);
    await BookSchema.update({
      _id: book._id
    }, {
      '$set': {
        ...book,
        updateTime: new Date().getTime(),
      }
    }, function (err, data) {
      if (err) {
        cxt.body = { status: 1001, data: err }
      } else {
        cxt.body = { status: 1000, data: data }
      }
    });
  },
  // 删除 book
  "POST /book/delete.1.0.0": async cxt => {
    const { _id } = cxt.request.body
    const res = await BookSchema.deleteOne({ _id })
    if (res) cxt.body = { status: 1000, data: '删除成功！' }
  }
}

