import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  const product1 = await prisma.product.upsert({
    where: { name: 'Ортопедичні черевики "Dr.Mymi"' },
    update: {},
    create: {
      name: 'Ортопедичні черевики "Dr.Mymi"',
      description: 'Демісезонні черевички для малюків',
      extraDescription:
        'Каблук Томаса,устілка-супінатор. Хороший, стійкий задник відмінно фіксує стопу дитини у правильному положенні',
      material: 'шкіра, усередині утеплювач',
      picture: ['https://i.postimg.cc/NGPkh161/940.jpg'],
      price: 1840,
      oldPrice: 2000,
      sizes: {
        create: {
          size: 22,
          stock: 4,
        },
      },
      quantity: 4,
      type: 'boots',
      gender: ['boy', 'girl'],
      season: 'демісезонні',
    },
  })
  const product2 = await prisma.product.upsert({
    where: { name: 'Ортопедичні туфлі "Dr.Mymi"' },
    update: {},
    create: {
      name: 'Ортопедичні туфлі "Dr.Mymi"',
      description: 'Туфлі для дівчаток',
      extraDescription: 'Каблук Томаса, супінатор.',
      material: 'шкіра',
      picture: ['https://i.postimg.cc/rmfCw4v2/307.jpg'],
      price: 840,
      oldPrice: 970,
      sizes: {
        create: [
          {
            size: 24,
            stock: 5,
          },
          {
            size: 25,
            stock: 7,
          },
        ],
      },
      quantity: 12,
      type: 'shoes',
      gender: ['girl'],
      season: 'демісезонні',
    },
  })
  const product3 = await prisma.product.upsert({
    where: { name: 'Весняні черевички "Absolute"' },
    update: {},
    create: {
      name: 'Весняні черевички "Absolute"',
      description: 'Черевички для дівчаток',
      extraDescription: 'Жорсткий задник, устілка-супінатор.',
      material: 'шкіра, замш',
      picture: ['https://i.postimg.cc/tTqNbkvz/1673.jpg'],
      price: 1195,
      oldPrice: 0,
      sizes: {
        create: [
          {
            size: 24,
            stock: 5,
          },
          {
            size: 25,
            stock: 7,
          },
          {
            size: 26,
            stock: 3,
          },
          {
            size: 27,
            stock: 5,
          },
          {
            size: 28,
            stock: 7,
          },
          {
            size: 29,
            stock: 3,
          },
          {
            size: 30,
            stock: 5,
          },
          {
            size: 31,
            stock: 7,
          },
          {
            size: 32,
            stock: 3,
          },
        ],
      },
      quantity: 15,
      type: 'boots',
      gender: ['girl'],
      season: 'демісезонні',
    },
  })
  const product4 = await prisma.product.upsert({
    where: { name: 'Ортопедичні туфлі "Dr.Mymi"2' },
    update: {},
    create: {
      name: 'Ортопедичні туфлі "Dr.Mymi"2',
      description: 'Туфлі для дівчаток',
      extraDescription: 'Жорсткий задник, каблук Томаса, супінатор.',
      material: 'шкіра',
      picture: ['https://i.postimg.cc/Gt9P82C8/322.jpg'],
      price: 840,
      oldPrice: 0,
      sizes: {
        create: {
          size: 22,
          stock: 5,
        },
      },
      quantity: 5,
      type: 'shoes',
      gender: ['girl'],
      season: 'демісезонні',
    },
  })
  const product5 = await prisma.product.upsert({
    where: { name: 'Ортопедичні сандалі "Таші Орто"' },
    update: {},
    create: {
      name: 'Ортопедичні сандалі "Таші Орто"',
      description: 'Cандалі',
      extraDescription: 'Каблук Томаса, супінатор.',
      material: 'шкіра',
      picture: ['https://i.postimg.cc/rsb1SkVh/1.jpg'],
      price: 950,
      oldPrice: 0,
      sizes: {
        create: {
          size: 18,
          stock: 7,
        },
      },
      quantity: 11,
      type: 'slippers',
      gender: ['boy', 'girl'],
      season: 'літо',
    },
  })
  const product6 = await prisma.product.upsert({
    where: { name: 'Весняні черевички "Absolute"2' },
    update: {},
    create: {
      name: 'Весняні черевички "Absolute"2',
      description: 'Черевички для дівчаток',
      extraDescription: 'Жорсткий задник, устілка-супінатор.',
      material: 'шкіра, замш',
      picture: ['https://i.postimg.cc/tTqNbkvz/1673.jpg'],
      price: 1195,
      oldPrice: 0,
      sizes: {
        create: [
          {
            size: 27,
            stock: 5,
          },
          {
            size: 28,
            stock: 7,
          },
          {
            size: 39,
            stock: 3,
          },
        ],
      },
      quantity: 15,
      type: 'boots',
      gender: ['girl'],
      season: 'демісезонні',
    },
  })
  const product7 = await prisma.product.upsert({
    where: { name: 'Ортопедичні туфлі "Dr.Mymi"3' },
    update: {},
    create: {
      name: 'Ортопедичні туфлі "Dr.Mymi"3',
      description: 'Черевички для дівчаток',
      extraDescription: 'Жорсткий задник, каблук Томаса, супінатор.',
      material: 'шкіра',
      picture: ['https://i.postimg.cc/Gt9P82C8/322.jpg'],
      price: 840,
      oldPrice: 0,
      sizes: {
        create: {
          size: 22,
          stock: 5,
        },
      },
      quantity: 5,
      type: 'shoes',
      gender: ['girl'],
      season: 'демісезонні',
    },
  })
  const product8 = await prisma.product.upsert({
    where: { name: 'Ортопедичні сандалі "Таші Орто"2' },
    update: {},
    create: {
      name: 'Ортопедичні сандалі "Таші Орто"2',
      description: 'Cандалі',
      extraDescription: 'Каблук Томаса, супінатор.',
      material: 'шкіра',
      picture: ['https://i.postimg.cc/rsb1SkVh/1.jpg'],
      price: 950,
      oldPrice: 0,
      sizes: {
        create: {
          size: 18,
          stock: 7,
        },
      },
      quantity: 7,
      type: 'insoles',
      gender: ['boy'],
      season: 'літо',
    },
  })
  const product9 = await prisma.product.upsert({
    where: { name: 'Ортопедичні черевики "Dr.Mymi"2' },
    update: {},
    create: {
      name: 'Ортопедичні черевики "Dr.Mymi"2',
      description: 'Демісезонні черевички для малюків',
      extraDescription:
        'Каблук Томаса,устілка-супінатор. Хороший, стійкий задник відмінно фіксує стопу дитини у правильному положенні',
      material: 'шкіра, усередині утеплювач',
      picture: ['https://i.postimg.cc/NGPkh161/940.jpg'],
      price: 1840,
      oldPrice: 2000,
      sizes: {
        create: {
          size: 22,
          stock: 4,
        },
      },
      quantity: 4,
      type: 'boots',
      gender: ['girl', 'boy'],
      season: 'демісезонні',
    },
  })
  const product10 = await prisma.product.upsert({
    where: { name: 'Ортопедичні туфлі "Dr.Mymi"4' },
    update: {},
    create: {
      name: 'Ортопедичні туфлі "Dr.Mymi"4',
      description: 'Туфлі для дівчаток',
      extraDescription: 'Каблук Томаса, супінатор',
      material: 'шкіра',
      picture: ['https://i.postimg.cc/rmfCw4v2/307.jpg'],
      price: 840,
      oldPrice: 970,
      sizes: {
        create: [
          {
            size: 24,
            stock: 5,
          },
          {
            size: 25,
            stock: 7,
          },
        ],
      },
      quantity: 12,
      type: 'shoes',
      gender: ['girl'],
      season: 'демісезонні',
    },
  })
  const product11 = await prisma.product.upsert({
    where: { name: 'Весняні черевички "Absolute"3' },
    update: {},
    create: {
      name: 'Весняні черевички "Absolute"3',
      description: 'Черевички для дівчаток',
      extraDescription: 'Жорсткий задник, устілка-супінатор.',
      material: 'шкіра',
      picture: ['https://i.postimg.cc/tTqNbkvz/1673.jpg'],
      price: 1195,
      oldPrice: 0,
      sizes: {
        create: [
          {
            size: 24,
            stock: 5,
          },
          {
            size: 25,
            stock: 7,
          },
          {
            size: 26,
            stock: 3,
          },
          {
            size: 27,
            stock: 5,
          },
          {
            size: 28,
            stock: 7,
          },
          {
            size: 29,
            stock: 3,
          },
          {
            size: 30,
            stock: 5,
          },
          {
            size: 31,
            stock: 7,
          },
          {
            size: 32,
            stock: 3,
          },
        ],
      },
      quantity: 35,
      type: 'boots',
      gender: ['girl'],
      season: 'демісезонні',
    },
  })
  const product12 = await prisma.product.upsert({
    where: { name: 'Ортопедичні туфлі "Dr.Mymi"5' },
    update: {},
    create: {
      name: 'Ортопедичні туфлі "Dr.Mymi"5',
      description: 'Туфлі для дівчаток',
      extraDescription: 'Жорсткий задник, каблук Томаса, супінатор.',
      material: 'шкіра',
      picture: ['https://i.postimg.cc/Gt9P82C8/322.jpg'],
      price: 840,
      oldPrice: 0,
      sizes: {
        create: {
          size: 22,
          stock: 5,
        },
      },
      quantity: 5,
      type: 'shoes',
      gender: ['girl'],
      season: 'демісезонні',
    },
  })
  console.log({
    product1,
    product2,
    product3,
    product4,
    product5,
    product6,
    product7,
    product8,
    product9,
    product10,
    product11,
    product12,
  })
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
