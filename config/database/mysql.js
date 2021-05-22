var Sequelize = require('sequelize')
var db = new Sequelize('vaksinasi', 'root', 'Omiex@mysql123', {
	dialect: 'mysql',
	host: 'localhost'
})

module.exports = db
