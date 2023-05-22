import Vue from 'vue'
import VueRouter from 'vue-router'
// import FormLogin from '../components/FormLogin.vue'
import FormRegist from '../components/FormRegist.vue'
// import FormForgotPass from '../components/FormForgotPass.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: () => import('../pages/Dashboard.vue')
  },
  {
    path: '/forgot',
    name: 'forgot',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/FormForgotPass.vue')
    // component: FormForgotPass
  },
  {
    path: '/regist',
    name: 'regist',
    component: FormRegist
  },
  {
    path: '/jobover',
    name: 'jobover',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../viewmaiden/JobOver.vue')
    // component: FormForgotPass
  },
  {
    path: '/authform',
    name: 'authform',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../viewmaiden/AuthorizationForm.vue')
    // component: FormForgotPass
  },
  {
    path: '/safetyagreefil',
    name: 'safetyagreefil',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../viewmaiden/SafetyAgreementFilipino.vue')
    // component: FormForgotPass
  },
  {
    path: '/safetyagreein',
    name: 'safetyagreein',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../viewmaiden/SafetyAgreementIndo.vue')
    // component: FormForgotPass
  },
  {
    path: '/serviceagreement',
    name: 'serviceagreement',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../viewmaiden/ServiceAgreement.vue')
    // component: FormForgotPass
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
