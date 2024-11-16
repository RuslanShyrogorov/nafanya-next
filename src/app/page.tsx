import { getAllProducts } from '@/api/shoes/route'

import { Button } from '../components/ui'

async function fetchProducts() {
  try {
    return await getAllProducts()
  } catch (error) {
    console.error('Error fetching products', error)
    return []
  }
}

const Home = async () => {
  const products = await fetchProducts()

  return (
    <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-2 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-2">
      <main className="row-start-2 flex flex-col items-center gap-8 sm:items-start">
        <p>Products:</p>
        {products?.map((product) => (
          <div key={product.id}>
            <p>{product.name}</p>
          </div>
        ))}

        {/*================================*/}
        <Button variant="text">Text</Button>
        <Button variant="outlined">Outlined</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="contained" disabled>
          Contained disabled
        </Button>
      </main>
      <footer className="row-start-3 flex flex-wrap items-center justify-center gap-6"></footer>
    </div>
  )
}

export default Home
