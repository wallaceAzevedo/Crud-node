const express = require('express');
const app = express();


app.get('/', function(req, res){ 
    res.send('END POINT INVÁLIDO!');
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const routes = require('./routes/api');
app.use('/api', routes);

let port = 5000;
app.listen(process.env.port || port, () =>{
  console.log('Servidor em execução no porto: '+ port);
});
