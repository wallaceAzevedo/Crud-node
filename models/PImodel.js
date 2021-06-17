const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// PI Schema
const Productchema = new Schema({
    title: {type: String,required: [true, '*Campo obrigatório!']},
    price: {type:Number, required: true},
    description: {type:String, required: true, trim: true},
    status: {type: Boolean,default: true},
    creationDate: {type:Date, default:Date.now }
  // TODO: geo location
  });

  // criar Modelo_PI baseado em PISchema: ‘PontosInteresse’->nome da // coleção
  const PI = mongoose.model('PontosInteresse', Productchema);

  // exportar Modelo_PI
  module.exports = PI;