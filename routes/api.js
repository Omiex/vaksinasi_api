var express = require('express');
var router = express.Router();
var controller = require('../controllers/index')

router.get('/', (req, res) => {
	res.send('API set properly')
})

router.get('/queue', controller.queue.show)

router.get('/participant', controller.participant.show)
router.post('/participant', controller.participant.create)

router.get('/counter', controller.counter.show)

module.exports = router;
