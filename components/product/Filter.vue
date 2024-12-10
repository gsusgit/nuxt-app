<template>
  <h2 class="text-2xl font-semibold mb-3">Categories</h2>
  <div class="flex flex-wrap items-center justify-center">
    <Category
      v-for="category in categories"
      :key="category.slug"
      :category="category"
      @select-category="selectCategory" />
  </div>
</template>

<script lang="ts" setup>
import Category from '../product/Category.vue'

interface Category {
  name: string
  slug: string
  url: string
}

defineProps({
  categories: {
    type: Array as PropType<Category[]>,
    required: true,
    default: () => []
  }
})

const emits = defineEmits(['filter-products'])

const selectCategory = (slug: string) => {
  emits('filter-products', slug)
}
</script>
