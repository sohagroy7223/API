// option 1 **************

fetch("https://v2.jokeapi.dev/joke/programming?type=single")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch(console.log("error"));

// option 2*********************

async function fetchData() {
  try {
    const response = await fetch(
      "https://v2.jokeapi.dev/joke/programming?type=single"
    );
    const data = await response.json();
    console.log(data);
  } catch {
    console.log("error");
  }
}
fetchData();

// option 3*****************

const handelProgram = () => {
  fetch("https://v2.jokeapi.dev/joke/programming?type=single")
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((error) => {
      console.log(error);
    });
};
handelProgram();
