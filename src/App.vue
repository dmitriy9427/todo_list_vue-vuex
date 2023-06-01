<template>
  <div id="app">
    <h1>Todo List</h1>
    <TodoForm/>
    <TodoList/>
  </div>
</template>

<script>

import TodoList from '@/components/TodoList.vue';
import TodoForm from "@/components/TodoForm.vue";
export default {
  name: 'App',
  components: {
    TodoList,
    TodoForm
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px 0 0;
  padding: 0;
}
body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  background-color: #2c3e50;
}
</style>
