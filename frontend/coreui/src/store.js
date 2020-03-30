import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
  sidebarShow: 'responsive',
  sidebarMinimize: false,
  user: null
}

const mutations = {
  toggleSidebarDesktop (state) {
    const sidebarOpened = [true, 'responsive'].includes(state.sidebarShow)
    state.sidebarShow = sidebarOpened ? false : 'responsive'
  },
  toggleSidebarMobile (state) {
    const sidebarClosed = [false, 'responsive'].includes(state.sidebarShow)
    state.sidebarShow = sidebarClosed ? true : 'responsive'
  },
  set (state, [variable, value]) {
    state[variable] = value
  },
  setUser(state, user) {
    state.user = user
    if(user) {
        axios.defaults.headers.common['Authorization'] = `bearer ${user.token}`
        state.sidebarShow = true
    } else {
        delete axios.defaults.headers.common['Authorization']
        state.sidebarShow = false
    }
  }
}

export default new Vuex.Store({
  state,
  mutations
})