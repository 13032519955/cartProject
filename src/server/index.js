const express = require("express");
const path = require("path");
const fs = require("fs");

let app = express();

app.get("/",function(request,response,nex){
    response.head("as上次他" )
    response("11")
})

app.listen(3000,err=>{
    if(err){console.log("服务器错误")};
    console.log("成功启动服务器,端口号为3000");
})