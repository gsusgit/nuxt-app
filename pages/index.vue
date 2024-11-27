<template>
  <section>
    <h1 class="mb-4 text-4xl font-bold">Welcome to the homepage</h1>
    This is an auto-imported page
    <code
      class="bg-neutral-600 px-2 py-1 rounded-md font-semibold text-sm"
      :class="`text-${color}-200`"
      >/index.vue</code
    >
    served through
    <code
      class="bg-neutral-600 px-2 py-1 rounded-md font-semibold text-sm"
      :class="`text-${color}-200`"
      >app.vue</code
    >
    via
    <code
      class="bg-neutral-600 px-2 py-1 rounded-md font-semibold text-sm"
      :class="`text-${color}-200`"
      >&lt;NuxtPage /&gt;</code
    >
    <p class="max-w-md mx-auto m-10">
      <span
        class="p-2 bg-white border rounded-md text-green-900 text-sm font-semibold"
      >
        Only logged in users can navigate to /products
      </span>
    </p>
  </section>
</template>

<script setup lang="ts">
import { useColor } from '~/composables/states'
const color = useColor()
</script>
