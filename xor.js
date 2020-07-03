function xor(cond1, cond2) {
	// if cond1 is true and cond2 is false return true
	// if cond1 is false and cond2 is true return true
	// return false

	if (cond1 === true && cond2 === false || (cond1 === false && cond2 === true)) {
		return true
	} else {
		return false
	}
}

console.log(xor(true, false))
console.log(xor(true, true))
console.log(xor(false, true))
console.log(xor(false, false))