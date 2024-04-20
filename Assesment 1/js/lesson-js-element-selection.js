console.log("Hey there");

//ID selection
let calculateButton = document.getElementById("btnCalculate");
console.log(calculateButton);
calculateButton.style.backgroundColor = "red";
calculateButton.style.color = "white";

//Button Click event listener
calculateButton.addEventListener("click", () => {
  alert("Button Clicked");
});

//Class selection
let box = document.getElementsByClassName("box");
console.log(box);

//Tag selection
let h1 = document.getElementsByTagName("h1");
console.log(h1);
