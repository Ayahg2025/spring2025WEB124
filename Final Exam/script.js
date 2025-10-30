/*
  Final Project: JavaScript Calculator
  Student: Ayah Ghazouli
  Date: October 30, 2025
 I did 4 paragraphs with the text addition, subtraction, multiplication, and division.
*/

function addNumbers(num) {
  let result = '';
  for (let i = 1; i <= 10; i++) {
    result += `${i} + ${num} = ${i + num}<br>`;
  }
  document.getElementById('addition').innerHTML = result;
}

function subtractNumbers(num) {
  let result = '';
  let i = 1;
  while (i <= 10) {
    result += `${i} - ${num} = ${i - num}<br>`;
    i++;
  }
  document.getElementById('subtraction').innerHTML = result;
}

function multiplyNumbers(num) {
  let result = '';
  let i = 1;
  do {
    result += `${i} * ${num} = ${i * num}<br>`;
    i++;
  } while (i <= 10);
  document.getElementById('multiplication').innerHTML = result;
}

function divideNumbers(num) {
  let result = '';
  for (let i = 1; i <= 10; i++) {
    let division = (i / num).toFixed(2);
    result += `${i} / ${num} = ${division}<br>`;
  }
  document.getElementById('division').innerHTML = result;
}

function runAllCalculations() {
  const input = document.getElementById('num').value;
  const num = parseFloat(input);
  if (!isNaN(num)) {
    addNumbers(num);
    subtractNumbers(num);
    multiplyNumbers(num);
    divideNumbers(num);
  } else {
    alert('Please enter a valid number.');
  }
}

document.getElementById('calculateBtn').addEventListener('click', runAllCalculations);