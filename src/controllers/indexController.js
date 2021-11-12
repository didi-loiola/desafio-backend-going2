const Link = require('../models/link');
const formatUrl = require('./../helpers/url')
const md5Lib = require('md5');
const ShortLink = require('./../models/short-link')

require('dotenv').config();

exports.encode = async(req, res, next) => {
    try {
        const { url } = req.body;
        if (url) {
            const link = new ShortLink(Link)
            const code = md5Lib(url)

            const result = await link.createShortLink(url, code)
            res.status(201).send({
                message: "Url encurtada com sucesso",
                encoded: `${formatUrl(req)}${result.dataValues.code}`
            })
        }
        return res.status(400).send({
            message: 'Algo deu errado, verifique se você informou o parâmetros corretos',
            error: 400
        });
    } catch (error) {
        res.status(500).send({ error: error })
    }
}

exports.decode = async(req, res, next) => {
    try {
        const { encodedUrl } = req.body
        if (encodedUrl) {
            const code = encodedUrl.slice(encodedUrl.lastIndexOf('/') + 1)
            const link = new ShortLink(Link)
            const result = await link.findEncodeUrl(code)
            if (!result) return res.sendStatus(404);

            res.status(200).send({
                "shorcut-url": {
                    encoded_url: `${formatUrl(req)}${code}`,
                    decoded_url: `${result.dataValues.url}`
                }
            });
        }
        return res.status(400).send({
            message: 'Algo deu errado, verifique se você informou o parâmetros corretos',
            error: 400
        });
    } catch (error) {
        res.status(500).send({ error: error })
    }
}