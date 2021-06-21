const express = require('express');
const mongoose = require('mongoose');

// Ligar á B.D.: 'test'->user da BD, ´nnn´->pass
mongoose.connect('mongodb+srv://PontosInteresse:nnn@teste.stcg8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');

// Confirma ligação na consola
mongoose.connection.on('connected', function () {
  console.log('Connected to Database' +'test');
});

// Mensagem de Erro
mongoose.connection.on('error', (err) => {
  console.log('Database error' +err);
});

const app = express();
;
app.use(express.json())
app.use(express.urlencoded({ extended: true}))

app.get('/', function(req, res){ 
    res.send('END POINT INVÁLIDO!');
});

const routes = require('./routes/api');
app.use('/api', routes);

// error handling middleware
app.use(function(err, req, res, next){
  console.log(err);
 // ‘res.status(422)’->muda o status
 res.status(422).send({error: err.message});
});

let port = 5000;
app.listen(process.env.port || port, () =>{
  console.log('Servidor em execução no porto: '+ port);
});
