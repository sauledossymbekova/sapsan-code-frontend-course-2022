// console.log("Hello World");
// Variables

// var a = 1;

// const b = 1;
// // b = 2; // Error: Assignment to constant variable.

// let c = 3;
// c = 4;

// let greetings = "Hello"
// const firstName = "Saule"

// let _surname = "";
// let $name
// let 5 = "" // error
// let 5name // error

// let myAge // camelCase Naming Convention

// my-age
// my_age this is bad

// let firstname = "Saule";
// firstname = 3;

// let a;
// a = 4; // okay
// const b; // error
// b = 5;

// string number boolean
// let a = 5;
// let myName = "Saule";
// let muSurname = "Doss";
// let isCompleted = false;

// let c = null;
// let d = undefined;
// console.log(typeof a);
// console.log(typeof myName);
// console.log(typeof isCompleted); // true false
// console.log(typeof c);
// console.log(typeof d);

// let age = prompt("Enter your age");
// alert(age);

// Operators
// + - * /

// let a = 10;
// let b = 5;

// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);

// let birthYear = prompt('Введи свой год рождения');
// let currentYear = 2022
// let age = currentYear - birthYear;

// alert("Ваш возраст " + age + " ?");

// const isCompleted = 'fail';

// if (isCompleted === 'done'){
//     console.log("Задача закрыта");
// } else if(isCompleted === 'inProgress') {
//     console.log("Задача в процессе");
//     alert('быстрее выполни!')
// } else {
//     alert("task is failed:(")
// }

// if (isCompleted === 'inProgress'){
//     console.log("Задача в процессе");
//     alert('быстрее выполни!')
// }

// Будет ли у человека др в буд
// 2022 22 2022 21

// const age = 21;
// const birthYear = 2000;

// const calculatedAge = 2022 - birthYear;

// if (calculatedAge === age) {
//   alert("Ваше ДР прошло");
// } else {
//   alert("Ваше ДР не прошло");
// }

// > < >= <=
const legalAge = 18;
const yourAge = prompt("Your age");

if(yourAge >= legalAge){
    console.log('Go drink alcohol')
} else if (yourAge < legalAge) {
    console.log('No alcohol');
}

// В какую возрастную группу входить человек
// child 0-13 teens 13-21 young 21-30 adults 30-..

//Напишите программу, которая будет считать процент жира в организме человека и будет выводить результат в консоль. Запрашивайте рост и окружность талии через prompt.
// Формула:
// Мужчины: 64 − (20 × рост/окружность талии)
// Женщины: 76 − (20 × рост/окружность талии)