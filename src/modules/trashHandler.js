import Todo from './todo.js';
import { removeFromDOM } from './handleDOM.js';

const trashEventHandler = (e) => {
  const todo = e.target.parentElement;
  const indexTodo = todo.getAttribute('id');
  Todo.removeTodo(indexTodo);
  removeFromDOM(todo);
};

export default trashEventHandler;
