import { z } from 'zod'

export const SizesSchema = z.object({
  '18': z.number().optional(),
  '20': z.number().optional(),
  '21': z.number().optional(),
  '22': z.number().optional(),
  '23': z.number().optional(),
  '24': z.number().optional(),
  '25': z.number().optional(),
  '26': z.number().optional(),
  '27': z.number().optional(),
  '28': z.number().optional(),
  '29': z.number().optional(),
  '30': z.number().optional(),
  '31': z.number().optional(),
  '32': z.number().optional(),
  '33': z.number().optional(),
  '39': z.number().optional(),
})

export const productSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  extraDescription: z.string().optional(),
  material: z.string(),
  picture: z.array(z.string()),
  article: z.number(),
  price: z.number(),
  oldPrice: z.number(),
  sizes: SizesSchema,
  quantity: z.number().optional(),
  type: z.string(),
  gender: z.array(z.string()),
  season: z.string(),
})
