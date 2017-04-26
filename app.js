/**
 * 引入依赖
 */
const PORT = 80;
const express = require('express');
const path = require('path');
const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.use("/", (req, res, next) => {
    if(req.path === "/"){
        res.render("index");
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