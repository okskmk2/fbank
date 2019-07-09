import Vue from 'vue'
import Router from 'vue-router'
import Inquire from './views/Inquire.vue'
import Transfer from './views/Transfer.vue'
import Loan from './views/Loan.vue'
import Insurance from './views/Insurance.vue'
import Fund from './views/Fund.vue'
import Login from './views/Login.vue'
import Join from './views/Join.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/Inquire'
    },
    {
      path: '/Inquire',
      name: 'Inquire',
      component: Inquire
    },
    {
      path: '/Transfer',
      name: 'Transfer',
      component: Transfer
    },
    {
      path: '/Loan',
      name: 'Loan',
      component: Loan
    },
    {
      path: '/Insurance',
      name: 'Insurance',
      component: Insurance
    },
    {
      path: '/Fund',
      name: 'Fund',
      component: Fund
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Join',
      name: 'Join',
      component: Join
    }
  ]
})
