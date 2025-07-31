const bmiForm = document.querySelector("#bmiForm");

bmiForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const bmiValue = document.querySelector("#bmiValue");
  const bmiMessage = document.querySelector("#bmiMessage");

  // Clear old results (not by removing element, but by clearing text)
  bmiValue.textContent = "";
  bmiMessage.textContent = "";

  // Validation
  if (!height || height <= 0 || isNaN(height)) {
    bmiMessage.textContent = "Please give a valid height.";
    bmiMessage.style.color = "red";
  } else if (!weight || weight <= 0 || isNaN(weight)) {
    bmiMessage.textContent = "Please give a valid weight.";
    bmiMessage.style.color = "red";
  } else {
    const bmi = (weight / (height * 0.01 * (height * 0.01))).toFixed(2);

    // Show result
    bmiValue.textContent = bmi;

    // Optional: Show message
    if (bmi < 18.5) {
      bmiMessage.textContent = "Underweight";
      bmiMessage.style.color = "red";
    } else if (bmi < 24.9) {
      bmiMessage.textContent = "Normal weight";
      bmiMessage.style.color = "green";
    } else if (bmi < 29.9) {
      bmiMessage.textContent = "Overweight";
      bmiMessage.style.color = "yellow";
    } else {
      bmiMessage.textContent = "Obese";
      bmiMessage.style.color = "red";
    }
  }
});
