// HW
// task1

// // 1
// const sapsanStudent = {};
// // 2
// sapsanStudent.name = "Saule"; // dot notation
// // 3
// sapsanStudent["surname"] = "Nazarbayeva";

// // console.log(sapsanStudent["name"]); // ['key']

// // 4
// sapsanStudent.name = "Akmaral";
// sapsanStudent["name"] = "Akmaral";

// // 5
// delete sapsanStudent.name;

// // student = {
// //     info: {
// //         name: "Saule"
// //     }
// // }
// // delete student.info.name

// // Ways to add fields in object
// // const newSapsanStudent = Object.assign(sapsanStudent, {surname: "Nazarbayeva"}); // mutates object
// // const newSapsanStudent = { ...sapsanStudent, ...{surname: "Nazarbayeva"} }; // spread
// // console.log(newSapsanStudent);

// // Spread Operator
// var obj = { name: "Saule", surname: "Doss" };
// var newPair = { age: 22 };
// var newValue = "value4";
// obj = { ...obj, ...newPair, newValue };
// // console.log(obj);

// // task2
// // isEmpty(obj){
// //   return boolean
// // }

// const example = { name: "Saule", surname: "Doss" };
// // 1
// // function isEmpty(someObject) {
// //   return Object.keys(someObject).length === 0;
// // }

// // Object.keys returns array of object keys [name, surname]

// //2
// // function isEmpty(obj) {
// //   for (var key in obj) {
// //     if (obj.hasOwnProperty(key)) return false;
// //   }
// //   return true;
// // }

// // 3
// // function isEmpty(obj){
// //   return JSON.stringify(obj) === '{}'
// // }

// // console.log(isEmpty({})); // true
// // console.log(isEmpty({ name: "Saule", surname: "Doss" })); // false

// // 'a' === 'a'
// // {} === {} // false

// // primitive types / reference type (ссылочные типы данных, сравнивает по месту в котором находится обьект)

// // task3

// const mother = {
//   name: "Mother",
//   age: 45,
//   sign: "female",
// };

// const father = {
//   name: "Father",
//   age: 45,
//   sign: "male",
// };

// let family = {
//   name: "Dossym",
//   membersCount: 10,
//   status: "full",
//   mother,
//   father,
//   son: {
//     name: "Boy Son",
//     age: 15,
//     sign: "male",
//   },
//   daughter: {
//     name: "Girl Daughter",
//     age: 21,
//     sign: "female",
//   },
// };

// // console.log(family);

// const fatherInLow = {
//   name: "Father",
//   age: 45,
//   sign: "male",
// };

// // spread operator
// delete family.father

// family = { ...family, ...{ status: "divorced" }, fatherInLow };

// console.log(family);

// rest operator to research

// Lecture 17

// const element = document.getElementsByTagName("p");
// document.getElementById('result').innerHTML = "Hello World";
// const allParas = document.getElementsByTagName("p");
// console.log(allParas.length);

// const div1 = document.getElementById("info");
// const div1Paras = div1.getElementsByTagName("p");
// const num = div1Paras.length;
// console.log(num);

document.getElementById('title').innerHTML = "Saule Dossym";

const arrayInfo = ["Programmer", "Girl", "22 y.o"];

const info = document.getElementById("info");
const allInfoParag = info.getElementsByTagName("p");

for (let i = 0; i < allInfoParag.length; i++){
    allInfoParag[i].innerHTML = arrayInfo[i];
    allInfoParag[i].style.background = "";

}

const contacts = document.getElementsByClassName("contacts");
const link = contacts[0].getElementsByTagName("a");
link[0].innerHTML = "+7 777 777 77 00"

// title info contacts 

// const element = document.getElementsByClassName("myClass");

// document.getElementById("result").innerHTML =
//   "This is message : " + element[0].innerHTML;

// document.getElementById("result").innerHTML =
//   "This is message : " + element[1].innerHTML;
