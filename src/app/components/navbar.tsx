'use client'
import React from 'react'

import { NavLink } from '@/components'

interface INavbarProps {
  menuList: {
    title: string
    path: string
  }[]
}

const Navbar: React.FC<INavbarProps> = ({ menuList }) => {
  return (
    <nav>
      <ul className="flex flex-wrap items-center justify-center gap-4">
        {menuList.map((item, index) => (
          <li key={index}>
            <NavLink path={item.path} title={item.title}></NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
