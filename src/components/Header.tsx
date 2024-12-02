'use client'
import React, { useState } from 'react'

import { FiMenu } from 'react-icons/fi'
import { MdClose } from 'react-icons/md'
import { twMerge } from 'tailwind-merge'

import { Navbar, Contacts, MobileMenu } from './index'
import { Logo, BasketIcon, Button } from './ui'

const menuList = [
  { title: 'Головна', path: '/' },
  { title: 'Взуття', path: '/products' },
  { title: 'Оплата та доставка', path: '/payment' },
]

type HeaderProps = {
  className?: string
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  return (
    <header
      className={twMerge(
        'border-b-gray-secondary relative flex items-center justify-between border-b border-solid bg-main py-2 pl-3 pr-0 md:px-8 md:py-2',
        className
      )}
    >
      <Logo />
      <Contacts />
      <Navbar menuList={menuList} className="hidden md:flex" />
      <BasketIcon />
      {showMobileMenu ? (
        <Button
          variant="icon"
          onClick={() => setShowMobileMenu(false)}
          className="p-2"
        >
          <MdClose className="size-6 fill-gray-light" />
        </Button>
      ) : (
        <Button
          variant="icon"
          onClick={() => setShowMobileMenu(true)}
          className="p-2 md:hidden"
        >
          <FiMenu className="size-6 fill-gray-light" />
        </Button>
      )}

      {showMobileMenu && (
        <MobileMenu
          isOpen={showMobileMenu}
          onClick={setShowMobileMenu}
          menuList={menuList}
        />
      )}
    </header>
  )
}

export default Header
