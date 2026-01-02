function userdata() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((obj) => {
      console.log(obj);
      singleData(obj);
      thirdUser(obj);
    });
}

// arrow function*******
const singleData = (firstUser) => {
  console.log(firstUser[0]);
};

// normal user*********
function thirdUser(thirdData) {
  console.log(thirdData[2]);
}
