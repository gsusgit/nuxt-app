<template>
  <div
    v-if="show"
    class="fixed bottom-4 right-4 p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 shadow-lg z-50"
    role="alert"
  >
    <span class="font-medium">{{ title }}</span> {{ message }}
  </div>
</template>

<script setup>
import { useAlert } from '@/composables/alert'

const { title, message, show } = useAlert()
</script>
