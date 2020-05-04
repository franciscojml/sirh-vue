import axios from 'axios'

const state = {
  sidebar: {
    opened: false,
    user: null
  },
  config: {
    palette: {
      primary: '#3e498c',
      secondary: '#384582',
      success: '#52ab48',
      info: '#3d82c5',
      danger: '#c33a38',
      warning: '#d6ad30',
      gray: '#757b82',
      dark: '#253444',
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
