import createEditFormElement from './editTodoForm.js';
import updateTodoHandler from './updateHandler.js';

const menuEventHandler = (e) => {
  const showElement = e.path[1];
  const indexTodo = showElement.getAttribute('id');
  const editElement = createEditFormElement(indexTodo);
  editElement.addEventListener('submit', updateTodoHandler);
  const todoList = showElement.parentElement;
  todoList.removeChild(showElement);
  todoList.appendChild(editElement);
};

export default menuEventHandler;
