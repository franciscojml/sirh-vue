import axios from 'axios'

const state = {
  sidebar: {
    opened: false,
    user: null
  },
  config: {
    palette: {
      primary: '#4ae387',
      danger: '#e34a4a',
      info: '#4ab2e3',
      success: '#db76df',
      warning: '#f7cc36',
      white: '#fff',
      black: '#000',
      fontColor: '#34495e',
      transparent: 'transparent',
      lighterGray: '#ddd',
    },
  },
  isLoading: true,
}

const mutations = {
  setLoading(state, isLoading) {
    state.isLoading = isLoading
  },
  setUser(state, user) {
    state.user = user
    if (user) {
      axios.defaults.headers.common['Authorization'] = `bearer ${user.token}`
    } else {
      delete axios.defaults.headers.common['Authorization']
    }
  }
}

const actions = {
}

export default {
  state,
  mutations,
  actions,
}
