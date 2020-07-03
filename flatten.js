function flatten(arrItems) {
	// Create a new array
	newArray = []
	// Loop through every item in the array
	arrItems.forEach((arrItem) => {
		// If the item is an array, add its items to the new array
		if (Array.isArray(arrItem)) {
			// reminder for self: concat does not add to the existing array the same as .push() does
			newArray = newArray.concat(arrItem)
		} else {
			// If not add the item itself to the new array
			newArray.push(arrItem)
		}
	})
	// return the new array
	return newArray
}

sampleArray = [1, [2, 3], 4]
console.log(flatten(sampleArray))

secondArray = [[3, 6, 9], 3, 7, 10]
console.log(flatten(secondArray))