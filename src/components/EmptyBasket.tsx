import Image from 'next/image'
import Link from 'next/link'

import emptyBasketImg from '@/assets/images/empty-basket.png'

const EmptyBasket = () => {
  return (
    <div className="container mx-auto max-w-[80%] px-4 py-6">
      <div className="flex flex-col items-center justify-center gap-y-3 rounded-md text-center text-gray-dark drop-shadow-2xl md:gap-y-6">
        <h1 className="text-2xl font-semibold tracking-wide md:text-3xl">
          Кошик порожній
        </h1>
        <p className="text-xl leading-5 text-gray-light md:mb-10">
          Ви ще не орбрали жодного товару.
        </p>
        <Image
          className="h-52 w-64 md:mb-10 md:h-[255px] md:w-80"
          src={emptyBasketImg}
          alt="Person go to shopping"
          width="600"
          height="510"
        />
        <Link href="/products" className="hover:animate-bounce">
          <p className="text-xl leading-5 text-brown-dark md:mb-10">
            Обрати взуття
          </p>
        </Link>
      </div>
    </div>
  )
}

export default EmptyBasket
