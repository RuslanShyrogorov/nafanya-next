import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

import logo from '@/assets/images/logo1.png'

interface ILogoProps {
  width: string
  height: string
  className?: string
}

const Logo: React.FC<ILogoProps> = ({
  className,
  width = '145',
  height = '40',
}) => (
  <Link href="/" className={className}>
    <Image
      src={logo}
      alt="Nafanya logo"
      width={parseInt(width)}
      height={parseInt(height)}
      priority
    />
  </Link>
)

export default Logo
