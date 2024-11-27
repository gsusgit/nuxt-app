<template>
  <AppAlert />
  <div>
    <NuxtLayout>
      <main
        class="min-h-screen max-w-5xl mx-auto justify-center items-center text-center mt-8"
      >
        <NuxtPage class="animate__animated animate__fadeIn" />
      </main>
    </NuxtLayout>
  </div>
</template>

<script setup>
import AppAlert from '~/components/AppAlert.vue'
</script>
