function all(arr) {
	// Loop through every item in the array
	// If the item evaluates to false, return false
	for (let i = 0; i < arr.length; i++) { // i = i + 1
		if (arr[i] == false) {
			return false
		}
	}
	return true
}

// If the loop ends, return true


let array1 = [true, false, false]
let array2 = [true, true, true] //length is 3

console.log(all(array1))
console.log(all(array2))