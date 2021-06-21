const PI = require('../models/PImodel');

exports.test = function (req, res) {
    res.send('Olá! Teste ao Controller');
  };
  
// TODO: listar pontos de interesse da BD
exports.details = function (req, res) {
  res.send({type: 'GET'});
};
// TODO: adicionar novo ponto de interesse
exports.add = function (req, res) {
  res.send({type: 'POST'});
};
// TODO: atualizar ponto de interesse
exports.update = function (req, res) {
  res.send({type: 'PUT'});
};
// TODO: apagar ponto de interesse
exports.delete = function (req, res) {
  res.send({type: 'DELETE'});
};

exports.create = function (req, res) {
  // cria novo ‘pi’ na BD a partir do request, depois, devolve o
  //‘pi’ criado ao cliente
  PI.create(req.body).then(function(pi){
  res.send(pi);
  });
};