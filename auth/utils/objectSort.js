const objectSortByKeys = obj => {
    
    //Get all object keys
    let keysToSort = Object.keys(obj)
    
    //Sort them alphabetically
	keysToSort.sort((a, b) => {
		if (a > b) return 1
		if (a < b) return -1
		return 0
    })
    
    //Object placeholder for new sorted object
    var sortedObject = {}
    
    //Assign corresponding values to keys 
    for (var k of keysToSort){
		  sortedObject[k] = obj[k]
    }
    
	return sortedObject
}

module.exports = objectSortByKeys

//Test

// const obj = {
//     f : 'f',
//     a : 'a',
//     d : 'd',
//     c : 'c',
//     e : 'e',
//     b : 'b'
// }

// //expected result : { a : 'a', b : 'b', c : 'c', d : 'd', e : 'e', f : 'f' }

// console.log(objectSortByKeys(obj))