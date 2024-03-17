<template>
  <div class="welcome-container">
    <h1>Welcome to the To-Do List App</h1>
    <p v-if="!isLoggedIn">Please log in or register to get started.</p>
    <div v-if="!isLoggedIn" class="button-container">
      <router-link to="/login" class="btn">Login</router-link>
      <router-link to="/register" class="btn">Register</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WelcomeComponent',
  data() {
    return {
      isLoggedIn: false
    };
  }
};
</script>

<style scoped>
.welcome-container {
  margin: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh; /* Full viewport height */
  background-color: #f0f0f0; /* Light gray background */
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #333;
}

p {
  font-size: 1.2rem;
  margin-bottom: 30px;
  color: #666;
}

.button-container {
  display: flex;
}

.btn {
  padding: 10px 20px;
  margin: 0 10px;
  background-color: #007bff;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: #0056b3;
}
</style>
