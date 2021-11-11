const Link = require('../models/link');
require('dotenv').config();

exports.postEncode = async (req, res, next) => {
    const generateCode = () => {
        let text = '';
        const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for(let i=0;i<5;i++){
          text +=possible.charAt(Math.floor(Math.random()* possible.length))
        }
        return text;
      }
      const url = req.body.url;
      const code = generateCode();
    
      const resultado = await Link.create({
        url,
        code
      })
      res.status(201).send({
          message: 'Link encurtado com sucesso',
          url : process.env.HOST + resultado.dataValues.code
      });
}

exports.postDecode = function (req, res, next) {
    
}