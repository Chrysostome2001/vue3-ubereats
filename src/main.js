import { createApp } from 'vue'
import App from './App.vue'

import { createWebHashHistory, createRouter } from 'vue-router';
import HomePage from "./page/home.vue";
import Restau_rant from "./page/Restaurant.vue"


const routes = [
    { 
      path: '/', 
      component: HomePage 
    },
    { 
      path: '/restaurant/:name', 
      name: 'Restaurant',
      component: Restau_rant
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
  })

const VueApp = createApp(App)
VueApp.use(router)
VueApp.mount('#app')
