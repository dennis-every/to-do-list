import Todo from './todo.js';
import { appendToDOM } from './handleDOM.js';
import createShowElement from './showTodo.js';

export const newTodoForm = document.getElementById('todo-form');

export const newTodoFormHandler = (e) => {
  e.preventDefault();
  const newTodo = new Todo(
    newTodoForm.elements['add-todo'].value,
    false,
    new Date().valueOf(),
  );
  Todo.addTodo(newTodo);
  const todoElement = createShowElement(newTodo);
  appendToDOM(todoElement);
  newTodoForm.reset();
};
