const http = require("http");
const fs = require("fs");
http.createServer(function(request, respnse){
    fs.readFile('index.html', function(error,data ){
        if(error){
            respnse.statusCode = 404;
            respnse.end("Resourse not found!");
        }
        else{
            respnse.setHeader("Content-Type","text/html");
            respnse.end(data);
        }  
    })
}).listen(3300);