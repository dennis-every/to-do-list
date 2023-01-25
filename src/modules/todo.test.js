import Todo from './todo.js';

jest.mock('./handleData.js');

it('adds a todo', () => {
  const todo = new Todo('Desc', false, 1);
  expect(Todo.addTodo(todo)).toStrictEqual([todo]);
});

it('removes a todo', () => {
  const todo = new Todo('Desc', false, 1);
  Todo.addTodo(todo);
  expect(Todo.removeTodo(todo.index)).toStrictEqual([]);
});
