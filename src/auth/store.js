import create from 'zustand';
import axios from 'axios';
import { toast } from 'react-toastify';

const useStore = create(set => ({
  todos: [],
  filter: '',
  fetchTodos: async () => {
    try {
      const response = await axios.get('http://localhost:5000/todos');
      set({ todos: response.data });
    } catch (error) {
      toast.error('Error fetching todos');
    }
  },
  addTodo: async (text) => {
    try {
      const response = await axios.post('http://localhost:5000/todos', { text, complete: false });
      set(state => ({ todos: [...state.todos, response.data] }));
      toast.success('Todo added');
    } catch (error) {
      toast.error('Error adding todo');
    }
  },
  deleteTodo: async (id) => {
    try {
      await axios.delete(`http://localhost:5000/todos/${id}`);
      set(state => ({ todos: state.todos.filter(todo => todo.id !== id) }));
      toast.success('Todo deleted');
    } catch (error) {
      toast.error('Error deleting todo');
    }
  },
  toggleTodo: async (id) => {
    try {
      const todo = get().todos.find(todo => todo.id === id);
      const updatedTodo = { ...todo, complete: !todo.complete };
      await axios.put(`http://localhost:5000/todos/${id}`, updatedTodo);
      set(state => ({
        todos: state.todos.map(todo => todo.id === id ? updatedTodo : todo)
      }));
      toast.success('Todo updated');
    } catch (error) {
      toast.error('Error updating todo');
    }
  },
  setFilter: (filter) => set({ filter }),
}));
