import { NextResponse } from "next/server";
const { PrismaClient } = require('@prisma/client')

export async function GET(){
  const prisma = new PrismaClient()
  try {
    const donations = await prisma.donationEvent.findMany({
      include: {
        partner: true,
        _count: {
          select: { DonationItem: true }
        }
      }
    })
  
    await prisma.$disconnect()

    return NextResponse.json(donations)
  } catch (e) {
    console.error(e)
    await prisma.$disconnect()
  }
}