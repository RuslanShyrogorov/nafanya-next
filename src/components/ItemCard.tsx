import React from 'react'

import Image from 'next/image'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'

import imgCard from '@/assets/images/307.jpg'

import { OldPrice } from './ui'
import { IShoe, ISizes } from '../types/types'

interface Props {
  className?: string
  product: IShoe
}

const ItemCard: React.FC<Props> = ({ className, product }) => {
  if (!product) return null

  const { id, name, price, oldPrice, article, sizes } = product

  const shownSizes = (arrSizes: ISizes[]) => {
    const sizes = arrSizes.map((item: ISizes) => item.size)
    const minSize = Math.min(...sizes)
    const maxSize = Math.max(...sizes)

    if (arrSizes.length > 1) {
      return (
        <p className="italic">
          Розмір: {minSize} - {maxSize}
        </p>
      )
    }
    return <p className="italic">Розмір: {arrSizes[0].size}</p>
  }

  return (
    <div
      className={twMerge(
        'hover: relative overflow-hidden rounded-[10px] border-0 bg-main transition duration-300 ease-in-out hover:cursor-pointer hover:drop-shadow-lg focus:cursor-pointer',
        className
      )}
    >
      <Link href={'/product/' + id}>
        <div>
          <Image
            className="w-full object-cover"
            src={imgCard}
            alt="Picture"
            width="275"
            height="340"
          />

          {oldPrice > 0 && (
            <div className="absolute left-0 top-0 rounded-br-lg bg-red-dark p-2 text-main">
              <p className="text-sm leading-none">розпродаж</p>
            </div>
          )}
        </div>

        <div className="flex flex-col justify-between gap-y-4 px-4 pb-2 pt-1 text-black">
          <p className="text-sm italic leading-none tracking-wide text-gray-light">
            Артікул: {article}
          </p>

          <h2 className="grow text-center text-xl font-semibold">{name}</h2>

          {shownSizes(sizes)}

          <div className="self-center">
            <p className="text-xl font-semibold text-brown-dark">
              Ціна: {price} грн.
              {oldPrice !== 0 && <OldPrice oldPrice={oldPrice} />}
            </p>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default ItemCard
