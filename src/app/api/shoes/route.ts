//* import prismaMiddleware from '../../../lib/middlewares/prismaMiddleware'
import { NextResponse } from 'next/server'

import prisma from '../../../lib/prisma'

export async function getAllProducts() {
  try {
    return await prisma.product.findMany({
      // take: 5,
      orderBy: {
        id: 'asc',
      },
      include: {
        sizes: true,
      },
    })
  } catch (error) {
    console.error('Database query failed', error)
    return null
  } finally {
    await prisma.$disconnect()
  }
}

export async function GET() {
  try {
    const products = await prisma.product.findMany({
      // take: 5,
      orderBy: {
        id: 'desc',
      },
      include: {
        sizes: true,
      },
    })
    return NextResponse.json({ success: true, products })
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
