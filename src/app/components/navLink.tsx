'use client'
import React from 'react'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { twMerge } from 'tailwind-merge'

interface INavLinkProps {
  path: string
  title: string
}

const NavLink: React.FC<INavLinkProps> = ({ path, title }) => {
  const pathname = usePathname()
  const isActive = pathname === path
  return (
    <Link
      href={path}
      className={twMerge(
        isActive
          ? 'text-blue-600 underline'
          : 'text-gray-400 hover:text-blue-600',
        'uppercase'
      )}
    >
      {title}
    </Link>
  )
}

export default NavLink
