const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');



// Ligar á B.D.: 'test'->user da BD, ´nnn´->pass
mongoose.connect('mongodb+srv://test:nnn@nodejscluster-art2k.mongodb.net/test?retryWrites=true');

// Confirma ligação na consola
mongoose.connection.on('connected', function () {
  console.log('Connected to Database' +'test');
});

// Mensagem de Erro
mongoose.connection.on('error', (err) => {
  console.log('Database error' +err);
});


const app = express();

app.use(bodyParser.json());

app.get('/', function(req, res){ 
    res.send('END POINT INVÁLIDO!');
  });

  const routes = require('./routes/api');
  app.use('/api', routes);

let port = 5000;
app.listen(process.env.port || port, () =>{
  console.log('Servidor em execução no porto: '+ port);
});
