import Recommend from 'components/find/recommend'
import Song from 'components/find/song'
import Nav from 'components/find/nav'
import Station from 'components/find/station'
import Rank from 'components/find/rank'
import New from 'components/find/new'
import Singer from 'components/find/singer'

export default{
  path: '/find',
  component: Nav,
  redirect: '/find/recommend',
  children: [
    {
      path: 'recommend',
      component: Recommend
    },
    {
      path: 'song',
      component: Song
    },
    {
      path: 'station',
      component: Station
    },
    {
      path: 'singer',
      component: Singer
    },
    {
      path: 'new',
      component: New
    },
    {
      path: 'rank',
      component: Rank
    }
  ]
}
