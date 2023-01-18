import Menu from '../images/ellipsis-vertical.svg';
import createEditFormElement from './editTodoForm.js';
import Todo from './todo.js';
import updateTodoHandler from './updateHandler.js';

const changeCheckboxHandler = (e) => {
  const showElement = e.target.parentElement.parentElement;
  const todoIndex = showElement.getAttribute('id');
  const todo = Todo.getTodo(todoIndex);
  todo.completed = !todo.completed;
  Todo.updateTodo(todo);
};

const clickMenuHandler = (e) => {
  const showElement = e.target.parentElement;
  const indexTodo = showElement.getAttribute('id');
  const editElement = createEditFormElement(indexTodo);
  editElement.addEventListener('submit', updateTodoHandler);
  const todoList = showElement.parentElement;
  todoList.replaceChild(editElement, showElement);
};

const createCheckboxElement = (checked) => {
  const checkboxElement = document.createElement('input');
  checkboxElement.setAttribute('class', 'checkbox');
  checkboxElement.setAttribute('type', 'checkbox');
  if (checked) {
    checkboxElement.checked = true;
  }
  checkboxElement.addEventListener('change', changeCheckboxHandler);
  return checkboxElement;
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
