<template>
  <section class="max-w-5xl mx-auto p-8 space-y-8">
    <h1 class="text-4xl font-bold text-gray-800">About Page</h1>
    <p class="text-gray-600 text-lg">
      This page will be displayed at the /about route.
    </p>
    <AppAccordion>
      <AppAccordionItem title="What is Nuxt?">
        <div class="bg-white shadow-md rounded-lg p-6">
          <p class="text-gray-600">
            Nuxt is a powerful framework built on top of Vue.js that simplifies
            the development of universal or single-page Vue applications. It
            provides a robust structure and a set of conventions that make it
            easier to build scalable and maintainable applications.
          </p>
        </div>
      </AppAccordionItem>
      <AppAccordionItem title="Why Learn Nuxt?">
        <div class="bg-white shadow-md rounded-lg p-6">
          <ul class="list-disc list-inside text-gray-600 space-y-2">
            <li>Server-side rendering (SSR) for better SEO and performance</li>
            <li>Static site generation (SSG) for fast and secure websites</li>
            <li>Automatic code splitting for optimized loading</li>
            <li>Powerful module ecosystem to extend functionality</li>
            <li>Integrated TypeScript support</li>
          </ul>
        </div>
      </AppAccordionItem>
      <AppAccordionItem title="Getting Started with Nuxt">
        <div class="bg-white shadow-md rounded-lg p-6">
          <p class="text-gray-600">
            To get started with Nuxt, you can follow the official documentation
            and tutorials available on the
            <a
              href="https://nuxt.com/docs/getting-started/introduction"
              class="text-green-700 hover:underline"
              >Nuxt website</a
            >.
          </p>
        </div>
      </AppAccordionItem>
      <AppAccordionItem title="Nuxt Learning Resources">
        <div class="bg-white shadow-md rounded-lg p-6">
          <ul>
            <li>
              <a
                href="https://nuxt.com/docs/getting-started/introduction"
                class="text-green-700 hover:underline"
                >Official Nuxt Documentation</a
              >
            </li>
            <li>
              <a
                href="https://nuxt.com/tutorials"
                class="text-green-700 hover:underline"
                >Nuxt Tutorials</a
              >
            </li>
            <li>
              <a
                href="https://nuxt.com/blog"
                class="text-green-700 hover:underline"
                >Nuxt Blog</a
              >
            </li>
            <li>
              <a
                href="https://github.com/nuxt/nuxt"
                class="text-green-700 hover:underline"
                >Nuxt GitHub Repository</a
              >
            </li>
          </ul>
        </div>
      </AppAccordionItem>
    </AppAccordion>
  </section>
</template>

<script>
import AppAccordion from '~/components/AppAccordion.vue'
import AppAccordionItem from '~/components/AppAccordionItem.vue'

export default {
  components: {
    AppAccordion,
    AppAccordionItem
  }
}
</script>
