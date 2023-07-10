const displayResult = document.querySelector("#result");
const displayId = document.querySelector("span");

async function getData() {
  var randomNumber = Math.ceil(Math.random() * 150);
  const response = await fetch(
    `https://api.adviceslip.com/advice/${randomNumber}`
  );
  const movies = await response.json();
  displayResult.innerHTML = movies.slip.advice;
  displayId.innerHTML = movies.slip.id;
}
getData();
