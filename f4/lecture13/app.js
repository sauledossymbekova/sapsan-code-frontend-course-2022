// HW

// TASK #1 find average
// let a;
// let b;

// 1st solution
// a = prompt("Первое число");
// b = prompt("Второе число");

// alert(a + b / 2); // wrong: 3 4/2=2 => concat => 32

// 2nd solution
// a = +prompt("Первое число");
// b = +prompt("Второе число"); // convert to numbers

// alert(a + b / 2); // wrong: 3 + 4/2 => 5

// 3rd solution

// a = +prompt("Первое число");
// b = +prompt("Второе число");

// alert((a + b) / 2); // OK (3+4)/2 => 3.5

// TASK #2 find remainder

// let a;
// let b;
// a = +prompt("Первое число");
// b = +prompt("Второе число");

// alert(a%b);

// LOOP for while

// alert(1);
// alert(2);
// alert(3);
// //...
// alert(10);

// let a;

// a = +prompt("Enter some number");

// console.log(++a);
// console.log(++a);
// console.log(++a);
// // ...
// console.log(++a);

// code repeating
// not flexible with big numbers

// Syntax

// for(define counter; condition for counter; action for counter){
// что должно происходить при каждом шаге
// }

// let a = 0;

// simple example for loop
// for (let i = 0; i < 100; i++) {
//   console.log(++a);
// }

// if (a > -1) {
//   for (let i = 0; i < 100; i++) {
//     console.log(++a);
//     //   if(){

//     //   }
//   }
// }

// Syntax while(condition){ action while condition is true}
// let j = 0;
// let b = 0;
// while (j < 10) {
//   console.log(++b);
//   j++;
// }

// let isSuccess = true;

// while(isSuccess === true){
//     console.log("hello");
//     j++;
//     if(j===10){
//         isSuccess = false;
//     }
// }

// let a = +prompt("Enter number");

// for(let i = 0; i < a; i++){
//     console.log(--a);
// }

// input: 10 output: 10 9 8 7 6 5 4 3 2 1 0

// reverse loop

// for (let i = 10; i > 0; i--) {
//   console.log(i);
// }

// solution

// let a = +prompt("Enter number");
// let result = a;

// for(let i = 0; i < a; i++){
//     console.log(result--);
// }

// solution with reverse loop
// for (a; a > 0; a--){
//     console.log(a);
// }

// task input: number output: 0 1 2 3 4 ... number
// let a = +prompt("Enter number");
// let i = 0;

// while (a >= 0) {
//   console.log(i++);
//   a--;
// }

// let a = +prompt("Enter number");
// let i = 0;

// while (i <= a) {
//   console.log(i++);
// }

// 1 2 3 4 5
// let i = 0;
// while (i < 5) {
//   //console.log(i++); // outputs 0 then do 0+1=1
//   console.log(++i);// do 0+1 then output 1
// }

// for (let i = 1; i <= 5; i++) {
//   console.log(i);
// }

// 5 4 3 2 1
// let a = 5;

// while (a > 0) {
//   console.log(a--);
// }

// multiplication table
// 3 6 9 12 15 18 21 24 27 30

// ten times
// use: a*=3;