import Todo from './todo.js';

const checkboxHandler = (e) => {
  const showElement = e.target.parentElement.parentElement;
  const todoIndex = showElement.getAttribute('id');
  const todo = Todo.getTodo(todoIndex);
  todo.completed = !todo.completed;
  Todo.updateTodo(todo);
};

export default checkboxHandler;
