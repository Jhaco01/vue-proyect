<template>
  <header class="top-bar spread">
    <nav class="top-bar-nav">
      <router-link to="/" class="top-bar-link">
        <i class="icofont-spoon-and-fork"></i>
        <span>Home</span>
      </router-link>
      <router-link to="/products" class="top-bar-link">
        <span>Products</span>
      </router-link>
      <router-link to="/past-orders" class="top-bar-link">
        <span>Past Orders</span>
      </router-link>
    </nav>
    <a @click="toggleCart" class="top-bar-cart-link">
      <i class="icofont-cart-alt icofont-1x"/>
      <span>Cart {{ totalQuantity }}</span>
    </a>
  </header>
  <router-view
    :inventory="inventory"
    :addToCart="addToCart"
  />
  <SidebarComponent
    v-if="showCart"
    :toggle="toggleCart"
    :cart="cart"
    :inventory="inventory"
    :remove="removeItem"
  />
</template>

<script>
import SidebarComponent from './components/SidebarComponent.vue'
import food from '@/food.json'

export default {
  data () {
    return {
      showCart: false,
      inventory: food,
      cart: {}
    }
  },
  computed: {
    totalQuantity () {
      return Object.values(this.cart).reduce((sum, curr) => {
        return sum + curr
      }, 0)
    }
  },
  methods: {
    addToCart (name, i, quantity) {
      if (!this.cart[name]) this.cart[name] = 0
      this.cart[name] += quantity
    },
    toggleCart () {
      this.showCart = !this.showCart
    },
    removeItem (name) {
      delete this.cart[name]
    }
  },
  components: {
    SidebarComponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
