import Vue from 'vue'

import Home from './views/Home'
import Menu from './views/Menu'
import Admin from './views/Admin'
import About from './views/About'
import Login from './views/Login'
import Register from './views/Register'

// 二级路由
import History from './components/about/History';
import Contact from './components/about/Contact';
import OrderingGuide from './components/about/OrderingGuide';
import Delivery from './components/about/Delivery';

// 三级路由
import Phone from './components/contact/Phone';
import Person from './components/contact/Person';

// Vue.use(Router)

export const routes = [
    {
      path: '/home',
      name: 'homeLink',
      components: {
        default:Home,
        'history':History,
        'orderingGuide':OrderingGuide,
        'delivery':Delivery
      }
    },{
      path: '/menu',
      name: 'menuLink',
      component: Menu
    },{
      path: '/admin',
      name: 'adminLink',
      component: Admin
    },{
      path: '/about',
      name: 'aboutLink',
      redirect:'/history',
      component: About,
      
      children: [
        {path: '/history',name: 'historyLink',component:History},
        {path: '/contact',name: 'contactLink',redirect:'/contact/person',component:Contact,children: [
          {path: '/contact/phone', name: 'phoneLink', component:Phone},
          {path: '/contact/person', name: 'personLink', component:Person}
        ]},
        {path: '/orderingGuide',name: 'orderingguideLink',component:OrderingGuide},
        {path: '/delivery',name: 'deliveryLink',component:Delivery}
      ]
    },{
      path: '/login',
      name: 'loginLink',
      component: Login
    },{
      path: '/register',
      name: 'registerLink',
      component: Register
    },{
      path: '*',
      redirect: '/home'
    }
  ]

//路由守卫
// router.beforeEach((to,from,next) => {
//   // 判断store.gettes.isLogin == false 
//   if(to.path == '/login' || to.path == '/register'){
//     next()
//   }else{
//     alert('还没有登录,请先登录')
//     next('/login')
//   }
// })
