import { createRouter, createWebHistory } from 'vue-router'
import PersonalInfo from '../views/PersonalInfo.vue'
import SelectPlan from '../views/SelectPlan.vue'
import Addons from '../views/Addons.vue'
import Summary from '../views/Summary.vue'
import ThankYou from '../views/ThankYou.vue'

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
  },
  {
    path: '/Addons',
    name: 'Addons',
    component: Addons
  },
  {
    path: '/Summary',
    name: 'Summary',
    component: Summary
  },
  {
    path: '/ThankYou',
    name: 'ThankYou',
    component: ThankYou
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
