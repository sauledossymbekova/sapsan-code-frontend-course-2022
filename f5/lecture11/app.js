// alert("Hello");

// variables
// var myName = "Saule";
// let firstname;
// // constant
// const myAge = 22;
// alert(myAge);

// // BAD, error: Assignment to constant variable.
// myAge = 23;
// alert(myAge);

// let mySurname = "Doss";
// alert(mySurname);
// mySurname = "notDoss"
// alert(mySurname);

// let a = 1;
// BAD
// let 3;
// let 3my;
// OK
// let surname ;
// let _surname = " ";
// let $surname;

// camelCase
// let someNumber;

// Значения
// BAD, error: 'const' declarations must be initialized.ts
// const a;

//OK
// const b = 0;

// //OK
// let c;
// let d = 1;

// let e;
// ...
// e = 4;

// Две разные переменные
// let surname;
// let surName;

// code styling
// "" '' => SAME

//BAD, error CANNOT REDACLARE
// let a;
// let a;

// syntax

// const myName = 'Saule';
// console.log("Hello world", myName);
// Data types

// let a = 1; // number
// let firstName = "Saule"; //string
// let isOkay = true; //1
// let isSuccess = false; //boolean //0

// // typeof isOkay

// console.log(a);
// console.log(typeof a);
// console.log(firstName);
// console.log(typeof firstName);
// console.log(isOkay);
// console.log(typeof isOkay);
// console.log(isSuccess);
// console.log(typeof isSuccess);

// Динамический типизируемый язык
// let a = 1;
// console.log(typeof a);

// a = "Some Text";
// console.log(typeof a);

// a = false;
// console.log(typeof a);

// const b = 0;

// const a = 10;
// const b = 5;

// // Operators + - / *

// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);

// const c = a + b;
// console.log(c);

// const firstname = 'Saule';
// const surname = 'Doss';
// console.log(firstname + " " + surname);

// alert("Hello," + firstname + " " + surname + "!");

// let a = 5;
// let b = 7;

// SAME
// a = a + b;
// a += b;

// console.log(a);

// const isCompleted = 'In progress';
// const isCompleted = 'Done';
// const isCompleted = 'Failed';

// if(isCompleted == 'In progress') {
//     console.log('Сделай быстрее, ты до сих пор этим занимаешься');
// } else if(isCompleted == 'Done') {
//     console.log('Ты молодец, ты сделал эту задачу!');
// } else {
//     console.log('Ошибка, не знаю статуса!');
// }

// if(isCompleted == 'Done') {
//     console.log('Ты молодец, ты сделал эту задачу!');
// }

//ЗАДАЧИ

// let birthYear = prompt("Введи свой год рождения");
// let yourName = prompt('Ваше имя?');
// currentYear = 2022;
// let age = currentYear - birthYear;
// alert("Тебе " + age + "года");


// Операторы сравнения
// let age = prompt("Введи свой возраст:");
// // >= <= > <
// if (age >= 18) {
//   alert("Иди пить!");
// } else if (age < 18) {
//   alert("Нет алкоголю!");
// }

// ввод: возраст и его год рождения
// вывод было ли у него день рождения
// let age = prompt("Введи свой возраст:");
// let birthYear = prompt("Введи свой возраст:");

// 2023
// 2000

// 22 => др не было
// 23 => др было
const age = 22;
const birthYear = 2000;

const calculatedAge = 2022 - birthYear;

if (calculatedAge === age) {
  alert("Ваше ДР прошло");
} else {
  alert("Ваше ДР не прошло");
}

// ДЗ
// 1
// В какую возрастную группу входить человек
// child 0-13 teens 13-21 young 21-30 adults 30-.. if(age>30){ you are Adult!}

// 2
//Напишите программу, которая будет считать процент жира в организме человека и будет выводить результат в консоль. Запрашивайте рост и окружность талии через prompt.
// Формула:

// ростб окружность талии, мужчина или женщина
// Мужчины: 64 − (20 × рост/окружность талии)
// Женщины: 76 − (20 × рост/окружность талии)
alert('процент жира');