const express = require('express'); //express框架模块
const bodyParser = require('body-parser');//解析,用req.body获取post参数
const path = require('path'); //系统路径模块
const mongoose = require("mongoose");
const app = express();
const setRoute = require('./action/book')

const hostName = '127.0.0.1'; //ip
const port = 8080; //端口

app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",' 3.2.1')
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

setRoute(app)

mongoose.connect('mongodb://localhost:27017/book', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(async () => {
  console.log("数据库连接成功!")

  app.listen(port, hostName, function () {
    console.log(`服务器运行在http://${hostName}:${port}!`);
  });

}).catch(() => {
  console.log("数据库连接失败!")
})