const express = require('express');
const path = require('path');
const fs = require('fs');
const multer = require('multer');
const { urlencoded } = require('body-parser');

const upload = multer({dest: "public/images"})

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,"public")))

app.get("/", (req, res) => {
    res.sendFile("/index.html");
})
app.post("/upload",upload.single('foto'),(req,res) => {
    console.log(req.file);
    res.send("ok")

})
app.listen(3000, () => {
    console.log('http://localhost:3000');
})