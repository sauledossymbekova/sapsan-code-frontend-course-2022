// HW
// Task1 1 - 100

// let result = [];
// for (let i = 1; i <= 100; i++) {
//     result.push(i);
// }

// console.log(result); //вывод целового массива

// вывод каждого элемента в массиве
// result.length = 100, result[result.length - 1] = result[99], last element result[99]
// for (let i = 0; i < result.length; i++) {
//   console.log(result[i]);
// }

// 100 99 98 - 1
// result.length - 1 = 99
// for (let i = result.length - 1; i >= 0; i--) {
//   console.log(result[i]);
// }

// built-in function for array

// console.log(result.reverse());

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
// let result = []; // 2 4 6 8 .. 20
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
// let arr = [true, false, 1, "", null, undefined, 2, "text", []];

// let result = [];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i]) {
//     result.push(arr[i]);
//   }
// }
// console.log(result);

// arr.length > 0 to find array is empty or not
// False
// null, undefined, '', false, 0, Nan, ..
// let a;
// a ? console.log('ok') : console.log('bad');

//task5

// let arr = [1, 3, 2, 7, 8, 6, 4];

// let max = arr[1]; // -1 // 0

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > max) {
//     max = arr[i];
//   }
// }
// console.log(max);

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
// let arr2 = [ 3, 1, 2, 7, 8, 6, 4];
// let arr2 = [ 3, 1, 2, 7, 8, 6, 4, 8]; //no
// let arr2 = [ 3, 1, 1, 7, 8, 6, 4]; //no
// let arr2 = [ 3, 1, '', [], 8, 6, 4]; //no

// let isEqual = true;

// if(arr.length === arr2.length){
//   for(let i = 0; i < arr.length; i++){
//     if(arr[i] !== arr2[i]){
//       isEqual = false;
//       break;
//     }
//   }
// } else {
//   isEqual = false;
// }

// isEqual ? console.log('yes') : console.log('no');

// Lecture15
// Function declaration описание/обьявление
// let age = 21;

// function greeting(firstname, surname) {

//     let text = `Hello, ${firstname} ${surname}!`;
//     alert(`${text} you are ${age}`);
// }
// // вызов
// greeting('Saule', 'Doss');

// console.log(text); // Uncaught ReferenceError: text is not defined

// variables with functions
    // переменные созданные внутри функции не видны вне функции, видны только внутри функции text
    // переменные созданные вне функции видны внутри функции age
    // scope

// function findSum(a, b, c) {
//   console.log(a + b + c);
// }

// findSum(4, 5, 9);

// write function, name, surname, age. greeting with is 21 or not
// function check(age) {
//   let text = age >= 21 ? "legal" : "illegal";
//   return text;
// }
// // console.log(check(22));

// function greeting(firstname, surname, age) {
//   alert(`Hello, ${firstname} ${surname}! you are ${check(age)}`);
// }

// greeting("Saule", "Doss", 17);

// keyword return
// in functions can be called other functions
// in functions we can create other variables

// HW:
// сделать калькулятор(+, -, *, /) input 2, 3 output: 5, -1, 6, 
// заполнить массив предоставленным значением и вывести, input: 'a' 3 output ['a', 'a', 'a']
// возвращает новый массив без особенных значений. 
// input: [a, b, c, 1, 3], a 
// output: [b, c, 1, 3]

// built in functions for array, pop, slice, filter, map, shift, unshift, foreach
