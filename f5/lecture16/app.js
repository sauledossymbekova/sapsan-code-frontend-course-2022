// HW:

// Task 1
// сделать калькулятор(+, -, *, /) input 2, 3 output: 5, -1, 6,

// let a = +prompt("first number");
// let b = +prompt("second number");
// let sign = prompt("enter sign");

// function calculate(a, b) {
//   console.log(`${a} + ${b} =`, a + b);
//   console.log(`${a} - ${b} =`, a - b);
//   console.log(`${a} * ${b} =`, a * b);
//   console.log(`${a} / ${b} =`, a / b);
// }
// calculate(a, b);

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
// // let some = [];
// // some.push(a);
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
// // result = a, b, 1, 3

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

// string boolean number bigInt undefined null symbol - primitve

// [1000] [1000]

// Js data types: primitive, reference(objects)

// console.log([]);

// 'a' === 'b' // values
// [] === [] // references

const student = {
  name: "saule",
  age: 22,
  status: true,
  skills: ["programming", "teaching", "swimming"],
  education: {
    degree: "Bachelor",
    school: "KBTU",
    gpa: 4.0,
  },
  sayHello: function () {
    alert("Hello");
  },
};
let json = JSON.stringify(student);
console.log(json);

// console.log(student.name);
student["age"];
student["age"]++;

student.surname = "Doss";
student["isTeacher"] = true;

student.skills.push("reading");
student.skills.pop();
student.skills.unshift("cooking");
student.skills.shift();

student.education.degree = "Masters Deg";

delete student.education;
delete student.surname;
// console.log(student);

// functions in objects
// student.sayHello();

// for in
// let a = 0;
// for (let key in student){
//     console.log(++a);
// }

// for (let key in student) {
//   // console.log(key);
//   console.log(key, ":", student[key]);
// }

let person = {
  name: "Saule",
  //   age: "22",
};

function getKey(key) {
  return key in person;
}

function getSurname() {
  return person["surname"];
}
// console.log(getKey("name"));

// if (getKey("age")){
//     person.age++;
// }

// if (!getKey("age")){
//     person.age = 0;
// }

// console.log(getKey("toString"));
// console.log(person);

console.log(person.hasOwnProperty("toString"));
console.log(person.hasOwnProperty("name"));
// let a = person.toString();
// console.log(a);

// create your own object

let a = Object.keys(person);
console.log(a);