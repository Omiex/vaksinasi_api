var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
  res.send('API is working properly');
});

router.get('/kedua', (req, res, next) => {
	res.send('Ini adalah percobaan respon route kedua')
})

module.exports = router;
