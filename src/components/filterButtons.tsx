'use client'
import { useState } from 'react'

import { twMerge } from 'tailwind-merge'

import { Button } from './ui'

const buttonList = ['дівчата', 'хлопчики', 'устілки', 'капці', 'розпродаж']

const FilterButtons = () => {
  const [activeBtn, setActiveBtn] = useState<number | null>(null)

  return (
    <ul className="mb-5 flex flex-wrap items-center justify-center gap-6 text-xl">
      {buttonList.map((button, index) => (
        <li key={index}>
          <Button
            className={twMerge(
              'capitalize',
              index === activeBtn
                ? 'relative after:absolute after:inset-x-0 after:bottom-[-4px] after:h-[3px] after:w-full after:rounded after:bg-brown-dark'
                : ''
            )}
            variant="text"
            onClick={() => setActiveBtn(index)}
          >
            {button}
          </Button>
        </li>
      ))}
    </ul>
  )
}

export default FilterButtons
