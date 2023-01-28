import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from "./pages/MainPage";

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    { 
    path: '/',
    name:'main',
    component:Main
    },
    { 
    path: '/form',
    name:'form',
    component: () => import("./pages/FormPage")
    }
  ]
})