<template>
  <div class="register-container">
    <h2>Register</h2>
    <form @submit.prevent="register">
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required>
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required>
      </div>
      <div class="form-group">
        <label for="confirm-password">Confirm Password:</label>
        <input type="password" id="confirm-password" v-model="confirmPassword" required>
      </div>
      <div class="button-group">
        <button type="submit" class="btn">Register</button>
        <router-link to="/" class="btn">Back</router-link>
        <router-link to="/login" class="btn">Login</router-link>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'RegisterComponent',
  data() {
    return {
      email: '',
      password: '',
      confirmPassword: ''
    };
  },
  methods: {
  register() {
    if (this.password !== this.confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    axios.post('http://3.232.244.22/api/register', {
      email: this.email,
      password: this.password
    })
    .then(() => {
      alert('Registration successful. Please check your email inbox.');
      this.$router.push('/login');
    })
    .catch(error => {
      console.error('Registration failed:', error);
      alert('Registration failed. Please try again.');
    });
  }
}


};
</script>

<style scoped>
.register-container {
  max-width: 400px;
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

input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.button-group {
  display: flex;
  justify-content: space-between;
}

.btn {
  width: 31%;
  padding: 10px;
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
