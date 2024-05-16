<template>
  <!-- <img
      class="logo"
      src="https://plus.unsplash.com/premium_photo-1683619761468-b06992704398?q=80&w=1930&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="logo"
    /> -->
  <div class="signup-form">
    <input type="text" v-model="name" placeholder="Enter your name" class="input-field" />
    <input type="email" v-model="email" placeholder="Enter your Email" class="input-field" />
    <input
      type="password"
      v-model="password"
      placeholder="Enter your Password"
      class="input-field"
    />
    <button @click="signUp" class="signup-button">Sign Up</button>
    <p>
      <router-link to="/login" class="login-link">Login</router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: 'SignUp',
  data() {
    return {
      name: '',
      email: '',
      password: ''
    }
  },
  methods: {
    async signUp() {
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
          alert('SignUp done')
          localStorage.setItem('user-info', JSON.stringify(result))
          this.$router.push({ name: 'home' })
        } else {
          throw new Error('Failed to sign up')
        }
      } catch (error) {
        console.error('Error signing up:', error)
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
.signup-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f8f9fa;
}

.logo {
  width: 100px;
  margin-bottom: 20px;
}

.signup-form {
  background-color: #ffffff;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 300px;
}

.input-field {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ced4da;
  border-radius: 4px;
  box-sizing: border-box;
}

.signup-button {
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #ffffff;
  font-size: 16px;
  cursor: pointer;
}

.signup-button:hover {
  background-color: #0056b3;
}

.login-link {
  text-align: center;
  text-decoration: none;
  color: #007bff;
}

.login-link:hover {
  text-decoration: underline;
}
</style>
