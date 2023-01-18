import createEditElement from './editTodo.js';
import editHandler from './editHandler.js';

const menuEventHandler = (e) => {
  const showElement = e.target.parentElement;
  const indexTodo = showElement.getAttribute('id');
  const editElement = createEditElement(indexTodo);
  editElement.addEventListener('submit', editHandler);
  const todoList = showElement.parentElement;
  todoList.removeChild(showElement);
  todoList.appendChild(editElement);
};

export default menuEventHandler;
