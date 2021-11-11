var express = require('express');
var router = express.Router();
require('dotenv').config();

let indexController = require('../controllers/indexController');

//Endpoint que mostra que está executando
router.get('/', function (req,res,next) {
    const init = 'Está funcionando';

    res.status(200).send(init);
})

//Encurtar a URL
router.post('/encode', indexController.postEncode);

//Desencurtar a URL
router.post('/decode', indexController.postDecode);

module.exports = router;