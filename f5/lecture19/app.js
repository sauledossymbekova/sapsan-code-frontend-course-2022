// Call stack, call queue, web api
// function main() {
//   setTimeout(function greet() {
//     console.log("Hello!");
//   }, 2000);
//   setTimeout(function greet2() {
//     console.log("Hello2!");
//   }, 0);

//   console.log("Bye!");
//   for (let i = 1; i <= 100; i++) {
//     console.log(i);
//   }
// }

// main();

// then catch finally

// fetch("https://jsonplaceholder.typicode.com/osers/1")
//   .then((response) => {
//     if (response.ok) {
//       return response.json();
//     }
//   })
//   .catch((error) => console.error(error))
//   .finally(console.log("We tried to connect to server"));

// Get one post

fetch(
  "https://my-json-server.typicode.com/sauledossymbekova/my-server/posts/2",
  { method: "GET" }
).then((response) => {
  let el = document.getElementById("demo");
  el.innerHTML = response.status;
  console.log(response);
});

// Post example with your server

// let newPost = { title: "My third post" };

// fetch("https://my-json-server.typicode.com/sauledossymbekova/my-server/posts", {
//   method: "POST",
//   body: JSON.stringify(newPost),
// })
//   .then((response) => {
//     if (response.ok) {
//       console.log(response.json());
//     }
//   })
//   .catch((error) => console.error(error))
//   .finally(console.log("We tried to connect to server"));

// PUT

// let changedPost = { id: 2, title: "My changed second post" };

// fetch(
//   "https://my-json-server.typicode.com/sauledossymbekova/my-server/posts/2",
//   {
//     method: "PUT",
//     body: JSON.stringify(changedPost),
//   }
// )
//   .then((response) => {

//     if (response.ok) {
//       console.log(response.json());
//     }
//   })
//   .catch((error) => console.error(error))
//   .finally(console.log("We tried to connect to server"));

// Delete

// fetch(
//   "https://my-json-server.typicode.com/sauledossymbekova/my-server/posts/2",
//   {
//     method: "DELETE",
//   }
// )
//   .then((response) => {
//     if (response.ok) {
//       console.log(response.json());
//     }
//   })
//   .catch((error) => console.error(error))
//   .finally(console.log("We tried to connect to server"));

// HW: 5 request: Get Get Post Put Delete
// show in html
