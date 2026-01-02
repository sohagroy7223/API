function userdata() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((obj) => console.log(obj[0].email));
}
