const btn = document.getElementById('btn');
function btnClickHandler() {
  const text = document.createElement('p');
  text.innerHTML = 'Hello';
  document.body.appendChild(text);
}
btn.addEventListener('click', btnClickHandler);
