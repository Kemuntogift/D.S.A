// Given a non - negative integer x,
//     return the square root of x rounded down to the nearest integer.The returned integer should be non - negative as well.


function squareRoot(x) {
    if (x <= 0) {
        return false;
    } else if (x > 0) {
        return Math.sqrt(x).toFixed();

    }
}

console.log(squareRoot(6));