import Menu from '../images/ellipsis-vertical.svg';
import Trash from '../images/trash-can.svg';
import Todo from './todo.js';

const todoList = document.getElementById('list');

const removeFromDOM = (todo) => {
  todo.parentElement.removeChild(todo);
};

const trashEventHandler = (e) => {
  const todo = e.path[1];
  Todo.removeTodo(todo);
  removeFromDOM(todo);
};

const menuEventHandler = (e) => {
  const menuIcon = e.path[0];
  const trashIcon = new Image();
  trashIcon.src = Trash;
  trashIcon.setAttribute('class', 'icon');
  const todo = menuIcon.parentNode;
  todo.replaceChild(trashIcon, menuIcon);
  trashIcon.addEventListener('click', trashEventHandler);
};

const appendToDOM = (todo) => {
  const element = document.createElement('li');
  const menuIcon = new Image();
  menuIcon.src = Menu;
  menuIcon.setAttribute('class', 'icon');

  element.setAttribute('id', todo.index);
  element.innerHTML = `
  <label>
    <input class="checkbox" type="checkbox" ${todo.completed ? 'checked' : ''}/>
    <span>${todo.description}</span>
  </label
  `;
  element.appendChild(menuIcon);
  todoList.appendChild(element);
  menuIcon.addEventListener('click', menuEventHandler);
};

export default appendToDOM;
