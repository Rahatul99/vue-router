<template>
  <div>
    <Header />
    <h1>Add Restaurant page</h1>
  </div>
</template>

<script>
import Header from './Header.vue'

export default {
  name: 'Add',
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
