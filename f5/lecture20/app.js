let url = "https://my-json-server.typicode.com/Kantikaof/myserver-1/posts";

let newObj = { id: 2, name: "My new obj", lastname: "New" };

fetch(url, { method: "POST", body: JSON.stringify(newObj) })
  .then((response) => {
    if (response.ok) {
      console.log(response.json());
    }
  })
  .catch((error) => console.error(error))
  .finally(console.log("We tried to connect to server"));

fetch("https://my-json-server.typicode.com/Kantikaof/myserver-1/db")
  .then((response) => {
    if (response.ok) {
      return response.json();
    }
  })
  .then((data) => {
    console.log(data.profile[0].name);
    let el = document.getElementById("demo");
    el.innerHTML = data.profile[0].name + " likes to " + data.profile[0].hobbis;
  });

async function onClick() {
  let firstRequest = await fetch(url, {
    method: "POST",
    body: JSON.stringify(newObj),
  });
  let secondRequest = await fetch(
    "https://my-json-server.typicode.com/Kantikaof/myserver-1/db"
  );

  let firstJson = await firstRequest.json();
  let secondJson = await secondRequest.json();
  return { firstJson, secondJson };
}