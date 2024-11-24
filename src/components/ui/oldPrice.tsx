import React from 'react'

import { twMerge } from 'tailwind-merge'

interface IOldPriceProps {
  oldPrice?: number
  className?: string
}

const OldPrice: React.FC<IOldPriceProps> = ({ oldPrice, className }) => {
  return (
    <s
      className={twMerge('ml-4 inline-block italic text-red-light', className)}
    >
      {oldPrice?.toLocaleString('ru')} грн.
    </s>
  )
}

export default OldPrice
