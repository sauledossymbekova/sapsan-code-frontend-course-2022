// promise chaining

// errors

// const fetchPromise = fetch(
//   "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/broducts.json"
// ).then((r) => console.log(r));

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

async function getPosts() {
  let postsResponse = await fetch(
    "https://my-json-server.typicode.com/sauledossymbekova/my-server/posts"
  ,{});
  let profileResponse = await fetch(
    "https://my-json-server.typicode.com/sauledossymbekova/my-server/profile"
  );

  let jsonPosts = await postsResponse.json();
  let jsonProfile = await profileResponse.json();

  let posts = await jsonPosts;
  let profile = await jsonProfile;

  //   let el = document.getElementById("demo");
  //   el.innerHTML = otvet;
  console.log(posts, profile);

  return { posts, profile };
}

getPosts();
console.log(posts, profile);

// 5: Get get, post, put, delete - async await, show in html (appendChild, createElement - DOM methods)