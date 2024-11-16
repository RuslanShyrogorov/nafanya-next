import React from 'react'

import Link from 'next/link'
import { twMerge } from 'tailwind-merge'

interface ContactsProps {
  className?: string
}

const Contacts: React.FC<ContactsProps> = ({ className }) => (
  <address>
    <ul
      className={twMerge(
        'flex flex-col items-center gap-x-2 text-sm text-gray-dark md:text-base lg:flex-row lg:gap-x-4',
        className
      )}
    >
      <li>
        <Link href="tel:+380965386648">+38 (096) 538‑66-48</Link>
      </li>
      <li>
        <Link href="tel:+380983033777">+38 (098) 30-33-777</Link>
      </li>
    </ul>
  </address>
)

export default Contacts
