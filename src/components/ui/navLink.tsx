'use client'
import React from 'react'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { twMerge } from 'tailwind-merge'

interface INavLinkProps {
  path: string
  title: string
  className?: string
}

const NavLink: React.FC<INavLinkProps> = ({ path, title, className }) => {
  const pathname = usePathname()
  const isActive = pathname === path
  return (
    <Link
      href={path}
      className={twMerge(
        isActive ? 'text-blue-dark' : 'text-gray-dark hover:text-blue-dark',
        'uppercase',
        className
      )}
    >
      {title}
    </Link>
  )
}

export default NavLink
