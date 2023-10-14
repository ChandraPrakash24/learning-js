//change in the value of const is not allowed
// never use var (due to block scope and functional scope issue '{ }' resion)
const accountId = 234322;
let accountEmail = "abc1234@gmail.com";
var accountPassword = "gjsggf378ihgi2f6*&^*&hj";
accountCity = "Indore"; // bad practice

let accountState; // only decalre no value assign it is consider as `undefined` by deafult

// changing values
// accountId = 686786;  // Not allowed
accountEmail = "xyz@email.com";
accountPassword = "sdhdh778";
accountCity = "Bhopal";

console.table([accountId, accountPassword, accountCity, accountEmail, accountState]);

//       OUTPUT:-

// ┌─────────┬─────────────────┐
// │ (index) │     Values      │
// ├─────────┼─────────────────┤
// │    0    │     234322      │
// │    1    │   'sdhdh778'    │
// │    2    │    'Bhopal'     │
// │    3    │ 'xyz@email.com' │
// │    4    │    undefined    │
// └─────────┴─────────────────┘