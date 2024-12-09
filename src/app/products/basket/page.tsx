import React from 'react'

import { EmptyBasket } from '../../../components'

interface Props {
  className?: string
}

const Page: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <EmptyBasket />
    </div>
  )
}

export default Page
