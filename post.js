function handlePost() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      displayAllPost(data);
    });
}

function displayAllPost(posts) {
  const divContainer = document.getElementById("div-container");
  for (const post of posts) {
    // console.log(post);
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = `
    <h2>${post.title}</h2>
    <h3>${post.body} </h3>
    <button>details</button>
    `;
    divContainer.appendChild(div);
  }
}
