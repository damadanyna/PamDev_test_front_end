import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/all_pages/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/:pathMatch(.*)*',
    component: HomeView
  }, 
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/all_pages/AboutView.vue')
  },
  {
    path: '/blogOneColumn',
    name: 'blogOneColumn',
    component: () => import(/* webpackChunkName: "about" */ '../views/all_pages/BlogOneColumn.vue')
  },
  {
    path: '/blogTwoColumn',
    name: 'blogTwoColumn',
    component: () => import(/* webpackChunkName: "BlogTwoColumn" */ '../views/all_pages/BlogTwoColumnView.vue')
  },
  {
    path: '/commingSoon',
    name: 'commingSoon',
    component: () => import(/* webpackChunkName: "CommingSoon" */ '../views/all_pages/CommingSoonView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import(/* webpackChunkName: "ContactView" */ '../views/all_pages/ContactView.vue')
  },
  {
    path: '/menu',
    name: 'menu',
    component: () => import(/* webpackChunkName: "MenuView" */ '../views/all_pages/MenuView.vue')
  },
  {
    path: '/portfolioGrid',
    name: 'portfolioGrid',
    component: () => import(/* webpackChunkName: "PortfolioGridView" */ '../views/all_pages/PortfolioGridView.vue')
  },
  {
    path: '/portfolioNoSideBar',
    name: 'portfolioNoSideBar',
    component: () => import(/* webpackChunkName: "PortfolioNoSideBarView" */ '../views/all_pages/PortfolioNoSideBarView.vue')
  },
  {
    path: '/process',
    name: 'process',
    component: () => import(/* webpackChunkName: "Process" */ '../views/all_pages/ProcessView.vue')
  },
  {
    path: '/singlePostWithSide',
    name: 'singlePostWithSide',
    component: () => import(/* webpackChunkName: "SinglePostWithSide" */ '../views/all_pages/SinglePostWithSideView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
