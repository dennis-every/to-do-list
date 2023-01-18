import Todo from './todo.js';
import { appendToDOM } from './handleDOM.js';
import createShowElement from './showTodo.js';
import { retrieveData } from './handleData.js';

export const newTodoForm = document.getElementById('todo-form');

export const newTodoFormHandler = (e) => {
  e.preventDefault();
  const todosArray = retrieveData();
  const newTodo = new Todo(
    newTodoForm.elements['add-todo'].value,
    false,
    todosArray.length + 1,
  );
  Todo.addTodo(newTodo);
  const todoElement = createShowElement(newTodo);
  appendToDOM(todoElement);
  newTodoForm.reset();
};
