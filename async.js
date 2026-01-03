// normal function********
// const handleUser = () => {
//   fetch("https://jsonplaceholder.typicode.com/users")
//     .then((res) => res.json())
//     .then((data) => console.log(data))
//     .catch((error) => console.log("error dorce", error));
// };

// async function**************

// const handleUser2 = async () => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users");
//   const data = await response.json();
//   console.log(data);
// };

// handleUser2();

// if we find the error in catch*************
const handleUser3 = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
  } catch {
    console.log("error aca");
  }
};

handleUser3();
