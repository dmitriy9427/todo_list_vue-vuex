<template>
  <div>
    <ul class="tasks" v-for="(todo, index) of validTodos"
        :key="todo.id">
      <li class="task">
      <input 
      @click="toggleTodo(todo.id)"
      @change="todo.completed !== todo.completed"
       type="checkbox">
      <span class="index">{{ index + 1 }}.</span>
      
        <p v-if="!editing" :class="{completed: todo.completed}">{{ todo.task }}</p>
        <input 
        v-else
        @change="todoTextChange"
        v-model="todo.task"
        type="text">
        <div class="todo__btns">
        <button @click="updateTodoT" class="todo__edit">{{editing ? 'Сохранить' : "Редактировать"}}</button>
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
        editing: false
      }
    },
      computed: mapGetters(['validTodos']),
      methods: {
        ...mapActions(['toggleTodo', 'deleteTodo', 'updateTodo']),
          todoTextChange(e) {
            this.todo = e.target.value;
    },
    updateTodoT(todo) {
      this.editing = this.editing === true ? false : true;
      if (this.editing) {
        todo.task = this.todo;
        this.updateTodo(todo)
        } else {
          this.todo = todo.task
          
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
  