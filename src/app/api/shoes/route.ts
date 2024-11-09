'use server'

// import { NextApiRequest, NextApiResponse } from 'next'

import prisma from '../../lib/prisma'

// export default async function getAllProducts(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   try {
//     const products = await prisma.product.findMany()
//     res.status(200).json(products)
//   } catch (error) {
//     console.error('Database query failed', error)
//     res.status(500).json({ error: 'Internal Server Error' })
//   }
// }

export async function getAllProducts() {
  try {
    return await prisma.product.findMany()
    // res.status(200).json(products)
    // return NextResponse.json(products)
  } catch (error) {
    console.error('Database query failed', error)
    // res.status(500).json({ error: 'Internal Server Error' })
    return null
  }
}

// export async function GET() {
//   try {
//     const products = await prisma.product.findMany()
//     // res.status(200).json(products)
//     return NextResponse.json(products)
//   } catch (error) {
//     console.error('Database query failed', error)
//     // res.status(500).json({ error: 'Internal Server Error' })
//   }
// }

// =======================
// export async function createProduct(req: NextApiRequest, res: NextApiResponse) {
//   try {
//     const products = await prisma.product.create({})
//     res.status(200).json(products)
//   } catch (error) {
//     console.error('Database query failed', error)
//     res.status(500).json({ error: 'Internal Server Error' })
//   }
// }
