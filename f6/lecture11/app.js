// alert("Hi, JS!");

// VARIABLES
// var myName = "Saule";

// const myAge = 22;
// const a = 1;
// a = 2; // error: Uncaught TypeError:Assignment to constant variable

// const a; //error: 'const' declarations must be initialized
//Uncaught SyntaxError: Missing initializer in const declaration 

// let myHobby = "Music";
// let b;
// b = 2;

// console.log("Hello," + myName);
// console.log(b);

// let text = "some text"; //OK
// let a; //OK
// let text2;
// let _text;
// let $text;

// let 9 = "some text"; //error: Variable declaration not allowed at this location.
// let 9text; //error

// Naming Convention
// let firstName; //first word with downcase, second Uppercase
// let someText;

// BAD
// let my-text;
// let my_text;

// Чувствителен к регистру

// let text = 'Saule';
// let Text = 'not Saule';

// console.log(text);
// console.log(Text);


// Data Types

// string number boolean symbol null undefined bigint

// const firstname = "Saule"; // string
// const age = 22; // number
// const isCompleted = false; // boolean
// let a; // undefined - defined, not initialized
// console.log(typeof a);
// a = '';
// console.log(typeof a);

// console.log(typeof firstname);
// console.log(typeof age);
// console.log(typeof isCompleted);


// Dynamic type

// let a  = 1;
// console.log(typeof a);

// a = 'text';
// console.log(typeof a);

// console.log(a);

// Math operators
// + - * /

// let a = 10;
// let b = 5;
// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);

// console.log('Hi' + ' Saule!');

// const thisYear = 2022;
// const birthYear = prompt('Введите свой год рождения:');
// // console.log("Ваш год рождения: " + birthYear);
// const age = thisYear - birthYear;

// console.log("Вам " + age + "года");

// Conditional operators
// const isSuccess = false;

// if (isSuccess == true) {
//     alert("УСПЕХ!");
// } else if (isSuccess == false) {
//     alert("ФЕЙЛ!");
// }
// if(isSuccess == false) {
//     alert("ФЕЙЛ!");
// }


// const process = "";

// if (process == "inProgress"){
//     alert("Задача в процессе, Выполняй быстрее!");
// } else if (process == "done"){
//     alert("Задача сделана! ты молодец");
// } else {
//     alert("Я не знаю статус задачи:(");
// }

// Задача узнать было ли др у человека
// INPUT: birthYear age
// было ли др

// const birthYear = +prompt("Year:");
// const age = +prompt("Age:");
// const calculatedAge = 2022 - birthYear;

// if (age == calculatedAge) {
//     alert("Было др!");
// } else {
//     alert("не было др!");
// }


// > < >= <=

// const age = prompt("Age:");

// if (age >= 21){
//     alert("Иди пить алкоголь!")
// } else if (age < 21){
//     alert("Тебе нельзя алкоголь!");
// } else if(age == 0){

// }else {
//     alert("...")
// }

// console.log( 10 > 9);
// console.log( 10 < 9);

// ДЗ

//1
// В какую возрастную группу входить человек
// child 0-13 teens 13-21 young 21-30 adults 30-..
// Решение:
// const age = prompt("Your age");

// console.log(typeof age);

// if (age < 14){
//     alert("You are child");
// } else if(age < 22){
//     alert("You are teen");
// } else if(age < 30){
//     alert("You are young");
// } else if (age > 29){
//     alert("You are adult");
// }

//2
//Напишите программу, которая будет считать процент жира в организме человека
// и будет выводить результат в консоль. Запрашивайте рост и окружность талии через prompt.
// Формула:
// Мужчины: 64 − (20 × рост/окружность талии)
// Женщины: 76 − (20 × рост/окружность талии)
// Решение:
const height = prompt("Your height");
const waist = prompt("Your waist");
const sign = prompt("Male/Female ?");

if(sign == "Female"){
    let percent = 76 - (20 * height/waist)
    alert(percent);
} else if (sign=="Male"){
    alert(64 - (20 * height/waist));
} else {
    alert("Try again...")
}

// if (sign == "Ж"){

// } else if() {

// }