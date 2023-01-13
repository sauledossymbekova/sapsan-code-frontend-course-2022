// HW

// task1

// таблица умножения
// template strings
// template string syntax: `sometext and ${some js}`
// `text blabla ${a}`
// const a = 3;

// for (let i = 1; i <= 10; i++) {
//   console.log(`3 * ${i} = `, a * i);
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
//     // console.log(a, i, a % i)
//     // break;
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

// let a = []; // create array
// console.log(a);

// яблоко под 0 индексом, апельсин под 1б слива под 2 индексом
// let fruits = ["Яблоко", "Апельсин", "Слива"];

// let names = ["Saule", "Madina", "Kanat", "Aibolat", " Talim"];
// let numbers =[1, 7, 2, 10, 11];
// let arr = [undefined, null, false, true, 1, 0, -0, -1, 10n, "", "text"];

// console.log(names);
// console.log(numbers);
// console.log(arr);

// console.log(fruits);
// console.log(fruits.length); // длина равна количеству элементов
// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);

// console.log(fruits[10]);

// console.log(fruits[3]); // undefined

// console.log(fruits[fruits.length]); // fruits.length = 3 => fruits[3] => undefined

// let a = 1;
// let b = 2;
// let c = 3;
// ...
// let someArray = [1, 2, 3, 4, 5, 6 , 7, 8, 9, 10]

// task create array, find its length, show last element
// 0 1 2 3 4
// let names = ["Saule", "Madina", "Kanat", "Aibolat", "Talim"];

// for(let i = 0; i < names.length; i++){
//     console.log(names[i]);
//     // names[i] ='a';
// }
// console.log(names);

// task create array and show every element with loop
// show every element of loop reversely
// console.log(names[names.length]); // undefined

// for( let i = names.length - 1; i >= 0; i--){
//     console.log(names[i]);
// }
// undefined Talim Aibolat Kanat Madina

// show reverse
// let numbers = [1, 2, 3, 4, 5];

// let fruits = ["Яблоко", "Апельсин", "Слива"];
// let fruits = [];
// fruits.push("Яблоко");
// fruits.push("Апельсин");
// fruits.push("Слива");
// fruits.push("Вишня");

// console.log(fruits);

// let numbers = [];

// for(let i = 1; i <= 10; i++){
//     numbers.push(i);
// }

// console.log(numbers);

// task create array with numbers 1 - 100
// let result = [];

// for (let i = 1; i <= 100; i++) {
//   result.push(i);
// }
// console.log(result);

// task create array with numbers 100 - 1
// let result = ['a', 'b', 'c'];

// let newArray = [];

// for (let i = result.length - 1; i >= 0; i--) {
//   //console.log(result[i]);
//   newArray.push(result[i]);
// }

// console.log(newArray);

// let arr = [1, 1, 1, 1, 0, 0, 0, 1, 1];
// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     if(arr[i] === 0){
//         arr[i] = 1;
//     }
// }

// console.log(arr);


// HW
// let arr = [undefined, null, false, true, 1, 0, -0, -1, 10n, "", "text"];
// false, undefined, null, 0 -0 ''
// true, 1, -1, 10n, "text"

// 3, 2, 8, 1, 5
// 8
// 1

// a a a
// a a a // yes
// a a a a // no
// a b a // no