// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { PrismaClient } from "@prisma/client"

export default async function handler(req, res) {

  const prisma = new PrismaClient()

  // Get Orders
  const orders = await prisma.order.findMany({
    where: {
      state: false
    }
  })
  res.status(200).json(orders)


  // Post Orders
  if (req.method === 'POST') {
    const order = await prisma.order.create({
      data: {
        name : req.body.name,
        total : req.body.total,
        order : req.body.order,
        date : req.body.date
      }
    })
    res.json(order)
  }
}
