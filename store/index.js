export const state = () => ({
  chatMessages: '',
  titleFromUser: '',
  sockets: {}
})

export const mutations = {
  SET_MESSAGE(state, chatMessage) {
    state.chatMessages += chatMessage
  },

  SET_SOCKET(state, { label, socket }) {
    state.sockets[label] = socket
  }
}

export const actions = {
  FORMAT_MESSAGE({ commit }, chatMessage) {
    const chatMessageFmt = `${new Date().toLocaleString()}: ${chatMessage}\r\n`
    commit('SET_MESSAGE', chatMessageFmt)
  },

  SEND_SIMPLE({ state }, { label, nextView }) {
    state.sockets[label].emit('simple', { data: nextView })
    this.$router.push(nextView)
  }
}
