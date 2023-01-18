import Todo from './todo.js';

const trashEventHandler = (e) => {
  const todo = e.target.parentElement;
  const indexTodo = todo.getAttribute('id');
  Todo.removeTodo(indexTodo);
};

export default trashEventHandler;
