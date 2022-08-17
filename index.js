const massEl = document.querySelector("#mass");
const heightEl = document.querySelector("#height");
const calculateBtn = document.getElementById("btn");
const warningEl = document.getElementById("warning");
//functions

//triggers/EventLitener
calculateBtn.addEventListener("click", () => {
  if (massEl.value === "" || heightEl.value === "") {
    warningEl.style.display = "block";
    warningEl.style.background = "red";
    warningEl.style.color = "white";
    warningEl.innerHTML = "Please input mass and height";
  }
  const bmi = massEl.value / heightEl.value ** 2;
  document.getElementById("display").style.fontSize = "20px";
  document.getElementById("display").style.textAlign = "center";
  document.getElementById(
    "display"
  ).innerHTML = `Your BMI value is ${bmi.toFixed(2)}kg/m2`;
  if (bmi.toFixed(2) <= 18.5) {
    warningEl.style.display = "block";
    warningEl.style.background = "red";
    warningEl.innerHTML = "You are underweight!!";
    warningEl.style.color = "white";
  }
  if (bmi.toFixed(2) > 18.5 && bmi.toFixed(2) < 24.9) {
    warningEl.style.display = "block";
    warningEl.style.background = "green";
    warningEl.innerHTML = "Your weight is mormal";
    warningEl.style.color = "white";
  }
  if (bmi.toFixed(2) >= 25 && bmi.toFixed(2) <= 29.9) {
    warningEl.style.display = "block";
    warningEl.style.background = "gray";
    warningEl.innerHTML = "You are Overweight";
    warningEl.style.color = "white";
  }
  if (bmi.toFixed(2) > 30) {
    warningEl.style.display = "block";
    warningEl.style.background = "blue";
    warningEl.innerHTML = "You are Obese!!";
    warningEl.style.color = "white";
  }
});
