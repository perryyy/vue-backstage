import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
// 解决路徑重複
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err)
}


const routes = [
  
  {
  path:'/',
  name:'Home',
  redirect:'/Chart',
  component:()=>import('../views/Home.vue'),
  children: [
    {
      path: '/',
      name: 'Chart',
      component: () => import('../views/Chart.vue'),
      meta:{title:'Chart'}
    },
    {
      path: '/draggable',
      name: 'Draggable',
      component: () => import('../views/Draggable.vue'),
      meta:{title:'Draggable'}
    },
    {
      path: '/excel',
      name: 'importExcel',
      component: () => import('../views/ImportExcel.vue'),
      meta:{title:'Excel /  importExcel'}
    },
    {
      path: '/exportexcel',
      name: 'exportExcel',
      component: () => import('../views/ExportExcel.vue'),
      meta:{title:'Excel /  exportExcel'}
    },
    {
      path: '/aOS',
      name: 'AOS',
      component: () => import('../views/AOS.vue'),
      meta:{title:'AOS'}
    },
    {
      path: '/lazyloading',
      name: 'lazyloading',
      component: () => import('../views/Lazyloading.vue'),
      meta:{title:'lazyloading'}
    },
    {
      path: '/member',
      name: 'memberdata',
      component: () => import('../views/MemberData.vue'),
      meta:{title:'個人信息'}
    },
  ]
  },
  {
    path: '/Login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/*',
    name: 'Error',
    component: () => import(/* webpackChunkName: "about" */ '../views/Error.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
