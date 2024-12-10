<template>
  <div class="product-container">
    <div v-if="error">{{ error.message }}</div>
    <div v-else-if="!product">Loading...</div>
    <div v-else>
      <h3 class="text-2xl font-bold">{{ product.title }}</h3>
      <div
        class="bg-white mx-auto max-w-md flex justify-center items-center rounded-lg shadow-sm p-4 m-6">
        <img
          class="h-auto max-w-full rounded-lg"
          :src="product.thumbnail"
          :alt="product.title" />
      </div>
      <span class="font-bold text-green-600 text-xl">
        {{ formatCurrency(product.price, '$') }}
      </span>
      <div class="m-5 mx-auto">
        <NuxtLink
          to="/products"
          class="flex justify-center items-center space-x-3 hover:text-neutral-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-4">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
          </svg>
          <span>Back to products list</span>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import useCurrency from '@/utils/currency'

const route = useRoute()

interface Product {
  title: string
  thumbnail: string
  price: number
}

const product = ref<Product | null>(null)
const { data, error } = useFetch<{ product: Product }>(
  `/api/products?id=${route.params.id}`
)
const { formatCurrency } = useCurrency()

onMounted(() => {
  if (data.value) {
    product.value = data.value.product
  }
})
</script>
