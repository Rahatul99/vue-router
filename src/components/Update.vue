<template>
  <div>
    <Header />
    <h2>Update Restaurant page</h2>
  </div>
</template>

<script>
import Header from './Header.vue'

export default {
  name: 'Update',
  components: {
    Header
  },
  mounted() {
    let user = localStorage.getItem('user-info')
    if (!user) {
      this.$router.push({ name: 'signUp' })
    }
  }
}
</script>

<style lang="scss" scoped></style>
