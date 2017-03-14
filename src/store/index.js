import Vue from 'vue'
import Vuex from 'vuex'
import Search from './search.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    search: Search
  }
})
