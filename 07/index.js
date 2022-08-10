const form = document.getElementById("form");
const ul = document.querySelector("#myUl");
const userInput = document.getElementById("text");
const button = document.getElementById("button");

button.addEventListener("click", (e) => {
  e.preventDefault();

  //create list and button
  let li = document.createElement("li");
  let btn = document.createElement("button");

  //insert user text value to new list
  li.appendChild(document.createTextNode(userInput.value));
  btn.appendChild(document.createTextNode("X"));

  li.appendChild(btn);

  //clear the input after submit
  userInput.value = "";

  //add the new list to our ul
  ul.appendChild(li);
});

ul.addEventListener("click", function (e) {
  try {
    this.removeChild(e.target.parentNode);
  } catch (error) {}
});
