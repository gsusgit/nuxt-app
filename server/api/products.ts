import { defineEventHandler } from 'h3'

export default defineEventHandler(async (event) => {
  const products = await fetch('https://dummyjson.com/products').then((res) =>
    res.json()
  )

  return products
})
