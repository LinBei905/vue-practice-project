import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Message from '../views/Message.vue'
import News from '../views/News.vue'
import MessageDetail from '../views/MessageDetail.vue'
import NewsDetail from '../views/NewsDetail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    redirect: '/home/msg/detail/01',
    name: 'Home',
    component: Home,
    children: [
      {
        path: 'msg',
        name: 'Message',
        component: Message,
        children: [
          {
            // params形式传参
            path: "detail/:id",
            name: "MsgDeatil",
            component: MessageDetail,
            // 将路由传过来的值作为属性传递给组件
            props: route => ({ id: route.params.id, content: route.query.content })
          },
        ]
      },
      {
        path: 'news',
        name: 'News',
        component: News,
        children: [
          {
            path: "detail/:id",
            name: "NewsDeatil",
            component: NewsDetail,
            props: route => ({ id: route.params.id })
          },
        ]
      },
      {
        path: '',
        redirect: 'msg'
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/',
    redirect: '/home'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
