var express = require('express');
var app = new express();

app.use('/static', express.static('public'));

app.get('/((sh)|(x))amp(o{2}|u)/', function(req, resp){
  resp.send('Hello World! ');
});

app.listen(3000, function(){
  console.log('App rodando na porta 3000');
});