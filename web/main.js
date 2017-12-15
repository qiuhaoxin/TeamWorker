import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store'
import App from './App'
// import login from './pages/login/login'
// import index from './pages/index'
import routes from './router/router'
console.log("begin");
Vue.use(VueRouter)

// const routes=[
//      {
//          path:'/',
//          component:index
//      },
//      {
//           path:'/login',
//           component:login
//      }
// ]
const router=new VueRouter({
     routes

})

new Vue({
   router
}).$mount('#app')