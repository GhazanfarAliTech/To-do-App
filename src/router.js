import { createRouter, createWebHistory } from 'vue-router'
import Welcome from './components/Welcome.vue'
import Login from './components/Login.vue'
import Register from './components/Register.vue'
import ToDoList from './components/ToDoList.vue'
import CreateToDo from './components/CreateToDo.vue'
import ViewUpdateToDo from './components/ViewUpdateToDo.vue'

const routes = [
  { path: '/', component: Welcome },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/todo-list', component: ToDoList },
  { path: '/create-todo', component: CreateToDo },
  { path: '/view-update-todo/:id', component: ViewUpdateToDo }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
