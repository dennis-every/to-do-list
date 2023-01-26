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
    const newArray = retrieveData();
    newArray.push(newTodo);
    return storeData(newArray);
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
    return storeData(newTodoArray);
  }

  static removeTodo = (index) => {
    newTodoArray = retrieveData();
    newTodoArray = newTodoArray.filter((element) => element.index.toString() !== index.toString());
    const reIndexedArray = [];
    newTodoArray.sort((a, b) => a.index - b.index).forEach((element, index) => {
      reIndexedArray.push(new Todo(element.description, element.completed, index + 1));
    });
    return storeData(reIndexedArray);
  }

  static clearAllCompleted = (todosArray) => {
    let todos = todosArray;
    todos.forEach((element) => {
      if (element.completed) {
        todos = todos.filter((todo) => todo.index.toString() !== element.index.toString());
      }
    });
    const reIndexedArray = [];
    todos.sort((a, b) => a.index - b.index).forEach((element, index) => {
      reIndexedArray.push(new Todo(element.description, element.completed, index + 1));
    });
    return storeData(reIndexedArray);
  }
}
