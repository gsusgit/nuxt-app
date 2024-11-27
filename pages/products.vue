<template>
  <section>
    <h1 class="mb-4 text-4xl font-bold">Products</h1>
    <p>This page will be displayed at the /products route.</p>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 py-5">
      <div class="grid gap-4">
        <NuxtLink to="/product/1">
          <img
            class="h-auto max-w-full rounded-lg scale-95 hover:scale-100 hover:ring-4 hover:ring-green-100 hover:ring-offset-1"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
            alt=""
          />
        </NuxtLink>
        <div>
          <img
            class="h-auto max-w-full rounded-lg scale-95 hover:scale-100 hover:ring-4 hover:ring-green-100 hover:ring-offset-1"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-lg scale-95 hover:scale-100 hover:ring-4 hover:ring-green-100 hover:ring-offset-1"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg"
            alt=""
          />
        </div>
      </div>
      <div class="grid gap-4">
        <div>
          <img
            class="h-auto max-w-full rounded-lg scale-95 hover:scale-100 hover:ring-4 hover:ring-green-100 hover:ring-offset-1"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-lg scale-95 hover:scale-100 hover:ring-4 hover:ring-green-100 hover:ring-offset-1"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-lg scale-95 hover:scale-100 hover:ring-4 hover:ring-green-100 hover:ring-offset-1"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg"
            alt=""
          />
        </div>
      </div>
      <div class="grid gap-4">
        <div>
          <img
            class="h-auto max-w-full rounded-lg scale-95 hover:scale-100 hover:ring-4 hover:ring-green-100 hover:ring-offset-1"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-lg scale-95 hover:scale-100 hover:ring-4 hover:ring-green-100 hover:ring-offset-1"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-lg scale-95 hover:scale-100 hover:ring-4 hover:ring-green-100 hover:ring-offset-1"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg"
            alt=""
          />
        </div>
      </div>
      <div class="grid gap-4">
        <div>
          <img
            class="h-auto max-w-full rounded-lg scale-95 hover:scale-100 hover:ring-4 hover:ring-green-100 hover:ring-offset-1"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-lg scale-95 hover:scale-100 hover:ring-4 hover:ring-green-100 hover:ring-offset-1"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-lg scale-95 hover:scale-100 hover:ring-4 hover:ring-green-100 hover:ring-offset-1"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
useHead({
  title: 'My Nuxt App - Products',
  meta: [
    { name: 'description', content: 'Let us showcase of wonderful products.' }
  ],
  bodyAttrs: {
    class: 'products-page'
  },
  script: [{ innerHTML: "console.log('Hello from products page')" }]
})
</script>
