import { storeData, retrieveData } from './handleData.js';

let newTodoArray = [];

export default class Todo {
  constructor(description, completed, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }

  static addTodo = (todo) => {
    const newTodo = new Todo(todo.description, todo.completed, todo.index);
    newTodoArray = retrieveData();
    newTodoArray.push(newTodo);
    storeData(newTodoArray);
  };
}
