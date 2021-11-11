var express = require('express');

var indexRouter = require('./src/routes/indexRouter');

const app = express();

//Configurações da Aplicação
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

//Configurações de Rotas
app.use('/', indexRouter);

//Inicialização do Servidor
app.listen(4000, ()=>console.log('Aplicação em execução na porta 4000'));