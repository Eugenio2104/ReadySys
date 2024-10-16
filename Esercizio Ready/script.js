let min;
let max;
let guess = Math.floor((min + max) / 2);

function updateGuess() {
  guess = Math.floor((min + max) / 2);
  updateResult(guess);
}


document.getElementById("startGame").addEventListener("click", function () {
  document.getElementById("gameDiv").style.display = "block";
  document.getElementById("description").textContent = "";
  document.getElementById("userNumber").value = "";
  document.getElementById("result").textContent = "";
  document.getElementById("endGame").textContent = "";
  disableButtons();
  min = 1;
  max = 100;
  updateGuess()
});

document.getElementById("guessButton").addEventListener("click", function () {
  const userNumber = document.getElementById("userNumber").value;
  if (userNumber >= 1 && userNumber <= 100) {
    updateGuess()
    enableButtons();
  } else {
    alert("ERRORE: Non hai inserito un numero da 1 a 100");
  }
});

document.getElementById("higher").addEventListener("click", function () {
  min = guess + 1;
  updateGuess()
});

document.getElementById("lower").addEventListener("click", function () {
  max = guess - 1;
  updateGuess()
});

document.getElementById("correct").addEventListener("click", function () {
  document.getElementById("result").textContent = `Il numero che hai scritto è ${guess}!!!`;
  document.getElementById("endGame").textContent = "Gioco Terminato, clicca il tasto Gioca se vuoi fare un nuovo tentativo.";
  disableButtons();
});

function updateResult(guess) {
  document.getElementById("result").textContent = `Il numero è maggiore o minore di ${guess}?`;
}

function enableButtons() {
  document.getElementById("higher").disabled = false;
  document.getElementById("lower").disabled = false;
  document.getElementById("correct").disabled = false;
}

function disableButtons() {
  document.getElementById("higher").disabled = true;
  document.getElementById("lower").disabled = true;
  document.getElementById("correct").disabled = true;
}