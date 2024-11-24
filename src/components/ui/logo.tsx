import React from 'react'

import Image from 'next/image'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'

import logo2 from '@/assets/images/logo-nafanya.png'
// import logo3 from '@/assets/images/logo.svg'
// import logo from '@/assets/images/logo1.png'

interface ILogoProps {
  width?: string
  height?: string
  className?: string
}

const Logo: React.FC<ILogoProps> = ({ className }) => (
  <Link href="/public" className={twMerge(className)}>
    <Image
      src={logo2}
      // className="h-[35px] w-[130px] sm:h-[45px] sm:w-[170px] lg:h-[55px] lg:w-[195px]"
      className="size-[35px] sm:size-[55px] lg:size-[70px]"
      alt="Nafanya logo"
      priority
    />
  </Link>
)

export default Logo
