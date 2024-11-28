import { defineEventHandler, getQuery } from 'h3'

export default defineEventHandler(async (event) => {
  const { id } = getQuery(event)

  if (id) {
    const product = await fetch(`https://dummyjson.com/products/${id}`).then(
      (res) => res.json()
    )
    return { product }
  }

  const products = await fetch('https://dummyjson.com/products').then((res) =>
    res.json()
  )
  return products
})
