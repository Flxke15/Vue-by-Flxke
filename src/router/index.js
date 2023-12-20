// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/views/Main.vue'),
    children: [
      {
        path: '/pratice',
        name: 'Pratice',
        component: () => import('@/views/Pratice.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router