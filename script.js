// if else
function findMax(A, B, C) {
    let max;
    if (A > B && A > C) {
        max = A;
    } else if (B > C) {
        max = B;
    } else {
        max = C;
    }
    return max;
}

console.log(findMax(10, 52, 15)); 



// Ternary Operator (? :)
function findMax(A, B, C) {
    return (A > B) ? (A > C ? A : C) : (B > C ? B : C);
}

console.log(findMax(11, 13, 15)); 



// Math.max
function findMax(A, B, C) {
    return Math.max(A, B, C);
}

console.log(findMax(14, 295, 19)); 

