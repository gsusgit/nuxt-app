<template>
  <section class="mb-20">
    <h1 class="mb-4 text-4xl font-bold">Products</h1>
    <p class="mb-12 text-xl">
      This page shows products provided by a dummy
      <strong>API</strong>
    </p>
    <div v-if="error">{{ error.message }}</div>
    <div v-else-if="!products.length">Loading...</div>
    <div v-else>
      <div class="mb-8">
        <Filter :categories="categories" @filter-products="filterProducts" />
      </div>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <ProductItem
          v-for="product in products"
          :key="product.id"
          :product="product" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Filter from '../components/product/Filter.vue'

interface Product {
  id: number
  title: string
  thumbnail: string
  price: number
  description: string
  category: string
}

interface Category {
  name: string
  slug: string
  url: string
}

const products = ref<Product[]>([])
const categories = ref<Category[]>([])
const { data, error } = useFetch<{
  products: Product[]
  categories: Category[]
}>('/api/products')

onMounted(() => {
  if (data.value) {
    products.value = data.value.products
    categories.value = data.value.categories
  }
})

const filterProducts = async (slug: string) => {
  try {
    const response = await fetch(`/api/products?category=${slug}`)
    const result = await response.json()
    products.value = result.products
  } catch (err) {
    console.error('Failed to fetch products by category:', err)
  }
}
</script>
