<template>
  <div>
    <ul class="tasks" v-for="(todo, index) of validTodos"
        :key="todo.id">
      <li class="task">
      <input 
      @click="toggleTodo(todo.id)"
      @change="todo.completed != todo.completed"
       type="checkbox">
      <span class="index">{{ index + 1 }}.</span>
      
        <h3 v-if="!editing" v-bind:class="{completed: todo.completed}">{{ todo.task }}</h3>
        <input 
        v-bind:value="todoText" 
        @change="todoTextChange"
        v-else 
        type="text">
        <div class="todo__btns">
        <button @click="updateTodoI(todo)" class="todo__edit">{{editing ? 'Сохранить' : "Редактировать"}}</button>
          <span class="delete" @click="deleteTodo(todo.id)">ⓧ</span>
        </div>
      </li>
    </ul>
  </div>
  </template>
  
  <script>
  import { mapActions, mapGetters } from "vuex";
  export default {
    data() {
      return {
        todoText: "",
        editing: false
      }
    },
      computed: mapGetters(['validTodos']),
      methods: {
        ...mapActions(['toggleTodo', 'deleteTodo', 'updateTodo']),
    todoTextChange(e) {
      this.todoText = e.target.value;
    },
    updateTodoI(todo) {
      this.editing = this.editing === true ? false : true;
      if (this.editing) {
        this.todoText = todo.task;
      } else {
        todo.task = this.todoText;
      }
  },
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

 .todo__btns {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: auto;
  
   }

   .todo__edit {
    margin-right: 7px;
  background-color: blue;
  color: white;
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
  