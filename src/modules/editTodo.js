import Todo from './todo.js';
import Trash from '../images/trash-can.svg';
import trashEventHandler from './trashHandler.js';
import createCheckboxElement from './checkboxElement.js';

const createDescriptionElement = (description) => {
  const descriptionElement = document.createElement('input');
  descriptionElement.setAttribute('type', 'text');
  descriptionElement.setAttribute('name', 'edit-todo');
  descriptionElement.setAttribute('class', 'edit-todo-input');
  descriptionElement.setAttribute('value', description);
  return descriptionElement;
};

const createTrashElement = () => {
  const trashElement = new Image();
  trashElement.src = Trash;
  trashElement.setAttribute('class', 'icon');
  trashElement.addEventListener('click', trashEventHandler);
  return trashElement;
};

const createEditElement = (indexTodo) => {
  const todo = Todo.getTodo(indexTodo);
  const editElement = document.createElement('form');
  editElement.setAttribute('action', '#');
  editElement.setAttribute('method', 'patch');
  editElement.setAttribute('type', 'submit');
  editElement.setAttribute('class', 'edit-todo-form');
  editElement.setAttribute('id', indexTodo);
  const labelElement = document.createElement('label');
  labelElement.setAttribute('for', 'edit-todo');
  labelElement.setAttribute('id', 'edit-todo-label');
  const checkboxElement = createCheckboxElement(todo.completed);
  if (todo.completed) {
    editElement.classList.add('completed');
  } else {
    editElement.classList.remove('completed');
  }
  labelElement.appendChild(checkboxElement);
  const descriptionElement = createDescriptionElement(todo.description);
  labelElement.appendChild(descriptionElement);
  const trashElement = createTrashElement();
  editElement.appendChild(labelElement);
  editElement.appendChild(trashElement);
  return editElement;
};

export default createEditElement;
