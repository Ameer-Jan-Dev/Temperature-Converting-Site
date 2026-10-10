// //! ==== Temperature Converter ====
// //* Create a project that converts Celsius to Fahrenheit (or vice versa). Use if statements to validate input (e.g.. It should be a number).

let clickBtnEl = document.getElementById("btn-click");
clickBtnEl.addEventListener("click", function () {
  let tempValue = parseFloat(document.getElementById("temp").value);
  let conversionType = document.getElementById("convert").value;
  let resultValue = document.getElementById("result");

  //* Default Condition
  resultValue.innerHTML = "";
  if (isNaN(tempValue)) {
    resultValue.innerHTML +=
      "Please enter a valid value for temperature conversion.";
  } else if (conversionType == "default") {
    resultValue.innerHTML += "Select type!";
  }

  //* Real Conditions
  let convertingTemp;

  if (conversionType == "celsius") {
    convertingTemp = (tempValue - 32) * (5 / 9);
    resultValue.innerHTML += `Fahrenheit to Celsius: ${convertingTemp.toFixed(3)}°C
`;
  } else if (conversionType == "fahrenheit") {
    convertingTemp = (tempValue * 9) / 5 + 32;
    resultValue.innerHTML += `Celsius to Fahrenheit: ${convertingTemp.toFixed(3)}℉
`;
  }
});
