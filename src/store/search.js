import storejs from 'store/dist/store.legacy'

export default{
  state: {
    songList: storejs.get('songList') || [],
    songId: new Set(storejs.get('songId')) || new Set(),
    currentSong: parseInt(storejs.get('currentSong'), 10) || 0,
    searchName: '',
    searchResult: {},
    type: 'single'
  },
  mutations: {
    updateSongList (state, list) {
      state.songList = list
      storejs.set('songList', state.songList)
    },
    addSong (state, obj) {
      if (state.songId.has(obj.id)) {
        for (let item in state.songList) {
          if (state.songList[item].id === obj.id) {
            state.currentSong = item
          }
        }
        return
      }
      state.songId.add(obj.id)
      state.songList.unshift(obj)
      state.currentSong = 0
      storejs.set('songId', state.songId)
      storejs.set('songList', state.songList)
      storejs.set('currentSong', state.currentSong)
    },
    changeSong (state, choice) {
      switch (choice) {
        case 'next':
          state.currentSong = state.currentSong + 1 === state.songList.length ? 0 : ++state.currentSong
          break
        case 'pre':
          state.currentSong = state.currentSong - 1 >= 0 ? --state.currentSong : (state.songList.length - 1)
          break
        default:
          state.currentSong = choice
      }
      storejs.set('currentSong', state.currentSong)
    },
    removeSong (state, choice) {
      switch (choice) {
        case 'all':
          state.songList = []
          state.songId = new Set()
          state.currentSong = 0
          state.songList.concat([])
          break
        default:
          state.songId.delete(state.songList[choice].id)
          state.songList.splice(choice, 1)
          if (state.currentSong === choice && state.currentSong !== 0) {
            state.currentSong--
          }
      }
      storejs.set('songId', state.songId)
      storejs.set('songList', state.songList)
      storejs.set('currentSong', state.currentSong)
    },
    addAllSong (state, arr) {
      state.songList = arr
      state.songId = new Set()
      state.currentSong = 0
      for (let item of arr) {
        state.songId.add(item.id)
      }
      storejs.set('songId', state.songId)
      storejs.set('songList', state.songList)
      storejs.set('currentSong', state.currentSong)
    },
    setSearchName (state, name) {
      state.searchName = name
    },
    setSearchResult (state, result) {
      state.searchResult = result
    },
    setType (state, type) {
      state.type = type
    }
  }
}
