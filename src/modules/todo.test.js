/**
 * @jest-environment jsdom
 */

import Todo from './todo.js';
import { appendToDOM } from './handleDOM.js';

jest.mock('./handleData.js');

describe('add todo', () => {
  it('adds a todo to storage', () => {
    const todo = new Todo('Desc', false, 1);
    expect(Todo.addTodo(todo)).toStrictEqual([todo]);
  });
  it('adds a todo to DOM', () => {
    const todoElement = document.createElement('li');
    document.body.innerHTML = '<div><ul id="list"><li></li></ul></div>';
    appendToDOM(todoElement);
    const list = document.querySelectorAll('#list li');
    expect(list).toHaveLength(1);
  });
});

describe('remove todo', () => {
  it('removes a todo', () => {
    const todo = new Todo('Desc', false, 1);
    Todo.addTodo(todo);
    expect(Todo.removeTodo(todo.index)).toStrictEqual([]);
  });
});
