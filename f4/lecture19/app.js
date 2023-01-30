// Talk about async again
// promises
// then catch finally for async functions(what they do)
// your own server
// examples (Post, Get, Delete, Put)
// async await

// forgot: clearInterval, clearTimeout
// next lesson more about event loop and new Dom functions
// (try, catch)

// ASYNC js CALL STACK CALL QUEUE WEBAPI

// setTimeout(() => {
//   console.log("Hello!");
// }, 3000);

// console.log("I'm being called before greet function.");

// function main() {
//   setTimeout(function greet() {
//     console.log('Hello!')
//   }, 2000)

//  setTimeout(() => {
//     console.log('Second Timeout!')
//   }, 0)

//   console.log('Bye!')
// }

// console.log("Hi");
// new Promise()

// main()

// YOUR OWN SERVER (GET example)
// THEN CATCH FINALLY

let result = fetch(
  "https://my-json-server.typicode.com/sauledossymbekova/my-server/posts",
  { method: "GET" }
)
  .then((data) => {
    console.log(data);
    return data.json();
  })
  .then((otvet) => {
    console.log(otvet);

    let el = document.getElementById("demo");
    el.innerHTML = otvet[0].title;
  })
  .catch((e) => console.error(e))
  .finally(() => console.info("Запрос закончился"));

console.log(result);

// POST EXAMPLE WITH TYPICODE

let newPost = { title: "My new Post" };

const createNewPost = fetch(
  "https://my-json-server.typicode.com/sauledossymbekova/my-server/posts",
  {
    method: "POST",
    body: JSON.stringify(newPost),
  }
);

console.log("I sent NEW POST Request");

createNewPost
  .then((response) => response.json())
  .then((data) => console.log(data[0]))
  .catch((e) => console.error(e));

// DELETE example with typicode

fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "DELETE",
});

// PUT EXAMPLE WITH YOUR OWN SERVER

fetch(
  "https://my-json-server.typicode.com/sauledossymbekova/test-server/posts/1",
  {
    method: "PUT",
    body: JSON.stringify({id: 1, title: "saule"}),
  }
);

// HW: 
// GET (all posts, one post)
// POST PUT DELETE
// show in html красиво


// POST 

// fetch("https://jsonplaceholder.typicode.com/posts", {
//   method: "POST",
//   body: JSON.stringify({
//     title: "foo",
//     body: "bar",
//     userId: 1,
//   }),
//   headers: {
//     "Content-type": "application/json; charset=UTF-8",
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));

// Post example with your server

// fetch(
//   "https://my-json-server.typicode.com/sauledossymbekova/test-server/posts",
//   {
//     method: "POST",
//     body: JSON.stringify({
//       title: "My second post",
//     }),
//     headers: {
//       "Content-type": "application/json; charset=UTF-8",
//     },
//   }
// )
//   .then((response) => response.json())
//   .then((json) => console.log(json));

// Put example with typicode

// fetch("https://jsonplaceholder.typicode.com/posts/1", {
//   method: "PUT",
//   body: JSON.stringify({
//     id: 1,
//     title: "foo",
//     body: "bar",
//     userId: 1,
//   }),
//   headers: {
//     "Content-type": "application/json; charset=UTF-8",
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));

//   with then
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
