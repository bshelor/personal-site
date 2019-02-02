import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import Router from 'vue-router'
import HelloBryson from '@/components/HelloBryson'
import Resume from '@/components/Resume'

Vue.use(Router)
Vue.use(Vuetify)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloBryson',
      component: () => import("@/components/HelloBryson")
    },
    {
      path: '/resume',
      name: 'Resume',
      component: () => import("@/components/Resume")
    }
  ]
})
