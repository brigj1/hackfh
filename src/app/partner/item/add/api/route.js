import { NextRequest, NextResponse } from "next/server";
const { PrismaClient } = require('@prisma/client')

export async function POST(request) {
  // example payload
  // {
  //   "name": "Couch",
  //   "description": "Interlocking couch, brownish red",
  //   "images": "",
  //   "msrp": "10.99",
  //   "upc": "12345",
  //   "url": "https://cityfurniture.com",
  //   "partnerId": 1
  // }
  const payload = await request.json()
  
  const prisma = new PrismaClient()
  try {
    const item = await prisma.item.create({
      data: {
        name: payload.name,
        description: payload.description,
        images: payload.images,
        msrp: parseFloat(payload.msrp),
        upc: payload.upc,
        url: payload.url,
        partner: {
          connect: {
            id: parseInt(payload.partnerId)
          }
        }
      }
    })
  
    await prisma.$disconnect()
  
    return NextResponse.json(item)
  } catch (e) {
    console.error(e)
    await prisma.$disconnect()

    return { message: 'Failed to add item' }
  }
}