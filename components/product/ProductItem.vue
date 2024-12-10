<template>
  <NuxtLink :to="`/product/${product.id}`">
    <div class="grid gap-4 bg-white rounded-lg shadow-sm p-4">
      <img
        class="h-auto max-w-full rounded-lg"
        :src="product.thumbnail"
        :alt="product.title" />
      <h3>{{ product.title }}</h3>
      <span class="font-bold text-green-600 text-lg">
        {{ formatCurrency(product.price, '$') }}
      </span>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import useCurrency from '@/utils/currency'

const { formatCurrency } = useCurrency()

defineProps({
  product: {
    type: Object as PropType<{
      id: number
      title: string
      thumbnail: string
      price: number
    }>,
    required: true,
    default: () => ({
      id: 0,
      title: '',
      thumbnail: '',
      price: 0
    })
  }
})
</script>
