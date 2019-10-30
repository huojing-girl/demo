import Vue from 'vue'
import Router from 'vue-router'
import Shop from '@/components/shop'


import BarginChild from '@/pages/shop/barginChild'
import BarginChild2 from '@/pages/shop/barginChild2'
import ChosenChild from '@/pages/shop/chosenChild'
import ChosenChild2 from '@/pages/shop/chosenChild2'

import SortChild from '@/pages/shop/sortChild'
import Orders from '@/pages/shop/orders'
import Sigin from '@/pages/shop/sigin'
import Gift from '@/pages/shop/gift'
import Detail from '@/pages/shop/detail'





import Both from '@/pages/jump/both'
import Sort from '@/pages/jump/sort'
import Car from '@/pages/jump/car'
import My from '@/pages/jump/my'
import Address from '@/pages/jump/address'
import Login from '@/pages/jump/login'
import Register from '@/pages/jump/register'



Vue.use(Router)
console.log('%cYou can tell a lot about somebody, looking him in the eye', 'color:white;font-size:14px;text-shadow: 0px 0px 5px red;');
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Both',
      component: Both,
      children: [
        {
          path: '',
          name: 'Shop',
          component: Shop
        },
        {
          path: '/sort',
          name: 'Sort',
          component: Sort,
          children: [
            {
              path: '/',
              redirect: '/sortChild'
            },
            {
              path: '/sortChild',
              name: 'SortChild',
              component: SortChild
            },
          ]
        },
        {
          path: '/car',
          name: 'Car',
          component: Car
        },
        {
          path: '/my',
          name: 'My',
          component: My
        }
      ]
    },
    {
      path: '/barginChild',
      name: 'BarginChild',
      component: BarginChild
    },
    {
      path: '/barginChild2',
      name: 'BarginChild2/:id?',
      component: BarginChild2
    },
    {
      path: '/chosenChild',
      name: 'ChosenChild',
      component: ChosenChild
    },
    {
      path: '/chosenChild2/:id?',
      name: 'ChosenChild2',
      component: ChosenChild2
    },
    {
      path: '/orders',
      name: 'Orders',
      component: Orders
    },
    {
      path: '/address',
      name: 'Address',
      component: Address
    },
    {
      path: '/sigin',
      name: 'Sigin',
      component: Sigin
    },
    {
      path: '/gift',
      name: 'Gift',
      component: Gift
    },
    {
      path: '/detail/:id?',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
  ]
})
