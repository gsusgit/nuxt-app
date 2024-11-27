<template>
  <nav class="sticky top-0 bg-white shadow z-10">
    <div
      class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
    >
      <router-link
        to="/"
        class="flex items-center space-x-3 rtl:space-x-reverse"
      >
        <img src="/img/logo.png" class="h-8" alt="Nuxt Logo" />
      </router-link>
      <div class="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul
          class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white"
        >
          <li>
            <router-link
              to="/"
              :class="[
                'block py-2 px-3 md:p-0',
                $route.path === '/'
                  ? 'text-green-700'
                  : 'text-gray-900 hover:text-green-700'
              ]"
              aria-current="page"
              >Home</router-link
            >
          </li>
          <li>
            <router-link
              to="/about"
              :class="[
                'block py-2 px-3 md:p-0',
                $route.path === '/about'
                  ? 'text-green-700'
                  : 'text-gray-900 hover:text-green-700'
              ]"
              >About</router-link
            >
          </li>
          <li>
            <router-link
              to="/gallery"
              :class="[
                'block py-2 px-3 md:p-0',
                $route.path === '/gallery'
                  ? 'text-green-700'
                  : 'text-gray-900 hover:text-green-700'
              ]"
              >Gallery</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { useRoute } from 'vue-router'

const $route = useRoute()
</script>
