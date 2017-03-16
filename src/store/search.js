export default{
  state: {
    songList: [],
    searchName: '',
    searchResult: {},
    type: 'single'
  },
  mutations: {
    addSong (state, url) {
      state.songList.unshift(url)
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
