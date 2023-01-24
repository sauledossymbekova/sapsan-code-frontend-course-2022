// HW
// task1

// // 1
// const sapsanStudent = {};
// const obj = new Object();
// // 2
// sapsanStudent.name = "Saule"; // dot notation
// // 3
// sapsanStudent["surname"] = "Nazarbayeva";
// sapsanStudent = {name: 'Saule', surname: "Nazarbayeva"}

// console.log(sapsanStudent["name"]); // ['key']

// // 4
// sapsanStudent.name = "Akmaral";
// sapsanStudent["name"] = "Akmaral";

// // 5
// delete sapsanStudent.name;

// student = {
//     info: {
//         name: "Saule"
//     }
// }
// delete student.info.name

// // task2
// // isEmpty(obj){
// //   return boolean
// // }

// const example = { name: "Saule", surname: "Doss" };
// // 1
// function isEmpty(someObject) {
//   return Object.keys(someObject).length === 0;
// }

// if(obj){
//     if(obj.name){

//     }
// }
// // Object.keys returns array of object keys [name, surname]

// //2
// function isEmpty(obj) {
//   for (var key in obj) {
//     if (obj.hasOwnProperty(key)) return false;
//   }
//   return true;
// }

// // 3
// function isEmpty(obj){
//   return JSON.stringify(obj) === '{}'
// }

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

// console.log(family);

// const fatherInLow = {
//   name: "Father",
//   age: 45,
//   sign: "male",
// };

// // spread operator
// delete family.father

// family = { ...family, ...{ status: "divorced" }, fatherInLow };
// family = { ...family, ...{ status: "divorced" }, ...{father: {}} };

// console.log(family);

// rest operator to research function some(...rest){}

// // Ways to add fields in object
// const newSapsanStudent = Object.assign(sapsanStudent, {surname: "Nazarbayeva"}); // mutates object
// const newSapsanStudent = { ...sapsanStudent, ...{surname: "Nazarbayeva"} }; // spread
// // console.log(newSapsanStudent);

// // Spread Operator
// var obj = { name: "Saule", surname: "Doss" };
// var newPair = { age: 22 };
// var newValue = "value4";
// obj = { ...obj, ...newPair, newValue };
// // console.log(obj);

// Lecture 17

document.getElementById("sapsan").innerHTML = "Hello World!";

const paragraphs = document.getElementsByTagName("p");
console.log(paragraphs);

const divs = document.getElementsByClassName("myClass");
divs
divs[0].innerHTML

for (let i = 0; i < divs.length; i++) {
  divs[i].innerHTML = 'Hi';
}

// paragraph with class - myClass

console.log(document.querySelectorAll("p.myClass"));
console.log(document.querySelectorAll("p#myId"));

console.log(document.querySelector("p#myId"));

const myFunction = function(){
    // alert("Hello");
    const h2 = document.getElementById("header");
    h2.innerHTML = "HEELLO WORLD!!!!"
    h2.style.color = "red";
}

