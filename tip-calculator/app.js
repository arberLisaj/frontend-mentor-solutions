const billInputEl = document.querySelector("[data-billInput]");
customTipEl = document.querySelector("[data-customtip]");
peopleNumberEl = document.querySelector("[data-peopleNumber]");
resetButtonEl = document.querySelector("[data-reset]");

displayTipAmount = document.querySelector("[data-tipAmount]");
displayTotalAmount = document.querySelector("[data-totalAmount]");

radioButton = document.querySelectorAll('input[type="radio"]');
// var peopleNumberEl = e.currentTarget.valueAsNumber;
// adding the bill input  event listener
billInputEl.addEventListener("input", () => {
  var billInputValue = parseFloat(billInputEl.value);
  var selectedPercentage = parseInt(
    document.querySelector('input[name="amount"]:checked').value
  );
  var peopleNumberValue = parseInt(peopleNumberEl.value);

  var tipAmount =
    ((selectedPercentage / 100) * billInputValue) / peopleNumberValue;
  var totalAmount = (tipAmount + billInputValue) / peopleNumberValue;

  if ((isNaN(tipAmount) && isNaN(totalAmount)) || billInputValue <= 0) {
    billInputEl.classList.add("peopleNumberError");
    document.querySelector("[data-cantbezero1]").style.display = "block";
  } else {
    displayTipAmount.innerHTML = `$${tipAmount.toFixed(2)}`;
    displayTotalAmount.innerHTML = `$${totalAmount.toFixed(2)}`;
    billInputEl.classList.remove("peopleNumberError");
    document.querySelector("[data-cantbezero1]").style.display = "none";
  }
});

// adding the buttons event listener
radioButton.forEach((button) => {
  button.addEventListener("click", () => {
    var billInputValue = parseFloat(billInputEl.value);

    // console.log(!isNaN(billInputValue));

    var peopleNumberValue = parseInt(peopleNumberEl.value);
    var selectedPercentage = parseInt(
      document.querySelector('input[name="amount"]:checked').value
    );

    var tipAmount =
      ((selectedPercentage / 100) * billInputValue) / peopleNumberValue;
    displayTipAmount.innerHTML = `$${tipAmount.toFixed(2)}`;
    var totalAmount = (tipAmount + billInputValue) / peopleNumberValue;
    displayTotalAmount.innerHTML = `$${totalAmount.toFixed(2)}`;
  });
});
// adding the number of people input listener
peopleNumberEl.addEventListener("input", () => {
  var billInputValue = parseFloat(billInputEl.value);
  var peopleNumberValue = parseInt(peopleNumberEl.value);
  var selectedPercentage = parseInt(
    document.querySelector('input[name="amount"]:checked').value
  );

  var tipAmount =
    ((selectedPercentage / 100) * billInputValue);
  var totalAmount = (tipAmount + billInputValue) / peopleNumberValue;

  if ((isNaN(tipAmount) && isNaN(totalAmount)) || peopleNumberEl <= 0) {
    document.querySelector("[data-cantbezero]").style.display = "block";
    peopleNumberEl.classList.add("peopleNumberError");
  } else {
    displayTipAmount.innerHTML = `$${tipAmount.toFixed(2)}`;
    displayTotalAmount.innerHTML = `$${totalAmount.toFixed(2)}`;
    document.querySelector("[data-cantbezero]").style.display = "none";
    peopleNumberEl.classList.remove("peopleNumberError");
  }
});

// making the custom tip percentage input
customTipEl.addEventListener("input", () => {
  var customTipValue = parseFloat(customTipEl.value);
  if (customTipValue == "") {
    return;
  } else {
    var billInputValue = parseFloat(billInputEl.value);
    var peopleNumberValue = parseInt(peopleNumberEl.value);
    var selectedPercentage = customTipValue;
    var tipAmount =
      ((selectedPercentage / 100) * billInputValue) / peopleNumberValue;
    var totalAmount = (tipAmount + billInputValue) / peopleNumberValue;

    if ((isNaN(tipAmount) && isNaN(totalAmount)) || peopleNumberEl <= 0) {
      document.querySelector("[data-cantbezero]").style.display = "block";
      peopleNumberEl.classList.add("peopleNumberError");
    } else {
      displayTipAmount.innerHTML = `$${tipAmount.toFixed(2)}`;
      displayTotalAmount.innerHTML = `$${totalAmount.toFixed(2)}`;
      document.querySelector("[data-cantbezero]").style.display = "none";
      peopleNumberEl.classList.remove("peopleNumberError");
    }
  }
});

// creating the reset button functionality
resetButtonEl.addEventListener("click", () => {
  displayTipAmount.innerHTML = `$0.00`;
  displayTotalAmount.innerHTML = `$0.00`;
  billInputEl.value = "";
  peopleNumberEl.value = "";
});
