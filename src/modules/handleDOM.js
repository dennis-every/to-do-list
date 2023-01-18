// import Menu from '../images/ellipsis-vertical.svg';
// import menuEventHandler from './menuHandler.js';

const todoList = document.getElementById('list');

export const removeFromDOM = (todo) => {
  todo.parentElement.removeChild(todo);
};

// export const createElement = (todo) => {
//   const element = document.createElement('li');
//   const menuIcon = new Image();
//   menuIcon.src = Menu;
//   menuIcon.setAttribute('class', 'icon');
//   element.setAttribute('id', todo.index);
//   element.innerHTML = `
//   <label>
//     <input class="checkbox" type="checkbox" ${todo.completed ? 'checked' : ''}/>
//     <span>${todo.description}</span>
//   </label
//   `;
//   element.appendChild(menuIcon);
//   menuIcon.addEventListener('click', menuEventHandler);
//   return element;
// };

export const appendToDOM = (todoElement) => {
  todoList.appendChild(todoElement);
};
