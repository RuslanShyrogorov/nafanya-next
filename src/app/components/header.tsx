import React from 'react'

import { FiMinusCircle } from 'react-icons/fi' //!delete

import { Navbar, Logo, Button } from '@/components'

const menuList = [
  { title: 'Головна', path: '/' },
  { title: 'Взуття', path: '/shoes' },
  { title: 'Оплата та доставка', path: '/payment' },
]

const Header: React.FC = () => (
  <header className="flex items-center justify-between border-b border-solid border-red-500 px-8 py-4">
    <Logo width="145" height="40" />
    <Button variant="text">Button</Button>
    <Button variant="icon">
      <FiMinusCircle className="h-6 w-6" />
    </Button>
    <Navbar menuList={menuList} />
  </header>
)

export default Header
