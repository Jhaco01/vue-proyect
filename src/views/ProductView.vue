<template>
    <main class="wrapper">
        <h1>Products</h1>
        <ProductCard
            v-for="(product, index) in inventory"
            :key="product.id"
            class="card"
            :index="index"
            :product="product"
            :addToCart="addToCart"
        />
    </main>
</template>

<script>
import ProductCard from '@/components/ProductCard.vue'

export default {
  props: ['inventory', 'addToCart'],
  components: {
    ProductCard
  }
}
</script>
