import React, { useState } from 'react';
import useTodoStore from '../store/useTodoStore';
import { toast } from 'react-toastify';

const TodoForm = () => {
  const [text, setText] = useState('');
  const addTodo = useTodoStore((state) => state.addTodo);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text);
      setText('');
      toast.success('Todo added successfully!');
    } else {
      toast.error('Please enter a todo!');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-inline mt-3">
      <input
        type="text"
        className="form-control mr-2"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter todo"
      />
      <button type="submit" className="btn btn-primary">Add</button>
    </form>
  );
};

export default TodoForm;
