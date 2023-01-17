import Trash from '../images/trash-can.svg';
import Todo from './todo.js';
import trashEventHandler from './trashHandler.js';
import updateTodoHandler from './updateHandler.js';

const menuEventHandler = (e) => {
  const showElement = e.path[1];
  const indexTodo = showElement.getAttribute('id');
  const todo = Todo.getTodo(indexTodo);
  const editElement = document.createElement('form');
  editElement.setAttribute('action', '#');
  editElement.setAttribute('method', 'patch');
  editElement.setAttribute('type', 'submit');
  editElement.setAttribute('class', 'edit-todo-form');
  editElement.setAttribute('id', indexTodo);
  editElement.innerHTML = `
  <label for="edit-todo" id="edit-todo-label">
    <input class="checkbox" type="checkbox" />
    <input
      type="text"
      name="edit-todo"
      class="edit-todo-input"
      value=${todo.description}
    />
  </label>
  `;
  const trashIcon = new Image();
  trashIcon.src = Trash;
  trashIcon.setAttribute('class', 'icon');
  trashIcon.addEventListener('click', trashEventHandler);
  editElement.appendChild(trashIcon);
  showElement.parentElement.replaceChild(editElement, showElement);
  editElement.addEventListener('submit', updateTodoHandler);
};

export default menuEventHandler;
