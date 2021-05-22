var { sequelize, Sequelize } = require('../models/index')
var { success, fail } = require('./response')
var Queue = sequelize.models.Queue
var controller = {show}

function show(req, res) {
	try {
		Queue.findAll()
		.then ((data) => success(res, data))
	} catch (error) { fail(res, data) }
}

module.exports = controller
