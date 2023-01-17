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
// result.reverse();
// console.log(result.reverse()); // do reverse and returns reversed array

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
// let arr = [true, false, 1, "", null, undefined, 2, 0, -0, -1, 10n, "text", []];

// let result = [];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i]) {
//     result.push(arr[i]);
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

// let arr = [1, 3, 2, 7, 8, 6, 4];

// let max = arr[1]; // -1 // 0

// for (let i = 0; i < arr.length; i++) {
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
// // let arr2 = [ 3, 1, 2, 7, 8, 6, 4];
// // let arr2 = [ 3, 1, 2, 7, 8, 6, 4, 8]; //no
// // let arr2 = [ 3, 1, 1, 7, 8, 6, 4]; //no
// // let arr2 = [ 3, 1, '', [], 8, 6, 4]; //no
// let arr2 = [ 3, '1', 2, 7, 8, 6, 4];
// // ['khjbd', ',kadjsnb'];

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

// Lecture15 Functions

let arr = [];
arr.push("");
arr.reverse();

// function( params ) {
// body of function
// }

// function greeting() {
//     let text = 'Hello!';
//     alert(text);
// }
// greeting();

// const doSomething = function(){
//     alert('Hello World!');
// }

// doSomething();

// function advancedGreeting(firstname, surname, age) {
//   let text = `Hello, ${firstname}!`;
//   alert(text);
//   alert(`you are ${age}?`);
// }

// advancedGreeting("Saule", "Doss", 22);
// advancedGreeting("Madina");
// advancedGreeting("Kanat");
// advancedGreeting("Talim");

function calculate(a, b) {
  return a + b;
}

// let result = calculate(3, 4);

// result--;

// console.log(result);
function isOlderThanMe(myAge, yourAge) {
  return myAge >= yourAge ? false : true;
}

function sayHello() {
  let name = prompt("What is your name?");
  let age = prompt("What is your age?");

  let myAge = 22;
  let a = isOlderThanMe(myAge, age);
  let result = a
    ? `Nice to meet you ${name}, you are older than me`
    : `Nice to meet you ${name}, let's PARTY!`;

  var some = 0;
  return result;
}

// let a = sayHello();
// console.log(a);
// console.log( age, myAge, some) // Uncaught ReferenceError: age is not defined

// let a = 'a';
// let b = 'b';
// let c = 'c';

function check(){
    let d = 0;
    let e = 1;
    let f = 2;

    a = 'aa';
    console.log(a);
}

// // console.log(d); // error not defined
// check();
// console.log(a);

// scope closure

// Default values for params

function showMessage(from, text = "текст не добавлен") {
  alert(from + ": " + text);
}

// showMessage('Saule');
// showMessage('Saule', 'blablabla');


// task 
// a, b, "+" "-"
// "+"
// return a + - b


function calculate(a, b, c ="+"){
    if(c === "+"){
        return a + b;
    } else if (c === "-"){
        return a - b;
    }
}

console.log(calculate(1, 1, '+'));
console.log(calculate(1, 1, '-'));
console.log(calculate(4, 5, '+'));
console.log(calculate(3, 6, '-'));


// HW:
// сделать калькулятор(+, -, *, /) 
        // input 2, 3, + 
        // output: 5

        // input 2, 3,
        // output: 5, -1, 6, 2/3

// заполнить массив предоставленным значением и вывести, 
    // input: 'a' 3 
    // output ['a', 'a', 'a']

// возвращает новый массив без особенных значений. 
    // input: [a, b, c, 1, 3], a 
    // output: [b, c, 1, 3]

// read about built in functions for array
    // pop, slice, shift, unshift, fill, concat, join, filter, map,  foreach

    
    const a = () => {
        
    }
    const b = () => 'text';