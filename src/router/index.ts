import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/all-recipes',
    name: 'All Recipes',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "all-recipes" */ '../views/AllRecipes.vue'),
  },
  {
    path: '/random-recipe',
    name: 'Random Recipe',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "random-recipe" */ '../views/RandomRecipe.vue'),
  },
  {
    path: '/new-recipe',
    name: 'New Recipe',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "new-recipe" */ '../views/NewRecipe.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
