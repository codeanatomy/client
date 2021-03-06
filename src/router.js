import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/course',
      name: 'course',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path: '/event',
      name: 'event',
      component: () => import('./views/Event.vue'),
    },
    {
      path: '/webdev',
      name: 'webdev',
      component: () => import('./views/WebDev.vue'),
    }
  ],
  scrollBehavior() {
    return {x: 0, y: 0}
  }
});
