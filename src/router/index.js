import Vue from 'vue'
import Router from 'vue-router'
import NotFound from 'components/not-found'

import Recommend from 'components/find/recommend'
import Song from 'components/find/song'
import Nav from 'components/find/nav'
import Station from 'components/find/station'
import Rank from 'components/find/rank'
import New from 'components/find/new'
import Singer from 'components/find/Singer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Nav,
      redirect: '/',
      children: [
        {
          path: 'recommend',
          name: 'recommend',
          component: Recommend
        },
        {
          path: 'song',
          name: 'song',
          component: Song
        },
        {
          path: 'station',
          name: 'station',
          component: Station
        },
        {
          path: 'singer',
          name: 'singer',
          component: Singer
        },
        {
          path: 'new',
          name: 'new',
          component: New
        },
        {
          path: 'rank',
          name: 'rank',
          component: Rank
        }
      ]
    },
    {
      path: '/',
      redirect: '/home/recommend'
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    }
  ]
})
