import Menu from '../images/ellipsis-vertical.svg';
import createEditFormElement from './editTodoForm.js';
import Todo from './todo.js';

const updateTodoHandler = (e) => {
  e.preventDefault();
  const inputElement = document.getElementsByClassName('edit-todo-input')[0];
  const formElement = inputElement.parentElement.parentElement;
  const indexTodo = formElement.getAttribute('id');
  const todo = Todo.getTodo(indexTodo);
  todo.description = inputElement.value;
  Todo.updateTodo(todo);
  const showElement = document.createElement('li');
  const menuIcon = new Image();
  menuIcon.src = Menu;
  menuIcon.setAttribute('class', 'icon');
  showElement.setAttribute('id', todo.index);
  showElement.innerHTML = `
  <label>
    <input class="checkbox" type="checkbox" ${todo.completed ? 'checked' : ''}/>
    <span>${todo.description}</span>
  </label
  `;
  showElement.appendChild(menuIcon);
  menuIcon.addEventListener('click', (e) => {
    const showElement = e.target.parentElement;
    const indexTodo = showElement.getAttribute('id');
    const editElement = createEditFormElement(indexTodo);
    editElement.addEventListener('submit', updateTodoHandler);
    const todoList = showElement.parentElement;
    todoList.replaceChild(editElement, showElement);
  });
  formElement.parentElement.replaceChild(showElement, formElement);
};

export default updateTodoHandler;
