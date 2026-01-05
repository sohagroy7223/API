function tellJoke() {
  console.log(
    "why do't scientists trust atoms? Because they make up everything!."
  );
}

const jokInterval = setInterval(tellJoke, 2000);

//   after 10 seconds, stop telling jocks
setTimeout(() => {
  clearInterval(jokInterval);
}, 10000);

// /////////////////////////
function tellJoke2() {
  console.log("ami akgon kaj kortace");
}

const workInterval = setInterval(tellJoke2, 1000);
setTimeout(() => {
  clearInterval(workInterval);
}, 10000);
