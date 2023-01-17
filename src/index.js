import './style.css';

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
  element.setAttribute('id', todo.index);
  element.innerHTML = `
  <input class="checkbox" type="checkbox" ${todo.completed ? 'checked' : ''}/>
  <span>${todo.description}</span>`;
  list.appendChild(element);
};

const loadElements = () => {
  arr
    .sort((a, b) => a.index - b.index)
    .forEach((todo) => {
      appendToDOM(todo);
    });
};

window.onload = () => {
  loadElements();
};
