import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../pages/LandingPage.vue'
import PortfolioDetails from '../pages/PortfolioDetails.vue'
import ArticlesPage from '../pages/ArticlesPage.vue'

const routes = [
  { path: '/', component: LandingPage },
  { path: '/portfolio/:id', component: PortfolioDetails },
  { path: '/articles', component: ArticlesPage },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
