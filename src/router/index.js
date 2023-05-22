import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('../pages/FrontPage.vue'),
    children:[
      {
        path: '',
        name: 'login.login',
        component: () => import('../components/FormLogin.vue')
      },
      {
        path: 'register',
        name: 'login.register',
        component: () => import('../components/FormRegist.vue')
      },
      {
        path: 'forgotpass',
        name: 'login.forgotpass',
        component: () => import('../components/FormForgotPass.vue')
      }
    ]
  },
  {
    path: '/dashboard',
    // name: 'dashboard',
    component: () => import('../pages/Dashboard.vue'),
    children:[
      {
        path: '',
        name: 'dashboard.dashboard',
        component: () => import('../components/ContentDashboard.vue')
      },
      {
        path: '/report',
        name: 'dashboard.report',
        component: () => import('../components/ContentReport.vue')
      },
      {
        path: '/performance',
        name: 'dashboard.performance',
        component: () => import('../components/ContentPerformance.vue')
      },
      {
        path: '/payroll',
        name: 'dashboard.payroll',
        component: () => import('../components/ContentPayroll.vue')
      }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
