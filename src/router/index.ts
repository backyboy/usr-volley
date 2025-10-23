import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: { breadcrumb: 'Accueil' },
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/actualites',
      name: 'news',
      meta: { breadcrumb: 'Actualités' },
      component: () => import('../views/NewsView.vue'),
    },
    {
      path: '/actualites/:id',
      name: 'news-article',
      meta: { breadcrumb: 'Article' },
      component: () => import('../views/NewsArticleView.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      meta: { breadcrumb: 'Contact' },
      component: () => import('../views/ContactView.vue'),
    },
  ],
})

export default router
