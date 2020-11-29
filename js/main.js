"use strict"

let input = document.getElementById('info');

let insert = (num) => input.textContent = input.textContent + num;

let clears = () =>  input.textContent = " ";

let back = () => {
  let exp = input.textContent;
  input.textContent = exp.substring(0, exp.length-1);
}

let result = () => {
  let exp = input.textContent;
  let result;
  if(exp) {
    result = eval(exp);
    input.textContent = isFinite(result) ? result : 'Error';
  }
}