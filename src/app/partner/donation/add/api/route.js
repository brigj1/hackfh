import { NextRequest, NextResponse } from "next/server";
const { PrismaClient } = require('@prisma/client')

export async function POST(request) {
  const payload = await request.json()
  
  const prisma = new PrismaClient()
  try {
    // create donation event and create individual donation items
    const donationEvent = await prisma.donationEvent.create({
      data: {...payload}
    })
  
    await prisma.$disconnect()
  
    return NextResponse.json(partner)
  } catch (e) {
    console.error(e)
    await prisma.$disconnect()

    return { message: 'Failed to add donation event' }
  }
}