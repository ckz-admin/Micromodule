import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Micrommodule from "@/components/MicromoduleDemo/Micromodule.vue"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/Micrommodule"      
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: "/Micrommodule",
      name: "Micrommodule",
      component: Micrommodule
    }
  ]
})
