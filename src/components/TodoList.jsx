import React, { useEffect } from 'react';
import useTodoStore from '../store/useTodoStore';
import TodoItem from './TodoItem';

const TodoList = () => {
  const { todos, fetchTodos } = useTodoStore();

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  return (
    <ul className="list-group mt-3">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
