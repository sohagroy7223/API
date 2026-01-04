let count = 0;

const clockId = setInterval(() => {
  count++;
  console.log(count);
  if (count >= 5) {
    clearInterval(clockId);
  }
}, 2000);
