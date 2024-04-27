let box = document.getElementById("box");
console.log(box);

box.addEventListener("click", () => {
  alert("how are you");
});

//Mouse over

box.addEventListener("mouseover", () => {
  console.log("Yooo");
  box.style.backgroundColor = "red";
});

//Mouse out

box.addEventListener("mouseout", () => {
  box.style.backgroundColor = "green";
  console.log("Nooo");
});

//Kerdown event

let userNameField = document.getElementById("userName");

userNameField.addEventListener("keydown", () => {
  console.log("keydown");
});

userNameField.addEventListener("keyup", () => {
  console.log("keyup");
});
