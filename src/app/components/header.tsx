import React from 'react'

import { Navbar, Logo, Contacts, BasketIcon } from '@/components'

const menuList = [
  { title: 'Головна', path: '/' },
  { title: 'Взуття', path: '/shoes' },
  { title: 'Оплата та доставка', path: '/payment' },
]

const Header: React.FC = () => (
  <header className="border-b-gray-secondary flex items-center justify-between border-b border-solid bg-[#FAF7F1] px-8 py-4">
    <Logo />
    <Contacts />
    <Navbar menuList={menuList} />
    <BasketIcon />
  </header>
)

export default Header
