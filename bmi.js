const male = document.getElementById("male");
const female = document.getElementById("female");
const age = document.getElementById("age");
const height = document.getElementById("height");
const weight = document.getElementById("weight");
const result = document.getElementById("result");
const remarks = document.getElementById("remarks");

function calculateBMI() {
  const ageValue = Number(age.value);
  const heightValue = Number(height.value);
  const weightValue = Number(weight.value);

  if ((male.checked === false && female.checked === false) || ageValue <= 0 || heightValue <= 0 || weightValue <= 0) {
    alert("Please fill out all fields with valid positive numbers.");
  } else {
    bmiValue(heightValue, weightValue);
  }
}

function bmiValue(height, weight) {
  const bmi = weight / ((height / 100) * (height / 100));

  result.textContent = bmi.toFixed(2);

  if (bmi < 18.5) {
    remarks.textContent = "Underweight";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    remarks.textContent = "Normal";
  } else if (bmi >= 25 && bmi <= 29.9) {
    remarks.textContent = "Overweight";
  } else {
    remarks.textContent = "Obese";
  }
}

function reset() {
  result.textContent = "0";
  remarks.textContent = "";
  age.value = "";
  height.value = "";
  weight.value = "";
}

