var participant = require('./participant')
var queue = require('./queue')
var counter = require('./counter')
var controller = {}

controller.participant = participant
controller.queue = queue
controller.counter = counter

module.exports = controller
