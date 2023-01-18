// HW
// Task1 1 - 100

// let result = [];
// for (let i = 1; i <= 100; i++) {
//     result.push(i);
// }

// console.log(result); //вывод целового массива

// вывод каждого элемента в массиве
// result.length = 100, result[result.length - 1] = result[99], last element result[99]
// for (let i = 0; i <= result.length; i++) {
//   console.log(result[i]);
// }

// 100 99 98 - 1
// result.length - 1 = 99
// for (let i = result.length - 1; i >= 0; i--) {
//   console.log(result[i]);
// }

// built-in function for array
// result.reverse();
// console.log(result.reverse()); // do reverse and returns reversed array
// console.log(result);
// result.reverse();
// result.reverse();

// console.log(result);

// Task2 1-99 odd even

// even 2,4,6,8 - 98
// let result = [];

// for (let i = 1; i < 100; i++) {
//   if (i % 2 === 0) {
//     result.push(i);
//   }
// }
// console.log(result);

// odd 1,3,5,7,9 - 99
// let result = [];
// for (let i = 1; i <= 99; i++) {
//   if (i % 2 === 1) {
//     //  if (!(i % 2 === 0)) {
//     // if (i % 2 !== 0) {
//     result.push(i);
//   }
// }
// console.log(result);

// Task 3

// sum of even 2-20
// let result = []; // 2 4 6 8 10 .. 20
// for (let i = 2; i <= 20; i++) {
//   if (i % 2 === 0) {
//     result.push(i);
//   }
// }

// let sum = 0;
// for (let i = 0; i < result.length; i++) {
//   sum += result[i];
// }

// console.log(sum);

// other way to solve
// let sum = 0;

// for (let i = 2; i <= 20; i++) {
//   if (i % 2 === 0) {
//     sum += i;
//   }
// }
// console.log(sum);

// Task4
// cleanup array
// let example = [true, false, 1, "", null, undefined, 2, 0, -0, -1, 10n, "text", []];

// let result = [];

// for (let i = 0; i < arr.length; i++) {
//   if (example[i]) { // arr[i] === true // if(a) // true, false = 0, null, undefined,''
//     // 1 0 1 0
//     // [1][0][0][0]
// 1 = true, 0 = false
//     result.push(example[i]);
//   }
// //   if(arr[i] === false) // not ok
// }
// console.log(result);

// console.log(typeof -0);

// arr.length > 0 to find array is empty or not
// False
// null, undefined, '', false, 0, Nan, ..
// let a;
// a ? console.log('ok') : console.log('bad');

//task5

// let arr = [1, 3, 9, 2, 7, 8, 6, 4];

// let max = arr[0]; // -1 // 0

// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] > max) {
//     max = arr[i];
//   }
// }
// console.log(max);

// console.log(Math.max(1, 5)); //built-in Math.max

//task6
// let arr = [ 3, 1, 2, 7, 8, 6, 4];

// let min = arr[1];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] < min) {
//     min = arr[i];
//   }
// }
// console.log(min);

// max = Math.max(max, arr[i]);

// task7 two arrays equality
// let arr = [ 3, 1, 2, 7, 8, 6, 4];
// let arr2 = [ 3, 0, 2, 7, 8, 6, 4];

// let a = [1,2];
// let b = [1,2]
// // let arr2 = [ 3, 1, 2, 7, 8, 6, 4, 8]; //no
// // let arr2 = [ 3, 1, 1, 7, 8, 6, 4]; //no
// // let arr2 = [ 3, 1, '', [], 8, 6, 4]; //no
// let arr2 = [ 3, '1', 2, 7, 8, 6, 4];
// // ['khjbd', ',kadjsnb'];

// let isEqual = true;

// if(arr.length === arr2.length){

//   for(let i = 0; i < arr.length; i++){

//     if(arr[i] === arr2[i]){ // ! НЕ, !== не равно ли, === Равно ли
//       isEqual = false;
//       break; // =STOP
//     }

//   }

// } else {
//   isEqual = false;
// }

// isEqual === true ? console.log('yes') : console.log('no');
// if(isEqual) равно if(isEqual === true)

// Lecture15
// Functions

// built-in methods

// let a = [];

// a.push('a');
// a.length

// function name(params){
// body
// }

// function sayHello(name, surname, message) {
//   console.log("hello world", name + " " + surname + "!");
// }

// sayHello("Saule", 'Doss'); // value for param name
// sayHello("Alina", "Alina");
// sayHello("Angelina");
// sayHello();
// sayHello();

// showMessage => takes message / text => shows it with alert

// function showMessage(message){
//     alert(message);
// }

// showMessage("Hello world!");
// showMessage("Hello Saule!");

// const sayHello = function (name) {
//   console.log(`Hello ${name} !`);
// };

// sayHello("Saule");

// function sum(a, b) {
//   console.log(a + b);
// }

// sum(1, 1);

// let text = "Hello";

// function sum(a, b) {

//   let c = a + b;

//   console.log('Result:',c);
//   console.log(text);
// }

// // console.log(c); // Uncaught ReferenceError: c is not defined
// sum(1, 5);

// let a = 'a';

// function show(){
//     a = 'b';

//     console.log(a);
// }

// show(); // 'b'

// console.log(a); // ?

// scope // closure  = область видимости и замыкание

// function calculate(a, b){
//     let c = a + b;

//     return c;
// }

// let result = calculate(5, 5); // 10

// result++;
// result++;
// result++;

// let a = result * result;

// alert(a);

// function sum(a, b){
//     let c = a + b;

//     return c;
// }

// console.log('1 + 1', sum(1,1));

// // 2^3 = 8
// // 6^5 = 6*6*6*6*6

// const d = Math.pow(4, 3);
// console.log(d);

// hello, check is age legal

// Examples

// function myFunction(name, age){
//     if(age >= 21){
//         console.log(`Hello ${name}!, go drink alco!`);
//     } else if(age < 21) {
//         console.log(`Hello ${name}!, NO alco!`);
//     }
// }

// myFunction('Saule', 17);

// function clear(arr){
//     let result = arr;

//     for (let i = 0; i < result.length; i++){
//         if (result[i] === 0){
//             result[i] = "A";
//         }
//     }

//     return result;
// }

// // clear([1, 1, 0, 'b', 0]);

// alert(clear([1, 1, 0, 'b', 0]));

// default params

// function showMessage(name, text = "текст не добавлен") {
//   alert(`Hello ${name}! ` + text);
// }

// // showMessage('Saule');
// showMessage('Saule', 'How are you?');

// function calculate(a, b = 2){
//     console.log(Math.pow(a, b));
// }

// calculate(2);
// calculate(2,3);


// HW:
// сделать калькулятор(+, -, *, /) 
        // input 2, 3, + 
        // output: 5

        // input 2, 3,
        // output: 5, -1, 6, 2/3

// заполнить массив предоставленным значением и вывести, 
    // input: 'a' 3 
    // output ['a', 'a', 'a']
    // 1 1
    // 1
    // 3 2
    // 3 3
   
    // b 10
    // b b b b b b b b b b

// возвращает новый массив без особенных значений. 
    // input: [a, b, c, 1, 3], a 
    // output: [b, c, 1, 3]
