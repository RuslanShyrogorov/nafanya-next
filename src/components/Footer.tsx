import React from 'react'

import Link from 'next/link'
import { FaInstagram } from 'react-icons/fa'

interface Props {
  className?: string
}

const Footer: React.FC<Props> = () => (
  <footer>
    <div>
      <div>
        <div>
          <h3>Категорії</h3>
          <ul>
            <li>Взуття для хлопчиків</li>
            <li>Взуття для дівчаток</li>
            <li>Устілки</li>
          </ul>
        </div>

        <div>
          <h3>Контакти</h3>
          <address>
            <ul>
              <li>
                <a href="tel:+380965386648">+38 (096) 538‑66-48</a>
              </li>
              <li>
                <a href="tel:+380983033777">+38 (098) 30-33-777</a>
              </li>
              <li>
                <a href="mailto:magnafanya@gmail.com">magnafanya@gmail.com</a>
              </li>
            </ul>
          </address>
        </div>

        <div>
          <h3>Додаткова інформація</h3>
          <ul>
            <li>
              <Link href="offer">Договір оферти</Link>
            </li>
            <li>
              <Link href="how-choose-size">Як обрати розмір</Link>
            </li>
            <li>
              <Link href="guarantee">Гарантія</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3>Приєднуйтесь</h3>
          <ul>
            <li>
              <a
                href="https://www.instagram.com/magazin_nafanya?igsh=cGdnZmR1NG0ybHdl"
                rel="noreferrer noopener"
                target="_blank"
              >
                <FaInstagram width="24" height="24" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
