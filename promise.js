const loadData = () => {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((res) => res.json())
    // .then(function (res) {
    //   return res.json();
    // });
    .then((data) => console.log(data));
  // .then(function (data) {
  //   console.log(data);
  // });
};

loadData();
