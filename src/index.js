import './style.css';

const list = document.getElementById('list');

const arr = [
  {
    description: 'Lorem, ipsum dolor.',
    completed: false,
    index: 1,
  },
  {
    description: 'Lorem, ipsum dolor.',
    completed: true,
    index: 2,
  },
  {
    description: 'Lorem, ipsum dolor.',
    completed: false,
    index: 3,
  },
];

const appendToDOM = (todo) => {
  const element = document.createElement('li');
  element.setAttribute('id', todo.index);
  element.innerHTML = `
  <input type="checkbox" ${todo.completed ? 'checked' : ''}/>
  <span>${todo.description}</span>`;
  list.appendChild(element);
};

const loadElements = () => {
  arr.forEach((todo) => {
    appendToDOM(todo);
  });
};

window.onload = () => {
  loadElements();
};
