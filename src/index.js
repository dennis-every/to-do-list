import './style.css';
import Edit from './ellipsis-vertical.svg';
import Refresh from './rotate.svg';
import Enter from './enter.png';

const list = document.getElementById('list');

const arr = [
  {
    description: 'Lorem, ipsum dolor 11',
    completed: false,
    index: 11,
  },
  {
    description: 'Lorem, ipsum dolor 2',
    completed: true,
    index: 2,
  },
  {
    description: 'Lorem, ipsum dolor 1',
    completed: false,
    index: 1,
  },
];

const appendToDOM = (todo) => {
  const element = document.createElement('li');
  const editIcon = new Image();
  editIcon.src = Edit;
  editIcon.setAttribute('class', 'icon');

  element.setAttribute('id', todo.index);
  element.innerHTML = `
  <label>
    <input class="checkbox" type="checkbox" ${todo.completed ? 'checked' : ''}/>
    <span>${todo.description}</span>
  </label
  `;
  element.appendChild(editIcon);
  list.appendChild(element);
};

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
