var express = require("express");
var app = express();

//2-1 认识 Node 的控制台
console.log("Hello World!");

//2-2 启动一个 Express 服务
// app.get("/", function (req, res) {
//  res.send("Hello Express");
// });

//2-7 实现一个根级的请求记录中间件
app.use("/", function (req, res, next) {
    console.log(req.method, " ", req.path, " - ", req.ip);
    next();
});

//2-3 提供 HTML 文件服务
app.get("/", function (req, res) {
    res.sendfile(__dirname + "/views/index.html");
});

//2-4 提供静态资源服务 https://expressjs.com/en/starter/static-files.html
app.use("/public", express.static(__dirname + "/public"));

//2-5 在指定路由上提供 JSON 服务
//2-6 使用 .env 文件 BUG
app.get("/json", function (req, res) {
    if (process.env.MESSAGE_STYLE === "uppercase") {
        res.json({ message: "HELLO JSON" });
    } else {
        res.json({ message: "Hello json" });
    }
});

module.exports = app;
