import Menu from '../images/ellipsis-vertical.svg';
import createEditElement from './editTodo.js';
import Todo from './todo.js';
import createCheckboxElement from './checkboxElement.js';

const editHandler = (e) => {
  e.preventDefault();
  // Update Todo
  const inputElement = document.getElementsByClassName('edit-todo-input')[0];
  const formElement = inputElement.parentElement.parentElement;
  const indexTodo = formElement.getAttribute('id');
  const todo = Todo.getTodo(indexTodo);
  todo.description = inputElement.value;
  Todo.updateTodo(todo);
  // Create showElement
  const showElement = document.createElement('li');
  showElement.setAttribute('id', todo.index);
  // Create menuElement
  const menuElement = new Image();
  menuElement.src = Menu;
  menuElement.setAttribute('class', 'icon');
  // Add menuElement eventListener
  menuElement.addEventListener('click', (e) => {
    const showElement = e.target.parentElement;
    const indexTodo = showElement.getAttribute('id');
    const editElement = createEditElement(indexTodo);
    editElement.addEventListener('submit', editHandler);
    const todoList = showElement.parentElement;
    todoList.replaceChild(editElement, showElement);
  });
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
  showElement.appendChild(menuElement);
  formElement.parentElement.replaceChild(showElement, formElement);
  return showElement;
};

export default editHandler;
