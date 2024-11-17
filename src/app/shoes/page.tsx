import React from 'react'

import { getAllProducts } from '@/api/shoes/route'

interface Props {
  className?: string
}

async function fetchProducts() {
  try {
    return await getAllProducts()
  } catch (error) {
    console.error('Error fetching products', error)
    return []
  }
}

const ShoesPage: React.FC<Props> = async ({ className }) => {
  const products = await fetchProducts()
  return (
    <div className={className}>
      <h1>Shoes page</h1>
      <p>Products:</p>
      {products?.map((product) => (
        <div key={product.id}>
          <p>{product.name}</p>
        </div>
      ))}
    </div>
  )
}

export default ShoesPage
