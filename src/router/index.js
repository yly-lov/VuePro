import Vue from 'vue'
import Router from 'vue-router'
import Home from '../../src/components/home'
import Film from '../../src/components/film'
import Cinema from '../../src/components/cinema'
import Tuan from '../../src/components/tuan'
import Mine from '../../src/components/mine'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component:Home
    },
    {
	   path:'/home',
	   component:Home
    },
    {
      path: '/film',
      component:Film
    },
    {
      path: '/cinema',
      component:Cinema
    },
    {
      path: '/tuan',
      component:Tuan
    },
    {
      path: '/mine',
      component:Mine
    },
    {
      path: '/mine',
      component:Mine
    },
    {
      path: '*',
      redirect:"/home"
    },
  ]
})
