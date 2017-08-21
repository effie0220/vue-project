import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Foo from '../views/Foo'
import Baipi from '../views/Baipi'
Vue.use(Router)
export default new Router({
  routes: [
    { path: '/',component: Hello },
    { path: '/foo',component: Foo },
    { path: '/baipi',component: Baipi }
  ]
})
