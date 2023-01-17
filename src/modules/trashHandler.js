import Todo from './todo.js';
import { removeFromDOM } from './handleDOM.js';

const trashEventHandler = (e) => {
  const todo = e.path[1];
  const indexTodo = todo.getAttribute('id');
  Todo.removeTodo(indexTodo);
  removeFromDOM(todo);
};

export default trashEventHandler;
