import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Homepage.vue'
import Newb from './views/Newb.vue'
import Property from './views/Property.vue'
import Contact from './views/Contact.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Homepage/:state',
      name: 'about',
      component: Home
    }
    ,{
      path:'/Newb/:state',
      component:Newb
    }
    ,{
      path:'/Property',
      component:Property
    },{
      path:'/Contact',
      component:Contact
    }
    // {
    //   path: '/Bin',
    //   name: 'about',
    //   component: Bin,
    //   children:[{
    //     path: '/Bin/a',
    //     name: 'about',
    //     component: Bina,
    //   },{
    //     path: '/Bin/b',
    //     name: 'about',
    //     component: Binb,
    //   }
    // ]
    // }
  ]
})
