import fetch from "node-fetch";

// answer
// asynchronous
async function thisIsSyncFunction() {
  let result = 0;

  await fetch("https://codequiz.azurewebsites.net/data")
    .then((res) => res.json())
    .then((response) => {
      result = response.data;
    });
  return result;
}

const number1 = await thisIsSyncFunction();
const calculation = number1 * 10;
console.log("calculation", calculation);
