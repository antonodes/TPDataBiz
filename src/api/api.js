var express = require('express');
var bodyParser = require('body-parser')
const service = require('./service')

var app = express();

app.use(bodyParser.json());

app.post('/climate', async function(req, res) {
  
    console.log('Entrou ' + Date.parse(Date.now()))

  try{
    var result = await service.getClimate('3675', '9f37d38446d66bdd2d4e310cbe910cf7')
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
    res.header('Access-Control-Allow-Headers', 'Content-Type, X-Custom-Header')
    res.send(JSON.stringify(result))
    console.log('respondeu ' + Date.parse(Date.now()))
  }catch(error) {
    console.error('Erro', error)
    console.log('DEU ERRO ' + Date.parse(Date.now()))
}

});

app.listen(7500, function() {
  console.log('Servidor rodando na porta 7500.');
});