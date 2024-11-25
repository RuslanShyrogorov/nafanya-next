import React from 'react'

import Link from 'next/link'
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

      <ul className="grid grid-cols-auto-fit-minmax place-items-start justify-center gap-4">
        {products?.map((product) => (
          <li key={product.id} className="grid grid-rows-subgrid">
            <Link
              href={'/product/' + product.id}
              className="row-span-1 grid grid-rows-subgrid gap-4"
            >
              <ItemCard product={product} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ShoesPage
