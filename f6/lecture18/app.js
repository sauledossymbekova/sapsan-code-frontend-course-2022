// arguments ? parameters
// arrow functions
// IIFE https://developer.mozilla.org/en-US/docs/Glossary/IIFE
// callback
// setTimeout
// setInterval
// Asynchronous JavaScript
// sync js
// async js
// promises

// arrow func

// simple arr funct

// const sayHello = () => {
//   console.log("hello");
// };
// const sayHello2 = (name) => {
//   console.log("hello", name);
// };

// const greeting = function () {
//   console.log("Hello");
// };

// function sayHi() {
//   console.log("Hello");
// }

// // arr function with return
// const calculate = (a) => a * a;

// const multiply = function (a) {
//   return a * a;
// };

// function double(a) {
//   return a * a;
// }

//callback https://www.w3schools.com/js/js_callback.asp
// function greeting(name) {
//   alert(`Hello, ${name}`);
// }

// function processUserInput(myFunction) {
//   const name = prompt("Please enter your name.");
//   myFunction(name);
// }

// processUserInput(greeting);

// setTimeout https://developer.mozilla.org/en-US/docs/Web/API/setTimeout
// setTimeout(function () {
//   myFunction("I love You !!!");
// }, 3000);

// setTimeout(() => myFunction("I love You !!!"), 3000);

// function myFunction(value) {
//   document.getElementById("demo").innerHTML = value;
// }

// setInterval https://developer.mozilla.org/en-US/docs/Web/API/setInterval

// setInterval(myFunction, 1000);

// function myFunction() {
//   let d = new Date();
// //   let obj = new Object();
// //   let obj2 = {};
//   document.getElementById("demo").innerHTML =
//     d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
// }

// sync JS
// simple example

// const name = 'Miriam';
// const greeting = `Hello, my name is ${name}!`;
// console.log(greeting);

// "Hello, my name is Miriam!"

// same example with functions
// function makeGreeting(name) {
//   return `Hello, my name is ${name}!`;
// }

// const name = "Miriam";
// const greeting = makeGreeting(name);
// console.log(greeting);

// "Hello, my name is Miriam!"

// A long-running synchronous function
// const MAX_PRIME = 1000000;

// function isPrime(n) {
//   for (let i = 2; i <= Math.sqrt(n); i++) {
//     if (n % i === 0) {
//       return false;
//     }
//   }
//   return n > 1;
// }

// const random = (max) => Math.floor(Math.random() * max);

// function generatePrimes(quota) {
//   const primes = [];
//   while (primes.length < quota) {
//     const candidate = random(MAX_PRIME);
//     if (isPrime(candidate)) {
//       primes.push(candidate);
//     }
//   }
//   return primes;
// }

// const quota = document.querySelector("#quota");
// const output = document.querySelector("#output");

// document.querySelector("#generate").addEventListener("click", () => {
//   const primes = generatePrimes(quota.value);
//   console.log(primes);
//   output.textContent = `Finished generating ${quota.value} primes!`;
// });

// document.querySelector("#reload").addEventListener("click", () => {
//   document.location.reload();
// });

// callbacks in async js

// function doStep1(init) {
//   return init + 1;
// }

// function doStep2(init) {
//   return init + 2;
// }

// function doStep3(init) {
//   return init + 3;
// }

// function doOperation() {
//   let result = 0;
//   result = doStep1(result);
//   result = doStep2(result);
//   result = doStep3(result);
//   console.log(`result: ${result}`);
// }

// doOperation();

// with callbacks "callback hell" or the "pyramid of doom"
// function doStep1(init, callback) {
//   const result = init + 1;
//   callback(result);
// }

// function doStep2(init, callback) {
//   const result = init + 2;
//   callback(result);
// }

// function doStep3(init, callback) {
//   const result = init + 3;
//   callback(result);
// }

// function doOperation() {
//   doStep1(0, (result1) => {
//     doStep2(result1, (result2) => {
//       doStep3(result2, (result3) => {
//         console.log(`result: ${result3}`);
//       });
//     });
//   });
// }

// doOperation();

// promises
// new String();
// new Array();
// new Promise();

// let response = fetch('https://jsonplaceholder.typicode.com/users');
// console.log(response); // Promise

// response.then(a => a.json()).then(convertedJson => console.log(convertedJson));

// fetch from presentation
let todosResponse = fetch("https://jsonplaceholder.typicode.com/todos");
console.log(todosResponse);

todosResponse.then((response) => {
  console.log(`Received response: ${response.status}`);
});

todosResponse.then((response) => {
    const jsonResponse = response.json();
    
    jsonResponse.then(result => {
        for(let i=0; i< 3; i++){
            console.log(result[i]);
        }

        // console.log(result[0].title)
    });

});

// fetch
// const fetchPromise = fetch(
//     "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
//   );

//   console.log(fetchPromise);

//   // fetchPromise.then((response) => {
//   //   console.log(`Received response: ${response.status}`);
//   // });

//   // console.log("Started request…");

//   // json
//   results = [];
//   fetchPromise.then((response) => {
//     const jsonPromise = response.json();
//     jsonPromise.then((data) => {
//       for(let i = 0; i<3; i++){
//           results.push(data[i]);
//       }
//     });
//   });
//   console.log(results);
// show in html with innerhtml

// next lecture

// with then
// fetchPromise
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data[0].name);
//   });

// promise chaining

// errors

// const fetchPromise = fetch(
//   "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
// );

// fetchPromise
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error(`HTTP error: ${response.status}`);
//     }
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data[0].name);
//   });

// const fetchPromise = fetch(
//   "bad-scheme://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
// );

// fetchPromise
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error(`HTTP error: ${response.status}`);
//     }
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data[0].name);
//   })
//   .catch((error) => {
//     console.error(`Could not get products: ${error}`);
//   });
