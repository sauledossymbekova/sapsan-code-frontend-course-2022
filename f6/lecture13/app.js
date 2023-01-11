// HW

// TASK #1 find average
// let a;
// let b;

// // 1st solution
// a = prompt("Первое число");
// b = prompt("Второе число");
// alert(a + b / 2); // wrong: 3 4/2= 3 2 => concat => 32

// console.log(typeof a + b / 2);
// '1' => 1
// 'text1' =>

// 2nd solution
// a = +prompt("Первое число");
// b = +prompt("Второе число"); // convert to numbers

// alert(a + b / 2); // wrong: 3 + 4/2 => 5

// 3rd solution
// a = +prompt("Первое число");
// b = +prompt("Второе число");

// alert((a + b) / 2); // OK (3+4)/2 => 3.5

// TASK #2 '>', '<' or '=‘.
// let a;
// let b;
// a = +prompt("Первое число");
// b = +prompt("Второе число");
// '1' => 1
// 'text' => ..

//#1 and #2 is THE SAME

// #1
// a > b ? alert(">") : a < b ? alert("<") : alert("=");

// #2
// if (a > b) {
//   console.log(">");
// } else if (a < b) {
//   console.log("<");
// } else {
//   console.log("=");
// }
// complex solution
// a > b ? alert(">") : a < b ? alert("<") : a===b ? alert("=") : alert('error');

// if (a > b) {
//   console.log(">");
// } else if (a < b) {
//   console.log("<");
// } else if (a === b) {
//   console.log("=");
// } else {
//   console.error("error");
// }

// TASK #3 find x² + y - z:2

// let x;
// let y;
// let z;

// x = +prompt("Первое число");
// y = +prompt("Второе число");
// z = +prompt("Третье число");

// let result = x * x + y - z / 2;
// let result = x ** 2 + y - z / 2; // 2 3 4 = 2*2+3-4/2 = 4 + 3 - 2 = 5
// let result = Math.pow(x, 2)+ y - z / 2;

// console.log(result); // 5

// Lecture13

// LOOP
// For while

// 1 - 10

// alert(1);
// alert(2);
// alert(3);

// //...
// alert(10);

// let a = 1;
// alert(a++);
// alert(a++);
// alert(a++);
// // ...
// alert(a++);

// code repeat
// not flexible with big numbers

// Syntax

// for(define counter; condition for counter; action for counter){
// что должно происходить при каждом шаге
// }

// let result = 0;

// for (let i = 1; i <= 10; i++){
//     // console.log('Hello');
//     console.log(++result); // 1-10
//     // console.log(result++); // 0-9
// }

// Syntax:
// while(condition){ action while condition is true}

// let i = 0;

// while (i < 10) {
// // console.log("Hello");
//   i++;
//   console.log(i);
// }

// let isOk = true;
// let result = 0;

// while(isOk){ // while (isOk === true)

//     console.log(++result);

//     if(result === 100){
//         isOk = false;
//     }
// }

//1 2 - 1000
// 1000

// 100 => 101 102, 103 ... 110
// 17 => 18, 19 20, 21, ... 27

// let a = +prompt("Enter number");

// for(let i = 0; i < 10; i++){
//     console.log(++a);
// }

// let i = 0;
// while (i < 10) {
//   console.log(++a);
//   i++;
// }

// Reverse loop

// for (let i = 100; i > 0; i--) {
//   console.log(i);
// }

// let i = 100;
// while (i > 0) {
//   console.log(i--);
// }

// Task
// 10 20 30 40 50 .. 100
// a % 10 === 0

// let a = +prompt("Enter number");

// for (let i = 1; i <= a; i++){
//     if(i % 10 === 0){
//         console.log(i);
//     }
// }

// let i = 0;
// while (i <= 100){
//     if(i % 10 === 0){
//         console.log(i);
//     }
//     i++;
// }

// input: 150
// output: 10 20 30 .. 110 120 130 140 150

// input: 47
// output: 10 20 30 40


// Task 2 with loop
// 100 - 0 которые делятся на 5
// 100 95 90 85 80 .. 0 

// for (let i = 100; i >= 0; i--){
//     if(i % 5 === 0){
//         console.log(i);
//     }
// }

// let a = 100;

// for (let i = 0; i <= 20; i++) {
//   console.log(a);
//   a -= 5;
// }

// while (a >= 0) {
//   console.log(a); // 100 // 95
//   a -= 5; // a = a - 5; = 95
// }

// 47 42 37 32 27 .. 2


// 3 6 9 12 15 18 21 24 27 30
// even numbers, 2 4 6 8 10 .. 