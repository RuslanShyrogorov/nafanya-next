'use client'
import React from 'react'

import { twMerge } from 'tailwind-merge'

import { NavLink } from './ui'

interface INavbarProps {
  menuList: {
    title: string
    path: string
  }[]
  className?: string
}

const Navbar: React.FC<INavbarProps> = ({ menuList, className }) => {
  return (
    <nav className={twMerge(className)}>
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
