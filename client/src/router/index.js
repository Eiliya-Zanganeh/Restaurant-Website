import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MenuView from '../views/MenuView.vue'
import AboutView from "../views/AboutView.vue";
import BooktableView from "../views/BooktableView.vue";




const routes = [
  {
    path: '',
    name: 'home',
    component: HomeView
  },
  {
    path: '/menu',
    name: 'menu',
    component: MenuView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/booktable',
    name: 'booktable',
    component: BooktableView
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
