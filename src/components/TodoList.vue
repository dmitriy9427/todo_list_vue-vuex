<template>
    <ul class="tasks">
      <li
        v-for="(todo, i) in getTodos"
        :key="todo.id"
        :class="{ completed: todo.completed }"
        class="task"
        @click="toggleTodo(todo.id)"
      >
      <span class="index">{{ i + 1 }}.</span>
        {{ todo.task }}
        <span class="delete" @click="deleteTodo(todo.id)">ⓧ</span>
      </li>
    </ul>
  </template>
  
  <script>
  import { mapActions, mapGetters } from "vuex";
  export default {
    computed: mapGetters(['getTodos']),
    methods: {
        ...mapActions(['toggleTodo']),
        ...mapActions(['deleteTodo'])
    }
  };
  </script>
  
  <style>
  .tasks {
    padding: 0;
    list-style-type: none;
    margin: 30px auto;
    max-width: 600px;
  }
  
  .task {
    padding: 10px;
    margin-bottom: 10px;
    border: 0.5px solid #999;
    border-radius: 5px;
    color: white;;
    font-weight: bold;
    display: flex;
    align-items: center;
    text-align: center;
  }

  .index {
    margin-right: 10px;
  }
  
  .delete {
    display: block;
    color: #d22;
    width: 15px;
    height: 15px;
    margin-left: auto;
    cursor: pointer;
  }
  </style>
  