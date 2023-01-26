/**
 * @jest-environment jsdom
 */

import Todo from './todo.js';
import { appendToDOM, removeFromDOM, removeAllCompletedFromDOM } from './handleDOM.js';

// Arrange
jest.mock('./handleData.js');
const todo = new Todo('Desc', false, 1);
const todoElement = document.createElement('li');
document.body.innerHTML = '<div><ul id="list"></ul></div>';

describe('add todo', () => {
  it('adds a todo to storage', () => {
    expect(Todo.addTodo(todo)).toStrictEqual([todo]);
  });
  it('adds a todo to DOM', () => {
    // Act
    appendToDOM(todoElement);
    // Assert
    const list = document.querySelectorAll('#list li');
    expect(list).toHaveLength(1);
  });
});

describe('remove todo', () => {
  it('removes a todo', () => {
    expect(Todo.removeTodo(todo.index)).toStrictEqual([]);
  });
  it('removes a todo from DOM', () => {
    // Act
    removeFromDOM(todoElement);
    // Assert
    const list = document.querySelectorAll('#list li');
    expect(list).toHaveLength(0);
  });
});

describe('edit todo description', () => {
  it('Update todo element being sent', () => {
    const todoArr = [{ description: 'Desc', completed: false, index: 1 }];
    //  Act
    const arr = Todo.updateTodo(todo);
    //  Assert
    const { description } = arr[0];
    expect(description).toEqual(todoArr[0].description);
  });
  it('Update todo different description', () => {
    //  Arrange
    const todoArr = [
      { description: 'Description', completed: false, index: 1 },
    ];
    // Act
    const arr = Todo.updateTodo(todo);
    // Assert
    const { description } = arr[0];
    expect(description).not.toBe(todoArr[0].description);
  });
  it('Update todo description is modified', () => {
    //  Arrange
    const todo = new Todo('Descr', false, 1);
    // Act
    const arr = Todo.updateTodo(todo);
    // Assert
    const { description } = arr[0];
    expect(description).toBe('Descr');
  });
});

describe('edit todo checkbox', () => {
  it('edits a todo checkbox in local storage', () => {
    // Arrange
    const completedTodo = { ...todo };
    completedTodo.completed = true;

    // Act
    const updatedArr = Todo.updateTodo(completedTodo);
    const completedArrElem = updatedArr.filter(
      (e) => e.index === completedTodo.index,
    );
    const { completed } = completedArrElem[0];

    // Assert
    expect(completed).not.toBeFalsy();
    expect(completed).toBeTruthy();
  });
});

describe('clear all completed', () => {
  // Arrange
  const todo1 = new Todo('test1', true, 1);
  const todo2 = new Todo('test2', true, 2);
  const todo3 = new Todo('test3', true, 3);
  const updatedArr = [todo1, todo2, todo3];
  it('clear 3 completed todos in local storage', () => {
    // Act
    const newUpdatedArr = Todo.clearAllCompleted(updatedArr);
    // Assert
    expect(newUpdatedArr).toHaveLength(0);
  });
  it('clear 2 completed todos in local storage', () => {
    // Arrange
    todo3.completed = false;
    const updatedArr = [todo1, todo2, todo3];
    // Act
    const newUpdatedArr = Todo.clearAllCompleted(updatedArr);
    // Assert
    expect(newUpdatedArr).toHaveLength(1);
  });
  it('clear all completed todos in DOM', () => {
    // Arrange
    document.body.innerHTML = `
    <div>
      <ul id="list">
      <li id="1" class='completed'></li>
      <li id="2" class='completed'></li>
      <li id="3"></li>
    </div>
    `;
    // Act
    const list0 = document.querySelectorAll('#list li');
    removeAllCompletedFromDOM(list0);
    // Assert
    const list = document.querySelectorAll('#list li');
    expect(list).toHaveLength(1);
  });
});
