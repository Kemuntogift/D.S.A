// Given a string s, reverse only all the vowels in the string and
// return it.

// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

// Example

// Input: s = "hello"
// Output: "holle"


function reverseString() {
    let splitStr = str.split("");

    let newArr = [];

    for (let i = 0; i < splitStr.length; i++) {
        let stringReverse = splitStr
            .slice("a", "e", "i", "o", "u")
            .reverse()
            .join("");
        newArr.push(stringReverse);
    }

    let finalStr = newArr.join("");

    console.log(finalStr);
}