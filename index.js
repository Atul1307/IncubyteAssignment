import { add } from './calculator.js';

let resultElement = document.getElementById('resultElement');
let inputElement = document.getElementById('inputElement');
let addBtn = document.getElementById('addBtn');

addBtn.addEventListener('click', () => {
  const input = inputElement.value;
  const result = add(input);
  resultElement.textContent = `Result is : ${result}`;
  inputElement.value = '';
});
