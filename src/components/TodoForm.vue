<template>
    <form class="todo__form" @submit.prevent="submit">
      <input
        class="todo-input"
        type="text"
        placeholder="Что нужно сделать"
        v-model="task"
      />
      <button class="form__btn">Добавить</button>
    </form>
  </template>
  
  <script>
  import { mapMutations } from 'vuex';
  export default {
    data() {
      return {
        task: "",
      };
    },
    methods: {
        ...mapMutations(['create_todo']),
        submit() {
            this.create_todo({
              id: Date.now(),
              task: this.task, 
              completed: false,
              editing: false
            })
            this.task = ''
      }
    }
  };
  </script>
  
  <style scope>
.todo__form {
    display: flex;
    flex-direction: row;
    max-width: 600px;
    margin: 0 auto;
}

  .todo-input {
    font-family: "Open Sans", sans-serif;
    width: 100%;
    padding: 5px;
    font-size: 17px;
    outline: none;
    border-radius: 7px;
    border-style: none;
    border: solid 1px lightgray;
    box-sizing: border-box;
  }

  .form__btn {
    background-color: blue;
    border: none;
    outline: none;
    border-radius: 7px;
    padding: 5px;
    color: aliceblue;
    font-size: 17px;
  }
  </style>
  