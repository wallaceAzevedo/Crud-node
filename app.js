const express = require('express');

const app = express();

 app.get('/', function(req, res){ 
     res.send('END POINT INVÁLIDO!');
    });

  const api = require('./routes/api');
  app.use('/', routes);

let port = 5000;
app.listen(process.env.port || port, () =>{
  console.log('Servidor em execução no porto: '+ port);
});