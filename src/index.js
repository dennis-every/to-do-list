import './style.css';
import Refresh from './rotate.svg';
import Enter from './enter.png';
import Todo from './modules/todo.js';
import appendToDOM from './modules/handleDOM.js';

const arr = [];

const loadElements = () => {
  arr
    .sort((a, b) => a.index - b.index)
    .forEach((todo) => {
      appendToDOM(todo);
    });
};

const loadRefreshBtn = () => {
  const refreshBtn = document.getElementById('refresh');
  refreshBtn.src = Refresh;
  refreshBtn.alt = 'refresh';
  refreshBtn.setAttribute('class', 'header-icon');
};

const loadEnterBtn = () => {
  const enterBtn = document.getElementById('enter');
  enterBtn.src = Enter;
  enterBtn.alt = 'enter';
  enterBtn.setAttribute('class', 'icon');
};

window.onload = () => {
  loadElements();
  loadRefreshBtn();
  loadEnterBtn();
};

const todoForm = document.getElementById('todo-form');

const todoFormHandler = (e) => {
  e.preventDefault();
  const newTodo = new Todo(
    todoForm.elements['add-todo'].value,
    false,
    new Date().valueOf(),
  );
  Todo.addTodo(newTodo);
  todoForm.reset();
  appendToDOM(newTodo);
};

todoForm.addEventListener('submit', todoFormHandler);
