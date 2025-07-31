// Generate random number between 1 and 100
let randomNumber = Math.floor(Math.random() * 100) + 1;
let attemptsLeft = 10;
let previousGuesses = [];

const guessForm = document.querySelector("#guessForm");
const guessInput = document.querySelector("#guessInput");
const feedback = document.querySelector("#feedback");
const prevGuesses = document.querySelector("#prevGuesses");
const attemptsLeftSpan = document.querySelector("#attemptsLeft");
const restartBtn = document.querySelector("#restartBtn");

guessForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const guess = parseInt(guessInput.value);

  if (isNaN(guess) || guess < 1 || guess > 100) {
    feedback.textContent = "Please enter a valid number between 1 and 100.";
    return;
  }

  if (attemptsLeft === 0) return;

  previousGuesses.push(guess);
  prevGuesses.textContent = previousGuesses.join(", ");
  attemptsLeft--;
  attemptsLeftSpan.textContent = attemptsLeft;

  if (guess === randomNumber) {
    feedback.textContent = `🎉 Congratulations! You guessed it right. The number was ${randomNumber}.`;
    endGame();
  } else if (attemptsLeft === 0) {
    feedback.textContent = `😢 Game Over! The number was ${randomNumber}.`;
    endGame();
  } else if (guess < randomNumber) {
    feedback.textContent = "Too low! Try a higher number.";
  } else {
    feedback.textContent = "Too high! Try a lower number.";
  }

  guessInput.value = "";
  guessInput.focus();
});

restartBtn.addEventListener("click", restartGame);

function endGame() {
  guessInput.disabled = true;
  restartBtn.style.display = "inline-block";
}

function restartGame() {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  attemptsLeft = 10;
  previousGuesses = [];

  feedback.textContent = "";
  prevGuesses.textContent = "None";
  attemptsLeftSpan.textContent = "10";
  guessInput.disabled = false;
  guessInput.value = "";
  guessInput.focus();
  restartBtn.style.display = "none";
}
