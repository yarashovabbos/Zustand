import create from 'zustand';
import api from '../api';

const useTodoStore = create((set) => ({
  todos: [],
  fetchTodos: async () => {
    const response = await api.get('/todos');
    set({ todos: response.data });
  },
  addTodo: async (text) => {
    const response = await api.post('/todos', { text, complete: false });
    set((state) => ({ todos: [...state.todos, response.data] }));
  },
  deleteTodo: async (id) => {
    await api.delete(`/todos/${id}`);
    set((state) => ({ todos: state.todos.filter((todo) => todo.id !== id) }));
  },
  toggleComplete: async (id) => {
    const todo = await api.get(`/todos/${id}`);
    const updatedTodo = { ...todo.data, complete: !todo.data.complete };
    await api.put(`/todos/${id}`, updatedTodo);
    set((state) => ({
      todos: state.todos.map((t) =>
        t.id === id ? updatedTodo : t
      ),
    }));
  },
}));

export default useTodoStore;
