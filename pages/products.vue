<template>
  <section class="mb-20">
    <h1 class="mb-4 text-4xl font-bold">Products</h1>
    <p class="mb-12 text-xl">
      This page shows products provided by a dummy
      <strong>API</strong>
    </p>
    <div v-if="error">{{ error.message }}</div>
    <div v-else-if="!products.length">Loading...</div>
    <div v-else class="grid grid-cols-2 md:grid-cols-4 gap-4">
      <ProductItem
        v-for="product in products"
        :key="product.id"
        :product="product" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface Product {
  id: number
  title: string
  thumbnail: string
  price: number
}

const products = ref<Product[]>([])
const { data, error } = useFetch('/api/products')

onMounted(() => {
  if (data.value) {
    products.value = data.value.products
  }
})
</script>
