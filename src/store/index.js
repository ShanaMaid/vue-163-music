import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    songList: [],
    searchName: '',
    searchResult: {}
  },
  mutations: {
    addSong (state, url) {
      state.songList.unshift(url)
      console.log('111')
    },
    setSearchName (state, name) {
      state.searchName = name
    },
    setSearchResult (state, result) {
      state.searchResult = result
    }
  }
})
