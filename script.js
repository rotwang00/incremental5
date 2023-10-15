let score = 10;
let btn1value = 1;

const btn1 = document.getElementById("btn1");
const pointsDisplay = document.getElementById("points");

function btn1click() {
  score += btn1value;
  updateDisplay();
}

btn1.addEventListener("click", btn1click);

function updateDisplay() {
  pointsDisplay.innerHTML = `Points: ${score}`;
}
