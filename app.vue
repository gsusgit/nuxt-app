<template>
  <AppAlert />
  <div>
    <NuxtLayout>
      <main
        class="min-h-screen max-w-5xl mx-auto justify-center items-center text-center mt-8"
      >
        <NuxtPage />
      </main>
    </NuxtLayout>
  </div>
</template>

<script setup>
import AppAlert from '~/components/AppAlert.vue'
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
