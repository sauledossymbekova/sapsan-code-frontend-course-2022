// HW

// TASK #1 find odd || even
// let a;
// a = +prompt("число:");

// new:
// ternary operator
// syntax: (some condition) ? somthing if condition is true : somthing if condition is false
// a % 2 === 0 ? console.log("even") : console.log("odd");

// if (a % 2 === 0) {
//   console.log("even");
// } else {
//   console.error("odd");
// }

// complex
// if (a % 2 === 0) {
//   console.log("even");
// } else if (a % 2 === 1) {
//   console.log("odd");
// } else {
//   console.error("error");
// }

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
//a > b ? alert(">") : a < b ? alert("<") : a===b ? alert("=") : alert('error');

// if (a > b) {
//   console.log(">");
// } else if (a < b) {
//   console.log("<");
// } else if (a === b) {
//   console.log("=");
// } else {
//   console.error("error");
// }

// TASK #3 find average
// let a;
// let b;

// 1st solution
// a = prompt("Первое число");
// b = prompt("Второе число");
// alert(a + b / 2); // wrong: 3 4/2= 3 2 => concat => 32

// console.log(typeof a + b / 2);

// 2nd solution
// a = +prompt("Первое число");
// b = +prompt("Второе число"); // convert to numbers

// alert(a + b / 2); // wrong: 3 + 4/2 => 5

// 3rd solution
// a = +prompt("Первое число");
// b = +prompt("Второе число");

// alert((a + b) / 2); // OK (3+4)/2 => 3.5

// TASK #4 find remainder
// let a;
// let b;
// a = +prompt("Первое число");
// b = +prompt("Второе число");
// alert(a%b);

// TASK #5 find x² + y - z:2

// let x;
// let y;
// let z;

// x = +prompt("Первое число");
// y = +prompt("Второе число");
// z = +prompt("Третье число");

// // let result = x * x + y - z / 2;
// let result = x ** 2 + y - z / 2; // 2 3 4 = 2*2+3-4/2 = 4 + 3 - 2 = 5

// console.log(result); // 5

// Lecture13
// LOOP
// For while

// show numbers from 1 to 10
// alert(1);
// alert(2);
// // ...
// alert(10);

// let a = 1;
// alert(++a);
// alert(++a);
// // ...
// alert(++a); //till 10

// code duplication
// not flexible with big numbers

// Syntax

// for(define counter; condition for counter; action for counter){
// что должно происходить при каждом шаге
// }

// let a = 0;

// for (let i = 0; i < 10; i++) {
//   console.log(++a);
// }

// for (let i = 1; i < 10; i++) {
//   console.log(++a);
// }

// Syntax while(condition){ action while condition is true}

// let i = 0;
// let a = +prompt("Enter number");

// while (i < 10) {
//   console.log(++a);
//   i++;
// }

// let i = 0;

// while (i < 10) {
//   console.log(++i);
// }

// Reverse loop

// let a = +prompt("Enter number");

// for (let i = 0; i < 10; i++) {
//   console.log(--a);
// }

// 99 98 97 ..

// 1 2 3 ..100
// 100 99 98 .. 1

// reverse loop with while and for
// for (let i = 100; i > 0; i--) {
//   console.log(i);
// }

// console.log('a' < 'A');

// let i = 10;

// while (i > 0) {
//   i--;
//   console.log(i); // i=9
// }

// task with loop
// 100 95 90 85 80 .. 0 // 20 раз отнять 5 от а
// a = a - 5;
// a = 100 - 5 = 95
// a = 95 - 5 = 90
// a = 90 - 5 = 85

// let a = 100;

// for (let i = 0; i <= 20; i++) {
//   console.log(a);
//   a -= 5;
// }

// while (a >= 0) {
//   console.log(a);
//   a -= 5;
// }

for (let i = 1; i <= 100; i++) {
  if (i % 10 === 0) {
    console.log(i);
  }
}

// a >= 0

// output: a
// then a - 5

// output: a
// then a - 5
