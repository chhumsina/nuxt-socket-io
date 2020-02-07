<template>
  <div class="container">
    Login.vue. Click to go to "viewer"
    <button @click="sendSimple()">Send simple</button>
  </div>
</template>

<script>
export default {
  mounted() {
    if (!this.$store.state.sockets.mySocket) {
      // Only set it up if we haven't already stored it.
      const socket = this.$nuxtSocket({
        channel: '/index',
        reconnection: false,
        teardown: false // <-- teardown false
      })

      this.$store.commit('SET_SOCKET', { label: 'mySocket', socket })
    }
  },
  methods: {
    sendSimple() {
      this.$store.dispatch('SEND_SIMPLE', {
        label: 'mySocket',
        nextView: '/viewer'
      })
    }
  }
}
</script>
