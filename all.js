function all(arr) {
	// Loop through every item in the array
	// If the item evaluates to false, return false
	// If the loop ends, return true
	for (let i = 0; i < arr.length; i++) { // i = i + 1
		if (arr[i] === false) {
			return false
		}
	}
	return true
}

// forEach version of the above function
// all of the logic from the "for" loop is built into a forEach function

function allAlternative(items) {
	let allAreTrue = true
	items.forEach((item) => {
		// if the item is false
		if (item === false) {
			allAreTrue = false
		}
	})

	return allAreTrue
}

let array1 = [true, false, false]
let array2 = [true, true, true] //length is 3

console.log(all(array1))
console.log(all(array2))

console.log(allAlternative(array1))
console.log(allAlternative(array2))