let box = document.getElementById("box");
console.log(box);

box.addEventListener("click", () => {
  alert("how are you");
});

box.addEventListener("mouseover", () => {
  console.log("Yooo");
  box.style.backgroundColor = "red";
});

box.addEventListener("mouseout", () => {
  box.style.backgroundColor = "green";
  console.log("Nooo");
});
