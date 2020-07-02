import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    images_Saves: []
  },
  getters: {
    getAll: state => {
      return state.images_Saves
    }
  },
  mutations: {
    saveImg (state, data) {
      // mutate state
      console.log("saveImg Store")
      state.images_Saves.push(data)
      console.log("Store State", state.images_Saves)
    }
  },
  actions: {
  },
  modules: {
  }
})
