import Vue from 'vue'
import Router from 'vue-router'

import Find from 'components/find/'
import Personal from 'components/personal/'
import Cloud from 'components/cloud/'
import Download from 'components/download/'
import Friend from 'components/friend/'
import Local from 'components/local/'
import Mv from 'components/mv/'
import Singer from 'components/singer/'
import Station from 'components/station/'
import Search from 'components/search/index.js'

Vue.use(Router)

export default new Router({
  routes: [
    Find,
    Personal,
    Cloud,
    Download,
    Friend,
    Local,
    Mv,
    Singer,
    Station,
    Search,
    {
      path: '*',
      redirect: '/find/recommend'
    }
  ]
})
