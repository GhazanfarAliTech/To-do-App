<template>
  <div class="todo-list">
    <h2>My To-Do List</h2>
    <!-- Search bar -->
    <input type="text" v-model="searchQuery" placeholder="Search by title" @input="searchTodo">
    <!-- List of ToDo items -->
    <div v-for="todo in filteredTodos" :key="todo.id" class="todo-item">
      <router-link :to="'/view-update-todo/' + todo.id">{{ todo.title }}</router-link>
      <button @click="deleteTodo(todo.id)" class="delete-btn">Delete</button>
    </div>
    <!-- Navigation buttons -->
    <router-link to="/create-todo" class="btn">Create New ToDo</router-link>
    <button @click="logout" class="btn">Logout</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'ToDoListComponent',
  data() {
    return {
      todos: [],
      filteredTodos: [],
      searchQuery: ''
    };
  },
  methods: {
    fetchTodos() {
      // Fetch todos from the server
      axios.get('http://3.232.244.22/api/todos')
        .then(response => {
          this.todos = response.data;
          this.filteredTodos = this.todos;
        })
        .catch(error => console.error('Error fetching todos:', error));
    },
    deleteTodo(todoId) {
      // Delete a todo item
      axios.delete(`http://3.232.244.22/api/todo/${todoId}`)
        .then(() => {
          this.todos = this.todos.filter(todo => todo.id !== todoId);
          this.filteredTodos = this.todos;
        })
        .catch(error => console.error('Error deleting todo:', error));
    },
    searchTodo() {
      // Filter todos by search query
      this.filteredTodos = this.todos.filter(todo =>
        todo.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
    logout() {
      // Perform logout action
      axios.get('http://3.232.244.22/api/logout')
        .then(() => {
          // Clear session data or token (if stored in Vuex/store)
          // Redirect to welcome page
          this.$router.push('/');
        })
        .catch(error => console.error('Logout failed:', error));
    }
  },
  mounted() {
    // Fetch todos when component is mounted
    this.fetchTodos();
  }
};
</script>

<style scoped>
.todo-list {
  max-width: 600px;
  margin: auto;
}

h2 {
  margin-bottom: 20px;
}

input {
  width: 100%;
  margin-bottom: 10px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.todo-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #ccc;
}

.delete-btn {
  padding: 5px 10px;
  background-color: #dc3545;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.delete-btn:hover {
  background-color: #c82333;
}

.btn {
  display: block;
  width: 100%;
  padding: 10px;
  margin-top: 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
}

.btn:hover {
  background-color: #0056b3;
}
</style>
