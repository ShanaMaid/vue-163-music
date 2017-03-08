import Recommend from 'components/find/recommend'
import Song from 'components/find/song'
import Nav from 'components/find/nav'
import Station from 'components/find/station'
import Rank from 'components/find/rank'
import New from 'components/find/new'
import Singer from 'components/find/Singer'

// export default{
//   Recommend,
//   Song,
//   Nav,
//   Station,
//   Rank,
//   New,
//   Singer,
//   children:[
//   ]
// }

export default{
  path: '/find',
  name: 'find',
  component: Nav,
  redirect: '/find/recommend',
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
}
