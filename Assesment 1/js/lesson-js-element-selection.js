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


//Query Selector

let hb2 = document.querySelector("#btnCalculate");
console.log(hb2);


let hb3 = document.querySelector(".box");
console.log(hb3);


let hb4 = document.querySelectorAll(".box");
console.log(hb4);


let hb5 = document.querySelector("#container .box");
console.log(hb5)

let hb6 = document.querySelectorAll("#container .box");
console.log(hb6)



//Quary selector all and quary selector is slower than getElementById and getElementByClassName and getElementByTagName