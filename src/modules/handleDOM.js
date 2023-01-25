export const todoList = document.getElementById('list');

export const removeFromDOM = (todo) => {
  todo.parentElement.removeChild(todo);
};

export const appendToDOM = (todoElement) => {
  const todoList = document.createElement('ul');
  todoList.appendChild(todoElement);
};
