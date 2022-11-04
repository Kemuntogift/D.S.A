// Given an integer x,
// return true
// if x is a palindrome, and false otherwise.

// Example

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads - 121. From right to left, it becomes 121 - .Therefore, it is not a palindrome.

let number = 13311;

function palindrome(number) {

    let stringValue = number.toString(); // "1331"

    let splitNum = stringValue.split("");

    let stringReverse = splitNum
        .reverse()
        .join("");

    // let finalStr = parseInt(newArr.join(""));

    if (stringValue === stringReverse) {
        console.log(true);
    } else
        console.log("This is not a palindrome");
}

palindrome(number);