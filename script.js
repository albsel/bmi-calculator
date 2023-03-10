const heightEl = document.getElementById("height");
const weightEl = document.getElementById("weight");
const btnEl = document.getElementById("btn");
const bmiEl = document.getElementById("bmi");
const weightConditionEl = document.querySelector(".weight-condition");

function calculateBMI() {
  const height = heightEl.value / 100;
  const weight = weightEl.value;

  const bmiValue = weight / (height * height);
  bmiEl.value = bmiValue;

  if (bmiValue < 18.5) {
    weightConditionEl.innerText = "Under Weight";
  } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
    weightConditionEl.innerText = "Normal Weight";
  } else if (bmiValue >= 25 && bmiValue <= 29.9) {
    weightConditionEl.innerText = "Overweight";
  } else if (bmiValue >= 30) {
    weightConditionEl.innerText = "Obesity";
  }
}

btnEl.addEventListener("click", calculateBMI);
