import Menu from '../images/ellipsis-vertical.svg';
import createEditFormElement from './editTodoForm.js';
import updateTodoHandler from './updateHandler.js';

const createShowElement = (todo) => {
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
  menuIcon.addEventListener('click', (e) => {
    const showElement = e.path[1];
    const indexTodo = showElement.getAttribute('id');
    const editElement = createEditFormElement(indexTodo);
    editElement.addEventListener('submit', updateTodoHandler);
    const todoList = showElement.parentElement;
    todoList.replaceChild(editElement, showElement);
  });
  return element;
};

export default createShowElement;
