import fetch from "node-fetch";

// answer
// synchronous
let number1 = 0;
function thisIsSyncFunction() {
  fetch("https://codequiz.azurewebsites.net/data")
    .then((res) => res.json())
    .then((response) => {
      number1 = response.data;
    });
}

thisIsSyncFunction();

const interval = setInterval(() => {
  if (number1) {
    clearInterval(interval);
    const calculation = number1 * 10;
    console.log("calculation", calculation);
  }
}, 50);
