const urls = [
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/comments",
  "https://jsonplaceholder.typicode.com/albums",
  "https://jsonplaceholder.typicode.com/photos",
  "https://jsonplaceholder.typicode.com/todos",
  "https://jsonplaceholder.typicode.com/users",
];

// get by variable********

// const promise = urls.map((url) => fetch(url).then((resolve) => resolve.json()));
// Promise.all(promise)
//   .then((success) => {
//     console.log(success);
//   })
//   .catch((error) => console.log(error));

// get by function***********

Promise.all(
  urls.map((url) => {
    return fetch(url)
      .then((res) => res.json())
      .then((data) => data);
  })
)
  .then((res) => res)
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
