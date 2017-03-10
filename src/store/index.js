import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    songList: ['http://m2.music.126.net/GNFQZzUHG4FDmsr_d7sV8A==/2022001883480951.mp3'],
    searchName: '',
    searchResult: {}
  },
  mutations: {
    addSong (state, url) {
      state.songList.unshift()
    },
    setSearchName (state, name) {
      state.searchName = name
    },
    setSearchResult (state, result) {
      state.searchResult = result
    }
  }
})
