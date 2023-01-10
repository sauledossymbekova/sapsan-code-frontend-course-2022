// HW

// task1

// таблица умножения
// template strings
// template string syntax: `sometext and ${some js}`

// const a = 3;

// for (let i = 1; i <= 10; i++) {
//   console.log(`Result of multiplication table 3 * ${i} = `, a * i);
// }

// task2
//sum of all

// const a = +prompt('Enter number');
// let result = a; // 5

// for (let i = 1; i < a; i++) {
//     // result = result + i
//     result+=i; // 6
// }

// console.log(result);

// const a = +prompt('Enter number');
// let result = 0;

// for (let i = 1; i <= a; i++) {
//     // result = result + i
//     result+=i; // 1 ... +5 = 15
// }

// console.log(result);

// task3
// All odd (1 3 5 7 .. n)
// const a = +prompt('Enter number');

// for (let i = 1; i <= a; i++) {
//     if(i%2 === 1){
//         console.log(i);
//     }
// }

// all numbers % 2 === 0 or 1

// task4

// all even
// const a = +prompt('Enter number');

// for (let i = 1; i <= a; i++) {
//     if(i%2 === 0){
//         console.log(i);
//     }
// }

// task5

// advanced multiplication table
// const a = +prompt('Enter number');

// for (let i = 1; i <= 10; i++) {
//   console.log(`${a} * ${i} = `, a * i);
// }
// advanced mt for all numbers 2-9

// task6

// reverse multiplication table
// const a = +prompt('Enter number');

// for (let i = 10; i > 0; i--) {
//   console.log(`${a} * ${i} = `, a * i);
// }

// task7
// all numbers can be divided by 1
// new: break
// const a = +prompt('Enter number');
// let isPrime = true;

// for (let i = 2; i <= a/2; i++) {
//   if (a % i === 0) {
//     isPrime = false;
//     console.log(a, i, a % i)
//     break;
//   }
// }
// console.log(isPrime ? 'yes' : 'no');

// 10
// 10/2
// 10/3
//...
// 10/5
// 10/6 remainder !==0, so it is meaningless
// 10 we should 5, 6 7 8 9

// неэффективное решение но правильное
// for (let i = 2; i < a; i++) {
//     if (a % i === 0) {
//       isPrime = false;
//     }
//   }

// Lecture14
// ARRAYS МАССИВЫ
// syntax: let/const/var = []; in [] could be placed elements
// let a = [];
// console.log(a);

// let fruits = ["яблоко", "сливы", "апельсин"];
// console.log(fruits);
// console.log(fruits.length); // количество элементов в массиве

// let fruits = [];
// console.log(fruits);
// console.log(fruits.length);

// fruits.push("Яблоко");
// fruits.push("Груша");
// fruits.push("Слива");
// console.log(fruits);
// console.log(fruits.length); // 3

// console.log(fruits[0]);
// console.log(fruits[1]); // n+1 // 1+1=2 //груша
// console.log(fruits[2]); < 3

// console.log(fruits[8]); // если этого элемента под данным индексом нет то выводиться undefined

// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(numbers);

// let result = [];
// for (let i = 0; i < 10; i++) {
//     result.push(i + 1);
// }

// for (let i = 1; i <= 10; i++) {
//     result.push(i);
// }

// console.log(result);

// task1 number from 1 to 100

let result = [];

for (let i = 1; i <= 100; i++) {
  result.push(i);
}

console.log(result);

// given array result contains numbers 1 to 100, show array reversely
// 100, 99, 98 ... 1

let reverseResult = [];

// console.log(result.length); //100

result = ["a", "b", "c"];

// i=99, i>=0 => reverseResult.push(result[99])
for (let i = result.length - 1; i >= 0; i--) {
  //console.log(result[i]);
  reverseResult.push(result[i]);
}
console.log(reverseResult); // Okay will all array types

let otherResult = [];
for (let i = result.length; i > 0; i--) {
  otherResult.push(i);
}

console.log(otherResult); // Okay with numbers but not for all types of array


// input const arr = ['a', 1, false, undefined, null, '', 'b', 'c'];
// output: ['a', 1, 'b', 'c'] // ===false || ===null