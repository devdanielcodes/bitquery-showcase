import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        {
            path: "/",
            component: () => import("./components/HelloWorld.vue")
        },
        {
          path: "/blockchains",
          component: () => import("./components/Blockchains.vue")
      }
    ],
    mode: 'history'
})

export default router