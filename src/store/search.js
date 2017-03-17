export default{
  state: {
    songList: [],
    songId: new Set(),
    currentSong: 0,
    searchName: '',
    searchResult: {},
    type: 'single'
  },
  mutations: {
    addSong (state, obj) {
      if (state.songId.has(obj.id)) {
        return
      }
      state.songId.add(obj.id)
      state.songList.unshift(obj)
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
    },
    removeSong (state, choice) {
      switch (choice) {
        case 'all':
          state.songList = []
          state.currentSong = 0
          state.songList.concat([])
          break
      }
    },
    setSearchName (state, name) {
      state.searchName = name
    },
    setSearchResult (state, result) {
      state.searchResult = result
    },
    setType (state, type) {
      console.log(type)
      state.type = type
    }
  }
}
