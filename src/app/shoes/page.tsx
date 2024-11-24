import React from 'react'

import { twMerge } from 'tailwind-merge'

import { getAllProducts } from '@/api/shoes/route'

import { ItemCard } from '../../components'
import FilterButtons from '../../components/filterButtons'

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
    <div className={twMerge('py-10', className)}>
      <h1 className="mb-4 text-center text-4xl font-bold leading-snug">
        Ортопедичне взуття
      </h1>

      <FilterButtons />

      <ul className="grid-cols-auto-fit-minmax grid justify-center gap-x-4 gap-y-6">
        {products?.map((product) => (
          <li key={product.id}>
            <ItemCard product={product} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ShoesPage
