import App from '@/App.vue'
import { createMemoryHistory, createRouter } from 'vue-router'

const routes = [
  { path: '/', component: App }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router