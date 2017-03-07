import Vue from 'vue'
import Router from 'vue-router'
import NotFound from 'components/not-found'

import find from 'components/find/index.js'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: find.Nav,
      redirect: '/home/recommend',
      children: [
        {
          path: 'recommend',
          name: 'recommend',
          component: find.Recommend
        },
        {
          path: 'song',
          name: 'song',
          component: find.Song
        },
        {
          path: 'station',
          name: 'station',
          component: find.Station
        },
        {
          path: 'singer',
          name: 'singer',
          component: find.Singer
        },
        {
          path: 'new',
          name: 'new',
          component: find.New
        },
        {
          path: 'rank',
          name: 'rank',
          component: find.Rank
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
