import Todo from './todo.js';
import { retrieveData } from './handleData.js';
import { removeAllCompletedFromDOM } from './handleDOM.js';

const clearAllCompletedHandler = (e) => {
  e.preventDefault();
  const todos = retrieveData();
  Todo.clearAllCompleted(todos);
  const todoElements = document.querySelectorAll('#list li');
  removeAllCompletedFromDOM(todoElements);
};

export default clearAllCompletedHandler;
