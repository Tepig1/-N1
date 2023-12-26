const http = require('http'); 
http.createServer(function (request, response) { 
    response.end('Hello NodeJS!'); 
}).listen(3000,  function () { 
    console.log('Сервер  на порту 3000');
});