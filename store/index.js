export const state = () => ({
  type: 'home',
  data: null,
})

export const mutations = {
  SET_TYPE(state, value) {
    state.type = value
  },
  SET_STORY(state, value) {
    state.data = value
  },
}

export const actions = {
  setType({ commit }, payload) {
    commit('SET_TYPE', payload)
  },
  setStory({ commit }, payload) {
    commit('SET_STORY', payload)
  },
}
