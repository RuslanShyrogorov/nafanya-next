import React from 'react'

import { twMerge } from 'tailwind-merge'

import { NavLink } from './ui'

interface MobileMenuProps {
  isOpen: boolean
  onClick: (value: boolean) => void
  className?: string
  menuList: {
    title: string
    path: string
  }[]
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  menuList,
  onClick,
  isOpen,
  className,
}) => (
  <div
    className={twMerge(
      isOpen ? 'opacity-100' : 'opacity-0',
      'absolute left-0 top-14 z-50 flex min-h-screen w-full flex-col items-center gap-6 bg-main py-8 text-lg transition-all duration-300 ease-in-out xl:hidden'
    )}
  >
    <nav className={className}>
      <ul className="flex flex-col gap-2">
        {menuList.map((item, index) => (
          <li key={index} onClick={() => onClick(!isOpen)}>
            <NavLink path={item.path} title={item.title} />
          </li>
        ))}
      </ul>
    </nav>
  </div>
)

export default MobileMenu
