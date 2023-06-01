export const state = {
  todos: [],
};

export const getters = {
  getTodos: (state) => state.todos,
};

export const mutations = {
  add_todo: (state, payload) => {
    const newTask = {
      id: payload.newId,
      task: payload.task,
      completed: false,
    };
    state.todos.push(newTask);
  },
  toggle_todo: (state, payload) => {
    const item = state.todos.find((todo) => todo.id === payload);
    item.completed = !item.completed;
  },
  delete_todo: (state, payload) => {
    const index = state.todos.findIndex((todo) => todo.id === payload);
    state.todos.splice(index, 1);
  },
};

export const actions = {
  addTodo: (context, payload) => {
    context.commit("add_todo", payload);
  },
  toggleTodo: (context, payload) => {
    context.commit("toggle_todo", payload);
  },
  deleteTodo: (context, payload) => {
    context.commit("delete_todo", payload);
  },
};
