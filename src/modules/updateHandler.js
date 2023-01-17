import { createElement } from './handleDOM.js';
import Todo from './todo.js';

const updateTodoHandler = (e) => {
  e.preventDefault();
  const inputElement = document.getElementsByClassName('edit-todo-input')[0];
  const formElement = inputElement.parentElement.parentElement;
  const indexTodo = formElement.getAttribute('id');
  const todo = Todo.getTodo(indexTodo);
  todo.description = inputElement.value;
  Todo.updateTodo(todo);
  const showElement = createElement(todo);
  formElement.parentElement.replaceChild(showElement, formElement);
};

export default updateTodoHandler;
