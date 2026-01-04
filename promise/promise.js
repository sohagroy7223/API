const loadData = () => {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((res) => res.json())
    // .then(function (res) {
    //   return res.json();
    // });
    .then((data) => console.log(data))
    // .then(function (data) {
    //   console.log(data);
    // });

    // if any error in this function it is show in catch**
    .catch((error) => console.log(error));
};

loadData();

// how to create promise**************
// without json****
// const fetchData = () => {
//   return new Promise((resolve, reject) => {
//     const success = true;
//     if (success) {
//       resolve({ name: "sohag" });
//     } else {
//       reject("server error");
//     }
//   });
// };

// with json function**********

const fetchData1 = () => {
  return new Promise((resolve, reject) => {
    const status = true;
    if (status) {
      const mokDAta = {
        json: () => Promise.resolve({ name: "akash" }),
      };
      resolve(mokDAta);
    } else {
      reject("server error");
    }
  });
};

// check promise*********

fetchData1()
  .then(function (resolve) {
    return resolve.json();
  })

  .then(function (data) {
    console.log(data);
  })

  .catch(function (error) {
    console.log(error);
  });
