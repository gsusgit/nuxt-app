<template>
  <div
    v-if="show"
    class="fixed bottom-4 right-4 p-4 mb-4 text-sm text-red-900 rounded-lg bg-red-100 shadow-lg z-50"
    role="alert">
    <h4 class="font-semibold">{{ title }}</h4>
    <p>{{ message }}</p>
  </div>
</template>

<script setup>
import { useAlert } from '@/composables/alert'

const { title, message, show } = useAlert()
</script>
