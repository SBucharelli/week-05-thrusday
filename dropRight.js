function dropRight(arr, numberOfItemsToDrop) {
	// if n is larger than array length return []
	if (numberOfItemsToDrop >= arr.length) {
		let arr = []
		return arr
	}
	// Use n to count in from the end to get the index (number of items to drop from the end essentially)
	let itemsToBeReturned = arr.length - numberOfItemsToDrop

	// return a slice of the array using the index as the end
	return arr.slice(0, itemsToBeReturned)
}

n = 2
sampleArr = [2, 3, 6, 7, 9] // length = 5
console.log(dropRight(sampleArr, 2))