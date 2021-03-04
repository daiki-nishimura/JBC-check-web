import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/resident-list',
    alias: '/',
    name: 'ResidentList',
    component: () => import('@/views/ResidentList.vue'),
  },
  {
    path: '/resident-register',
    name: 'ResidentRegister',
    component: () => import('@/views/ResidentRegister.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
