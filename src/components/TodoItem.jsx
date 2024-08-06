import React from 'react';
import useTodoStore from '../store/useTodoStore';

const TodoItem = ({ todo }) => {
  const { deleteTodo, toggleComplete } = useTodoStore();

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <span style={{ textDecoration: todo.complete ? 'line-through' : 'none' }}>
        {todo.text}
      </span>
      <div>
        <button
          className="btn btn-sm btn-success mr-2"
          onClick={() => toggleComplete(todo.id)}
        >
          {todo.complete ? '❌' : '✅'}
        </button>
        <button className="btn btn-sm btn-danger" onClick={() => deleteTodo(todo.id)}>
          🗑️
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
