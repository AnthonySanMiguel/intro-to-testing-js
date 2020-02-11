// helloWorld function 
// function helloWorld() {
//     return "Hello, World!";
// }

// sayHello function
// function sayHello(x) {

    // EXERCISES 1-5

//     if (x === "Alex") {
//         return "Hello, Alex!";
//     } else if (x === "Pat") {
//         return "Hello, Pat!";
//     } else {
//         return "Hello, Jane!";
//     }
// }

// EXERCISE 6-9 (refactor above + EXERCISE 8 edge cases)

//     if (typeof x === "string" && x !== Number) {
//         return "Hello, " + x + "!";
//     } else {
//     }   return "Hello, World!";
// }

//     if (x === undefined || x === false || x === "" || x === null || x !== "string"){
//         return "Hello, World!";
// }   else {
//         return "Hello, " + x + "!";
//     }
// }

// EXERCISE 8 (refactored)

//      return (x === undefined || x == false) ? "Hello, World!" : ("Hello, " + x + "!");
// }

// EXERCISE 10

function isFive(x) {
    if(x === 'boolean' || x !== Number) {
        return true;
    }
}
