/* Author: Odion Fross
Date: Sept 13, 2020
Project: Arrays - To Do 1 */

/* 1. Push Front
Given an array and an additional value, insert this value at the beginning of the array. Do this without using any built-in array methods.*/
function pushFront(arr, val){
    var newArr = [];
    newArr.push(val);
    for (let i=0; i<arr.length; i++){
        newArr.push(arr[i]);
    }
    return newArr;
}
//console.log(pushFront([4,6,8,10], 2));


/* 2. Pop Front
Given an array, remove and return the value at the beginning of the array. Do this without using any built-in array methods except pop(). */
function popFront(arr){
    var newArr = [];
    var firstVal = arr[0];
    for (let i=1; i<arr.length; i++){
        newArr.push(arr[i]);
    }
    return firstVal
}
//console.log(popFront([4,6,8,10]));


/* 3.Insert At
Given an array, index, and additional value, insert the value into array at given index. Do this without using built-in array methods. You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val). */
function insertAt(arr, index, val){
    var newArr=[];
    for (let i=0; i<arr.length; i++){
        if (i<index){
            newArr.push(arr[i]);
        }
        else if (i==index){
            newArr.push(val);
            newArr.push(arr[i]);
        }
        else{
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
//console.log(insertAt([2,4,6,8,10], 2, 5))


/* 4. Remove At
Given an array and an index into array, remove and return the array value at that index. Do this without using built-in array methods except pop(). Think of popFront(arr) as equivalent to removeAt(arr,0). */
function removeAt(arr,index){
    var newArr = [];
    var val = arr[index];
    for (let i=0; i<arr.length; i++){
        if(i<index){
            newArr.push(arr[i]);
        }
        else if (i>index){
            newArr.push(arr[i]);
        }
    }
    return val;
}
//console.log(removeAt([2,4,6,8,10], 2))


/* 5. Swap Pairs
Swap positions of successive pairs of values of given array. If length is odd, do not change the final element. For [1,2,3,4], return [2,1,4,3]. For example, change input ["Brendan",true,42] to [true,"Brendan",42]. As with all array challenges, do this without using any built-in array methods. */
function swapPairs(arr){
    var newArr = [];
    let temp=arr[0];
    for (let i=1; i<arr.length; i +=2){
        newArr.push(arr[i]);
        newArr.push(temp);
        temp = arr[i+1];
    }
    if (arr.length%2 ==1){
        newArr.push(arr[arr.length-1]);
    }
    return newArr;
}
// console.log(swapPairs([2,4,6,8,10]))
// console.log(swapPairs([2,"first",6,8,"last"]))


/* 6a. Remove Duplicates
Sara is looking to hire an awesome web developer and has received applications from various sources. Her assistant alphabetized them but noticed some duplicates. Given a sorted array, remove duplicate values. Because array elements are already in order, all duplicate values will be grouped together. As with all these array challenges, do this without using any built-in array methods. */


/* 6b. Second: Solve this without using any nested loops. */
function removeDuplicates2 (arr){
    var newArr = [];
    for (let i=0; i<arr.length; i++){
        if (arr[i] != arr[i+1]){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
console.log(removeDuplicates2([2,3,3,4,5,5,6,6,8,10]))




/*
        ########SOLUTION ##########

// Given an array and an additional value, insert this value at the beginning of the array. Do this without using any built-in array methods.
function pushFront(arr, value) {
	// move all values in array over
	for(let i = arr.length; i > 0; i--)
		arr[i] = arr[i-1]
	
	arr[0] = value;
}

// Given an array, remove and return the value at the beginning of the array. Do this without using any built-in array methods except pop().
function popFront(arr) {
	const val = arr[0];
	for(let i = 0; i < arr.length; i++)
		arr[i] = arr[i + 1];
	arr.length = arr.length - 1;
	return val;
}


// Given an array, index, and additional value, insert the value into array at given index. Do this without using built-in array methods. 
// You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val).
function insertAt(arr, idx, val) {
	for(let i = arr.length; i > idx; i--)
		arr[i] = arr[i-1]
	
	arr[idx] = val;
}

// Given an array and an index into array, remove and return the array value at that index. Do this without using built-in array methods except pop(). 
// Think of popFront(arr) as equivalent to removeAt(arr,0).
function removeAt(arr, idx) {
    // shift array values right from idx
	toRemove = arr[idx];
	for(let i = idx; i < arr.length-1; i++) {
        arr[i] = arr[i+1];
    }
    arr.length = arr.length-1;
    return toRemove;
}

// Swap positions of successive pairs of values of given array. If length is odd, do not change the final element. For [1,2,3,4], return [2,1,4,3]. For example, change input ["Brendan",true,42] to [true,"Brendan",42]. 
// As with all array challenges, do this without using any built-in array methods.
function swapPairs(arr) {
	for(let i = 0; i < arr.length - 1; i = i + 2) {
		let temp = arr[i];
		arr[i] = arr[i + 1];
		arr[i + 1] = temp;
	}
}

// Given a sorted array, remove duplicate values. Because array elements are already in order, all duplicate values will be grouped together. 
function removeDupesUnnested(arr) {
	let newArr = [];
	for(let i = 0; i < arr.length; i++) {
		if(arr[i] !== arr[i+1]) 
			newArr.push(arr[i])
	}
	return newArr;
}
*/