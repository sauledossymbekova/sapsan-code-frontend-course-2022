// console.log('A')
// console.log('B')
// console.log('C')

// setTimeout(function greet() {
//   console.log("Hello!");
// }, 5000);

// console.log("I'm being called before greet function.");

// function main() {
//   function inner() {
//     setTimeout(function greet3() {
//         console.log("inner!");
//       }, 0);
//   }

//   setTimeout(function greet() {
//     console.log("Hello!");
//   }, 0);
//   setTimeout(function greet2() {
//     console.log("Second Hello");
//   }, 0);

//   inner();
//   console.log("Bye!");
// }

// main();

// Bye Hello
// Bye - Second Hello - Hello

// Bye - Second Hello - Hello

// Bye - Hello - Second Hello
// inner - Bye - Hello - Second Hello
// Bye - inner - Hello - Second Hello - error
// Bye - Hello - Second Hello - inner

// Then Catch Finally
let url =
  "https://my-json-server.typicode.com/sauledossymbekova/my-server/posts";

fetch(url, { method: "GET" })
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      return "response is not ok";
    }
  })
  .then((data) => {
    // let el = document.getElementById('demo');
    // el.innerHTML = data[0].title;
    for(let i=0; i< data.length; i++){
        const node = document.createElement("p");
        const textnode = document.createTextNode(data[i].title);
        console.log(textnode);
        node.appendChild(textnode);
        document.getElementById("myBlock").appendChild(node);
    }
    console.log("This is your posts", data);
  })
  .catch((error) => console.error(error))
  .finally(console.info("I sent GET request"));

// GET Request to send one request
// let newUrl = 'https://my-json-server.typicode.com/sauledossymbekova/my-server/posts/1'

// fetch(newUrl, { method: "GET" })
//   .then((response) => {
//     if (response.ok) {
//       return response.json();
//     } else {
//       return "response is not ok";
//     }
//   })
//   .then((data) => {
//     console.log('I get post by id', data.id);
//   })
//   .catch((error) => console.error(error))
//   .finally(console.info("I sent GET request"));

//POST example
// let newInstagramPost = { title: "I am in ALmaty, hello everyone!"}

//   fetch(url, { method: "POST", body: JSON.stringify(newInstagramPost)})
//   .then((response) => {
//     if (response.ok) {
//       return response.json();
//     } else {
//       return "response is not ok";
//     }
//   })
//   .then((data) => {
//     console.log('I tried to send new post by id', data.id);
//   })
//   .catch((error) => console.error(error))
//   .finally(console.info("I sent POST request"));

// создать сервер через https://my-json-server.typicode.com со своим json
// сделать 5 примеров разных запросов (Get, Get, Post, Put, Delete)
