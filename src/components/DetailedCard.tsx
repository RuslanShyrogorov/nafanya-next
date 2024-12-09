'use client'
import { useState } from 'react'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { FiArrowLeft, FiMinusCircle, FiPlusCircle } from 'react-icons/fi'

import { RadioButtons } from './index'
import { Button, OldPrice } from './ui'
import { IShoe } from '../types/types'

// TODO fix img
// TODO fix padding

const DetailedCard = ({ product }: { product: IShoe }) => {
  const [quantity, setQuantity] = useState(1)
  const [selectedSize, setSelectedSize] = useState('')
  const router = useRouter()
  const sizesForBtn = product.sizes.map((item) => item.size.toString())

  return (
    <div className="container mx-auto px-4 py-5 font-medium md:py-7 md:text-lg">
      <div>
        <Button
          className="ml-5 flex items-center md:ml-16"
          variant="text"
          onClick={() => router.back()}
        >
          <FiArrowLeft />
          Назад
        </Button>
        <div className="mx-auto my-5 flex flex-col gap-5 overflow-hidden rounded-2xl bg-main drop-shadow-3xl sm:p-4 md:w-4/5 md:flex-row md:gap-5 md:gap-x-10">
          <div className="w-full">
            <Image
              className="w-full object-cover sm:rounded-xl"
              src={product.picture[0]}
              alt={product.description}
              width={400}
              height={400}
            />
          </div>
          {/*<div style={{ position: 'relative', width: '100%' }}>*/}
          {/*  <Image*/}
          {/*    className="w-[400px] object-cover md:rounded-xl"*/}
          {/*    src={product.picture[0]}*/}
          {/*    alt={product.description}*/}
          {/*    fill*/}
          {/*    // style={{ objectFit: 'cover' }} // Optional: Adjusts how the image is displayed*/}
          {/*  />*/}
          {/*</div>*/}
          <div className="flex flex-col gap-y-2 px-2.5 font-medium text-brown-dark">
            <p className="text-right italic text-opacity-80">
              <span className="mr-2.5 font-semibold">Артікул:</span>
              {product.article}
            </p>
            <h2 className="text-xl font-bold italic tracking-[.5px] text-opacity-80">
              {product.name}
            </h2>
            <p className="font-semibold">{product.description}</p>
            <p>
              <span className="mr-2.5 font-semibold">Особливості:</span>
              {product.extraDescription}
            </p>
            <p>
              <span className="mr-2.5 font-semibold">Матеріал:</span>
              {product.material}
            </p>
            <div>
              <span className="mr-2.5 font-semibold">Розмір:</span>
              <RadioButtons
                sizes={sizesForBtn}
                selected={selectedSize}
                setSelected={setSelectedSize}
              />
            </div>
            <p className="">
              <span className="mr-2.5 font-semibold">Ціна: </span>
              {product.price.toLocaleString('ru')} грн.
              <OldPrice oldPrice={product.oldPrice} className="" />
            </p>
            <div className="flex items-center gap-x-2.5">
              <span className="mr-2.5 font-semibold">Кількість:</span>
              <Button
                className=""
                variant="icon"
                disabled={quantity === 1}
                onClick={() => {
                  setQuantity(quantity - 1)
                }}
              >
                <FiMinusCircle className="size-[30px] md:size-6" />
              </Button>
              <p className="text-xl">{quantity}</p>
              <Button
                className=""
                variant="icon"
                onClick={() => {
                  setQuantity(quantity + 1)
                }}
              >
                <FiPlusCircle className="size-[30px] md:size-6" />
              </Button>
            </div>
            <Button
              className="mt-auto"
              variant="contained"
              disabled={selectedSize === ''}
              // onClick={handleAddToBasketClick}
            >
              {selectedSize ? 'До кошика' : 'Оберіть розмір'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailedCard
