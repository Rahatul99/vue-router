<template>
  <div>
    <header class="header">
      <nav class="navigation">
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/add">Add Restaurant</router-link></li>
          <li><router-link to="/update">Update Restaurant</router-link></li>
          <li><a href="#" v-on:click="logout">LogOut</a></li>
        </ul>
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    logout() {
      localStorage.clear()
      this.$router.push({ name: 'login' })
    }
  }
}
</script>

<style scoped>
/* Styles for the header component */
.header {
  background-color: #0a80c9;
  color: #fff;
  padding: 20px;
}

/* Styles for the navigation links */
.navigation ul {
  list-style: none;
  padding: 0;
  text-align: right;
}

.navigation li {
  display: inline-block;
  margin-left: 15px;
}

.navigation a {
  color: #fff;
  text-decoration: none;
  font-weight: bold;
}

.navigation a:hover {
  color: #ffd700; /* Change color on hover (e.g., to gold) */
}
</style>
