let stringNum = "33abc";

let stringInNum = Number (stringNum);
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