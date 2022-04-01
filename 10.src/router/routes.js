/* 
所有路由配置的数组
*/

/* 
component: () => import('@/pages/Search')
1. import(modulePath): 动态import引入模块, 被引入的模块会被单独打包
2. 组件配置的是一个函数, 函数中通过import动态加载模块并返回, 
    初始时函数不会执行, 第一次访问对应的路由才会执行, 也就是说只有一次请求对应的路由路径才会请求加载单独打包的js
作用: 用于提高首屏的加载速度
*/

export default [
  {
    path: '/event',
    component: () => import('@/pages/EventTest/EventTest'),
    meta: {
      isHideFooter: true
    },
  },
  {
    path: '/model',
    component: () => import('@/pages/ModelTest/ModelTest'),
    meta: {
      isHideFooter: true
    },
  },
  {
    path: '/sync',
    component: () => import('@/pages/SyncTest/SyncTest'),
    meta: {
      isHideFooter: true
    },
  },
  {
    path: '/attrs-listeners',
    component: () => import('@/pages/AttrsListenersTest/AttrsListenersTest'),
    meta: {
      isHideFooter: true
    },
  },
  {
    path: '/children-parent',
    component: () => import('@/pages/ChildrenParentTest/ChildrenParentTest'),
    meta: {
      isHideFooter: true
    },
  },
  {
    path: '/scope-slot',
    component: () => import('@/pages/ScopeSlotTest/ScopeSlotTest'),
    meta: {
      isHideFooter: true
    },
  }
]