var express = require('express');
var router = express.Router();
require('dotenv').config();

let indexController = require('../controllers/indexController');

//Endpoint que mostra que está executando
router.get('/', function(req, res, next) {
    const init = 'Está funcionando';

    res.status(200).send(init);
})

// Endpoint que redireciona quando o usuário coloca o código na url
router.get('/redirect/:code', indexController.home);
//Encurtar a URL
router.post('/encode', indexController.encode);
//Desencurtar a URL
router.post('/decode', indexController.decode);

module.exports = router;