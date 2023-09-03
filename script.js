const button = document.querySelector('button');
const output = document.querySelector('.output');

button.addEventListener('click', function () {
  const cost = document.querySelector('input');
  let tip = (cost.value * 0.15).toFixed(2);
  let template = `<h1>You should tip $${tip} on a bill of $${cost.value}.</h1>`;
  output.innerHTML = template;
});
