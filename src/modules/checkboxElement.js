import checkboxHandler from './checkboxHandler.js';

const createCheckboxElement = (checked) => {
  const checkboxElement = document.createElement('input');
  checkboxElement.setAttribute('class', 'checkbox');
  checkboxElement.setAttribute('type', 'checkbox');
  if (checked) {
    checkboxElement.checked = true;
  }
  checkboxElement.addEventListener('change', checkboxHandler);
  return checkboxElement;
};

export default createCheckboxElement;
