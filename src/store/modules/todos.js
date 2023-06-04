export default {
  state: {
    todos: [{ id: 1, task: "Почистить картошку", completed: false }],
  },
  getters: {
    getTodos: (state) => state.todos,
  },

  mutations: {
    create_todo(state, newTodo) {
      return state.todos.unshift(newTodo);
    },
    toggle_todo: (state, payload) => {
      const item = state.todos.find((todo) => todo.id === payload);
      item.completed = !item.completed;
    },
    delete_todo: (state, payload) => {
      const index = state.todos.findIndex((todo) => todo.id === payload);
      state.todos.splice(index, 1);
    },
  },

  actions: {
    toggleTodo: (context, payload) => {
      context.commit("toggle_todo", payload);
    },
    deleteTodo: (context, payload) => {
      context.commit("delete_todo", payload);
    },
  },
};
