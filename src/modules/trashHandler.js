import { removeFromDOM } from './handleDOM.js';
import Todo from './todo.js';

const trashEventHandler = (e) => {
  const todo = e.target.parentElement;
  const indexTodo = todo.getAttribute('id');
  Todo.removeTodo(indexTodo);
  removeFromDOM(todo);
};

export default trashEventHandler;
