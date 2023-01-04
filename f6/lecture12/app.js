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

// РАЗНИЦА МЕЖДУ == и ===
// let a = 1;
// let a = '1';

// if (a == 1) {
//     console.log('Yes');
// } else {
//     console.log('No');
// }

// if (a === 1) {
//     console.log('Yes');
// } else {
//     console.log('No');
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
// const isSuccess = false;
// let a = -1;
// let b = 0;
// AND (&&)
// Все условия должны быть правдой только тогда будет TRUE иначе False

// if (b===0 && a > 0) {
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
// false true => true
// true false => true
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
// } else {
//     console.log("Wrong AGE");
// }

// let a = prompt("Что ты хочешь пить?")

// if (a ==='sok' || a === 'voda'){
//     alert('enjoy your drink');
// } else {
//     alert('failed');
// }

//Remainder
// const a = 4;
// const b = 2;
// // c = a%b;
// console.log(a % b);

// let a = prompt("1st number");
// let b = prompt("2nd number");

// вводим два числа а и б
// остаток есть: остаток на экран
// остатка нет: говорите остатка нет

// console.log(a%b);

// if (a%b === 0){
//     alert('остатка нет')
// } else {
//     alert(a%b);
// }

// if (a%b ===0){
//     alert("Цифра делится");
// } else {
//     alert("Цифра не делится")
// }

//Тернарный оператор (condition) ? "" : ""

// let d = 7;
// let e = 6;

// (d > e) ? alert("больше") : alert("меньше");

// let a = prompt("1st number");
// let b = prompt("2nd number");

// if (a%b === 0){
//     alert('остатка нет')
// } else {
//     alert(a%b);
// }

// (a%b === 0) ? alert('остатка нет') :alert(a%b);

// Задача:

// два числа, если первый больше второго то надо сумму вывести этих чисел иначе вывести минус

// 3 2 => 5
// 2 3 => -1
// Решение:

// let a = 1;
// let b = 3;
// a > b ? alert(a+b) : alert(a-b);

// const a = +prompt("first number");
// const b = +prompt("second number:");

// a % b === 0 ? alert("yes") : alert("no");

// if (a > b) {
//   alert(">");
// } else if (a < b){
//     alert('<');
// } else {
//     alert('=');
// }

// a > b ? alert(">") : a < b ? alert("<") : alert("=");



// let a = 10; 
// // a = 10 + 5= 15
// a = a + 5; //SAME
// a+=5;
// console.log(a);

// a -=5;
// a *= 2;
// a /= 5;
// console.log(a);

//undefined - defined but not initialized обьявлен но значение не присвоено
// let a;
// console.log(typeof a);

// a = true;
// console.log(typeof a);

// increment +1
// let a = 0;
// a++;
// a--;
// console.log(a);

// console.log(++a);
// console.log(a++);
// console.log(a);

//decrement -1
// let b = 5;
// console.log(b--);
// console.log(--b);

// задачи
// let a = prompt('1st number');
// let b = prompt('2nd number');

// alert(a+b);
// alert(a*b);



//ДЗ

//1:нахождение средней // (a+b)/ 2

//2: '>', '<' or '=‘

//3: "x² + y - z:2