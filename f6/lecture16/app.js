// HW:

// Task 1
// сделать калькулятор(+, -, *, /) input 2, 3 output: 5, -1, 6,

// let a = +prompt("first number");
// let b = +prompt("second number");
// let sign = prompt("enter sign");

// function calculate(a, b, sign){
//     let sum = a + b;
//     let minus = a - b;

//     if(sign){
//         // sign === '+'
//     } else {
//         // sum minus...
//     }
//     if(sign)

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

// Objects

// [] - objects, function - objects

// console.log([]);

// null undefined boolean string number bigInt symbol
// 7 data types - primitive

// [], functions - objects,
// reference type

const studentName = "";
const studentAge = "";
const studentStatus = "";

const student = {
  name: "Saule",
  age: 22,
  active: true,
  skills: ["programming", "reading", "lang-s"],
  education: {
    degree: "High",
    school: "KBTU",
  },
  sayHello: function (person) {
    alert("Hello " + person);
  },
};

// console.log(student.name);
// console.log(student["name"]);
let some = student.name;
student.surname = "Doss";
student["group"] = "f6";
student.age++;
student.skills.push("cooking");

// delete student.name;
// delete student["age"];

// for (let key in student){
//     console.log(key);
//     console.log(student[key]);
// }

// functions in object
// student.sayHello('Aisa');

function hasField(key) {
  return key in student;
}

console.log('surname' in student);
console.log(hasField("status"));
console.log('Has field to string:', hasField('toString')); // custome

console.log('HAS OWN PROPERTY',student.hasOwnProperty('toString')); // built in
console.log('HAS OWN PROPERTY',student.hasOwnProperty('name')); // built in true
console.log(student);

// const person = {
//   surname: "Doss",
//   age: 22,
// };

// function hasProperty(name) {
//   return name in person;
// }

// console.log(surname in student);

// let example = JSON.stringify(student);
let example = JSON.stringify({});
console.log(example);
