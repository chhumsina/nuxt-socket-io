<template>
  <div>
    <button @click="sendSimple()">Send simple</button>
  </div>
</template>

<script>
export default {
  mounted() {
    const socket = this.$nuxtSocket({
      channel: '/index',
      reconnection: false,
      teardown: false // <-- teardown false
    })
    this.$store.commit('SET_SOCKET', { label: 'mySocket', socket })
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
