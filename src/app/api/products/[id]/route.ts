import { NextResponse, NextRequest } from 'next/server'

import prisma from '../../../../lib/prisma'

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = await params
    const product = await prisma.product.findUnique({
      where: { id },
      include: { sizes: true },
    })

    if (!product) {
      return NextResponse.json(
        {
          success: false,
          message: 'Product not found',
        },
        { status: 404 }
      )
    }

    return NextResponse.json(product)
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
