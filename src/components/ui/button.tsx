import React from 'react'

import { twMerge } from 'tailwind-merge'

import { IButtonProps } from '../../types/types'

const Button: React.FC<IButtonProps> = ({
  type = 'button',
  variant = 'text',
  onClick,
  className,
  children,
  disabled,
  ...props
}) => {
  const baseBtnStyle =
    'outline-transparent cursor-pointer animate-fade animate-duration-1000 animate-delay-[250ms] animate-ease-in'

  const variantBtnStyles = {
    icon: 'text-inherit, bg-inherit, border-none, p-0, flex, items-center, justify-center, rounded-full, transition-transform, duration-200, hover:scale-110',
    outlined:
      'rounded-[20px] px-4 py-1 border border-[#9d825d] bg-inherit text-[#9d825d] transition duration-200 hover:border-[#D7B399] hover:bg-[#D7B399] hover:text-white ',
    text: 'bg-inherit font-[18px] text-[#9d825d] transition-transform duration-200 hover:translate-y-[-2px]',
    contained:
      'rounded-[20px] border border-[#D7B399] bg-[#D7B399] px-4 py-1 text-white transition duration-200 hover:bg-inherit hover:text-[#9d825d] disabled:border-[#DDDDDD] disabled:bg-[#DDDDDD] disabled:text-[#9d825d]',
  }
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={twMerge(baseBtnStyle, variantBtnStyles[variant], className)}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
