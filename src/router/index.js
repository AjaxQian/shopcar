import Vue from 'vue'
import Router from 'vue-router'
import Homecom from "@/pages/home"
import Member from "@/pages/member"
import Shopcar from "@/pages/shopcar"
import Search from "@/pages/search"


Vue.use(Router)

export default new Router({
  routes: [{
    path: "/",
    redirect:"/home"
  },{
      path: "/home",
      component: Homecom
    },
    {
      path: "/member",
      component: Member
    },
    {
      path: "/shopcar",
      component: Shopcar
    },
    {
      path: "/search",
      component: Search
    },
  ],
  linkActiveClass: 'mui-active' //覆盖默认的路由高亮的类 ,默认的类叫做router-link-active


})
