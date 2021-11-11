var express = require('express');
var router = express.Router();

//Endpoint que mostra que está executando
router.get('/', function (req,res,next) {
    const init = 'Está funcionando';

    res.status(200).send(init);
})

//Encurtar a URL


//Desencurtar a URL

module.exports = router;