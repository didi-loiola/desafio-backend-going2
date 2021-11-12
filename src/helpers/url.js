function formatUrl(req) {
    if (req) {
        const protocol = req.connection.encrypted ? 'https' : 'http';
        const host = req.header('host')
        return `${protocol}://${host}/`
    }
}

module.exports = formatUrl