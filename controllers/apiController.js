const PI = require('../models/PImodel');

//const { post } = require("../routes/api");

exports.test = function (req, res) {
    res.send('Olá! Teste ao Controller');
  };
  
// procura todos os doc. na BD, guarda em ‘pi’ 
// depois devolve ‘pi’ ao cliente
exports.details = function (req, res) {
  PI.find({}).then(function(pi){
  res.send(pi);
  }).catch();
};

// procura apenas um doc. na BD, guarda em ‘pi’ 
// depois devolve ‘pi’ ao cliente
exports.detailss = function (req, res) {
  PI.findOne({_id: req.params.id}).then(function(pi){
  res.send(pi);
  }).catch();
};

// atualiza ‘pi’ da BD com as propriedades em ‘req.body’
// depois, procura de novo na BD o ‘pi’ atualizado (senão manda o pi // não atualizado!)
// depois, devolve o ‘pi’ atualizado ao cliente
exports.update = function (req, res, next) {
  PI.findOneAndUpdate({_id: req.params.id},req.body).then(function(){
    PI.findOne({_id: req.params.id}).then(function(pi){
      res.send(pi);
    });
  }).catch(next);
};

// ‘_id:’->nome da propriedade na BD, 
// ‘req.params.id’->devolve-me o parametro id na req
exports.delete = function (req, res, next) {
  // apaga ‘pi’ da BD, depois, devolve o ‘pi’ apagado ao cliente
  PI.findOneAndDelete ({_id: req.params.id}).then(function(pi){
    res.send(pi);
  }).catch(next);
};

/*exports.create = function (req, res) {
  // cria novo ‘pi’ na BD a partir do request, depois, devolve o
  //‘pi’ criado ao cliente
  PI.create(req.body).then(function(pi){
  res.send(pi);
  });
};*/

// ocorrido um erro, ‘next’ chama proximo middleware (ver ‘app.js’)
exports.create = function (req, res, next) {
  PI.create(req.body).then(function(pi){
    res.send(pi);
  }).catch(next);
};