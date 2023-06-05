export default {
  state: {
    todos: [],
  },
  getters: {
    validTodos(state) {
      return state.todos.filter((i) => {
        return i.task;
      });
    },
  },

  mutations: {
    create_todo(state, newTodo) {
      return state.todos.unshift(newTodo);
    },
    toggle_todo(state, id) {
      let item = state.todos.find((todo) => todo.id === id);
      item.completed = !item.completed;
    },
    delete_todo(state, id) {
      let index = state.todos.findIndex((todo) => todo.id === id);
      state.todos.splice(index, 1);
    },
    update_todo(state, todo) {
      let index = state.todos.findIndex((t) => t.id == todo.id);
      if (index !== -1) {
        state.todos[index] = todo;
      }
    },
  },

  actions: {
    toggleTodo(context, payload) {
      context.commit("toggle_todo", payload);
    },
    deleteTodo(context, payload) {
      context.commit("delete_todo", payload);
    },
    updateTodo(context, payload) {
      context.commit("update_todo", payload);
    },
  },
};