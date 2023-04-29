const dayInput = document.querySelector("[data-days]");
const monthInput = document.querySelector("[data-months]");
const yearInput = document.querySelector("[data-years]");

// Form Validation
dayInput.addEventListener("input", () => {
  const paragraphError = document.querySelector("[data-daysError]");
  const labelError = document.querySelector("[data-label1]");
  if (dayInput.value < 1 || dayInput.value > 31) {
    paragraphError.classList.add("show-error");
    labelError.classList.add("error");
  } else {
    paragraphError.classList.remove("show-error");
    labelError.classList.remove("error");
  }
});
monthInput.addEventListener("input", () => {
  const paragraphError = document.querySelector("[data-monthsError]");
  const labelError = document.querySelector("[data-label2]");

  if (monthInput.value < 1 || monthInput.value > 12) {
    paragraphError.classList.add("show-error");
    labelError.classList.add("error");
  } else {
    paragraphError.classList.remove("show-error");
    labelError.classList.remove("error");
  }
});

yearInput.addEventListener("input", () => {
  const paragraphError = document.querySelector("[data-yearsError]");
  const labelError = document.querySelector("[data-label3]");

  if (yearInput.value < 1900 || yearInput.value > 2023) {
    paragraphError.classList.add("show-error");
    labelError.classList.add("error");
  } else {
    paragraphError.classList.remove("show-error");
    labelError.classList.remove("error");
  }
});

const calculateBtn = document.querySelector("[data-calculate]");
calculateBtn.addEventListener("click", () => {
  const dayInputValue = +dayInput.value;
  const monthInputValue = +monthInput.value;
  const yearsInputValue = +yearInput.value;

  var currentDate = new Date();
  var currentDay = currentDate.getDate();
  var currentMonth = 1 + currentDate.getMonth();
  var currentYear = currentDate.getFullYear();
  var months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  // if the day input given is bigger than todays date we take one month

  if (dayInputValue > currentDay) {
    // currentDay = months[april -1] => march which is 31
    currentDay += months[currentMonth - 1];
    // removes one month beause we gave the value to the currentDay
    currentMonth -= 1;
  }
  if (monthInputValue > currentMonth) {
    currentMonth += 12;
    currentYear -= 1;
  }

  // Calculating the days
  var birthDate = currentDay - dayInputValue;
  document.querySelector("[data-birthDate]").innerHTML = birthDate;
  // Calculating the months
  var birthMonth = currentMonth - monthInputValue;
  document.querySelector("[data-birthMonth]").innerHTML = birthMonth;
  // Calculationg the years
  var birthYear = currentYear - yearsInputValue;
  document.querySelector("[data-birthYear]").innerHTML = birthYear;
});

const inputValues = document.querySelectorAll("input");

inputValues.forEach((input) => {
  input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      calculateBtn.click();
    }
  });
});
