// HW
// even numbers 10 => 2 4 6 8 10
// reverse multiplication table 8 => 80 72 ... 8
// advanced multiplication

// task1
// 3 6 9 12 15 18 21 24 27 30
// 3*1 3*2 3*3 3*4 3*5 ... 3*10

// таблица умножения
// template strings
// template string syntax: `sometext and ${some js}`
// `text blabla ${a}` ``
// const a = 3;

// for (let i = 1; i <= 10; i++) {
//   console.log(a * i);
// }

// for (let i = 1; i <= 10; i++) {
//   console.log(`3 * ${i} = `, a * i);
// }
// ''
// ``

// 3*1 = 3
// 3*2 = 6
// ...
// 3*10 = 30

// task2
//sum of all

// const a = +prompt('Enter number');
// // let result = a; // 5

// // for (let i = 1; i < a; i++) {
// //     // result = result + i
// //     result+=i; // 6
// // }

// // console.log(result);

// const a = +prompt("Enter number"); // 5 => 1 2 3 4 5
// let result = 0;

// for (let i = 1; i <= a; i++) {
//   // result = result + i
//   result += i; // 1 ... +5 = 15
//   // 0 +=1 => result=1
//   // 1 += 2 => result=3
//   // 3 += 3 => result = 6
//   // 6 += 4 => result = 10
//   // 10 += 5 => result = 15
// }

// console.log(result);

// task3
// All odd (1 3 5 7 .. n)
// 10
// 1 3 5 7 9
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
//     console.log(a * i);
// }

// for (let i = 1; i <= 10; i++) {
//   console.log(`${a} * ${i} = `, a * i);
// }

// a * i =

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
// const a = +prompt("Enter number"); // 10
// let isPrime = true;

// неэффективное решение но правильное
// for (let i = 2; i < a; i++) { // 2 3 4 5 6 7 8 9
//   if (a % i === 0) {
//     console.log(a, i, a % i)
//     isPrime = false;
//   }
// }

// console.log(isPrime ? "yes" : "no");

// for (let i = 2; i <= a/2; i++) { // 15 = > 2 => 3
//   if (a % i === 0) {
//     isPrime = false;
//     console.log(a, i, a % i)
//     break;
//   }
// }
// console.log(isPrime ? 'yes' : 'no');
// простые числа
// это числа которые делятся хотя бы одно число без остатка кроме себя и единицы

// 10
// 10/2
// 10/3
//...
// 10/5
// 10/6 remainder !==0, so it is meaningless
// 10 we should 5, 6 7 8 9

// Lecture 14

// ARRAYS МАССИВЫ
// syntax: let/const/var = []; in [] could be placed elements

// let emptyFruits = [];
// let numbers = [1, 2, 3, 4, 5, 6, 7];
// let fruits = ["Яблоко", "Апельсин", "Слива"];
// let names = ["Saule", "Alina", "Aisa", "Angelina"];

// console.log(numbers, fruits, names);
// console.log(fruits);

// длина массива = количеству элементов в нем 
// console.log(fruits.length); // 3

// console.log(fruits[0]); // Яблоко
// console.log(fruits[1]); // "Апельсин"
// console.log(fruits[2]); // "Слива"

// console.log(fruits[10]); // undefined

// console.log(fruits[fruits.length]); // ? fruits[3] => undefined

// console.log(numbers);
// console.log(numbers[7]);
// console.log(numbers[numbers.length - 1]); // undefined

// for (let i = 0; i < fruits.length; i++){
//     console.log(fruits[i]);
// }

// for (let i = 0; i <= fruits.length - 1; i++){
//     console.log(fruits[i]);
// }

// let arr = [];

// arr.push('a');
// arr.push('b');
// arr.push('c');

// console.log(arr);

// let numbers = [];

// for (let i = 1; i<=10; i++){
//     numbers.push(i);
// }

// console.log(numbers);


// let result = [];
// for (let i = 10; i >= 1; i--){
//     result.push(i);
// }
// console.log(result);
// 10 9 8 7 6 .. 1

// let fruits = ["Яблоко", "Апельсин", "Слива"];
// // result = ['Слива', 'Апельсин', 'Яблоко']

// let result = [];
// for (let i = fruits.length - 1; i >= 0; i--){
//     // console.log(fruits[i]);
//     result.push(fruits[i]);
// }
// console.log(result);

// numbers = [1,2,3,4,5,6,7,8] // 1- 100
// result = обратный numbers

// let numbers = [];
// for (let i = 1; i <= 100; i++){
//     numbers.push(i);
// }
// // numbers = [1, 2, 3, 4 .. 100]
// console.log(numbers);

// let result = [];

// for (let i = numbers.length - 1; i >= 0; i--){
//     result.push(numbers[i]);
// }
// // result = [100, 99, 98, 1]
// console.log(result);

// let arr = [1, 1]

// let arr = [];
// for (let i = 0; i < 10; i++){
//     arr.push('a');
// }
// console.log(arr);


// let arr = ['a', 'a', 'a', 'c', 'd'];
// console.log(arr);

// for (let i = 0; i < arr.length; i++){
//     if ( arr[i] === 'a'){
//         arr[i] = 'b';
//     }
// }
// console.log(arr);

// [1,0,1,1,1,0,0,1]
// [1,2,1,1,1,2,2,1]

// 1 - 100, 10 20 30 40 50 60 70 80 90 100

let numbers = [];

for (let i = 1; i<=100; i++){
    if( i % 10 === 0){
        numbers.push(i);
    }
}

console.log(numbers);

// 2 + 4 +6 ... +20 =

// let arr = [undefined, null, false, true, 1, 0, -0, -1, 10n, "", "text"];
// arr = [ true, 1, -1, 10n, "text"];

// 2 1 3 7 5 6 
// 7
// 1


// a a a
// a a a // yes
// a a a a // no
// a b a // no