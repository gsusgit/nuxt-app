<template>
  <div
    @click="$emit('select-category', category.slug)"
    class="m-2 bg-white rounded-3xl px-3 py-1 shadow-md hover:bg-neutral-700 hover:text-white cursor-pointer">
    {{ category.name }}
  </div>
</template>

<script setup lang="ts">
defineProps({
  category: {
    type: Object as PropType<{
      name: string
      slug: string
      url: string
    }>,
    required: true,
    default: () => ({
      name: '',
      slug: '',
      url: ''
    })
  }
})

defineEmits(['select-category'])
</script>
