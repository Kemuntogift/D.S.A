// Given an integer x,
// return true
// if x is a palindrome, and false otherwise.

// Example

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads - 121. From right to left, it becomes 121 - .Therefore, it is not a palindrome.

let number = 1331;

function palindrome() {

    let splitNum = number.toString().split("");

    let newArr = [];

    for (let i = 0; i < splitStr.length; i++) {
        let stringReverse = splitStr
            .reverse()
            .join("");
        newArr.push(stringReverse);
    }

    let finalStr = parseInt(newArr.join(""));

    if (splitNum === finalStr) {
        return true
    } else
        return "This is not a palindrome"
}

palindrome(number);