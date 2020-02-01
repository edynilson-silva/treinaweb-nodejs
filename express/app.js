/* Módulos instalados:
  npm install express jade mongodb body-parser
*/

var express = require('express');
var app = new express();


// app.use(express.static('public')); // http://localhost:3000/home.html
app.use('/static', express.static('public')); // http://localhost:3000/static/home.html


// app.get('/', function(req, resp){
//   resp.send('Hello World');
// });

// app.get('/abc/:id?'(passar parametros) / recuperar: req.params.id ( Uso da ? deixa parametro não obrigatório)
app.get('/((sh)|(x))amp(o{2}|u)/', function(req, resp){
  //resp.send('Hello World! ' + req.params.id);
  resp.send('Hello World! ');
});

app.listen(3000, function(){
  console.log('App rodando na porta 3000');
});