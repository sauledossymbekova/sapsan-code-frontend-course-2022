// HW:

// Task 1
// сделать калькулятор(+, -, *, /) input 2, 3 output: 5, -1, 6,

// let a = +prompt("first number");
// let b = +prompt("second number");
// let sign = prompt("enter sign");

// function calculate(a, b){
//     console.log(`${a} + ${b} =`, a + b);
//     console.log(`${a} - ${b} =`, a - b);
//     console.log(`${a} * ${b} =`, a * b);
//     console.log(`${a} / ${b} =`, a / b);
// }
// calculate(a, b);

// Task 2
// заполнить массив предоставленным значением и вывести, input: 'a' 3 output ['a', 'a', 'a']

// let a = prompt("что положить в массив?");
// let b = +prompt("сколько?");

// function createArray(value, count) {
//     let arr = [];

//     for (let i = 0; i < count; i++){
//         arr.push(value);
//     }

//     return arr;
// }

// console.log(createArray(a, b));

// Task 3
// возвращает новый массив без особенных значений.
// input: [a, b, c, 1, 3], a
// output: [b, c, 1, 3]

// let exampleArray = ['a', 'b', 'c', 1, 3];
// let someValue = 'c';

// function cleanupArray(arr, value) {
//     let result = [];

//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] !== value) {
//         result.push(arr[i]);
//       }
//     }

//     return result;
// }

// console.log(cleanupArray(exampleArray, someValue));
// console.log(cleanupArray([1, 0, 1, 0, 1, 1 , 1], 0));

// Lecture 16
// Objects, JSON

// Data types: primitive, reference/objects (arrays, functions)
// string, number, boolean, undefined, null, bigInt, symbol

// Object

// const arr = ['a', ['a', 'b']];
// console.log(arr);

let student = {
  firstname: "Saule",
  age: 22,
  group: "f4",
  isActive: false,
  skills: ["html", "css", "js"],
  name: "-",
  sayHello: function () {
    alert("Hello");
  },
};

// console.log(student);
// console.log(student.firstname);
// delete student.firstname;
// for (let key in student){
//     console.log(key);
//     console.log(student[key]);
// }

// person - surname, array of program lang, function, for in

// student.firstname = "none";
// student.age++;
// student.sayHello();
// student.skills.push("ts");
// console.log(student);

// console.log(student['firstname']);
// console.log(student['age']);
// console.log(student['name']);

const person = {
  surname: "Doss",
  age: 22,
};
// console.log('surname' in person);
// console.log('name' in person);

function getSurname() {
  return person["surname"];
}

function hasProperty(name) {
  return name in person;
}
console.log(person);
console.log('hasownproperty for surname',person.hasOwnProperty('surname')); // true
console.log('hasownproperty for to string',person.hasOwnProperty('toString')); // false

console.log('our function for surname',hasProperty('toString')); // true
console.log('our function for to string',hasProperty('toString')); // true

// console.log(getSurname());
// console.log(hasProperty('surname'));
// console.log(hasProperty('name'));

let family = {
    name: "",
    membersCount: 10,
    son: {

    },
    saule: {

    }
}

const arr =[1, 2, 3];
// console.log(arr);
let a = arr.pop();
// console.log(a);
// console.log(arr);


// sort