import Home from './home'
import Single from './single'
import Ablum from './ablum'
import Mv from './mv'
import Singer from './singer'
import SongList from './song-list'
import Station from './station'
import User from './user'
import Word from './word'

export default{
  path: '/search',
  component: Home,
  redirect: '/search/single',
  children: [
    {
      path: 'single',
      component: Single
    },
    {
      path: 'ablum',
      component: Ablum
    },
    {
      path: 'mv',
      component: Mv
    },
    {
      path: 'singer',
      component: Singer
    },
    {
      path: 'songlist',
      component: SongList
    },
    {
      path: 'station',
      component: Station
    },
    {
      path: 'user',
      component: User
    },
    {
      path: 'word',
      component: Word
    }
  ]
}
