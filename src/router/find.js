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
      path: 'song', // 歌单
      component: Song
    },
    {
      path: 'station',  // 主播电台
      component: Station
    },
    {
      path: 'singer', // 歌手
      component: Singer
    },
    {
      path: 'new',  // 最新音乐
      component: New
    },
    {
      path: 'rank', // 排行榜
      component: Rank
    }
  ]
}
