const numbersId = document.getElementById("numbers");

numbersId.addEventListener("keypress", (event) => {
  if (event.key < "0" || event.key > "9") {
    event.preventDefault();
  }
});
