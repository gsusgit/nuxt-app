import { defineEventHandler, getQuery } from 'h3'

export default defineEventHandler(async (event) => {
  const { id, category } = getQuery(event)

  if (id) {
    const product = await fetch(`https://dummyjson.com/products/${id}`).then(
      (res) => res.json()
    )
    return { product }
  }

  if (category) {
    const productsByCategoryResponse = await fetch(
      `https://dummyjson.com/products/category/${category}`
    ).then((res) => res.json())
    const productsByCategory = productsByCategoryResponse.products
    return { products: productsByCategory }
  }

  const productsResponse = await fetch('https://dummyjson.com/products').then(
    (res) => res.json()
  )
  const products = productsResponse.products

  const categories = await fetch(
    'https://dummyjson.com/products/categories'
  ).then((res) => res.json())

  return { products, categories }
})
