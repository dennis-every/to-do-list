import Todo from './todo.js';

jest.mock('./handleData.js');

it('Test add data', () => {
  const todo = new Todo('Desc', false, 1);
  expect(Todo.addTodo(todo)).toStrictEqual([todo]);
});
