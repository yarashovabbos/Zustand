import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

const App = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center">Todo App</h1>
      <TodoForm />
      <TodoList />
      <ToastContainer />
    </div>
  );
};

export default App;
