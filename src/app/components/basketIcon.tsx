import React from 'react'

import Link from 'next/link'
import { BsCart } from 'react-icons/bs'

const BasketIcon: React.FC = () => (
  <div className="relative">
    <Link href="#">
      <BsCart className="size-[26px] fill-gray lg:size-[30px]" />
      <div className="absolute right-[-5px] top-[-5px] flex size-[18px] items-center justify-center rounded-full bg-red-100 text-xs text-white">
        <span>4</span>
      </div>
    </Link>
  </div>
)

export default BasketIcon
