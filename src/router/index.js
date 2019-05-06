import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/helloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/a',
      name: 'A',
      component: ()=>import('@/components/A.vue'),
    },
    {
      path: '/a1',
      name: 'A1',
      component: ()=>import('@/components/A1.vue')
    },
    {
      path: '/a2',
      name: 'A2',
      component: ()=>import('@/components/A2.vue')
    },
    {
      path: '/a3',
      name: 'A3',
      component: ()=>import('@/components/A3.vue')
    }
  ]
})
