import Vue from 'vue'
import Router from 'vue-router'

import Find from './find'
import Personal from './personal'
import Cloud from './cloud'
import Download from './download'
import Friend from './friend'
import Local from './local'
import Mv from './mv'
import Singer from './singer'
import Station from './station'
import Search from './search'
import PlayList from './playlist'

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
    PlayList,
    {
      path: '*',
      redirect: '/find/recommend'
    }
  ]
})
