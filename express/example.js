var express = require('express');
var path = require('path');
var MongoClient = require('mongodb').MongoClient;
var bodyParser = require('body-parser');
var app = new express();

// app.set('abc', 515151);

app.use('/static', express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}))

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

/* Alternativa para não chamar a rota 'toda hora' */

app.route('')
    .get(function(req, resp){
      listarCursos(resp);
    })
    .post(function(req, resp){
      var cursos = {nome: req.body.nome, categoria: req.body.categoria};

      inserirCurso(curso, function(){
        listarCursos(resp);
      })
    })

app.get('/', function(req, resp){
  resp.render('index', { nome: 'Treinaweb'}); // Passar váriveis como segundo parametro, por um json
});

app.listen(3000, function(){
  console.log('App rodando na porta 3000');
});

/* Acesso ao banco de dados */

function listarCursos(resp) {
  MongoClient.connect('mongodb://localhost:27017/treinaweb', function(err, db) {
    db.collection('cursos').find().sort({nome: 1}).toArray(function(err, result){
      resp.render('index', {data: result});
    })
  })
}

function inserirCurso(obj, callback) {
  MongoClient.connect('mongodb://localhost:27017/treinaweb', function(err, db) {
    db.collection('cursos').insertOne(obj, function(err, result){
      callback();
    })
  })
}