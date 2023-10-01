import { NextResponse } from "next/server";
const { PrismaClient } = require('@prisma/client')

export async function GET(){
  const prisma = new PrismaClient()
  try {
    const items = await prisma.item.findMany()
  
    await prisma.$disconnect()

    return NextResponse.json(items)
  } catch (e) {
    console.error(e)
    await prisma.$disconnect()
  }
}