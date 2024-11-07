import React from 'react'

interface Props {
  className?: string
}

const Header: React.FC<Props> = ({ className }) => (
  <div className={className}></div>
)

export default Header
