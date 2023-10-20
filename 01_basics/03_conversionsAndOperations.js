// ----------------- CONVERSIONS --------------------

let stringNum = "33abc";

let stringInNum = Number(stringNum);
console.log(typeof stringInNum); //type: number
console.log(stringInNum); //value: NaN

// "123" => 123
// "123ABC" => NaN
// "true" => 1 / "false" => 0

let isLoggedIn = 1; // => true
// let isLoggedIn = 0; // => false
// let isLoggedIn = ""; // => false
// let isLoggedIn = "abcd"; // => true

let boolianIsLOggedIn = Boolean(isLoggedIn);
console.log(typeof boolianIsLOggedIn); // type: boolean
console.log(boolianIsLOggedIn); // value: true

let someNumber = 123;

let stringNumber = String(someNumber);
console.log(typeof stringNumber); // type: string
console.log(stringNumber); // value: 123


// ----------- OPERATIONS --------------------


let positiveNum = 123;
let negativeNum = -positiveNum;
console.log(negativeNum); // -123

console.log(2 + 2); // 4
console.log(2 - 2); // 0
console.log(2 * 2); // 4
console.log(2 ** 3); // 4 (2^3)
console.log(2 / 2); // 1 (quotient)
console.log(2 % 2); // 0 (reminder)

let str1 = "Jai Shree";
let str2 = " Ram";
let str3 = str1 + str2;
console.log(str3); // Jai Shree Ram

//    complex situation (also bad practice)

// ToPrimitive in ecmascript (doc)

console.log("1" + 2); // 12
console.log(1 + "2"); // 12
console.log("1" + 2 + 3); // 123
console.log(2 + 2 + "3"); // 43

// use perenthisis
console.log(3 + 4 * 5 % 3); // v v bad practice // 5 [wrong]
console.log(((3 + 4) * 5) % 3); // good // 2 [right]

// bad code: (never do this)
// confusing code

console.log(true); // true
console.log(+true); // 1
console.log(+""); // 0

let num1, num2, num3;
num1 = num2 = num3 = 2 + 2; //(why to do this man?)