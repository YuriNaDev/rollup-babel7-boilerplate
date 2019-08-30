import multiplier from './multiplier.js'

const promise1 = new Promise(function(resolve, reject) {
	setTimeout(function() {
		resolve(multiplier)
	}, 300)
})

promise1.then(res => {
	console.log(res)
})
