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
