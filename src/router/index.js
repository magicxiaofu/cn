import Vue from 'vue'
import Router from 'vue-router'
import Axios from 'axios'
import API from '../api/resources'
import Login from '@/components/login/Login'
import Register from '@/components/login/Register'
import Index from '@/components/home/index'
import SharePage from '@/components/page/sharePage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/cn/index',
      // component: require('../components/home/note.vue'),
      name: 'Index',
      component: Index,
      beforeEnter: (to, from, next) => {
        let pattern = /^(\/cn)/g
        let token = sessionStorage.getItem('accessToken')
        if (pattern.test(to.path)) {
          Axios.post(API.isLogin, {access_token: token})
            .then(res => {
              /* 判断字符串'0'，代表通过验证 */
              if (res.data.code === '0') {
                next()
              } else {
                next({name: 'Login'})
              }
            })
            .catch(err => {
              console.log(err)
            })
        }
      }
    },
    {
      path: '/share/:share_id',
      name: 'sharePage',
      component: SharePage
    }
  ]
})
