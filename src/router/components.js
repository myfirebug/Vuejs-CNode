/*
* @Author: hejianping
* @Date:   2018-05-29 13:51:13
* @Last Modified by:   UEDHE
* @Last Modified time: 2018-07-17 15:02:39
*/
import Home from '../page/home.vue'
import Detail from '../page/detail.vue'
import Login from '../page/login.vue'
import Comments from '../page/comments.vue'

const componentsRoutes = [
  {
    path: '/',
    redirect: '/home',
    meta: {
      title: '首页'
    }
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    meta: {
      title: '首页'
    }
  },
  {
    path: '/detail',
    name: 'detail',
    component: Detail,
    meta: {
      title: '详情页'
    }
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      title: '欢迎来到CNODE社区'
    }
  },
  {
    path: '/comments',
    name: 'comments',
    component: Comments,
    meta: {
      title: '评论'
    }
  }
]

export default componentsRoutes