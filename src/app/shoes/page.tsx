import React from 'react'

import Link from 'next/link'
import { twMerge } from 'tailwind-merge'

// import { getAllProducts } from '@/api/shoes/route'

import { ItemCard } from '../../components'
import FilterButtons from '../../components/filterButtons'
import { IShoe } from '../../types/types'

interface Props {
  className?: string
}
// async function fetchProducts() {
//   try {
//     return await getAllProducts()
//   } catch (error) {
//     console.error('Error fetching products', error)
//     return []
//   }
// }

const ShoesPage: React.FC<Props> = async ({ className }) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/shoes`)
  const data = await res.json()
  console.log('data', data.shoes)
  const products = data.shoes

  return (
    <div className={twMerge('py-10', className)}>
      <h1 className="mb-4 animate-fade-down text-center text-4xl font-bold leading-snug animate-delay-150 animate-duration-1000 animate-ease-in-out">
        Ортопедичне взуття
      </h1>

      <FilterButtons />

      <ul className="grid grid-cols-auto-fit-minmax place-items-start justify-center gap-4">
        {products?.map((product: IShoe, index: number) => (
          <li key={product.id} className="grid grid-rows-subgrid">
            <Link
              href={'/product/' + product.id}
              className="row-span-1 grid grid-rows-subgrid gap-4"
            >
              <ItemCard
                product={product}
                className={twMerge(
                  index % 2 === 0
                    ? // 'animate-duration-2000 animate-flip-down animate-delay-150 animate-ease-in-out'
                      // : 'animate-duration-2000 animate-flip-up animate-delay-150 animate-ease-in-out'
                      'animate-duration-2000 animate-fade-up animate-delay-150 animate-ease-in-out'
                    : 'animate-duration-2000 animate-fade-down animate-delay-150 animate-ease-in-out'
                )}
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ShoesPage
