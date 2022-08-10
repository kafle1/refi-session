const input = prompt("Choose Scissor, Paper, Rock (s/p/r)");

const userInput = input.toLowerCase();

const cases = ["You win!", "You lose", "Its a Draw"];

if (userInput === "s" || userInput === "p" || userInput === "r") {
  const randomNumber = Math.floor(Math.random()) * cases.length;

  alert(cases[randomNumber]);
} else {
  alert("Please enter correct value i.e (s/p/r)");
}
