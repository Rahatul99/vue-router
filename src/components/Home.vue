<template>
  <div>
    <Header />
    <h2>Hello {{ name }}, welcome to the home page</h2>

    <div class="restaurant-cards">
      <div v-for="restaurant in restaurants" :key="restaurant.id" class="restaurant-card">
        <img :src="restaurant.image" alt="Restaurant Image" class="restaurant-image" />
        <div class="restaurant-info">
          <h3>{{ restaurant.name }}</h3>
          <p>Contact: {{ restaurant.contact_number }}</p>
          <p>Location: {{ restaurant.location }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './Header.vue'
import RestaurantsData from '../../fakeDb/user.json'

export default {
  name: 'HomeComponent',
  components: {
    Header
  },
  data() {
    return {
      name: '',
      restaurants: []
    }
  },
  mounted() {
    let user = localStorage.getItem('user-info')
    if (user) {
      this.name = JSON.parse(user).name
    } else {
      this.$router.push({ name: 'signUp' })
    }

    if (RestaurantsData && RestaurantsData.Restaurants) {
      this.restaurants = RestaurantsData.Restaurants
    }
  }
}
</script>

<style scoped>
.restaurant-cards {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
}

.restaurant-card {
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.restaurant-image {
  width: 100%;
  border-radius: 8px;
}

.restaurant-info {
  margin-top: 10px;
}
</style>
