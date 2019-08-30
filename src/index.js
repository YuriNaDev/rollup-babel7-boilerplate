import multiplier from './some-file.js'
import { format } from 'date-fns/esm'

const sleep = milliseconds => {
	return new Promise(resolve => setTimeout(resolve, milliseconds))
}

export async function someMaths() {
	console.log(multiplier)
	console.log(5 * multiplier)
	console.log(10 * multiplier)
	await sleep(1000)
	console.log(format(new Date(), "'Today is a' iiii"))
}
