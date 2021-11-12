const Sequelize = require('sequelize');
const getConfigDB = require('./helpers/db-config')
require('dotenv').config();

const sequelize = new Sequelize(
    process.env.DB_DATABASE,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    getConfigDB()
);

module.exports = sequelize;