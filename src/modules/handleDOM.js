export const removeFromDOM = (todo) => {
  todo.parentElement.removeChild(todo);
};

export const appendToDOM = (todoElement) => {
  const todoList = document.getElementById('list');
  todoList.appendChild(todoElement);
};
