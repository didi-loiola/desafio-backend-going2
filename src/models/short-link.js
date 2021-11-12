class ShortLink {
    constructor(modelLink) {
        this.modelLink = modelLink
    }

    async createShortLink(url, code) {
        return await this.modelLink.create({ url, code })
    }

    async findEncodeUrl(code) {
        return await this.modelLink.findOne({ where: { code } })
    }
}

module.exports = ShortLink