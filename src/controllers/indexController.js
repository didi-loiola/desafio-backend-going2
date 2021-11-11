const Link = require('../models/link');
require('dotenv').config();

exports.postEncode = async (req, res, next) => {
    try {
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
        
        if(url == "") res.status(400).send({error: "URL vazia"})
        const resultado = await Link.create({
          url,
          code
        })
        res.status(201).send({
            message: 'Link encurtado com sucesso',
            url : process.env.HOST + resultado.dataValues.code
        });  
    } catch (error) {
        res.status(500).send({error: error})
    }
}

exports.getDecode = async (req, res, next) => {
  try {
    const url = req.body.url;
    const code = url.substring(22,27);
    console.log(code)
  
    const resultado = await Link.findOne({where:{code}});
    if(!resultado) return res.sendStatus(404);
  
    res.status(200).send({
      message: 'URL original',
      url : resultado.dataValues.url
  });
  } catch (error) {
    res.status(500).send({error: error})
  }
}