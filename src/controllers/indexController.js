const Link = require('../models/link');
const formatUrl = require('./../helpers/url')
const md5 = require('md5');
const ShortLink = require('./../models/short-link')

require('dotenv').config();

exports.home = async(req, res, next) => {
    const { code } = req.params
    if (code && code.length) {
        const link = new ShortLink(Link)
        const result = await link.findEncodeUrl(code)

        if (!result) {
            res.status(404).send({
                message: "Esse código não consta na nossa base de dados, tente novamente"
            });
        } else {
            res.redirect(result.dataValues.url)
        }
    } else {
        res.status(200).send({
            message: "Api funcionando normalmente"
        })
    }
}

exports.encode = async(req, res, next) => {
    try {
        const { url } = req.body;
        if (url && url.length) {
            const link = new ShortLink(Link)
            const code = md5(`${url}${Math.floor(Math.random() * 5536) - 3768}`).slice(0, 5)

            const result = await link.createShortLink(url, code)
            res.status(201).send({
                message: "Url encurtada com sucesso",
                encoded: `${formatUrl(req)}redirect/${result.dataValues.code}`
            })
        } else {
            res.status(400).send({
                message: 'Algo deu errado, verifique se você informou o parâmetros corretos',
                error: 400
            });
        }
    } catch (error) {
        res.status(500).send({ error: error })
    }
}

exports.decode = async(req, res, next) => {
    try {
        const { encodedUrl } = req.body
        if (encodedUrl && encodedUrl.length) {
            const code = encodedUrl.slice(encodedUrl.lastIndexOf('/') + 1)
            const link = new ShortLink(Link)
            const result = await link.findEncodeUrl(code)
            if (!result) return res.sendStatus(404);

            res.status(200).send({
                "shorcut-url": {
                    encoded_url: `${formatUrl(req)}redirect/${code}`,
                    decoded_url: `${result.dataValues.url}`
                }
            });
        } else {
            return res.status(400).send({
                message: 'Algo deu errado, verifique se você informou o parâmetros corretos',
                error: 400
            });
        }
    } catch (error) {
        res.status(500).send({ error: error })
    }
}