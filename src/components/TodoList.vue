<template>
  <div>
    <ul class="tasks" v-for="(todo, index) in getTodos"
        :key="todo.id">
      <li class="task" >
      <input @click="toggleTodo(todo.id)"
      @change="todo.completed != todo.completed"
       type="checkbox">
      <span class="index">{{ index + 1 }}.</span>
        <span v-bind:class="{completed: todo.completed}">{{ todo.task }}</span>
        <span class="delete" @click="deleteTodo(todo.id)">ⓧ</span>
      </li>
    </ul>
  </div>
  </template>
  
  <script>
  import { mapActions, mapGetters } from "vuex";
  export default {
    computed: mapGetters(['getTodos']),
    methods: {
      ...mapActions(['toggleTodo', 'deleteTodo'])
  },
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

  .completed {
    text-decoration: line-through;
  }
  </style>
  