const BookSchema = require('../models/book')

module.exports = function setRoute(app){
  // 获取book list
  app.get('http://127.0.0.1:8080/book/get.list.1.0.0', (req, res) => {
    const data = []
    res.send({ status: 1000, data: data });
  })

  // 获取book list
  app.post('http://127.0.0.1:8080/book/add.1.0.0', (req, res) => {
    // await BookSchema.create(book)
    console.log(req.body);
    res.send({ status: 1000, data: '添加成功！' });
  })
}