import React from 'react'

import Link from 'next/link'
import { FaInstagram } from 'react-icons/fa'

interface Props {
  className?: string
}

const Footer: React.FC<Props> = () => (
  <footer className="border-t border-solid border-t-gray-default bg-main text-gray-dark">
    <div className="px-2 py-4">
      <div className="grid grid-cols-1 justify-items-center gap-y-4 text-center sm:grid-cols-2 sm:gap-y-8 lg:grid-cols-4 lg:gap-x-4">
        <div className="w-60">
          <h3 className="mb-2 text-xl font-semibold">Категорії</h3>
          <ul className="flex flex-col items-center gap-2 text-gray-light md:gap-2.5">
            <li>Взуття для хлопчиків</li>
            <li>Взуття для дівчаток</li>
            <li>Устілки</li>
          </ul>
        </div>

        <div className="w-60">
          <h3 className="mb-2 text-xl font-semibold">Контакти</h3>
          <address>
            <ul className="flex flex-col gap-2 text-gray-light md:gap-2.5">
              <li>
                <Link
                  className="hover:shadow-xl hover:transition hover:duration-300"
                  href="tel:+380965386648"
                >
                  +38 (096) 538‑66-48
                </Link>
              </li>
              <li>
                <Link
                  className="hover:shadow-xl hover:transition hover:duration-300"
                  href="tel:+380983033777"
                >
                  +38 (098) 30-33-777
                </Link>
              </li>
              <li>
                <Link
                  className="hover:shadow-xl hover:transition hover:duration-300"
                  href="mailto:magnafanya@gmail.com"
                >
                  magnafanya@gmail.com
                </Link>
              </li>
            </ul>
          </address>
        </div>

        <div className="w-60">
          <h3 className="mb-2 text-xl font-semibold">Додаткова інформація</h3>
          <ul className="flex flex-col gap-2 text-gray-light md:gap-2.5">
            <li>
              <Link
                className="hover:shadow-xl hover:transition hover:duration-300"
                href="offer"
              >
                Договір оферти
              </Link>
            </li>
            <li>
              <Link
                className="hover:shadow-xl hover:transition hover:duration-300"
                href="how-choose-size"
              >
                Як обрати розмір
              </Link>
            </li>
            <li>
              <Link
                className="hover:shadow-xl hover:transition hover:duration-300"
                href="guarantee"
              >
                Гарантія
              </Link>
            </li>
          </ul>
        </div>

        <div className="w-60">
          <h3 className="mb-2 text-xl font-semibold">Приєднуйтесь</h3>
          <ul className="flex flex-col items-center gap-2 text-gray-light md:gap-2.5">
            <li>
              <Link
                className="hover:shadow-xl hover:transition hover:duration-300"
                href="https://www.instagram.com/nafanya.shoes?igsh=cGdnZmR1NG0ybHdl"
                rel="noreferrer noopener"
                target="_blank"
              >
                <FaInstagram className="size-6" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
