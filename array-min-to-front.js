/* Min to Front
Given an array of comparable values, move the lowest element to array’s front, shifting backward any elements previously ahead of it. Do not otherwise change the array’s order. Given [4,2,1,3,5], change it to [1,4,2,3,5] and return it. As always, do this without using built-in functions. */

function minToFront (arr){
    var min = 0;
    for (let i=arr.lenght; i>0; i--){
        if(arr[i-1] < arr[i-2]){
            min = arr[i-1];
            arr[i-1] = arr[i-2]
        }
    }
    return arr;
}
console.log(minToFront[4,2,8,6])