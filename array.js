// Given an array of integers, find the sum of its elements.

// For example,
// if the array, [1, 2, 4, 7], so
// return 14.

// let arr = [2, 4, 5, 8, 9, 10];

function sum(arr) {
    let addition = 0;
    for (let i = 0; i < arr.length; i++) {
        addition += arr[i];
    }
    return addition;
}
console.log(sum([2, 3, 4, 5]));


// For of
// //Method 2
function sumTwo(arr) {
    let addition = 0;
    for (let el of arr) {
        addition = addition + el;
    }
    return addition;
}

console.log(sumTwo([5, 5, 5, 5]));


// // For in
// // Method 3
function sumThree(arr) {
    let addition = 0;
    for (let el in arr) {
        addition = addition + arr[el];
    }
    return addition;
}

console.log(sumThree([2, 2, 2, 2]));