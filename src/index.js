import './style.css';
import Refresh from './rotate.svg';
import Enter from './enter.png';
import { appendToDOM } from './modules/handleDOM.js';
import createShowElement from './modules/showTodo.js';
import { retrieveData } from './modules/handleData.js';
import { newTodoForm, newTodoFormHandler } from './modules/newTodoForm.js';

const loadElements = () => {
  let todoArray = [];
  todoArray = retrieveData();
  todoArray
    .sort((a, b) => a.index - b.index)
    .forEach((todo) => {
      const todoElement = createShowElement(todo);
      appendToDOM(todoElement);
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
  newTodoForm.addEventListener('submit', newTodoFormHandler);
};
