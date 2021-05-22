var { sequelize, Sequelize } = require('../models/index')
var { success, fail } = require('./response')
var Counter = sequelize.models.Counter
var controller = {show}

function show(req, res) {
	try {
		Counter.findAll()
		.then ((data) => success(res, data))
	} catch (error) { fail(res, data) }
}

module.exports = controller
