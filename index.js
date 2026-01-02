function loadAlldata() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      showUser(data);
    });
}

function showUser(users) {
  const userContainer = document.getElementById("users");
  for (const user of users) {
    console.log(user.name);
    const li = document.createElement("li");
    li.innerText = user.name;
    userContainer.appendChild(li);
  }
}
