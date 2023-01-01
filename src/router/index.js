import { createRouter, createWebHistory } from 'vue-router'
import PersonalInfo from '../views/PersonalInfo.vue'
import SelectPlan from '../views/SelectPlan.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: PersonalInfo
  },
  {
    path: '/SelectPlan',
    name: 'SelectPlan',
    component: SelectPlan
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
