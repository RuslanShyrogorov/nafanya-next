import { DetailedCard } from '../../../components'

const Page = async ({ params }: { params: { productId: string } }) => {
  const resolvedParams = await params

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/products/${resolvedParams.productId}`
  )
  const data = await res.json()

  return <DetailedCard product={data} />
}

export default Page
