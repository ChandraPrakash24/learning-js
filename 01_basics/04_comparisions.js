// === strictly equeled like "2" === 2 --> false (ya data type bhe check karega)
// == loosly equeled (isme conversion hota hai) like "2" == 2 --> true



//     BASIC
// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 <= 1);
// console.log(2 != 1);
// console.log(2 == 1);




// complex situation (bad practice)
// there is no sence to compare two different data types to each other

console.log("1" > 2); // false// it converted "1" o "01" to number 1
console.log("01" > 2); // false
console.log("1" < 2); // true 
console.log("01" < 2);// true



console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true
// REASON: the reasone is that the equality check == and comparisons > < >= <= work diffrently.
//comparisons convert null to number, treating it as 0.
// that's why in (3) null >= 0 is true and in (1) null > 0 is false




console.log(undefined > 0); // false
console.log(undefined == 0); // false
console.log(undefined >= 0); // false
// console.log(undefined any 0); // false