import React from 'react'

import Link from 'next/link'

const Contacts: React.FC = () => (
  <address>
    <ul className="text-gray-dark flex flex-col items-center gap-x-2 lg:flex-row lg:gap-x-4">
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
