var express = require('express');
const app = express();

app.get('/', (req,res,next)=>{
    res.status(200).send(`It's Working`);
})

app.listen(4000, ()=>console.log('Aplicação em execução na porta 4000'));