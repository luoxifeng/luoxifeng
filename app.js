/**
 * 引入依赖
 */
const PORT = 81;
const express = require('express');
const app = express();

app.use("/", (req, res, next) => {
    if(req.path === "/"){
        res.end("index");
    } else {
        next();
    }
})

app.use("/webhook", (req, res, next) => {
    res.end("555566665");
})

app.listen(PORT, () => {
    console.log(`server start at port ${PORT}`);
})