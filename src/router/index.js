import { createRouter, createWebHistory } from 'vue-router'
import HomeComponent from '@/components/Home.vue'
import SignUp from '@/components/SignUp.vue'
import LogIn from '@/components/Login.vue'
import Add from '@/components/Add.vue'
import Update from '@/components/Update.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeComponent
    },
    {
      path: '/sign-up',
      name: 'signUp',
      component: SignUp
    },
    {
      path: '/add',
      name: 'Add',
      component: Add
    },
    {
      path: '/update',
      name: 'Update',
      component: Update
    },
    {
      path: '/LogIn',
      name: 'login',
      component: LogIn
    }
  ]
})

export default router
