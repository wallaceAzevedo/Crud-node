const express = require('express');
const bodyParser = require('body-parser');

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
