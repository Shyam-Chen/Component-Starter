import { createWebHistory, createRouter } from 'vue-router';

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/text-field',
      component: () => import('~/modules/text-field/TextField.vue'),
    },
  ],
});
