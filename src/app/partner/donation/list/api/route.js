import { NextResponse } from "next/server";
const { PrismaClient } = require('@prisma/client')

export async function GET(){
  const prisma = new PrismaClient()
  try {
    const partners = await prisma.partner.findMany()
  
    await prisma.$disconnect()

    return NextResponse.json(partners)
  } catch (e) {
    console.error(e)
    await prisma.$disconnect()
  }
}