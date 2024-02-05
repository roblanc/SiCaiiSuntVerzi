function inchesToCm(inches) {
  return inches * 2.54;
}
function convertAndDisplay() {
  var inches = document.getElementById('inchesInput').value;
  var centimeters = inchesToCm(inches);
  document.getElementById('result').textContent = inches + " inches is equal to " + centimeters.toFixed(2) + " centimeters.";
}

