require('dotenv').config();

/**
 * 
 * @returns {object}
 */
function getConfigDB() {
    const dialect = process.env.DIALECT
    if (dialect === 'postgres') {
        return {
            host: process.env.DB_HOST,
            dialect: process.env.DIALECT,
            ssl: true,
            protocol: process.env.DIALEC,
            dialectOptions: {
                ssl: {
                    require: true,
                    rejectUnauthorized: false
                }
            }
        }
    } else {
        return {
            host: process.env.DB_HOST,
            dialect: process.env.DIALECT,
        }
    }
}

module.exports = getConfigDB