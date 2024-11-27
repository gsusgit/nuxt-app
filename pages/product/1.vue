<template>
  <Head>
    <Title>{{ title }}</Title>
    <Meta name="description" :content="`${title}: ${description}`" />
    <Style
      type="text/css"
      children=".product-container { background-color: #ffffff; padding: 2rem; border-radius: 0.5rem; }"
    ></Style>
  </Head>
  <div class="product-container">
    <h1 class="mb-4 text-4xl font-bold">{{ title }}</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
    <div class="py-5">
      <img
        class="mx-auto rounded-lg h-96"
        src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
        :alt="title"
      />
    </div>
    <div class="m-5 mx-auto">
      <NuxtLink
        to="/products"
        class="flex justify-center items-center space-x-3 hover:text-neutral-700"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-4"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
          />
        </svg>
        <span> Back to products list </span>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const title = ref('Product 1')
const description = ref('A fantastic product just for you!')
</script>
