// const loadData = () => {
//   console.log("ami first");
//   // always sow in last line***

//   fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => response.json())
//     .then((data) => console.log(data));
//   const result = 10 + 20;
//   console.log(result);

//   // always sow in last line***

//   setTimeout(() => {
//     console.log("ami setTimeOut");
//   }, 1000);

//   console.log("ami second");
//   console.log("ami third");
// };
// loadData();

//  solution in line answer******************
async function allPost() {
  const resolve = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await resolve.json();
  console.log(data);

  console.log("ami first");
  const result = 5 + 7;
  console.log(result);
  console.log("ami second");
  console.log("ami third");
}
allPost();
