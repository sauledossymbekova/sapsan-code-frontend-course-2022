// promise chaining

// errors

// const fetchPromise = fetch(
//   "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
// ).then((r) => {
//     console.log(r);
//     return r.json();
// }).then(fetch("https://my-json-server.typicode.com/sauledossymbekova/test-server/posts").then());

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
//   .then(
//     ...some other async-s functions
//     .then

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
// async () => {}
async function sendRequest() {
    let result = await fetch("https://my-json-server.typicode.com/sauledossymbekova/my-server/posts");
    let jsonPosts = await result.json();

    let profileResult = await fetch("https://my-json-server.typicode.com/sauledossymbekova/my-server/profile");
    let jsonProfile = await profileResult.json();

    let posts = await jsonPosts;
    let profile = await jsonProfile; 
    // Hw
    // img.. add attribute src- profile.avatar
    // let img = document.createElement('picture');

    console.log(posts, profile);

    let el = document.getElementById("demo");
    el.innerHTML = profile.name;

    let headers = document.getElementsByClassName("my-post");

    for (let i=0; i < posts.length; i++){
        headers[i].innerHTML = posts[i].title;
    }

  
    return { posts, profile };
  }
  
  sendRequest();

//   console.log(posts, profile);
  
  // 5: Get get, post, put, delete - async await, show in html (appendChild, createElement - DOM methods)