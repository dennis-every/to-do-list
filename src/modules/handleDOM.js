export const removeFromDOM = (todo) => {
  todo.parentElement.removeChild(todo);
};

export const appendToDOM = (todoElement) => {
  const todoList = document.getElementById('list');
  todoList.appendChild(todoElement);
};

export const removeAllCompletedFromDOM = (todoElements) => {
  todoElements.forEach((element) => {
    if (element.classList.contains('completed')) {
      removeFromDOM(element);
    }
  });
};
