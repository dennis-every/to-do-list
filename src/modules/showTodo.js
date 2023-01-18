import Menu from '../images/ellipsis-vertical.svg';
import createEditElement from './editTodo.js';
import editHandler from './editHandler.js';
import createCheckboxElement from './checkboxElement.js';

const clickMenuHandler = (e) => {
  const showElement = e.target.parentElement;
  const indexTodo = showElement.getAttribute('id');
  const editElement = createEditElement(indexTodo);
  editElement.addEventListener('submit', editHandler);
  const todoList = showElement.parentElement;
  todoList.replaceChild(editElement, showElement);
};

const createMenuElement = () => {
  const menuElement = new Image();
  menuElement.src = Menu;
  menuElement.setAttribute('class', 'icon');
  menuElement.addEventListener('click', clickMenuHandler);
  return menuElement;
};

const createShowElement = (todo) => {
  const showElement = document.createElement('li');
  showElement.setAttribute('id', todo.index);
  const labelElement = document.createElement('label');
  const checkboxElement = createCheckboxElement(todo.completed);
  if (todo.completed) {
    showElement.classList.add('completed');
  } else {
    showElement.classList.remove('completed');
  }
  labelElement.appendChild(checkboxElement);
  const descriptionElement = document.createElement('span');
  descriptionElement.innerText = todo.description;
  labelElement.appendChild(descriptionElement);
  showElement.appendChild(labelElement);
  const menuElement = createMenuElement();
  showElement.appendChild(menuElement);
  return showElement;
};

export default createShowElement;
