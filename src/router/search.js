import Home from 'components/search/home'
import Single from 'components/search/single'
import Ablum from 'components/search/ablum'
import Mv from 'components/search/mv'
import Singer from 'components/search/singer'
import SongList from 'components/search/song-list'
import Station from 'components/search/station'
import User from 'components/search/user'
import Word from 'components/search/word'

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
