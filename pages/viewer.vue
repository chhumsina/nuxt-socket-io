<template>
  <div class="container">
    Viewer.vue. Click to go to "login"
    <button @click="sendSimple()">Send simple</button>
  </div>
</template>

<script>
export default {
  methods: {
    sendSimple() {
      this.$store.dispatch('SEND_SIMPLE', {
        label: 'mySocket',
        nextView: '/login'
      })
    }
  }
}
</script>
