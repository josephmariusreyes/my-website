import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../pages/LandingPage.vue'
import PortfolioDetails from '../pages/PortfolioDetails.vue'

const routes = [
  { path: '/', component: LandingPage },
  { path: '/portfolio/:id', component: PortfolioDetails },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
