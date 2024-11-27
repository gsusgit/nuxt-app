<template>
  <button
    @click="toggle"
    class="w-full text-center text-lg font-semibold text-gray-800 py-4"
  >
    {{ title }}
  </button>
  <div v-if="isOpen" class="mt-2 text-gray-600">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ['title'],
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen
    }
  }
}
</script>

<style scoped>
button:focus {
  outline: none;
}
</style>
