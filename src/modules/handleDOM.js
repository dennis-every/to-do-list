const todoList = document.getElementById('list');

export const removeFromDOM = (todo) => {
  todo.parentElement.removeChild(todo);
};

export const appendToDOM = (todoElement) => {
  todoList.appendChild(todoElement);
};
