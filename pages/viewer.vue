<template>
  <div>
    <button @click="sendSimple()">Send simple</button>
  </div>
</template>

<script>
export default {
  beforeDestroy() {
    console.log('destroy')
  },
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
