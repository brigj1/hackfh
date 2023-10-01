import { NextRequest, NextResponse } from "next/server";
const { PrismaClient } = require('@prisma/client')

export async function POST(request) {
  const { deliveryDate, items } = await request.json()
  const status = "Pending"
  const delivery = new Date(deliveryDate)
  console.log(delivery);
  const itemsToCreate = items.map(item => {
    return {
      quantity: parseInt(item.qty),
      item: {
        connect: {
          id: parseInt(item.id)
        }
      }
    }
  })

  const prisma = new PrismaClient()
  try {
    // create donation event and create individual donation items
    const donationEvent = await prisma.donationEvent.create({
      data: {
        partner: {
          connect: {
            id: 1
          }
        },
        deliveryDate: delivery,
        status: status,
        DonationItem: {
          create: [...itemsToCreate]
        }
      }
    })

    await prisma.$disconnect()

    return NextResponse.json(donationEvent)
  } catch (e) {
    console.error(e)
    await prisma.$disconnect()

    return { message: 'Failed to add donation event' }
  }
}