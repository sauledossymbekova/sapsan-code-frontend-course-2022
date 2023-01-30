// Talk about async again
// promises
// then catch finally for async functions(what they do)
// your own server
// examples (Post, Get)
// async await 

// YOUR OWN SERVER (GET example)

// const jsonData = fetch(
//   "https://my-json-server.typicode.com/sauledossymbekova/test-server/posts"
// );

// jsonData.then((data) => {
//   console.log(data);

//   let el = document.getElementById("demo");
//   el.innerHTML = data[0].title;
// });

// .catch(error => console.error(error))

// THEN CATCH FINALLY

// const result = fetch(
//   "https://my-json-server.typicode.com/sauledossymbekova/test-server/posts"
// );

// console.log(result, "Result");

// const jsonData = result
//   .then((response) => response.json())
//   .then((data) => {

//     console.log(data);

//     let el = document.getElementById("demo");
//     el.innerHTML = data[0].title;

//   })
//   .catch((a) => console.log(a))
//   .finally(console.log("We sent request!"));

// REPLACE PROMISE WITH - ASYNC AWAIT

async function getPosts() {
  let result = await fetch(
    "https://my-json-server.typicode.com/sauledossymbekova/test-server/posts"
  );
  let json = await result.json();

  let otvet = await json[0].title;

  let el = document.getElementById("demo");
  el.innerHTML = otvet;

  return otvet;
}

let title = getPosts();
console.log(title);

// POST EXAMPLE WITH TYPICODE

// let newPost = { title: "My new Post" };

// fetch(
//   "https://my-json-server.typicode.com/sauledossymbekova/test-server/posts",
//   {
//     method: "POST",
//     body: JSON.stringify(newPost),
//   }
// );

// console.log("I sent NEW POST");

// PUT EXAMPLE WITH YOUR OWN SERVER

// fetch(
//   "https://my-json-server.typicode.com/sauledossymbekova/test-server/posts/1",
//   {
//     method: "PUT",
//     body: JSON.stringify({id: 1, title: "saule"}),
//   }
// );

// POST E

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

// Delete example with typicode

// fetch("https://jsonplaceholder.typicode.com/posts/1", {
//   method: "DELETE",
// });

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

// GET (all posts, one post)
// POST PUT DELETE