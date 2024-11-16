import prisma from '../../lib/prisma'

const prismaMiddleware = async (handler: Promise<void>): Promise<void> => {
  try {
    return await handler
  } finally {
    await prisma.$disconnect()
  }
}

export default prismaMiddleware
