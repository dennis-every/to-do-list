import { appendToDOM } from './handleDOM.js';
import Todo from './todo.js';
import createShowElement from './showTodo.js';

const editTodoFormHandler = (e) => {
  e.preventDefault();
  const editTodoForm = document.getElementById('todo-form');
  const newTodo = new Todo(
    editTodoForm.elements['add-todo'].value,
    false,
    new Date().valueOf(),
  );
  Todo.addTodo(newTodo);
  const todoElement = createShowElement(newTodo);
  appendToDOM(todoElement);
  editTodoForm.reset();
};

export default editTodoFormHandler;