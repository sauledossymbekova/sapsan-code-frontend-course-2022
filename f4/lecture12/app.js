// В какую возрастную группу входить человек
// child 0-13 teens 13-21 young 21-30 adults 30-
// Решение:
// const age = prompt("Your age");

// console.log(typeof age);

// if (age < 14){
//     console.log("You are child");
// } else if(age < 22){
//     console.log("You are teen");
// } else if(age < 30){
//     console.log("You are young");
// } else if (age > 29){
//     console.log("You are adult");
// }

// let a = 1;
// let b = 1;
// == checks for value
// if (a == b) {
//   alert("ok");
// } else if (a != b) {
//   alert("not ok");
// }

// === checks for value and type
// != !== checks for not equal

// if (a === b) {
//   alert("ok");
// } else if (a !== b) {
//   alert("not ok");
// }

// && ||
// const isSuccess = true;
// let a = 1;

//AND (&&)
// Все условия должны быть правдой только тогда будет TRUE иначе False

// if (isSuccess && a > 0) {
//   console.log("OK");
// } else {
//   console.log("failed");
// }
// true true => true
// false true => false
// true false => false
// false false => false
// console.log(isSuccess && a > 0);

//OR (||)
// хотя бы одно условие должно быть верным
// if (isSuccess || a > 0) {
//   console.log("OK");
// } else {
//   console.log("failed");
// }

// console.log(isSuccess || a > 0);
// true true => true
// false true => false
// true false => false
// false false => false

// const age = prompt("Your age");

// if (age >= 0 && age < 14) {
//   console.log("You are child");
// } else if (age > 13 && age < 22) {
//   console.log("You are teen");
// } else if (age >= 21 && age < 30) {
//   console.log("You are young");
// } else if (age >= 30 && age <= 100) {
//   console.log("You are adult");
// }

//Remainder
// const a = 4;
// const b = 2;
// c = a%b;
// console.log(a % b);

// if (a%b ===0){
//     alert("Цифра делится");
// } else {
//     alert("Цифра не делится")
// }

//Тернарный оператор (condition) ? "" : ""
// let d = 5;
// let e = 6;

// (d > e) ? alert("больше") : alert("меньше");

// const a = +prompt("first number");
// const b = +prompt("second number:");

// a % b === 0 ? alert("yes") : alert("no");

// a > b ? alert(">") : a < b ? alert("second") : alert("=");

// let a = 10;
// a+=5;
// a = a + 5; //SAME
// a -=5;
// a *= 2;
// a /= 5;
// console.log(a);


//undefined - defined but not initialized
// let a;
// console.log(typeof a);

// a = 5;
// console.log(typeof a);

// increment
// let a =0;
// console.log(++a);
// console.log(a++);
// console.log(a);

//decrement
// let b = 5;
// console.log(b--);
// console.log(--b);
