<template>
  <div class="create-todo">
    <h2>Create New ToDo</h2>
    <form @submit.prevent="createTodo">
      <div class="form-group">
        <label for="title">Title:</label>
        <input type="text" id="title" v-model="title" required>
      </div>
      <div class="form-group">
        <label for="description">Description:</label>
        <textarea id="description" v-model="description" rows="4" required></textarea>
      </div>
      <button type="submit" class="btn">Create ToDo</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'CreateToDoComponent',
  data() {
    return {
      title: '',
      description: ''
    };
  },
  methods: {
    createTodo() {
      axios.post('http://3.232.244.22/api/item', {
        title: this.title,
        description: this.description
      })
      .then(() => {
        // Redirect to ToDo list upon successful creation
        this.$router.push('/todo-list');
      })
      .catch(error => console.error('Error creating ToDo:', error));
    }
  }
};
</script>

<style scoped>
.create-todo {
  max-width: 600px;
  margin: auto;
}

h2 {
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input,
textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
