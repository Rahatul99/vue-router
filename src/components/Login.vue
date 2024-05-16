<template>
  <div class="login-container">
    <input type="email" v-model="email" placeholder="Enter your Email" class="input-field" />
    <input
      type="password"
      v-model="password"
      placeholder="Enter your Password"
      class="input-field"
    />
    <button @click="logIn" class="submit-button">Log In</button>
    <p>
      <router-link to="sign-up" class="signup-link">Sign up</router-link>
    </p>
  </div>
</template>

<!-- <script>
export default {
  name: 'LogIn'
}
</script> -->

<script>
export default {
  name: 'LogIn',
  data() {
    return {
      name: '',
      email: '',
      password: ''
    }
  },
  methods: {
    async logIn() {
      try {
        const response = await fetch('../../fakeDb/user.json', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: this.name,
            email: this.email,
            password: this.password
          })
        })

        if (response.ok) {
          const result = await response.json()
          console.warn(result)
          alert('Login done')
          localStorage.setItem('user-info', JSON.stringify(result))
          this.$router.push({ name: 'home' })
        } else {
          throw new Error('Failed to logIn')
        }
      } catch (error) {
        console.error('Error logIn:', error)
      }
    }
  },

  mounted() {
    let user = localStorage.getItem('user-info')
    if (user) {
      this.$router.push({ name: 'home' })
    }
  }
}
</script>

<style scoped>
.login-container {
  max-width: 300px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
}

.input-field {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
}

.submit-button {
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #4caf50;
  color: white;
  font-size: 16px;
  cursor: pointer;
}

.signup-link {
  text-align: center;
  text-decoration: none;
  color: #007bff;
}

.signup-link:hover {
  text-decoration: underline;
}
</style>
