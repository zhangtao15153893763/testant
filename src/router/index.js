import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from "../components/Login";
import Index from "../components/Index";
import Tongxunlu from "../components/Tongxunlu";
import Find from "../components/Find";
import My from '../components/My'
import Details from "../components/Details";

/**
 * 重写路由的push方法
 */
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path:'/',
      name:'Login',
      component:Login
    },
    {
      path:'/index',
      name:'Index',
      component: Index
    },
    {
      path:'/tongxunlu',
      name:'Tongxunlu',
      component:Tongxunlu
    },
    {
      path:'/find',
      name:'Find',
      component:Find
    },
    {
      path:'/my',
      name:'My',
      component:My
    },
    {
      path:'/details',
      name:'Details',
      component:Details
    }
  ]
})
