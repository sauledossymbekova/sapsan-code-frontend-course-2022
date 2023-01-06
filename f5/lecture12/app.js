// В какую возрастную группу входить человек
// child 0-13 teens 13-21 young 21-30 adults 30-
// Решение:
// const age = prompt("Your age");

// // console.log(typeof age);

// if (age < 14){
//     console.log("You are child");
// } else if(age < 22){
//     console.log("You are teen");
// } else if(age < 30){
//     console.log("You are young");
// } else if (age > 29){
//     console.log("You are adult");
// }

// негативные цифры
// если цифра больше 120

//Напишите программу, которая будет считать процент жира в организме человека и будет выводить результат в консоль. Запрашивайте рост и окружность талии через prompt.
// Формула:
// Мужчины: 64 − (20 × рост/окружность талии)
// Женщины: 76 − (20 × рост/окружность талии)

// Решение:
// const height = prompt("Your height");
// const waist = prompt("Your waist");
// const sign = prompt("Male/Female ?");

// if (sign === "Female") {
//   let percent = 76 - (20 * height) / waist;
//   console.log(percent);
// } else if (sign === "Male") {
//   console.log(64 - (20 * height) / waist);
// } else {
//   console.log("Try again...");
// }

// == === difference
// let a = 1;
// let b = '2';

// == silly check
// value check
// if (a == b){
//     console.log('= OK');
// } else {
//     console.log('NOT OK');
// }

// correct check
// Type check and value check

// if (a === b){
//     console.log('= OK');
// } else {
//     console.log('NOT OK');
// }

// ! NOT
// != не равно ли по значению
// !== не равно ли по типу и значению

// let a = 1;
// let b = 1;

// let a = 1;
// let b = '1';

// if (a != b){
//     console.log('!= NOT OK');
// } else {
//     console.log('OK');
// }

// if (a !== b){
//     console.log('!= NOT OK');
// } else {
//     console.log('OK');
// }

// let isSaule = false;

// if(!isSaule){
//     console.log("It is not Saule!!")
// } else {
//     console.log("Hello");
// }

// && ||
// let isSuccess = false;
// let a = 0;

// AND (&&)
// Все условия должны быть правдой только тогда будет TRUE иначе False
// дайте мне кофе и круассан

// isSuccess === true

// if(isSuccess && a > 0) {
//     console.log("OK");
// } else {
//     console.log("NOT OK");
// }

// true true => true
// false true => false
// true false => false
// false false => false

// OR (||)
// хотя бы одно условие должно быть верным тогда будет TRUE
// принеси мне сок или воду

// if(isSuccess || a > 0) {
//     console.log("OK");
// } else {
//     console.log("NOT OK");
// }

// true true => true
// false true => true
// true false => true
// false false => false

// Rewrite homework with logical operators

// const age = prompt("Your age");

// if (age >= 0 && age < 14) {
//   console.log("You are child");
// } else if (age > 13 && age < 22) {
//   console.log("You are teen");
// } else if (age >= 21 && age < 30) {
//   console.log("You are young");
// } else if (age >= 30 && age <= 100) {
//   console.log("You are adult");
// } else if (age < 0 || age > 100) {
//   console.log("WRONG AGE");
// } else {
//   console.log("ERROR");
// }

// let a = +prompt("First number");
// let b = +prompt("Second number");

// 3 2 => 5
// 3 2 => 32

// Remainder
// %
// let a = 11;
// let b = 3;

// console.log( a % b);  // 5/2= 2 1
// 11:3 = 3 remainder 2
// when no remaider % returns 0

// Task
// input: 5 2 output: no
// input 10 2 output yes

// const a = +prompt("First number");
// const b = +prompt("Second number");

// if(a % b === 0){
//     console.log("yes");
// } else {
//     console.log("no");
// }

// increment decrement

// increment
// let a = 0;
// a++;
// ++a;
// console.log(a);

// console.log(a++); // 0
// console.log(a);
// console.log(++a); // 1
// a = 1 in both cases

//decrement
// let b = 5;
// b--;
// --b;
// console.log(b);
// console.log(b--);
// console.log(--b);

// math operators in short
// let a = 10;
// a = a + 5;
// a += 5;
// console.log(a);

// a -= 5;
// console.log(a); // 5

// a *= 5;
// console.log(a); // 50

// a /= 5;
// console.log(a); // 2


// HW:

// Task #1
// найти число четное или нечетное
// input: 7 output: odd
// input: 4 output: even
// hint: even numbers divide by 2 with no remainder

// Task #2
// '>', '<' or '=‘.
// дается два числа, если первое больше второго то выводит >, 
// если первое меньше второго то <, если равны то =

// Tasl #3
// find average
// дается два числа, надо найти среднию
// input: 3 4 output: 3.5

// Task #4
// find remainder
// дается два числа, надо найти остаток
// input: 5 2 output: 1

// Task #5
// дается три числа надо найти результат по формуле
// x² + y - z:2
// input: 3 4 2 output: 12
// input: 5 -5 10 output: 15