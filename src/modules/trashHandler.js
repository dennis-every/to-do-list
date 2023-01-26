import Todo from './todo.js';

const trashEventHandler = (e) => {
  const todo = e.target.parentElement;
  const indexTodo = todo.getAttribute('id');
  Todo.removeTodo(indexTodo);
  window.location.reload();
};

export default trashEventHandler;
