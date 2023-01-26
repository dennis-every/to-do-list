/**
 * @jest-environment jsdom
 */

import Todo from './todo.js';
import { appendToDOM, removeFromDOM } from './handleDOM.js';

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

describe('Update todo', () => {
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
    const todoArr = [{ description: 'Description', completed: false, index: 1 }];
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
