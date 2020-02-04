import Vue from 'vue';
import VueRouter from 'vue-router';


Vue.use(VueRouter);

const routes = [
    { 
        path: '/',
        component: () => import('@/views/Home.vue'),
        children: [
          {
            path: '',
            name: 'home',
            component: () => import('@/components/Users.vue'),
          },
          {
            path: 'filho-1',
            name: 'filho-1',
            component: () => import('@/views/user/Filho-1.vue')
          },
          {
            path: 'filho-2',
            name: 'filho-2',
            component: () => import('@/views/user/Filho-2.vue')
          }
        ]
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/About.vue'),
    },
    {
      path: '/produtos',
      name: 'produtos',
      component: () => import('@/views/Products.vue'),
    },
  ];


const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
  });
  
export default router;