import Vue from 'vue'
import Router from 'vue-router'

import home from "@/components/exam/home.vue"
import index from "@/components/exam/index.vue"
Vue.use(Router)

export default new Router({
  routes: [
    {path:'/index',name:index,component:index},
    {path:'/home',name:home,component:home}
    
  ]
})
