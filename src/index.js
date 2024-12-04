const express = require("express");

const app = express();
const port = 3000;

app.get("/", (res, req) =>{
    res.send("<h1> Incheon National University Linux! </h1>");
});

app.listen(port, ()=>{
    console.log(`Example app listening at http://localhost:${port}`);
})