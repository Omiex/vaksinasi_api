function success (res, data, message = false) {
	let response = (message) ? {message, data} : data
	res.status(200).json(response)
}

function fail (res, error, message = false) {
	console.log(error)
	let response = (message) ? {message, error} : error
	res.status(500).json(response)
}

module.exports = { success, fail }
