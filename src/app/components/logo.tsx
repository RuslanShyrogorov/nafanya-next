import React from 'react'

import Image from 'next/image'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'

import logo from '@/assets/images/logo1.png'

interface ILogoProps {
  width?: string
  height?: string
  className?: string
}

const Logo: React.FC<ILogoProps> = ({ className }) => (
  <Link href="/" className={twMerge(className)}>
    <Image
      src={logo}
      className="h-[40px] w-[145px] sm:h-[45px] sm:w-[170px] lg:h-[55px] lg:w-[195px]"
      alt="Nafanya logo"
      priority
    />
  </Link>
)

export default Logo
