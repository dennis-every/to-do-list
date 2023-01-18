import { storeData, retrieveData } from './handleData.js';

let newTodoArray = [];

export default class Todo {
  constructor(description, completed, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }

  static getTodo = (index) => {
    newTodoArray = retrieveData();
    const todo = newTodoArray.find((x) => x.index.toString() === index.toString());
    return todo;
  }

  static addTodo = (todo) => {
    const newTodo = new Todo(
      todo.description,
      todo.completed,
      todo.index,
    );
    newTodoArray = retrieveData();
    newTodoArray.push(newTodo);
    storeData(newTodoArray);
  }

  static updateTodo = (todo) => {
    newTodoArray = retrieveData();
    newTodoArray = newTodoArray.filter((element) => element.index !== todo.index);
    const newTodo = new Todo(
      todo.description,
      todo.completed,
      todo.index,
    );
    newTodoArray.push(newTodo);
    storeData(newTodoArray);
  }

  static removeTodo = (index) => {
    newTodoArray = retrieveData();
    newTodoArray = newTodoArray.filter((element) => element.index.toString() !== index.toString());
    const reIndexedArray = [];
    newTodoArray.sort((a, b) => a.index - b.index).forEach((element, index) => {
      reIndexedArray.push(new Todo(element.description, element.completed, index + 1));
    });
    storeData(reIndexedArray);
    window.location.reload();
  }
}
