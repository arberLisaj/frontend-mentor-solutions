const cardHolderInput = document.querySelector("[data-cardholder]"),
  displayCardHolder = document.querySelector("[data-displayname]"),
  cardNumberInput = document.querySelector("[data-cardnumber]"),
  displayCardNumber = document.querySelector("[data-displaynumber]"),
  cardMonthInput = document.querySelector("[data-monthinput]"),
  displayCardMonth = document.querySelector("[data-month]"),
  cardYearInput = document.querySelector("[data-yearinput]"),
  displayCardYear = document.querySelector("[data-year]"),
  cardCvcInput = document.querySelector("[data-cvc]"),
  displayCardCvc = document.querySelector("[data-displaycvc]"),
  confirmInput = document.querySelector("[data-forth]");

cardHolderInput.addEventListener("input", () => {
  displayCardHolder.innerHTML = cardHolderInput.value.toUpperCase();
});

cardNumberInput.addEventListener("input", () => {
  displayCardNumber.innerHTML = cardNumberInput.value;
});

// Creating the year input and logics
cardMonthInput.addEventListener("input", () => {
  let monthValue = parseInt(cardMonthInput.value);
  if (monthValue > 12 || monthValue <= 0) {
    cardMonthInput.style.borderColor = "red";
  } else {
    displayCardMonth.innerHTML = monthValue;
    cardMonthInput.style.borderColor = "hsl(270, 3%, 87%)";
  }
});

// Creating the year input and logics
cardYearInput.addEventListener("input", () => {
  const currentYear = 23;
  if (cardYearInput.value < currentYear) {
    cardYearInput.style.borderColor = "red";
  } else {
    displayCardYear.innerHTML = cardYearInput.value;
    cardYearInput.style.borderColor = "hsl(270, 3%, 87%)";
  }
});

cardCvcInput.addEventListener("input", () => {
  displayCardCvc.innerHTML = cardCvcInput.value;
});

confirmInput.addEventListener("click", () => {
  // form validation dont judge this project started backwards :)
  if (
    cardHolderInput.value == "" ||
    cardNumberInput.value == "" ||
    cardMonthInput.value == "" ||
    cardYearInput.value == "" ||
    cardCvcInput.value == ""
  ) {
  } else {
    document.querySelector(".thankyou").style.display = "block";
    document.querySelector(".card-inputs").style.display = "none";
  }
});
