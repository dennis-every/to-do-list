import { retrieveData, storeData } from './handleData.js';
import Todo from './todo.js';

const clearAllCompletedHandler = (e) => {
  e.preventDefault();
  let todos = retrieveData();
  todos.forEach((element) => {
    if (element.completed) {
      todos = todos.filter((todo) => todo.index.toString() !== element.index.toString());
    }
  });
  const reIndexedArray = [];
  todos.sort((a, b) => a.index - b.index).forEach((element, index) => {
    reIndexedArray.push(new Todo(element.description, element.completed, index + 1));
  });
  storeData(reIndexedArray);
  window.location.reload();
};

export default clearAllCompletedHandler;
