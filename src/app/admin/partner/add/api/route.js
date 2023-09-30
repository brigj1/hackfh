import { NextRequest, NextResponse } from "next/server";
const { PrismaClient } = require('@prisma/client')

export async function POST(request) {
  const payload = await request.json()
  
  const prisma = new PrismaClient()
  try {
    const partner = await prisma.partner.create({
      data: {...payload}
    })
  
    await prisma.$disconnect()
  
    return NextResponse.json(partner)
  } catch (e) {
    console.error(e)
    await prisma.$disconnect()
  }
}