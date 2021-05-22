var { sequelize, Sequelize } = require('../models/index')
var Op = Sequelize.Op
var { success, fail } = require('./response')
var Participant = sequelize.models.Participant
var Queue = sequelize.models.Queue
var controller = {show, find, create, update, remove}

async function show (req, res) {
	try {
		let data = Participant.findAll()
		success(res, data)
		console.log(data)
	} catch (error) { fail(res, error) }
}

async function find (req, res) {
	try {
		let data = Participant.findByPk(req.params.id)
		success(res, data)
	} catch (error) { fail(res, error) }
}

async function getQueueNumber () {
	let todayStart = new Date().setHours(0, 0, 0, 0)
	let now = new Date()

	let data = await Queue.count({
		where: {
			createdAt: {
				[Op.gt]: todayStart,
				[Op.lt]: now
			}
		}
	})

	return data
}

async function create (req, res) {
	let participant = req.body
	if (!participant.name) {
		fail(res, {}, 'terjadi kesalahan')
		return
	}

	let lastQueue = await getQueueNumber()
	let queue = new Queue({
		queue_number: lastQueue + 1
	})

	try {
		let newQueue = await queue.save()
		participant.queue_id = newQueue.id

		let newParticipant = new Participant(participant)
		try {
			let data = await newParticipant.save()
			success(res, data)
		} catch (error) { fail(res, error, 'terjadi kesalahan') }
	} catch (error) { fail(res, error) }
}

async function update (req, res) {
	let participant = req.body
	let id = req.params.id
	let updateParticipant = {
		name: participant.name,
		nik: participant.nik,
		division: participant.division
	}

	try {
		let data = await Participant.update(updateParticipant, {where: {id}})
		success(res, data)
	} catch (error) { fail(res, error) }
}

function remove (req, res) {
	console.log('tes')
}

module.exports = controller
