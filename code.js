// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

// sayHello function
function sayHello(x) {

    // EXERCISES 1-5

//     if (x === "Alex") {
//         return "Hello, Alex!";
//     } else if (x === "Pat") {
//         return "Hello, Pat!";
//     } else {
//         return "Hello, Jane!";
//     }
//
// }

// EXERCISE 6-9 (refactor above + EXERCISE 8 edge cases)

    if (typeof x === "string" && x !== Number) {
        return "Hello, " + x + "!";
    } else {
    }   return "Hello, World!";
}

//     if (x === false || x === undefined || x === "" || x !== "string"){
//         return "Hello, World!";
//     }   else if (x === null) {
//         return null;
//     }   else {
//         return "Hello, " + x + "!";
//     }
//
// }

// EXERCISE 8 (refactored)

//      return (x === undefined || x == false) ? "Hello, World!" : ("Hello, " + x + "!");
// }

// EXERCISE 10

function isFive(x) {
    return (x === 'boolean' || x !== Number) && ((x === 5) || (x === "5"));
}

// EXERCISE 11

function isEven(x) {
    if (x % 2 === 0) {
        return true;
    } else return x === Number || x === Infinity;}

// EXERCISE 12

function isVowel(x) {
    return x === "a" || x === "A";
}

// EXERCISE 13

function add(x, y) {
    if (!isNaN(x) && !isNaN(y)) {
        return (parseFloat(x) + parseFloat(y));
    } else {
        return NaN;
    }
}
