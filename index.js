const express = require('express');

const indexRouter = require('./src/routes/indexRouter');

const app = express();

//Conexão com Banco de Dados
(async() => {
    const database = require('./src/db');
    const Link = require('./src/models/link');

    await database.sync();
})()

//Configurações da Aplicação
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

//Configurações de Rotas
app.use('/', indexRouter);

//Inicialização do Servidor
app.listen(4000, () => console.log('Aplicação em execução na porta 4000'));