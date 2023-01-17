import Edit from '../images/ellipsis-vertical.svg';

const todoList = document.getElementById('list');

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
  todoList.appendChild(element);
};

export default appendToDOM;
