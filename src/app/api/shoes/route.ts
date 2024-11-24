//* import prismaMiddleware from '../../../lib/middlewares/prismaMiddleware'
import prisma from '../../../lib/prisma'

export async function getAllProducts() {
  try {
    return await prisma.product.findMany({
      // take: 5,
      orderBy: {
        id: 'desc',
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
