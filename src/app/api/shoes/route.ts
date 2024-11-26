//* import prismaMiddleware from '../../../lib/middlewares/prismaMiddleware'
import { NextResponse } from 'next/server'

import prisma from '../../../lib/prisma'

const getAllProducts = async () => {
  try {
    const shoes = await prisma.product.findMany({
      take: 6,
      orderBy: {
        id: 'desc',
      },
      include: {
        sizes: true,
      },
    })
    return NextResponse.json({ success: true, shoes })
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error)
    return NextResponse.json(
      { success: false, error: errorMessage },
      { status: 500 }
    )
  } finally {
    await prisma.$disconnect()
  }
}
export { getAllProducts as GET }
