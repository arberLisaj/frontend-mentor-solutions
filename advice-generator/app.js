const displayResult = document.querySelector("#result");
const displayId = document.querySelector("span");

async function getData() {
  const response = await fetch("https://api.adviceslip.com/advice");
  const movies = await response.json();
  displayResult.innerHTML = movies.slip.advice;
  displayId.innerHTML = movies.slip.id;
}

getData();
